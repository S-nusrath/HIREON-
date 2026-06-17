// import { useState } from "react";
// import ResumeForm from "../components/ResumeForm";
// import ResumePreview from "../components/ResumePreview";

// export default function ResumeBuilder() {
//   const [data, setData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     summary: "",
//     skills: "",
//     education: "",
//     experience: "",
//     projects: "",
//   });

//   return (
//     <div className="min-h-screen bg-gray-100 p-6">

//       {/* HEADER */}
//       <div className="mb-6">
//         <h1 className="text-3xl font-bold">ATS Resume Builder 🚀</h1>
//         <p className="text-gray-600">
//           Build a professional resume that passes ATS systems
//         </p>
//       </div>

//       {/* MAIN GRID */}
//       <div className="grid md:grid-cols-2 gap-6">

//         {/* FORM */}
//         <div className="bg-white p-6 rounded-xl shadow">
//           <ResumeForm data={data} setData={setData} />
//         </div>

//         {/* PREVIEW */}
//         <div className="bg-white p-6 rounded-xl shadow overflow-auto max-h-[80vh]">
//           <ResumePreview data={data} />
//         </div>

//       </div>
//     </div>
//   );
// }
import { useState } from "react";
import AISuggestions from "../components/AISuggestions";
import ResumeForm from "../components/ResumeForm";
import ResumePreview from "../components/ResumePreview";
import html2pdf from "html2pdf.js";

export default function ResumeBuilder() {
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    summary: "",
    skills: "",
    education: "",
    experience: "",
    projects: "",
  });

  const [template, setTemplate] = useState("modern");

  const downloadPDF = () => {
    const element = document.getElementById("resume-preview");

    html2pdf()
      .from(element)
      .set({
        margin: 10,
        filename: "resume.pdf",
        html2canvas: { scale: 2 },
        jsPDF: { format: "a4" },
      })
      .save();
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Resume Builder 🚀</h1>

        <div className="flex gap-3">
          <select
            value={template}
            onChange={(e) => setTemplate(e.target.value)}
            className="border p-2 rounded"
          >
            <option value="modern">Modern</option>
            <option value="minimal">Minimal</option>
          </select>

          <button
            onClick={downloadPDF}
            className="bg-indigo-600 text-white px-4 py-2 rounded"
          >
            Download PDF
          </button>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">

        {/* FORM */}
        <div className="bg-white p-6 rounded-xl shadow">
          <ResumeForm data={data} setData={setData} />
        </div>

        {/* PREVIEW */}
        <div
          id="resume-preview"
          className="bg-white p-6 rounded-xl shadow"
        >
          <ResumePreview data={data} template={template} />
        </div>

      </div>
    </div>
  );
}