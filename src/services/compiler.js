export async function runCode(code, input) {
  const res = await fetch("http://localhost:5000/run", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ code, input })
  });

  return res.json();
}
