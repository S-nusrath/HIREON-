// // // // import express from "express";
// // // // import dotenv from "dotenv";
// // // // import cors from "cors";
// // // // import http from "http";
// // // // import sequelize from "./config/database.js";

// // // // // Load all models
// // // // import "./models/User.js";
// // // // import "./models/Job.js";
// // // // import "./models/Bookmark.js";

// // // // // Routes
// // // // import authRoutes from "./routes/auth.routes.js";
// // // // import jobRoutes from "./routes/job.routes.js";
// // // // import bookmarkRoutes from "./routes/bookmark.routes.js";

// // // // // Socket Setup
// // // // import { initSocket } from "./socket.js";

// // // // dotenv.config();

// // // // // Express app
// // // // const app = express();

// // // // // CORS (Vite runs on 5173)
// // // // app.use(
// // // //   cors({
// // // //     origin: "http://localhost:5173",
// // // //     credentials: true,
// // // //   })
// // // // );

// // // // app.use(express.json());

// // // // // API Routes
// // // // app.use("/api/auth", authRoutes);
// // // // app.use("/api/jobs", jobRoutes);
// // // // app.use("/api/bookmarks", bookmarkRoutes);

// // // // // Create HTTP server for Socket.IO
// // // // const server = http.createServer(app);

// // // // // Initialize Socket.IO
// // // // initSocket(server);

// // // // // Sync database & start server
// // // // const PORT = process.env.PORT || 5000;

// // // // sequelize
// // // //   .sync()
// // // //   .then(() => {
// // // //     console.log("Database synced!");
// // // //     server.listen(PORT, () => {
// // // //       console.log(`Server is running on port ${PORT}`);
// // // //     });
// // // //   })
// // // //   .catch((err) => {
// // // //     console.error("DB sync error:", err);
// // // //   });
// // // import express from "express";
// // // import cors from "cors";
// // // import dotenv from "dotenv";
// // // import { createServer } from "http";
// // // import { Server } from "socket.io";

// // // import sequelize from "./config/database.js";
// // // import User from "./models/User.js";

// // // dotenv.config();

// // // const app = express();
// // // app.use(cors());
// // // app.use(express.json());

// // // // Create HTTP server
// // // const httpServer = createServer(app);

// // // // Initialize socket.io
// // // const io = new Server(httpServer, {
// // //   cors: {
// // //     origin: "*",
// // //   }
// // // });

// // // io.on("connection", (socket) => {
// // //   console.log("🔥 New client connected:", socket.id);

// // //   socket.on("disconnect", () => {
// // //     console.log("❌ Client disconnected:", socket.id);
// // //   });
// // <<<<<<< HEAD
// // // });

// // // // Default route
// // // app.get("/", (req, res) => {
// // //   res.send("Server and Socket.io running...");
// // // });

// // // // Connect DB
// // // sequelize.authenticate()
// // //   .then(() => console.log("MySQL Connected..."))
// // //   .catch((err) => console.log("DB error:", err));

// // // // Sync DB
// // // sequelize.sync()
// // //   .then(() => console.log("Database synced!"))
// // //   .catch((err) => console.log("Sync error:", err));

// // // const PORT = 5000;
// // // httpServer.listen(PORT, () => {
// // //   console.log(`🚀 Server is running on port ${PORT}`);
// // //   console.log(`🔥 Socket.io running on port ${PORT}`);
// // // });


// // import express from "express";
// // import http from "http";
// // =======
// // /*import express from "express";
// // >>>>>>> 8e0b78cd9ffadc3b23fc67f51632ee88d6fe894b
// // import cors from "cors";
// // import dotenv from "dotenv";
// // import sequelize from "./config/database.js";
// // import authRoutes from "./routes/auth.routes.js";
// // import jobRoutes from "./routes/job.routes.js";
// // import bookmarkRoutes from "./routes/bookmark.routes.js";
// // import { initSocket } from "./socket.js";

// // dotenv.config();

// // const app = express();

// // app.use(cors({
// //   origin: "http://localhost:5173",
// //   credentials: true,
// // }));
// // app.use(express.json());

// // // API routes
// // app.use("/api/auth", authRoutes);
// // app.use("/api/jobs", jobRoutes);
// // app.use("/api/bookmarks", bookmarkRoutes);

// // // Create HTTP server
// // const server = http.createServer(app);

// // // Initialize socket
// // initSocket(server);

// // // DB sync
// // sequelize.sync().then(() => {
// //   console.log("Database synced!");
// // });

// // // Start server
// // const PORT = process.env.PORT || 5000;
// // server.listen(PORT, () => {
// //   console.log(`🚀 Server is running on port ${PORT}`);
// //   console.log("🔥 Socket.io running on port", PORT);
// // });
// // */
// // // Server.js
// // // src/server.js
// // import express from "express";
// // import cors from "cors";
// // import dotenv from "dotenv";
// // import { createServer } from "http";
// // import { Server } from "socket.io";
// // import sequelize from "./config/database.js";

// // // routes
// // import authRoutes from "./routes/auth.routes.js";
// // import jobRoutes from "./routes/job.routes.js";
// // import bookmarkRoutes from "./routes/bookmarks.routes.js";

// // dotenv.config();

// // const app = express();

// // // CORS: allow Vite frontend on 5173
// // app.use(
// //   cors({
// //     origin: "http://localhost:5173",
// //     credentials: true,
// //   })
// // );

// // app.use(express.json());

// // // Mount API routes
// // app.use("/api/auth", authRoutes);
// // app.use("/api/jobs", jobRoutes);
// // app.use("/api/bookmarks", bookmarkRoutes);

// // // Default health route
// // app.get("/", (req, res) => res.send("Server running"));

