// // // // import DashboardLayout from "../layout/DashboardLayout";
// // // // import StatCard from "../components/statCard";

// // // // export default function Dashboard() {
// // // //   return (
// // // //     <DashboardLayout>
// // // //       {/* Header */}
// // // //       <div className="mb-6">
// // // //         <h2 className="text-2xl font-semibold">Dashboard</h2>
// // // //         <p className="text-slate-500 text-sm">
// // // //           Overview of your activity on Hireon
// // // //         </p>
// // // //       </div>

// // // //       {/* Stats */}
// // // //       <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
// // // //         <StatCard title="Jobs Applied" value="12" />
// // // //         <StatCard title="Connections" value="8" />
// // // //         <StatCard title="Requests" value="3" />
// // // //         <StatCard title="Practice Sessions" value="5" />
// // // //       </div>

// // // //       {/* Main Content */}
// // // //       <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
// // // //         {/* Jobs */}
// // // //         <div className="bg-white border rounded-xl p-4 lg:col-span-2">
// // // //           <div className="flex justify-between mb-3">
// // // //             <h3 className="font-semibold">Recent Jobs</h3>
// // // //             <button className="text-sm text-indigo-600">View all</button>
// // // //           </div>

// // // //           <ul className="space-y-3 text-sm">
// // // //             <li className="flex justify-between">
// // // //               <span>Frontend Developer</span>
// // // //               <span className="text-slate-500">Applied</span>
// // // //             </li>
// // // //             <li className="flex justify-between">
// // // //               <span>Backend Intern</span>
// // // //               <span className="text-slate-500">Pending</span>
// // // //             </li>
// // // //             <li className="flex justify-between">
// // // //               <span>React Intern</span>
// // // //               <span className="text-slate-500">Shortlisted</span>
// // // //             </li>
// // // //           </ul>
// // // //         </div>

// // // //         {/* Quick Actions */}
// // // //         <div className="bg-white border rounded-xl p-4">
// // // //           <h3 className="font-semibold mb-4">Quick Actions</h3>

// // // //           <div className="space-y-2">
// // // //             <button className="w-full bg-indigo-600 text-white py-2 rounded-lg">
// // // //               Browse Jobs
// // // //             </button>
// // // //             <button className="w-full border py-2 rounded-lg">
// // // //               Practice Interview
// // // //             </button>
// // // //             <button className="w-full border py-2 rounded-lg">
// // // //               Update Resume
// // // //             </button>
// // // //           </div>
// // // //         </div>
// // // //       </div>
// // // //     </DashboardLayout>
// // // //   );
// // // // }
// // // import DashboardLayout from "../layout/DashboardLayout";
// // // import "./Dashboard.css";

// // // export default function Dashboard() {
// // //   return (
// // //     <DashboardLayout>
// // //       <h2 className="dashboard-title">Hi, Rehan 👋</h2>

// // //       <div className="top-section">
// // //         <div className="card card-purple">
// // //           <h3>Find your next hire</h3>
// // //           <p>More than 1M talent ready</p>
// // //           <button className="primary-btn">Create a job</button>
// // //         </div>

// // //         <div className="card">
// // //           <h3>ATS Integration 🔗</h3>
// // //           <p>Sync jobs from your ATS</p>
// // //           <button className="secondary-btn">Sync jobs</button>
// // //         </div>
// // //       </div>

// // //       <h3>Open Jobs</h3>

// // //       <div className="job-card">
// // //         <span>UX Researcher</span>
// // //         <button>Manage</button>
// // //       </div>
// // //     </DashboardLayout>
// // //   );
// // // }
// // import DashboardLayout from "../layout/DashboardLayout";
// // import "./Dashboard.css";

// // export default function Dashboard() {
// //   return (
// //     <DashboardLayout>
// //       {/* Greeting */}
// //       <h2 className="dashboard-title">Hi, Rehan 👋</h2>

// //       {/* STATS SECTION */}
// //       <div className="stats-grid">
// //         <div className="stat-card">
// //           <h3>12</h3>
// //           <p>Jobs Applied</p>
// //         </div>
// //         <div className="stat-card">
// //           <h3>8</h3>
// //           <p>Connections</p>
// //         </div>
// //         <div className="stat-card">
// //           <h3>3</h3>
// //           <p>Requests</p>
// //         </div>
// //         <div className="stat-card">
// //           <h3>5</h3>
// //           <p>Practice Sessions</p>
// //         </div>
// //       </div>

