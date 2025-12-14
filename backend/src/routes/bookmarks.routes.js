import express from "express";
import { toggleBookmark, getBookmarks } from "../controllers/bookmark.controller.js";

const router = express.Router();

router.post("/toggle", toggleBookmark);
router.get("/", getBookmarks);

export default router;
