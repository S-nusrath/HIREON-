import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// REGISTER USER
export const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const exists = await User.findOne({ where: { email } });
    if (exists) return res.status(400).json({ message: "Email already exists" });

    const hashed = await bcrypt.hash(password, 10);

    const user = await User.create({ name, email, password: hashed });

    res.json({ message: "User registered successfully", user });
  } catch (error) {
    res.status(500).json({ message: "Error registering user", error });
  }
};

// LOGIN USER
export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    console.log("Login attempt:", email, password);

    const user = await User.findOne({ where: { email } });
    console.log("Found user:", user ? true : false);

    if (!user) return res.status(404).json({ message: "User not found" });

    const valid = await bcrypt.compare(password, user.password);
    console.log("Password valid:", valid);

    if (!valid) return res.status(400).json({ message: "Invalid password" });

    if (!process.env.JWT_SECRET) {
      console.log("❌ JWT_SECRET is missing in .env");
      return res.status(500).json({ message: "Server error: JWT secret missing" });
    }

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: "1d" });

    res.json({ message: "Login successful", token });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Login failed", error });
  }
};

// GET ALL USERS
export const getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll({
      attributes: ["id", "name", "email", "createdAt"],
    });

    res.json(users);
  } catch (error) {
    res.status(500).json({ message: "Error fetching users", error });
  }
};
