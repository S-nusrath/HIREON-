import db from "../models/index.js";
import { Op } from "sequelize";

const { connection_requests, connections, users } = db;

/* =========================
   SEND CONNECTION REQUEST
========================= */
const sendRequest = async (req, res) => {
  try {
    const sender_id = req.user.id;
    const { receiver_id } = req.body;

    if (!receiver_id) {
      return res.status(400).json({ message: "Receiver ID missing" });
    }

    if (sender_id === receiver_id) {
      return res.status(400).json({ message: "Cannot connect to yourself" });
    }

    const exists = await connection_requests.findOne({
      where: {
        sender_id,
        receiver_id,
        status: "pending",
      },
    });

    if (exists) {
      return res.status(400).json({ message: "Request already sent" });
    }

    await connection_requests.create({
      sender_id,
      receiver_id,
      status: "pending",
    });

    res.status(200).json({ message: "Connection request sent" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

/* =========================
   GET RECEIVED REQUESTS
========================= */
const getRequests = async (req, res) => {
  try {
    const userId = req.user.id;

    const requests = await connection_requests.findAll({
      where: {
        receiver_id: userId,
        status: "pending",
      },
      include: [
        {
          model: users,
          as: "sender",
          attributes: ["id", "name", "email"],
        },
      ],
    });

    res.status(200).json(requests);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

/* =========================
   ACCEPT REQUEST
========================= */
const acceptRequest = async (req, res) => {
  try {
    const userId = req.user.id;
    const { requestId } = req.params;

    const request = await connection_requests.findByPk(requestId);

    if (!request || request.receiver_id !== userId) {
      return res.status(404).json({ message: "Request not found" });
    }

    request.status = "accepted";
    await request.save();

    await connections.create({
      user1_id: request.sender_id,
      user2_id: userId,
    });

    res.status(200).json({ message: "Connection accepted" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

/* =========================
   REJECT REQUEST
========================= */
const rejectRequest = async (req, res) => {
  try {
    const userId = req.user.id;
    const { requestId } = req.params;

    const request = await connection_requests.findByPk(requestId);

    if (!request || request.receiver_id !== userId) {
      return res.status(404).json({ message: "Request not found" });
    }

    request.status = "rejected";
    await request.save();

    res.status(200).json({ message: "Connection rejected" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

/* =========================
   GET MY CONNECTIONS
========================= */
const getConnections = async (req, res) => {
  try {
    const userId = req.user.id;

    const list = await connections.findAll({
      where: {
        [Op.or]: [{ user1_id: userId }, { user2_id: userId }],
      },
    });

    res.status(200).json(list);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

export default {
  sendRequest,
  getRequests,
  acceptRequest,
  rejectRequest,
  getConnections,
};
