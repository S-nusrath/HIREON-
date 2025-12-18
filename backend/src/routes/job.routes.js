import express from "express";
import { createJob, getJobs, getJob } from "../controllers/job.controller.js";
import auth from "../middleware/auth.middleware.js";
import admin from "../middleware/admin.middleware.js";

const router = express.Router();

router.post("/", auth, admin, createJob);
router.get("/", getJobs);
router.get("/:id", getJob);

export default router;
