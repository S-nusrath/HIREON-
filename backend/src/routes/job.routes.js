/*import express from "express";
import { createJob, getJobs, getJob } from "../controllers/job.controller.js";

const router = express.Router();

router.post("/", createJob);
router.get("/", getJobs);
router.get("/:id", getJob);

export default router;
*/
import express from "express";
import { createJob, getJobs, getJob } from "../controllers/job.controller.js";

const router = express.Router();

router.post("/", createJob);
router.get("/", getJobs);
router.get("/:id", getJob);

export default router;
