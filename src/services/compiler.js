// export async function runCode(code, input) {
//   const res = await fetch("http://localhost:5000/run", {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({ code, input })
//   });

//   return res.json();
// }
export async function runCode(code, input) {
  try {
    const res = await fetch("http://localhost:5000/run", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ code, input }),
    });

    if (!res.ok) {
      const text = await res.text();
      return {
        success: false,
        error: text || "Server error",
      };
    }

    const data = await res.json();
    return {
      success: true,
      output: data.output ?? data.result ?? "",
    };
  } catch (err) {
    return {
      success: false,
      error: "❌ Backend not running on port 5000",
    };
  }
}
