// // import DashboardLayout from "../layout/DashboardLayout";
// // import StatCard from "../components/statCard";

// // export default function Dashboard() {
// //   return (
// //     <DashboardLayout>
// //       {/* Header */}
// //       <div className="mb-6">
// //         <h2 className="text-2xl font-semibold">Dashboard</h2>
// //         <p className="text-slate-500 text-sm">
// //           Overview of your activity on Hireon
// //         </p>
// //       </div>

// //       {/* Stats */}
// //       <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
// //         <StatCard title="Jobs Applied" value="12" />
// //         <StatCard title="Connections" value="8" />
// //         <StatCard title="Requests" value="3" />
// //         <StatCard title="Practice Sessions" value="5" />
// //       </div>

// //       {/* Main Content */}
// //       <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
// //         {/* Jobs */}
// //         <div className="bg-white border rounded-xl p-4 lg:col-span-2">
// //           <div className="flex justify-between mb-3">
// //             <h3 className="font-semibold">Recent Jobs</h3>
// //             <button className="text-sm text-indigo-600">View all</button>
// //           </div>

// //           <ul className="space-y-3 text-sm">
// //             <li className="flex justify-between">
// //               <span>Frontend Developer</span>
// //               <span className="text-slate-500">Applied</span>
// //             </li>
// //             <li className="flex justify-between">
// //               <span>Backend Intern</span>
// //               <span className="text-slate-500">Pending</span>
// //             </li>
// //             <li className="flex justify-between">
// //               <span>React Intern</span>
// //               <span className="text-slate-500">Shortlisted</span>
// //             </li>
// //           </ul>
// //         </div>

// //         {/* Quick Actions */}
// //         <div className="bg-white border rounded-xl p-4">
// //           <h3 className="font-semibold mb-4">Quick Actions</h3>

// //           <div className="space-y-2">
// //             <button className="w-full bg-indigo-600 text-white py-2 rounded-lg">
// //               Browse Jobs
// //             </button>
// //             <button className="w-full border py-2 rounded-lg">
// //               Practice Interview
// //             </button>
// //             <button className="w-full border py-2 rounded-lg">
// //               Update Resume
// //             </button>
// //           </div>
// //         </div>
// //       </div>
// //     </DashboardLayout>
// //   );
// // }
// import DashboardLayout from "../layout/DashboardLayout";
// import "./Dashboard.css";

// export default function Dashboard() {
//   return (
//     <DashboardLayout>
//       <h2 className="dashboard-title">Hi, Rehan 👋</h2>

//       <div className="top-section">
//         <div className="card card-purple">
//           <h3>Find your next hire</h3>
//           <p>More than 1M talent ready</p>
//           <button className="primary-btn">Create a job</button>
//         </div>

//         <div className="card">
//           <h3>ATS Integration 🔗</h3>
//           <p>Sync jobs from your ATS</p>
//           <button className="secondary-btn">Sync jobs</button>
//         </div>
//       </div>

//       <h3>Open Jobs</h3>

//       <div className="job-card">
//         <span>UX Researcher</span>
//         <button>Manage</button>
//       </div>
//     </DashboardLayout>
//   );
// }
import DashboardLayout from "../layout/DashboardLayout";
import "./Dashboard.css";

export default function Dashboard() {
  return (
    <DashboardLayout>
      {/* Greeting */}
      <h2 className="dashboard-title">Hi, Rehan 👋</h2>

      {/* STATS SECTION */}
      <div className="stats-grid">
        <div className="stat-card">
          <h3>12</h3>
          <p>Jobs Applied</p>
        </div>
        <div className="stat-card">
          <h3>8</h3>
          <p>Connections</p>
        </div>
        <div className="stat-card">
          <h3>3</h3>
          <p>Requests</p>
        </div>
        <div className="stat-card">
          <h3>5</h3>
          <p>Practice Sessions</p>
        </div>
      </div>

      {/* HERO CARDS */}
      <div className="top-section">
        <div className="card card-purple">
          <h3>Find your next hire</h3>
          <p>More than 1M talent ready</p>
          <button className="primary-btn">Create a job</button>
        </div>

        <div className="card">
          <h3>ATS Integration 🔗</h3>
          <p>Sync jobs from your ATS</p>
          <button className="secondary-btn">Sync jobs</button>
        </div>
      </div>

      {/* MAIN GRID */}
      <div className="dashboard-grid">
        {/* LEFT */}
        <div>
          <h3>Open Jobs</h3>

          {/* EMPTY STATE */}
          <div className="empty-state">
            <p>No active jobs yet</p>
            <button className="primary-btn">Create your first job</button>
          </div>
        </div>

        {/* RIGHT */}
        <div>
          <div className="card">
            <h3>Profile Completion</h3>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: "65%" }}></div>
            </div>
            <p>65% complete</p>
          </div>

          <div className="card">
            <h3>Recent Activity</h3>
            <ul className="activity-list">
              <li>Applied to Frontend Intern</li>
              <li>New connection request</li>
              <li>Completed JS Practice</li>
              <li>Resume updated</li>
            </ul>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
