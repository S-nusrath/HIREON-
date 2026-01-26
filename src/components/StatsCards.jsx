// export default function StatsCards() {
//   const stats = [
//     { label: "Jobs Applied", value: 5 },
//     { label: "Connections", value: 80 },
//     { label: "Requests", value: 3 },
//     { label: "Practice Sessions", value: 6 },
//   ];

//   return (
//     <div className="stats-grid">
//       {stats.map((item, i) => (
//         <div key={i} className="stat-card">
//           <h3>{item.value}</h3>
//           <p>{item.label}</p>
//         </div>
//       ))}
//     </div>
//   );
// }
import { useAuth } from "../context/AuthContext";

export default function StatsCards() {
  const { user } = useAuth();

  // fallback to avoid crashes
  const stats = [
    {
      label: "Jobs Applied",
      value: user?.appliedJobs?.length || 0,
    },
    {
      label: "Connections",
      value: user?.connections?.length || 0,
    },
    {
      label: "Pending Requests",
      value: user?.requests?.length || 0,
    },
    {
      label: "Practice Sessions",
      value: user?.practiceSessions || 0,
    },
  ];

  return (
    <div className="stats-grid">
      {stats.map((item) => (
        <div key={item.label} className="stat-card">
          <h3>{item.value}</h3>
          <p>{item.label}</p>
        </div>
      ))}
    </div>
  );
}
