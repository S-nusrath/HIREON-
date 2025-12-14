import ResumeForm from "../components/ResumeForm";
import ResumePreview from "./ResumePreview";
import "../styles/resume.css";
import { useState } from "react";

export default function ResumeBuilder() {
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    skills: "",
    education: "",
    projects: "",
  });

  return (
    <div className="resume-page">
      <ResumeForm data={data} setData={setData} />
      <ResumePreview data={data} />
    </div>
  );
}
