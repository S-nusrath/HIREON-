import { downloadPdf } from "../utils/downloadPdf";

export default function ResumePreview({ data }) {
  return (
    <div className="resume-preview">
      <div id="resume">
        <h1>{data.name || "Your Name"}</h1>
        <p>{data.email} | {data.phone}</p>

        <h3>Skills</h3>
        <p>{data.skills}</p>

        <h3>Education</h3>
        <p>{data.education}</p>

        <h3>Projects</h3>
        <p>{data.projects}</p>
      </div>

      <button onClick={downloadPdf}>Download PDF</button>
    </div>
  );
}
