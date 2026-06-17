// /*import express from "express";
// import { registerUser, loginUser, getAllUsers } from "../controllers/auth.controller.js";

// const router = express.Router();

// router.post("/register", registerUser);
// router.post("/login", loginUser);
// router.get("/users", getAllUsers);   // <-- ADD THIS LINE

// export default router;
// */
// // src/routes/auth.routes.js
// // src/routes/auth.routes.js
// // import express from "express";
// // import {
// //   registerUser,
// //   loginUser,
// //   getCurrentUser,
// // } from "../controllers/auth.controller.js";
// // import auth from "../middleware/auth.middleware.js";

// // const router = express.Router();

// // router.post("/register", registerUser);
// // router.post("/signin", loginUser);
// // router.get("/me", auth, getCurrentUser);

// // export default router;
// // import express from "express";

// // const router = express.Router();

// // router.post("/signup", (req, res) => {
// //   res.json({
// //     success: true,
// //     message: "Register API working"
// //   });
// // });

// // router.post("/signin", (req, res) => {
// //   res.json({
// //     success: true,
// //     message: "Login API working"
// //   });
// // });

// // export default router;
// import express from "express";

// const router = express.Router();

// /* ---------- REGISTER / SIGNUP ---------- */
// router.post("/register", (req, res) => {
//   res.json({
//     success: true,
//     message: "Register API working"
//   });
// });

// router.post("/signup", (req, res) => {
//   res.json({
//     success: true,
//     message: "Signup API working"
//   });
// });

// /* ---------- LOGIN / SIGNIN ---------- */
// router.post("/login", (req, res) => {
//   res.json({
//     success: true,
//     message: "Login API working"
//   });
// });

// router.post("/signin", (req, res) => {
//   res.json({
//     success: true,
//     message: "Signin API working"
//   });
// });

// /* ---------- CURRENT USER ---------- */
// router.get("/me", (req, res) => {
//   res.json({
//     success: true,
//     user: {
//       id: 1,
//       name: "Demo User",
//       email: "demo@hireon.com"
//     }
//   });
// });

// export default router;
import express from "express";

const router = express.Router();

/* ---------------- SIGNUP / REGISTER ---------------- */
router.post("/register", (req, res) => {
  const { name, email, password, branch, year } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      success: false,
      message: "Email and password are required"
    });
  }

  const user = {
    id: Date.now(),
    name: name || "User",
    email,
    branch,
    year
  };

  res.json({
    success: true,
    message: "Signup successful",
    user,
    token: "demo-signup-token"
  });
});

/* Alias */
router.post("/signup", (req, res) => {
  res.redirect(307, "/api/auth/register");
});

/* ---------------- SIGNIN / LOGIN ---------------- */
router.post("/signin", (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      success: false,
      message: "Email and password are required"
    });
  }

  const user = {
    id: 1,
    name: "Demo User",
    email
  };

  res.json({
    success: true,
    message: "Signin successful",
    user,
    token: "demo-signin-token"
  });
});

/* Alias */
router.post("/login", (req, res) => {
  res.redirect(307, "/api/auth/signin");
});

/* ---------------- CURRENT USER ---------------- */
router.get("/me", (req, res) => {
  res.json({
    success: true,
    user: {
      id: 1,
      name: "Demo User",
      email: "demo@hireon.com"
    }
  });
});

export default router;
