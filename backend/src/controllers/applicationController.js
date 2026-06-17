// import Application from "../models/Application.js";
// import Job from "../models/Job.js";

// export const applyJob = async (req, res) => {
//   try {
//     const { jobId } = req.body;
//     const userId = req.user.id;

//     const alreadyApplied = await Application.findOne({
//       where: { userId, jobId },
//     });

//     if (alreadyApplied) {
//       return res.status(400).json({ message: "Already applied" });
//     }

//     const application = await Application.create({ userId, jobId });
//     res.status(201).json(application);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// };

// export const myApplications = async (req, res) => {
//   try {
//     const apps = await Application.findAll({
//       where: { userId: req.user.id },
//       include: Job,
//     });
//     res.json(apps);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// };




import Application from "../models/Application.js";
import Job from "../models/Job.js";

export const applyJob = async (req, res) => {
  try {
    const { jobId } = req.body;
    const userId = req.userId; // ✅ FIXED

    if (!jobId) {
      return res.status(400).json({ message: "Job ID required" });
    }

    const alreadyApplied = await Application.findOne({
      where: { userId, jobId },
    });

    if (alreadyApplied) {
      return res.status(400).json({ message: "Already applied" });
    }

    // const application = await Application.create({
    //   userId,
    //   jobId,
    //   status: "Applied",
    // });

    const application = await Application.create({
  UserId: userId,
  JobId: jobId,
  status: "Applied",
});


    res.status(201).json(application);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to apply" });
  }
};

export const myApplications = async (req, res) => {
  try {
    const UserId = req.userId; // ✅ FIXED

    const apps = await Application.findAll({
      where: { UserId },
      include: [{ model: Job }],
    });

    res.json(apps);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to fetch applications" });
  }
};
