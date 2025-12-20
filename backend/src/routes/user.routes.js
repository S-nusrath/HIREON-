import express from "express";
import auth from "../middleware/auth.middleware.js";
import userController from "../controllers/user.controller.js";

const router = express.Router();

// GET users list
router.get("/", auth, userController.getAllUsers);

export default router;
