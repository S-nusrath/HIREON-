import express from "express";
import authMiddleware from "../middleware/auth.middleware.js";
import {
  toggleBookmark,
  getBookmarks,
} from "../controllers/bookmark.controller.js";

const router = express.Router();

// Protected routes
router.post("/toggle", authMiddleware, toggleBookmark);
router.get("/", authMiddleware, getBookmarks);

export default router;