// //       {/* HERO CARDS */}
// //       <div className="top-section">
// //         <div className="card card-purple">
// //           <h3>Find your next hire</h3>
// //           <p>More than 1M talent ready</p>
// //           <button className="primary-btn">Create a job</button>
// //         </div>

// //         <div className="card">
// //           <h3>ATS Integration 🔗</h3>
// //           <p>Sync jobs from your ATS</p>
// //           <button className="secondary-btn">Sync jobs</button>
// //         </div>
// //       </div>

// //       {/* MAIN GRID */}
// //       <div className="dashboard-grid">
// //         {/* LEFT */}
// //         <div>
// //           <h3>Open Jobs</h3>

// //           {/* EMPTY STATE */}
// //           <div className="empty-state">
// //             <p>No active jobs yet</p>
// //             <button className="primary-btn">Create your first job</button>
// //           </div>
// //         </div>

// //         {/* RIGHT */}
// //         <div>
// //           <div className="card">
// //             <h3>Profile Completion</h3>
// //             <div className="progress-bar">
// //               <div className="progress-fill" style={{ width: "65%" }}></div>
// //             </div>
// //             <p>65% complete</p>
// //           </div>

// //           <div className="card">
// //             <h3>Recent Activity</h3>
// //             <ul className="activity-list">
// //               <li>Applied to Frontend Intern</li>
// //               <li>New connection request</li>
// //               <li>Completed JS Practice</li>
// //               <li>Resume updated</li>
// //             </ul>
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
//       {/* Greeting */}
//       <h2 className="dashboard-title">Hi, Rehan 👋</h2>

//       {/* STATS SECTION */}
//       <div className="stats-grid">
//         <div className="stat-card">
//           <h3>12</h3>
//           <p>Jobs Applied</p>
//         </div>
//         <div className="stat-card">
//           <h3>8</h3>
//           <p>Connections</p>
//         </div>
//         <div className="stat-card">
//           <h3>3</h3>
//           <p>Pending Requests</p>
//         </div>
//         <div className="stat-card">
//           <h3>5</h3>
//           <p>Practice Sessions</p>
//         </div>
//       </div>

//       {/* HERO CARDS */}
//       <div className="top-section">
//         <div className="card card-purple">
//           <h3>Discover your next opportunity</h3>
//           <p>Jobs matched to your skills & interests</p>
//           <button className="primary-btn">Browse Jobs</button>
//         </div>

//         <div className="card">
//           <h3>Grow your network 🤝</h3>
//           <p>Connect with professionals in your domain</p>
//           <button className="secondary-btn">Find People</button>
//         </div>
//       </div>

//       {/* MAIN GRID */}
//       <div className="dashboard-grid">
//         {/* LEFT */}
//         <div>
//           <h3>Recommended Jobs</h3>

//           <div className="card job-mini">
//             <h4>Frontend Intern</h4>
//             <p>Startup Labs • Remote</p>
//             <span>React • JavaScript</span>
//             <button className="primary-btn small">View Job</button>
//           </div>

//           <div className="card job-mini">
//             <h4>React Developer</h4>
//             <p>TechNova • Bengaluru</p>
//             <span>React • CSS</span>
//             <button className="primary-btn small">View Job</button>
//           </div>

//           <h3 style={{ marginTop: "24px" }}>Quick Actions</h3>

//           <div className="quick-actions">
//             <button className="secondary-btn small">Update Resume</button>
//             <button className="secondary-btn small">Practice Interview</button>
//             <button className="secondary-btn small">Edit Profile</button>
//           </div>
//         </div>

//         {/* RIGHT */}
//         <div>
//           <div className="card">
//             <h3>Notifications</h3>
//             <ul className="activity-list">
//               <li>🔥 2 new jobs match your profile</li>
//               <li>👤 You have 1 new connection request</li>
//               <li>📩 Recruiter viewed your profile</li>
//             </ul>
//           </div>