// // // Create HTTP server & socket.io
// // const httpServer = createServer(app);
// // const io = new Server(httpServer, {
// //   cors: { origin: "http://localhost:5173" },
// // });

// // io.on("connection", (socket) => {
// //   console.log("🔥 New client connected:", socket.id);
// //   socket.on("disconnect", () => console.log("❌ Client disconnected:", socket.id));
// // });

// // // DB connect + sync
// // (async () => {
// //   try {
// //     await sequelize.authenticate();
// //     console.log("MySQL Connected...");
// //     await sequelize.sync();
// //     console.log("Database synced!");
// //   } catch (err) {
// //     console.error("DB connection/sync error:", err);
// //     process.exit(1);
// //   }
// // })();

// // const PORT = process.env.PORT || 5000;
// // httpServer.listen(PORT, () => {
// //   console.log(`🚀 Server is running on port ${PORT}`);
// // });




// import express from "express";
// import cors from "cors";
// import dotenv from "dotenv";
// import { createServer } from "http";
// import { Server } from "socket.io";
// import sequelize from "./config/database.js";

// // Load models
// import "./models/User.js";
// import "./models/Job.js";
// import "./models/Bookmark.js";

// // Routes
// import authRoutes from "./routes/auth.routes.js";
// import jobRoutes from "./routes/job.routes.js";
// import bookmarkRoutes from "./routes/bookmarks.routes.js";

// dotenv.config();

// const app = express();

// // CORS for Vite frontend
// app.use(
//   cors({
//     origin: "http://localhost:5173",
//     credentials: true,
//   })
// );

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// // Routes
// app.use("/api/auth", authRoutes);
// app.use("/api/jobs", jobRoutes);
// app.use("/api/bookmarks", bookmarkRoutes);

// // Health check
// app.get("/", (req, res) => {
//   res.send("🚀 HireOn backend running");
// });

// // HTTP server + socket.io
// const httpServer = createServer(app);
// const io = new Server(httpServer, {
//   cors: {
//     origin: "http://localhost:5173",
//   },
// });

// io.on("connection", (socket) => {
//   console.log("🔥 New client connected:", socket.id);

//   socket.on("disconnect", () => {
//     console.log("❌ Client disconnected:", socket.id);
//   });
// });

// // DB connect & sync
// (async () => {
//   try {
//     await sequelize.authenticate();
//     console.log("MySQL Connected...");
//     await sequelize.sync();
//     console.log("Database synced!");
//   } catch (err) {
//     console.error("DB error:", err);
//     process.exit(1);
//   }
// })();

// // Start server
// const PORT = process.env.PORT || 5000;
// httpServer.listen(PORT, () => {
//   console.log(`🚀 Server running on port ${PORT}`);
//   console.log(`🔥 Socket.io running on port ${PORT}`);
// });



/*import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import http from "http";
import sequelize from "./config/database.js";
import { initSocket } from "./socket.js";
import applicationRoutes from "./routes/applicationRoutes.js";


// Load models
import "./models/User.js";
import "./models/Job.js";
import "./models/Bookmark.js";

// Routes
import authRoutes from "./routes/auth.routes.js";
import jobRoutes from "./routes/job.routes.js";
import bookmarkRoutes from "./routes/bookmarks.routes.js";

dotenv.config();

const app = express();

// CORS
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/jobs", jobRoutes);
app.use("/api/bookmarks", bookmarkRoutes);
app.use("/api/applications", applicationRoutes);

// Health check
app.get("/", (req, res) => {
  res.send("🚀 HireOn backend running");
});

// Create HTTP server
const server = http.createServer(app);

// ✅ INITIALIZE SOCKET.IO (VERY IMPORTANT)
initSocket(server);

// DB connect & sync
(async () => {
  try {
    await sequelize.authenticate();
    console.log("MySQL Connected...");
    await sequelize.sync();
    console.log("Database synced!");
  } catch (err) {
    console.error("DB error:", err);
    process.exit(1);
  }
})();

// Start server
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`🔥 Socket.io running on port ${PORT}`);
});
*/
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import http from "http";
import sequelize from "./config/database.js";
import { initSocket } from "./socket.js";

// ✅ Load models
import "./models/User.js";
import "./models/Job.js";
import "./models/Bookmark.js";
import "./models/connection.model.js";
import "./models/connectionRequest.model.js";

// ✅ Routes
import authRoutes from "./routes/auth.routes.js";
import jobRoutes from "./routes/job.routes.js";
import bookmarkRoutes from "./routes/bookmarks.routes.js";
import connectionRoutes from "./routes/connection.routes.js"; // ⭐ ADD THIS
import userRoutes from "./routes/user.routes.js";


dotenv.config();

const app = express();

// ✅ CORS
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ✅ API Routes
app.use("/api/auth", authRoutes);
app.use("/api/jobs", jobRoutes);
app.use("/api/bookmarks", bookmarkRoutes);
app.use("/api/connections", connectionRoutes); // ⭐ ADD THIS
app.use("/api/users", userRoutes);

// ✅ Health check
app.get("/", (req, res) => {
  res.send("🚀 HireOn backend running");
});

// ✅ Create HTTP server
const server = http.createServer(app);

// ✅ Initialize Socket.IO
initSocket(server);

// ✅ DB connect & sync
(async () => {
  try {
    await sequelize.authenticate();
    console.log("✅ MySQL Connected...");
    await sequelize.sync();
    console.log("✅ Database synced!");
  } catch (err) {
    console.error("❌ DB error:", err);
    process.exit(1);
  }
})();

// ✅ Start server
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`🔥 Socket.io running on port ${PORT}`);
});
