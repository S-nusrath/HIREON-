import express from "express";
import { applyJob, myApplications } from "../controllers/applicationController.js";
import auth from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/apply", auth, applyJob);
router.get("/my", auth, myApplications);

export default router;
