import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import http from "http";
import sequelize from "./config/database.js";
import { initSocket } from "./socket.js";

// Load models
import "./models/User.js";
import "./models/Job.js";
import "./models/Bookmark.js";
import "./models/connection.model.js";
import "./models/connectionRequest.model.js";

// Routes
import authRoutes from "./routes/auth.routes.js";
import userRoutes from "./routes/user.routes.js";
import jobRoutes from "./routes/job.routes.js";
import bookmarkRoutes from "./routes/bookmarks.routes.js";
import connectionRoutes from "./routes/connection.routes.js";

dotenv.config();

const app = express();

/* =======================
   MIDDLEWARE
======================= */
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* =======================
   ROUTES
======================= */
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/jobs", jobRoutes);
app.use("/api/bookmarks", bookmarkRoutes);
app.use("/api/connections", connectionRoutes);

/* =======================
   HEALTH CHECK
======================= */
app.get("/", (req, res) => {
  res.send("🚀 HireOn backend running");
});

/* =======================
   SERVER + SOCKET
======================= */
const server = http.createServer(app);
initSocket(server);

/* =======================
   DATABASE
======================= */
(async () => {
  try {
    await sequelize.authenticate();
    console.log("✅ MySQL Connected");
    await sequelize.sync();
    console.log("✅ Database synced");
  } catch (err) {
    console.error("❌ DB error:", err);
    process.exit(1);
  }
})();

/* =======================
   START SERVER
======================= */
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
