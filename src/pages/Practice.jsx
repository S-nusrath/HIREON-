import { useState } from "react";
import { questions } from "../data/questions";
import QuestionCard from "../components/QuestionCard";
import Editor from "../components/Editor";
import OutputBox from "../components/OutputBox";
import { runCode } from "../services/codeService";

export default function Practice() {
  const [selectedQ, setSelectedQ] = useState(questions[0]);
  const [code, setCode] = useState("");
  const [language, setLanguage] = useState("python");
  const [output, setOutput] = useState("");

  const handleRun = async () => {
    const data = await runCode(code, language);
    setOutput(data.output);
  };

  return (
    <div className="flex h-screen">
      {/* LEFT - QUESTIONS */}
      <div className="w-1/4 bg-gray-900 p-4">
        <h2 className="text-white text-xl mb-4">Questions</h2>
        {questions.map((q) => (
          <QuestionCard key={q.id} q={q} onClick={setSelectedQ} />
        ))}
      </div>

      {/* RIGHT - EDITOR */}
      <div className="w-3/4 p-4">
        <h2 className="text-xl">{selectedQ.title}</h2>
        <p>{selectedQ.description}</p>

        <select
          className="mt-2 p-2 border"
          onChange={(e) => setLanguage(e.target.value)}
        >
          <option value="python">Python</option>
          <option value="java">Java</option>
        </select>

        <Editor code={code} setCode={setCode} />

        <button
          onClick={handleRun}
          className="bg-blue-500 text-white px-4 py-2 mt-2"
        >
          Run Code
        </button>

        <OutputBox output={output} />
      </div>
    </div>
  );
}