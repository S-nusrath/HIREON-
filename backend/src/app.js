const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

// Routes
const authRoutes = require("./routes/auth.routes");
app.use("/api/auth", authRoutes);

module.exports = app;
