/*import express from "express";
import { registerUser, loginUser, getAllUsers } from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/users", getAllUsers);   // <-- ADD THIS LINE

export default router;
*/
// src/routes/auth.routes.js
// src/routes/auth.routes.js
import express from "express";
import {
  registerUser,
  loginUser,
  getAllUsers,
  getCurrentUser,
} from "../controllers/auth.controller.js";
import authMiddleware from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/signin", loginUser);
router.get("/users", getAllUsers);
router.get("/me", authMiddleware, getCurrentUser);

export default router;

