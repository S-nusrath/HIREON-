// // // import React from "react";
// // // import { Link } from "react-router-dom";
// // // import axios from "axios";
// // // import { useAuth } from "../context/AuthContext";

// // // /**
// // //  * JobCard - lightweight presentational card
// // //  * props:
// // //  *   - job: { id, title, company, location, skills, postedAt }
// // //  */
// // // // export default function JobCard({ job }) {
// // // //   return (
// // // //     <article className="card" style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
// // // //       <div>
// // // //         <h3 style={{ margin: 0 }}>{job.title}</h3>
// // // //         <p className="small" style={{ marginTop: 6 }}>{job.company} • {job.location}</p>
// // // //         <div style={{ marginTop: 8, display: "flex", gap: 8, flexWrap: "wrap" }}>
// // // //           {(job.skills || []).slice(0, 5).map((s) => (
// // // //             <span key={s} style={{ fontSize: 12, background: "#f3f4f6", padding: "4px 8px", borderRadius: 8 }}>{s}</span>
// // // //           ))}
// // // //         </div>
// // // //       </div>

// // // //       <div style={{ display: "flex", flexDirection: "column", gap: 8, alignItems: "flex-end" }}>
// // // //         <Link to={`/jobs/${job.id}`} style={{ color: "#4f46e5", fontSize: 14 }}>View</Link>
// // // //         <button className="btn" style={{ border: "1px solid #e5e7eb", background: "transparent" }}>Bookmark</button>
// // // //       </div>
// // // //     </article>
// // // //   );
// // // // }


// // // export default function JobCard({ job }) {
// // //   const { token } = useAuth();

// // //   const applyJob = async () => {
// // //     try {
// // //       await axios.post(
// // //         "http://localhost:5000/api/applications",
// // //         { jobId: job.id },
// // //         {
// // //           headers: {
// // //             Authorization: `Bearer ${token}`,
// // //           },
// // //         }
// // //       );
// // //       alert("Applied successfully");
// // //     } catch (err) {
// // //       alert("Already applied or error");
// // //     }
// // //   };


// // import React from "react";
// // import { Link } from "react-router-dom";
// // import axios from "axios";
// // import { useAuth } from "../context/AuthContext";

// // export default function JobCard({ job }) {
// //   const { token } = useAuth();

// // //   const applyJob = async () => {
// // //     try {
// // //       // await axios.post(
// // //       //   "http://localhost:5000/api/applications",
// // //       //   { jobId: job.id },
// // //       //   {
// // //       //     headers: {
// // //       //       Authorization: `Bearer ${token}`,
// // //       //     },
// // //       //   }
// // //       // );
// // //       //alert("Applied successfully");
// // //       const token = localStorage.getItem("token");

// // // if (!token) {
// // //   alert("Please login to apply");
// // //   return;
// // // }

// // // await axios.post(
// // //   "http://localhost:5000/api/applications",
// // //   { jobId: job.id }, // ⚠️ use job.id NOT job._id (Sequelize)
// // //   {
// // //     headers: {
// // //       Authorization: `Bearer ${token}`,
// // //       "Content-Type": "application/json",
// // //     },
// // //   }
// // // );



// // const applyJob = async () => {
// //   try {
// //     const token = localStorage.getItem("token");

// //     if (!token) {
// //       alert("Please login to apply");
// //       return;
// //     }

// //     await axios.post(
// //       "http://localhost:5000/api/applications/apply",
// //       { jobId: job.id },
// //       {
// //         headers: {
// //           Authorization: `Bearer ${token}`,
// //           "Content-Type": "application/json",
// //         },
// //       }
// //     );

// //     alert("Application submitted successfully");
// //   } catch (err) {
// //     console.error(err.response?.data || err.message);
// //     alert(err.response?.data?.message || "Already applied");
// //   }
// // };


// // // alert("Application submitted successfully");

// // //     } catch (err) {
// // //   if (err.response?.status === 409) {
// // //     alert("You already applied for this job");
// // //   } else {
// // //     alert("Failed to apply. Please login again.");
// // //   }
// // // }

// //   //};

// //   return (
// //     <article className="card" style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
// //       <div>
// //         <h3 style={{ margin: 0 }}>{job.title}</h3>
// //         <p className="small" style={{ marginTop: 6 }}>{job.company} • {job.location}</p>
// //         <div style={{ marginTop: 8, display: "flex", gap: 8, flexWrap: "wrap" }}>
// //           {(job.skills || []).slice(0, 5).map((s) => (
// //             <span key={s} style={{ fontSize: 12, background: "#f3f4f6", padding: "4px 8px", borderRadius: 8 }}>{s}</span>
// //           ))}
// //         </div>
// //       </div>

// //       <div style={{ display: "flex", flexDirection: "column", gap: 8, alignItems: "flex-end" }}>
// //         <Link to={`/jobs/${job.id}`} style={{ color: "#4f46e5", fontSize: 14 }}>View</Link>
// //         <button className="btn" style={{ border: "1px solid #e5e7eb", background: "transparent" }}>Bookmark</button>

// //         {/* ✅ APPLY BUTTON */}
// //         <button
// //           onClick={applyJob}
// //           className="btn"
// //           style={{ border: "1px solid #4f46e5", background: "#4f46e5", color: "white" }}
// //         >
// //           Apply
// //         </button>
// //       </div>
// //     </article>
// //   );
// // }
// import { useState } from "react";
// import { Link } from "react-router-dom";

// export default function JobCard({ job }) {
//   const [applied, setApplied] = useState(false);
//   const [saved, setSaved] = useState(false);

//   return (
//     <div className="job-card">
//       <div className="job-info">
//         <h3>{job.title}</h3>
//         <p className="company">
//           {job.company} • {job.location}
//         </p>

//         <p className="meta">
//           {job.salary} • {job.experience} • {job.type}
//         </p>

//         <div className="skills">
//           {job.skills.map((s) => (
//             <span key={s}>{s}</span>
//           ))}
//         </div>

//         <small>Posted {job.postedAt}</small>
//       </div>

//       <div className="job-actions">
//         <Link to={`/jobs/${job.id}`}>View</Link>

//         <button onClick={() => setSaved(!saved)}>
//           {saved ? "Saved ⭐" : "Save"}
//         </button>

//         <button
//           className="primary"
//           disabled={applied}
//           onClick={() => setApplied(true)}
//         >
//           {applied ? "Applied ✅" : "Apply"}
//         </button>
//       </div>
//     </div>
//   );
// }
import { Link } from "react-router-dom";

export default function JobCard({ job }) {
  return (
    <div className="job-card">
      <div className="job-main">
        <h3 className="job-title">{job.title}</h3>
        <p className="job-company">
          {job.company} • {job.location}
        </p>

        <p className="job-meta">
          {job.salary} • {job.experience} • {job.type}
        </p>

        <div className="job-skills">
          {job.skills.map((skill) => (
            <span key={skill}>{skill}</span>
          ))}
        </div>

        <span className="job-time">Posted {job.postedAt}</span>
      </div>

      <div className="job-actions">
        <Link to={`/jobs/${job.id}`} className="view-btn">
          View
        </Link>
        <button className="save-btn">Save</button>
        <button className="apply-btn">Apply</button>
      </div>
    </div>
  );
}
