import axios from "axios";

const API_URL = "http://localhost:5000/api";

export const getUsers = async () => {
  const token = localStorage.getItem("token");

  const res = await axios.get(`${API_URL}/users`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return res.data;
};

export const sendConnectionRequest = async (receiverId) => {
  const token = localStorage.getItem("token");

  const res = await axios.post(
    `${API_URL}/connections/send`,
    { receiver_id: receiverId },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return res.data;
};
