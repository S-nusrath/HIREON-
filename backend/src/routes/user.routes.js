// // /*import express from "express";
// // import auth from "../middleware/auth.middleware.js";
// // import userController from "../controllers/user.controller.js";

// // const router = express.Router();

// // // GET users list
// // router.get("/", auth, userController.getAllUsers);

// // export default router;
// // */
// // import express from "express";
// // import authMiddleware from "../middleware/auth.middleware.js";
// // import { getAllUsers } from "../controllers/user.controller.js";

// // const router = express.Router();

// // router.get("/", authMiddleware, getAllUsers);

// // export default router;
// import express from "express";
// import auth from "../middleware/auth.middleware.js";
// import User from "../models/User.js";

// const router = express.Router();

// /**
//  * GET ALL USERS FOR DISCOVER PAGE
//  * (exclude logged-in user)
//  */
// router.get("/", auth, async (req, res) => {
//   try {
//     const users = await User.find(
//       { _id: { $ne: req.user.id } },
//       "name email profilePic"
//     );

//     res.status(200).json(users);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// export default router;
import express from "express";
import auth from "../middleware/auth.middleware.js";
import User from "../models/User.js";

const router = express.Router();

/**
 * DISCOVER USERS
 * Get all users except logged-in user
 */
router.get("/", auth, async (req, res) => {
  try {
    const users = await User.findAll({
      where: {
        id: { [User.sequelize.Op.ne]: req.user.id },
      },
      attributes: ["id", "name", "email"],
    });

    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
