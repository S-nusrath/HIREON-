// controllers/job.controller.js
import Job from "../models/Job.js";
import { getIO } from "../socket.js";

// export const createJob = async (req, res) => {
//   try {
//     if (!req.body || Object.keys(req.body).length === 0) {
//       return res.status(400).json({ message: "Job data is required" });
//     }

//     const job = await Job.create(req.body);

//     // 🔔 Emit real-time event (SAFE)
//     try {
//       const io = getIO();
//       io.emit("new-job", job);
//     } catch (socketError) {
//       console.warn("⚠️ Socket not ready, skipping emit");
//     }

//     return res.status(201).json({
//       message: "Job created",
//       job,
//     });
//   } catch (err) {
//     res.status(500).json({
//       message: "Error creating job",
//       error: err.message,
//     });
//   }
// };


export const createJob = async (req, res) => {
  try {
    if (req.user.role !== "admin") {
      return res.status(403).json({ message: "Admin only" });
    }

    const job = await Job.create({
      ...req.body,
      createdBy: req.user.id, // optional but recommended
    });

    try {
      const io = getIO();
      io.emit("new-job", job);
    } catch {}

    res.status(201).json(job);
  } catch (err) {
    console.error("CREATE JOB ERROR:", err);
    res.status(500).json({ message: "Error creating job" });
  }
};



export const getJobs = async (req, res) => {
  try {
    const jobs = await Job.findAll();
    res.json(jobs);
  } catch (err) {
    res.status(500).json({ message: "Error fetching jobs", error: err.message });
  }
};

export const getJob = async (req, res) => {
  try {
    const job = await Job.findByPk(req.params.id);
    if (!job) return res.status(404).json({ message: "Job not found" });
    res.json(job);
  } catch (err) {
    res.status(500).json({ message: "Error", error: err.message });
  }
};
