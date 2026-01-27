// // import React, { useState, useMemo } from "react";
// // import JobCard from "../components/Jobcard";
// // import FiltersPanel from "../components/FiltersPanel";

// // /* mock data */
// // const MOCK = new Array(8).fill(0).map((_, i) => ({
// //   id: i + 1,
// //   title: `Frontend Developer ${i + 1}`,
// //   company: "Acme",
// //   location: i % 2 === 0 ? "Remote" : "Bengaluru",
// //   branch: "CS",
// //   year: "Any",
// //   skills: ["React", "JavaScript", "HTML"]
// // }));

// // export default function Jobs() {
// //   const [filters, setFilters] = useState({ branch: "All", year: "All", location: "" });

// //   const filtered = useMemo(() => {
// //     return MOCK.filter((job) => {
// //       if (filters.branch !== "All" && job.branch !== filters.branch) return false;
// //       if (filters.year !== "All" && job.year !== filters.year) return false;
// //       if (filters.location && !job.location.toLowerCase().includes(filters.location.toLowerCase())) return false;
// //       return true;
// //     });
// //   }, [filters]);

// //   return (
// //     <div className="container" style={{ display: "grid", gridTemplateColumns: "280px 1fr", gap: 20 }}>
// //       <FiltersPanel filters={filters} setFilters={setFilters} />
// //       <div style={{ display: "grid", gap: 12 }}>
// //         {filtered.map((j) => (
// //           <JobCard key={j.id} job={j} />
// //         ))}
// //       </div>
// //     </div>
// //   );
// // }
// import { useState } from "react";
// import jobsData from "../data/jobs";
// import JobCard from "../components/Jobcard";
// import JobFilters from "../components/JobFilters";
// import DashboardLayout from "../layout/DashboardLayout";

// export default function Jobs() {
//   const [filters, setFilters] = useState({
//     type: "",
//     remote: "",
//   });

//   const filteredJobs = jobsData.filter((job) => {
//     if (filters.type && job.type !== filters.type) return false;
//     if (filters.remote && String(job.remote) !== filters.remote)
//       return false;
//     return true;
//   });

//   return (
//     <DashboardLayout>
//       <h2>Jobs</h2>

//       <JobFilters filters={filters} setFilters={setFilters} />

//       {filteredJobs.length === 0 ? (
//         <p>No jobs match your filters</p>
//       ) : (
//         filteredJobs.map((job) => (
//           <JobCard key={job.id} job={job} />
//         ))
//       )}
//     </DashboardLayout>
//   );
// }
// import jobs from "../data/jobs";
// import JobCard from "../components/Jobcard";
// import DashboardLayout from "../layout/DashboardLayout";
// import "./Jobs.css";

// export default function Jobs() {
//   return (
//     <DashboardLayout>
//       <h2 className="page-title">Jobs</h2>

//       <div className="jobs-list">
//         {jobs.map((job) => (
//           <JobCard key={job.id} job={job} />
//         ))}
//       </div>
//     </DashboardLayout>
//   );
// }
// import { useNavigate } from "react-router-dom";
// import jobs from "../data/jobs";
// import DashboardLayout from "../layout/DashboardLayout";

// export default function Jobs() {
//   const navigate = useNavigate();

//   // 👁 VIEW JOB
//   const handleView = (job) => {
//     const confirmView = window.confirm(
//       `View details for ${job.title} at ${job.company}?`
//     );
//     if (confirmView) {
//       navigate(`/jobs/${job.id}`);
//     }
//   };

//   // ⭐ SAVE JOB
//   const handleSave = (job) => {
//     const savedJobs =
//       JSON.parse(localStorage.getItem("hireon_saved_jobs")) || [];

//     const alreadySaved = savedJobs.some((j) => j.id === job.id);
//     if (alreadySaved) {
//       alert("⭐ Job already saved");
//       return;
//     }

//     const confirmSave = window.confirm(
//       `Save ${job.title} at ${job.company}?`
//     );

//     if (confirmSave) {
//       localStorage.setItem(
//         "hireon_saved_jobs",
//         JSON.stringify([...savedJobs, job])
//       );
//       alert("⭐ Job saved successfully!");
//     }
//   };

//   // 🚀 APPLY JOB
//   const handleApply = (job) => {
//     const appliedJobs =
//       JSON.parse(localStorage.getItem("hireon_applied_jobs")) || [];

//     const alreadyApplied = appliedJobs.some((j) => j.id === job.id);
//     if (alreadyApplied) {
//       alert("✅ You already applied for this job");
//       return;
//     }

//     const confirmApply = window.confirm(
//       `Apply for ${job.title} at ${job.company}?`
//     );

//     if (confirmApply) {
//       localStorage.setItem(
//         "hireon_applied_jobs",
//         JSON.stringify([...appliedJobs, job])
//       );
//       alert("🎉 Application submitted!");
//     }
//   };

//   return (
//     <DashboardLayout>
//       <h2>Jobs</h2>

//       {jobs.map((job) => (
//         <div
//           key={job.id}
//           style={{
//             border: "1px solid #333",
//             padding: 16,
//             borderRadius: 8,
//             marginBottom: 14,
//           }}
//         >
//           <h3>{job.title}</h3>
//           <p>
//             {job.company} • {job.location}
//           </p>

//           <p>
//             {job.salary} • {job.experience}
//           </p>

//           <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
//             {job.skills.map((skill) => (
//               <span
//                 key={skill}
//                 style={{
//                   background: "#222",
//                   padding: "4px 8px",
//                   borderRadius: 4,
//                   fontSize: 12,
//                 }}
//               >
//                 {skill}
//               </span>
//             ))}
//           </div>

