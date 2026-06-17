const API = "http://localhost:5000";

export const runCode = async (code, language) => {
  const res = await fetch(`${API}/run`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ code, language }),
  });

  return res.json();
};