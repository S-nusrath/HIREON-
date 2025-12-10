import React from "react";
import { useParams, Link } from "react-router-dom";

export default function JobDetail() {
  const { id } = useParams();

  // NOTE: replace with real API call later
  const job = {
    id,
    title: `Frontend Developer ${id}`,
    company: "Acme",
    location: "Remote",
    skills: ["React", "JS", "CSS"],
    description: "This is a sample job description. Replace with real API data."
  };

  return (
    <div className="container">
      <div className="card">
        <Link to="/jobs" className="small" style={{ textDecoration: "none", color: "#6b7280" }}>← Back to jobs</Link>
        <h2 style={{ marginTop: 8 }}>{job.title}</h2>
        <p className="small">{job.company} • {job.location}</p>

        <section style={{ marginTop: 12 }}>
          <h4>Skills</h4>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            {job.skills.map(s => <span key={s} style={{ background: "#f3f4f6", padding: "6px 10px", borderRadius: 8 }}>{s}</span>)}
          </div>
        </section>

        <section style={{ marginTop: 12 }}>
          <h4>About</h4>
          <p className="small">{job.description}</p>
        </section>

        <div style={{ marginTop: 16 }}>
          <button className="btn btn-primary">Apply</button>
        </div>
      </div>
    </div>
  );
}