//           <p style={{ fontSize: 12, opacity: 0.7, marginTop: 6 }}>
//             Posted {job.posted}
//           </p>

//           {/* ACTION BUTTONS */}
//           <div style={{ display: "flex", gap: 10, marginTop: 10 }}>
//             <button onClick={() => handleView(job)}>View</button>
//             <button onClick={() => handleSave(job)}>Save</button>
//             <button onClick={() => handleApply(job)}>Apply</button>
//           </div>
//         </div>
//       ))}
//     </DashboardLayout>
//   );
// }
// import { useNavigate } from "react-router-dom";
// import jobs from "../data/jobs";
// import DashboardLayout from "../layout/DashboardLayout";

// export default function Jobs() {
//   const navigate = useNavigate();

//   // 👁 VIEW
//   const handleView = (job) => {
//     const ok = window.confirm(
//       `View details for ${job.title} at ${job.company}?`
//     );
//     if (ok) {
//       navigate(`/jobs/${job.id}`);
//     }
//   };

//   // ⭐ SAVE
//   const handleSave = (job) => {
//     const saved =
//       JSON.parse(localStorage.getItem("hireon_saved_jobs")) || [];

//     if (saved.some((j) => j.id === job.id)) {
//       alert("Job already saved ⭐");
//       return;
//     }

//     const ok = window.confirm(
//       `Save ${job.title} at ${job.company}?`
//     );

//     if (ok) {
//       localStorage.setItem(
//         "hireon_saved_jobs",
//         JSON.stringify([...saved, job])
//       );
//       alert("⭐ Job saved successfully");
//     }
//   };

//   // 🚀 APPLY
//   const handleApply = (job) => {
//     const applied =
//       JSON.parse(localStorage.getItem("hireon_applied_jobs")) || [];

//     if (applied.some((j) => j.id === job.id)) {
//       alert("You already applied ✅");
//       return;
//     }

//     const ok = window.confirm(
//       `Apply for ${job.title} at ${job.company}?`
//     );

//     if (ok) {
//       localStorage.setItem(
//         "hireon_applied_jobs",
//         JSON.stringify([...applied, job])
//       );
//       alert("🎉 Application submitted");
//     }
//   };

//   return (
//     <DashboardLayout>
//       <h2>Jobs</h2>

//       {jobs.map((job) => (
//         <div key={job.id} className="job-card">
//           <h3>{job.title}</h3>
//           <p>
//             {job.company} • {job.location}
//           </p>

//           <p>
//             {job.salary} • {job.experience}
//           </p>

//           <div className="job-skills">
//             {job.skills.map((skill) => (
//               <span key={skill} className="skill-tag">
//                 {skill}
//               </span>
//             ))}
//           </div>

//           <p className="job-posted">Posted {job.posted}</p>

//           {/* ACTION BUTTONS (same colors as before) */}
//           <div className="job-actions">
//             <button
//               className="secondary-btn"
//               onClick={() => handleView(job)}
//             >
//               View
//             </button>

//             <button
//               className="secondary-btn"
//               onClick={() => handleSave(job)}
//             >
//               Save
//             </button>

//             <button
//               className="primary-btn"
//               onClick={() => handleApply(job)}
//             >
//               Apply
//             </button>
//           </div>
//         </div>
//       ))}
//     </DashboardLayout>
//   );
// }
import { useAuth } from "../context/AuthContext";

export default function Jobs() {

  const { user, login } = useAuth();

  // ✅ Fake Jobs Data
  const jobs = [
    {
      id: 1,
      title: "Frontend Developer",
      company: "Google",
      location: "Bangalore",
      type: "Full Time",
      salary: "12 LPA",
    },
    {
      id: 2,
      title: "Backend Developer",
      company: "Amazon",
      location: "Hyderabad",
      type: "Full Time",
      salary: "14 LPA",
    },
    {
      id: 3,
      title: "MERN Stack Intern",
      company: "Flipkart",
      location: "Remote",
      type: "Internship",
      salary: "15k / month",
    },
    {
      id: 4,
      title: "Java Developer",
      company: "TCS",
      location: "Chennai",
      type: "Full Time",
      salary: "6 LPA",
    },
    {
      id: 5,
      title: "Python Developer",
      company: "Infosys",
      location: "Pune",
      type: "Full Time",
      salary: "7 LPA",
    },
  ];

  // ✅ Apply Job
  const applyJob = (job) => {

    const alreadyApplied =
      user?.appliedJobs?.some(j => j.id === job.id);

    if (alreadyApplied) {
      alert("Already applied ❌");
      return;
    }

    const updatedUser = {
      ...user,
      appliedJobs: [...(user.appliedJobs || []), job],
    };

    // Update Auth State
    login(updatedUser);

    // Update user inside hireon_users
    const allUsers =
      JSON.parse(localStorage.getItem("hireon_users")) || [];

    const updatedUsers = allUsers.map(u =>
      u.email === user.email ? updatedUser : u
    );

    localStorage.setItem(
      "hireon_users",
      JSON.stringify(updatedUsers)
    );

    alert("Job Applied Successfully ✅");
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Jobs</h2>

      {jobs.map(job => (
        <div
          key={job.id}
          style={{
            border: "1px solid #ccc",
            padding: 15,
            marginBottom: 12,
            borderRadius: 8,
          }}
        >
          <h3>{job.title}</h3>
          <p>{job.company} • {job.location}</p>
          <p>{job.type} | {job.salary}</p>

          <button onClick={() => applyJob(job)}>
            Apply
          </button>
        </div>
      ))}
    </div>
  );
}
