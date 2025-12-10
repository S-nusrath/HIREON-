import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import sequelize from "./config/database.js";
import authRoutes from "./routes/auth.routes.js";
import "./models/user.model.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);

// Sync DB
sequelize
  .sync()
  .then(() => {
    console.log("📦 Database synced successfully");
  })
  .catch((err) => {
    console.error("❌ Error syncing database:", err);
  });

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
