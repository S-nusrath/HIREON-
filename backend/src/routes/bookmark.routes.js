import express from "express";
import { toggleBookmark, getBookmarks } from "../controllers/bookmark.controller.js";
import { protect } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/toggle", protect, toggleBookmark);
router.get("/", protect, getBookmarks);

export default router;
