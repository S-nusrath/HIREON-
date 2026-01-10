import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import fs from "fs";
import { exec } from "child_process";

// ⚠️ correct path (because routes are inside src/)
import authRoutes from "./src/routes/auth.routes.js";

const app = express();

/* ---------- MIDDLEWARE ---------- */
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/* ---------- AUTH ROUTES ---------- */
app.use("/api/auth", authRoutes);

/* ---------- COMPILER ROUTE ---------- */
app.post("/run", (req, res) => {
  const code = req.body?.code;
  const input = req.body?.input || "";

  if (!code) {
    return res.status(400).json({
      success: false,
      error: "Code is missing in request body"
    });
  }

  if (!fs.existsSync("temp")) {
    fs.mkdirSync("temp");
  }

  fs.writeFileSync("temp/main.cpp", code);
  fs.writeFileSync("temp/input.txt", input);

  const compileCmd = "g++ temp/main.cpp -o temp/main.exe";
  const runCmd = "temp\\main.exe < temp\\input.txt";

  exec(`${compileCmd} && ${runCmd}`, { timeout: 2000 }, (error, stdout, stderr) => {
    if (error) {
      return res.json({
        success: false,
        error: stderr || error.message
      });
    }

    res.json({
      success: true,
      output: stdout
    });
  });
});

/* ---------- SERVER ---------- */
app.listen(5000, () => {
  console.log("🚀 HireOn Backend running on port 5000");
});
