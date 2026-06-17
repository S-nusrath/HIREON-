import express from "express";
import controller from "../controllers/connection.controller.js";
import auth from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/send", auth, controller.sendRequest);
router.get("/requests", auth, controller.getRequests);
router.post("/accept/:requestId", auth, controller.acceptRequest);
router.post("/reject/:requestId", auth, controller.rejectRequest);
router.get("/", auth, controller.getConnections);

export default router;
