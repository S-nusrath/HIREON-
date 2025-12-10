import React from "react";
import { Link } from "react-router-dom";

/**
 * JobCard - lightweight presentational card
 * props:
 *   - job: { id, title, company, location, skills, postedAt }
 */
export default function JobCard({ job }) {
  return (
    <article className="card" style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
      <div>
        <h3 style={{ margin: 0 }}>{job.title}</h3>
        <p className="small" style={{ marginTop: 6 }}>{job.company} • {job.location}</p>
        <div style={{ marginTop: 8, display: "flex", gap: 8, flexWrap: "wrap" }}>
          {(job.skills || []).slice(0, 5).map((s) => (
            <span key={s} style={{ fontSize: 12, background: "#f3f4f6", padding: "4px 8px", borderRadius: 8 }}>{s}</span>
          ))}
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 8, alignItems: "flex-end" }}>
        <Link to={`/jobs/${job.id}`} style={{ color: "#4f46e5", fontSize: 14 }}>View</Link>
        <button className="btn" style={{ border: "1px solid #e5e7eb", background: "transparent" }}>Bookmark</button>
      </div>
    </article>
  );
}
