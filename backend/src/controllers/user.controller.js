/*import db from "../models/index.js";

const { users } = db;

// GET ALL USERS (except logged-in user)
const getAllUsers = async (req, res) => {
  try {
    const currentUserId = req.user.id;

    const allUsers = await users.findAll({
      where: {
        id: { [db.Sequelize.Op.ne]: currentUserId },
      },
      attributes: ["id", "name", "email"],
    });

    res.json(allUsers);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

export default {
  getAllUsers,
};*/
import db from "../models/index.js";
const { users } = db;

export const getAllUsers = async (req, res) => {
  try {
    const list = await users.findAll({
      attributes: ["id", "name", "email"],
    });
    res.json(list);
  } catch (err) {
    console.error("GET USERS ERROR:", err);
    res.status(500).json({ message: "Server error" });
  }
};
