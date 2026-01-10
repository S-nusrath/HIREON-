// import React from "react";
// import { useParams, Link } from "react-router-dom";

// export default function JobDetail() {
//   const { id } = useParams();

//   // NOTE: replace with real API call later
//   const job = {
//     id,
//     title: `Frontend Developer ${id}`,
//     company: "Acme",
//     location: "Remote",
//     skills: ["React", "JS", "CSS"],
//     description: "This is a sample job description. Replace with real API data."
//   };

//   return (
//     <div className="container">
//       <div className="card">
//         <Link to="/jobs" className="small" style={{ textDecoration: "none", color: "#6b7280" }}>← Back to jobs</Link>
//         <h2 style={{ marginTop: 8 }}>{job.title}</h2>
//         <p className="small">{job.company} • {job.location}</p>

//         <section style={{ marginTop: 12 }}>
//           <h4>Skills</h4>
//           <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
//             {job.skills.map(s => <span key={s} style={{ background: "#f3f4f6", padding: "6px 10px", borderRadius: 8 }}>{s}</span>)}
//           </div>
//         </section>

//         <section style={{ marginTop: 12 }}>
//           <h4>About</h4>
//           <p className="small">{job.description}</p>
//         </section>

//         <div style={{ marginTop: 16 }}>
//           <button className="btn btn-primary">Apply</button>
//         </div>
//       </div>
//     </div>
//   );
// }



// import React, { useState } from "react";
// import { useParams, Link, useNavigate } from "react-router-dom";
// import axios from "axios";
// import JobDetail from "./pages/JobDetail";


// export default function JobDetail() {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   // temporary mock (later you’ll fetch from backend)
//   const job = {
//     id,
//     title: `Frontend Developer ${id}`,
//     company: "Acme",
//     location: "Remote",
//     skills: ["React", "JS", "CSS"],
//     description: "This is a sample job description. Replace with real API data."
//   };

//   const applyJob = async () => {
//     setError("");

//     const token = localStorage.getItem("token");
//     if (!token) {
//       navigate("/signin");
//       return;
//     }

//     try {
//       setLoading(true);

//       await axios.post(
//         "http://localhost:5000/api/applications/apply",
//         { jobId: job.id },
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );

//       alert("Applied successfully!");
//       navigate("/applications"); // go to My Applications
//     } catch (err) {
//       setError(err.response?.data?.message || "Failed to apply");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="container">
//       <div className="card">
//         <Link to="/jobs" className="small" style={{ textDecoration: "none", color: "#6b7280" }}>
//           ← Back to jobs
//         </Link>

//         <h2 style={{ marginTop: 8 }}>{job.title}</h2>
//         <p className="small">{job.company} • {job.location}</p>

//         <section style={{ marginTop: 12 }}>
//           <h4>Skills</h4>
//           <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
//             {job.skills.map(s => (
//               <span
//                 key={s}
//                 style={{ background: "#f3f4f6", padding: "6px 10px", borderRadius: 8 }}
//               >
//                 {s}
//               </span>
//             ))}
//           </div>
//         </section>

//         <section style={{ marginTop: 12 }}>
//           <h4>About</h4>
//           <p className="small">{job.description}</p>
//         </section>

//         {error && <p style={{ color: "red", marginTop: 8 }}>{error}</p>}

//         <div style={{ marginTop: 16 }}>
//           <button
//             className="btn btn-primary"
//             onClick={applyJob}
//             disabled={loading}
//           >
//             {loading ? "Applying..." : "Apply"}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }



import React, { useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";

export default function JobDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const job = {
    id,
    title: `Frontend Developer ${id}`,
    company: "Acme",
    location: "Remote",
    skills: ["React", "JS", "CSS"],
    description: "This is a sample job description. Replace with real API data."
  };

  const handleApply = async () => {
    try {
      setLoading(true);
      setError("");

      await axios.post(
        "http://localhost:5000/api/applications/apply",
        { jobId: job.id },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      navigate("/applications");
    } catch (err) {
      setError("Please login to apply for jobs");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <div className="card">
        <Link to="/jobs" className="small">← Back to jobs</Link>

        <h2>{job.title}</h2>
        <p className="small">
          {job.company} • {job.location}
        </p>

        <h4>Skills</h4>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          {job.skills.map((s) => (
            <span key={s} className="tag">{s}</span>
          ))}
        </div>

        <h4 style={{ marginTop: 12 }}>About</h4>
        <p className="small">{job.description}</p>

        {error && <p style={{ color: "red" }}>{error}</p>}

        <button
          className="btn btn-primary"
          onClick={handleApply}
          disabled={loading}
        >
          {loading ? "Applying..." : "Apply"}
        </button>
      </div>
    </div>
  );
}