//           <div className="card">
//             <h3>Profile Completion</h3>
//             <div className="progress-bar">
//               <div className="progress-fill" style={{ width: "65%" }}></div>
//             </div>
//             <p>65% complete</p>
//           </div>

//           <div className="card">
//             <h3>People you may know</h3>

//             <div className="user-list">
//               <div className="user-item">
//                 <div className="avatar">A</div>
//                 <div>
//                   <p className="user-name">Rehan</p>
//                   <span className="user-role">Frontend Developer</span>
//                 </div>
//                 <button className="secondary-btn small">Connect</button>
//               </div>

//               <div className="user-item">
//                 <div className="avatar">R</div>
//                 <div>
//                   <p className="user-name">Nusrath</p>
//                   <span className="user-role">Backend Intern</span>
//                 </div>
//                 <button className="secondary-btn small">Connect</button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </DashboardLayout>
//   );
// }
import DashboardLayout from "../layout/DashboardLayout";
import "./Dashboard.css";

export default function Dashboard() {
  return (
    <DashboardLayout>
      {/* PAGE HEADER */}
      <div className="dashboard-header">
        <div className="header-left">
          <img
            src="https://i.pravatar.cc/100?img=12"
            alt="User"
            className="header-avatar"
          />
          <div>
            <h2>Welcome back, Rehan 👋</h2>
            <p className="header-sub">
              Here’s an overview of your activity today
            </p>
          </div>
        </div>

        <button className="primary-btn">Complete Profile</button>
      </div>

      {/* STATS */}
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
          <p>Pending Requests</p>
        </div>
        <div className="stat-card">
          <h3>5</h3>
          <p>Practice Sessions</p>
        </div>
      </div>

      {/* HERO ACTIONS */}
      <div className="hero-grid">
        <div className="hero-card primary-hero">
          <div>
            <h3>Find your next opportunity</h3>
            <p>Jobs curated based on your skills & interests</p>
            <button className="primary-btn">Browse Jobs</button>
          </div>
          <img
            src="https://illustrations.popsy.co/indigo/job-search.svg"
            alt="Jobs"
          />
        </div>

        <div className="hero-card">
          <div>
            <h3>Grow your professional network</h3>
            <p>Connect with people in your domain</p>
            <button className="secondary-btn">Discover People</button>
          </div>
          <img
            src="https://illustrations.popsy.co/gray/team-work.svg"
            alt="People"
          />
        </div>
      </div>

      {/* MAIN GRID */}
      <div className="dashboard-grid">
        {/* LEFT */}
        <div>
          <h3 className="section-title">Recommended Jobs</h3>

          <div className="job-card">
            <div className="job-header">
              <img
                src="https://logo.clearbit.com/google.com"
                alt="Company"
              />
              <div>
                <h4>Frontend Intern</h4>
                <p>Startup Labs • Remote</p>
              </div>
            </div>
            <span>React • JavaScript</span>
            <button className="primary-btn small">View Job</button>
          </div>

          <div className="job-card">
            <div className="job-header">
              <img
                src="https://logo.clearbit.com/amazon.com"
                alt="Company"
              />
              <div>
                <h4>React Developer</h4>
                <p>TechNova • Bengaluru</p>
              </div>
            </div>
            <span>React • CSS</span>
            <button className="primary-btn small">View Job</button>
          </div>
        </div>

        {/* RIGHT */}
        <div>
          <div className="card">
            <h3>Notifications</h3>
            <ul className="activity-list">
              <li>🔥 2 new jobs match your profile</li>
              <li>👤 1 new connection request</li>
              <li>📩 Recruiter viewed your profile</li>
            </ul>
          </div>

          <div className="card">
            <h3>Profile Completion</h3>
            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: "65%" }}
              />
            </div>
            <p>65% completed</p>
          </div>

          <div className="card">
            <h3>People you may know</h3>

            <div className="people-item">
              <img src="https://i.pravatar.cc/40?img=32" />
              <div>
                <p>Sk.Rehan</p>
                <span>Frontend Developer</span>
              </div>
              <button className="secondary-btn small">Connect</button>
            </div>

            <div className="people-item">
              <img src="https://i.pravatar.cc/40?img=45" />
              <div>
                <p>Nusrath rehan</p>
                <span>Backend Intern</span>
              </div>
              <button className="secondary-btn small">Connect</button>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
