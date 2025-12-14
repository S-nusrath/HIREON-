/*import Job from "../models/Job.js";

export const createJob = async (req, res) => {
  try {
    const job = await Job.create(req.body);
    return res.status(201).json({ message: "Job created", job });
  } catch (err) {
    res.status(500).json({ message: "Error creating job", error: err.message });
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
*/
// controllers/job.controller.js
import Job from "../models/Job.js";

export const createJob = async (req, res) => {
  try {
    const job = await Job.create(req.body);
    return res.status(201).json({ message: "Job created", job });
  } catch (err) {
    res.status(500).json({ message: "Error creating job", error: err.message });
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
