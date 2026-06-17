// const express = require("express");
// const cors = require("cors");
// const { exec } = require("child_process");
// const fs = require("fs");

// const app = express();

// app.use(cors());
// app.use(express.json());

// app.post("/run", (req, res) => {
//   const { code, language } = req.body;

//   if (language === "python") {
//     fs.writeFileSync("code.py", code);

//     exec("python code.py", (err, stdout, stderr) => {
//       if (err) return res.json({ output: stderr });
//       res.json({ output: stdout });
//     });
//   } else if (language === "java") {
//     fs.writeFileSync("Main.java", code);

//     exec("javac Main.java && java Main", (err, stdout, stderr) => {
//       if (err) return res.json({ output: stderr });
//       res.json({ output: stdout });
//     });
//   }
// });

// app.listen(5000, () => {
//   console.log("🔥 Server running on port 5000");
// });
const express = require("express");
const cors = require("cors");
const { exec } = require("child_process");
const fs = require("fs");

// const authRoutes = require("./routes/authRoutes");
const authRoutes = require("./src/routes/authRoutes");

const app = express();

app.use(cors());
app.use(express.json());

/* =========================
   AUTH ROUTES
========================= */

app.use("/api/auth", authRoutes);

/* =========================
   CODE COMPILER ROUTE
========================= */

app.post("/run", (req, res) => {
  const { code, language } = req.body;

  if (language === "python") {
    fs.writeFileSync("code.py", code);

    exec("python code.py", (err, stdout, stderr) => {
      if (err) return res.json({ output: stderr });

      res.json({ output: stdout });
    });
  }

  else if (language === "java") {
    fs.writeFileSync("Main.java", code);

    exec("javac Main.java && java Main", (err, stdout, stderr) => {
      if (err) return res.json({ output: stderr });

      res.json({ output: stdout });
    });
  }
});

/* =========================
   TEST ROUTE
========================= */

app.get("/", (req, res) => {
  res.send("Backend Running");
});

app.listen(5000, () => {
  console.log("🔥 Server running on port 5000");
});