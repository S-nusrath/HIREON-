const API = "http://localhost:8080/api/messages";

export const sendMessage = async (msg) => {
  const res = await fetch(`${API}/send`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(msg),
  });
  return res.json();
};

export const getMessages = async (u1, u2) => {
  const res = await fetch(`${API}/${u1}/${u2}`);
  return res.json();
};