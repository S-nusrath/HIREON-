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
import jobs from "../data/jobs";
import JobCard from "../components/Jobcard";
import DashboardLayout from "../layout/DashboardLayout";
import "./Jobs.css";

export default function Jobs() {
  return (
    <DashboardLayout>
      <h2 className="page-title">Jobs</h2>

      <div className="jobs-list">
        {jobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </DashboardLayout>
  );
}
