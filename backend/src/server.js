// // import express from "express";
// // import dotenv from "dotenv";
// // import cors from "cors";
// // import http from "http";
// // import sequelize from "./config/database.js";

// // // Load all models
// // import "./models/User.js";
// // import "./models/Job.js";
// // import "./models/Bookmark.js";

// // // Routes
// // import authRoutes from "./routes/auth.routes.js";
// // import jobRoutes from "./routes/job.routes.js";
// // import bookmarkRoutes from "./routes/bookmark.routes.js";

// // // Socket Setup
// // import { initSocket } from "./socket.js";

// // dotenv.config();

// // // Express app
// // const app = express();

// // // CORS (Vite runs on 5173)
// // app.use(
// //   cors({
// //     origin: "http://localhost:5173",
// //     credentials: true,
// //   })
// // );

// // app.use(express.json());

// // // API Routes
// // app.use("/api/auth", authRoutes);
// // app.use("/api/jobs", jobRoutes);
// // app.use("/api/bookmarks", bookmarkRoutes);

// // // Create HTTP server for Socket.IO
// // const server = http.createServer(app);

// // // Initialize Socket.IO
// // initSocket(server);

// // // Sync database & start server
// // const PORT = process.env.PORT || 5000;

// // sequelize
// //   .sync()
// //   .then(() => {
// //     console.log("Database synced!");
// //     server.listen(PORT, () => {
// //       console.log(`Server is running on port ${PORT}`);
// //     });
// //   })
// //   .catch((err) => {
// //     console.error("DB sync error:", err);
// //   });
// import express from "express";
// import cors from "cors";
// import dotenv from "dotenv";
// import { createServer } from "http";
// import { Server } from "socket.io";

// import sequelize from "./config/database.js";
// import User from "./models/User.js";

// dotenv.config();

// const app = express();
// app.use(cors());
// app.use(express.json());

// // Create HTTP server
// const httpServer = createServer(app);

// // Initialize socket.io
// const io = new Server(httpServer, {
//   cors: {
//     origin: "*",
//   }
// });

// io.on("connection", (socket) => {
//   console.log("🔥 New client connected:", socket.id);

//   socket.on("disconnect", () => {
//     console.log("❌ Client disconnected:", socket.id);
//   });
// });

// // Default route
// app.get("/", (req, res) => {
//   res.send("Server and Socket.io running...");
// });

// // Connect DB
// sequelize.authenticate()
//   .then(() => console.log("MySQL Connected..."))
//   .catch((err) => console.log("DB error:", err));

// // Sync DB
// sequelize.sync()
//   .then(() => console.log("Database synced!"))
//   .catch((err) => console.log("Sync error:", err));

// const PORT = 5000;
// httpServer.listen(PORT, () => {
//   console.log(`🚀 Server is running on port ${PORT}`);
//   console.log(`🔥 Socket.io running on port ${PORT}`);
// });


import express from "express";
import http from "http";
import cors from "cors";
import dotenv from "dotenv";
import sequelize from "./config/database.js";
import authRoutes from "./routes/auth.routes.js";
import jobRoutes from "./routes/job.routes.js";
import bookmarkRoutes from "./routes/bookmark.routes.js";
import { initSocket } from "./socket.js";

dotenv.config();

const app = express();

app.use(cors({
  origin: "http://localhost:5173",
  credentials: true,
}));
app.use(express.json());

// API routes
app.use("/api/auth", authRoutes);
app.use("/api/jobs", jobRoutes);
app.use("/api/bookmarks", bookmarkRoutes);

// Create HTTP server
const server = http.createServer(app);

// Initialize socket
initSocket(server);

// DB sync
sequelize.sync().then(() => {
  console.log("Database synced!");
});

// Start server
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
  console.log("🔥 Socket.io running on port", PORT);
});
