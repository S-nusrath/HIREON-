// src/pages/Practice.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";

const PROBLEMS = [
  { id: "sum-1", title: "Sum of Two Numbers", statement: "Read two ints and print sum.", examples: [{ in: "2 3", out: "5" }], defaultLang: "cpp" },
  { id: "fib-1", title: "Nth Fibonacci (n ≤ 30)", statement: "Print nth Fibonacci (1-indexed).", examples: [{ in: "7", out: "13" }], defaultLang: "py" },
];

const LANGS = [
  { id: "cpp", name: "C++ (g++)", judgeId: 54 },
  { id: "py", name: "Python 3", judgeId: 71 },
  { id: "js", name: "JavaScript (Node)", judgeId: 63 },
];

function defaultTemplate(langId) {
  if (langId === "py") return "n = int(input().strip())\nprint(n)\n";
  if (langId === "js") return "const fs = require('fs');const d = fs.readFileSync(0,'utf8').trim().split(/\\s+/);console.log(d.join(' '));\n";
  return "#include <bits/stdc++.h>\nusing namespace std;\nint main(){int a,b; if(!(cin>>a>>b)) return 0; cout<<a+b<<\"\\n\";}\n";
}

export default function Practice() {
  const [problem, setProblem] = useState(PROBLEMS[0]);
  const [lang, setLang] = useState(PROBLEMS[0].defaultLang);
  const [code, setCode] = useState(defaultTemplate(PROBLEMS[0].defaultLang));
  const [stdin, setStdin] = useState(PROBLEMS[0].examples[0].in);
  const [output, setOutput] = useState("");
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  // Vite env vars must use VITE_ prefix
  const JUDGE_URL = import.meta.env.VITE_JUDGE0_URL || "";
  const JUDGE_KEY = import.meta.env.VITE_JUDGE0_KEY || "";

  useEffect(() => {
    // debug info visible in console
    console.log("Practice mounted. JUDGE_URL:", JUDGE_URL ? JUDGE_URL : "(none)");
  }, [JUDGE_URL]);

  async function runSubmission() {
    setLoading(true);
    setStatus("Submitting...");
    setOutput("");
    try {
      if (!JUDGE_URL) {
        // demo fallback
        setTimeout(() => {
          setOutput(`(demo) stdin:\n${stdin}\n\n(Use VITE_JUDGE0_URL in .env to enable real runs)`);
          setStatus("Finished (demo)");
          setLoading(false);
        }, 400);
        return;
      }

      const langObj = LANGS.find((l) => l.id === lang);
      const language_id = langObj?.judgeId ?? lang;

      const url = `${JUDGE_URL.replace(/\/$/, "")}/submissions?base64_encoded=false&wait=true`;
      const payload = { source_code: code, language_id, stdin };
      const headers = {};
      if (JUDGE_KEY) { headers["X-Auth-Token"] = JUDGE_KEY; headers["x-rapidapi-key"] = JUDGE_KEY; }

      const res = await axios.post(url, payload, { headers, timeout: 60000 });
      const data = res.data || {};
      const stdout = data.stdout ?? data.stdout_text ?? data.output ?? data.standard_output ?? "";
      const stderr = data.stderr ?? data.compile_output ?? data.stderr_text ?? data.error ?? "";
      setOutput([stdout, stderr].filter(Boolean).join("\n\n") || "(no output)");
      setStatus("Done");
    } catch (err) {
      console.error("Judge error:", err);
      setStatus("Error");
      setOutput(err.response?.data ? JSON.stringify(err.response.data, null, 2) : err.message || "Unknown error");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="container" style={{ paddingTop: 20 }}>
      <div className="card">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <h2 style={{ margin: 0 }}>Practice Arena (Debug)</h2>
          <div className="small">API: {JUDGE_URL ? "configured" : "not configured (demo)"} </div>
        </div>

        <div style={{ marginTop: 12, display: "grid", gridTemplateColumns: "280px 1fr", gap: 16 }}>
          <aside>
            <div>
              <h4 style={{ marginTop: 0 }}>Problems</h4>
              <div style={{ display: "grid", gap: 8 }}>
                {PROBLEMS.map(p => (
                  <button key={p.id} onClick={() => { setProblem(p); setCode(defaultTemplate(p.defaultLang)); setStdin(p.examples[0].in); }} className="btn" style={{ textAlign: "left" }}>
                    <div style={{ fontWeight: 700 }}>{p.title}</div>
                    <div className="small">{p.statement.slice(0, 60)}...</div>
                  </button>
                ))}
              </div>
            </div>

            <div style={{ height: 12 }} />

            <div>
              <h4 style={{ marginTop: 0 }}>Settings</h4>
              <label className="small">Language</label>
              <select value={lang} onChange={e => setLang(e.target.value)} style={{ width: "100%", marginTop: 6 }}>
                {LANGS.map(l => <option key={l.id} value={l.id}>{l.name}</option>)}
              </select>

              <div style={{ marginTop: 8 }}>
                <label className="small">Input</label>
                <textarea value={stdin} onChange={e => setStdin(e.target.value)} rows={4} style={{ width: "100%", marginTop: 6 }} />
              </div>

              <div style={{ marginTop: 8 }}>
                <button className="btn btn-primary" onClick={runSubmission} disabled={loading} style={{ width: "100%" }}>{loading ? "Running..." : "Run"}</button>
              </div>

              <div style={{ marginTop: 8 }} className="small">Status: {status || "idle"}</div>
            </div>
          </aside>

          <main>
            <div>
              <h3 style={{ margin: 0 }}>{problem.title}</h3>
              <div className="small" style={{ marginTop: 6 }}>{problem.statement}</div>
            </div>

            <div style={{ marginTop: 12 }}>
              <textarea value={code} onChange={e => setCode(e.target.value)} rows={16} style={{ width: "100%", fontFamily: "monospace", padding: 12 }} />
            </div>

            <div style={{ marginTop: 12 }}>
              <h4>Output</h4>
              <pre style={{ background: "#0b1220", color: "#fff", padding: 12, borderRadius: 8, minHeight: 120 }}>{output || "(no output yet)"}</pre>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
