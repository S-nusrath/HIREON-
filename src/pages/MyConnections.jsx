/*import { useEffect, useState } from "react";
import { getConnections } from "../api/connections.api";

export default function MyConnections() {
  const [connections, setConnections] = useState([]);

  useEffect(() => {
    getConnections().then((res) => setConnections(res.data));
  }, []);

  return (
    <div>
      <h2 className="text-xl font-bold mb-3">My Connections</h2>
      {connections.map((c, i) => (
        <div key={i} className="border p-3 rounded mb-2">
          Connection ID: {c.id}
        </div>
      ))}
    </div>
  );
}
*/
// import { useEffect, useState } from "react";
// import "./MyConnections.css";

// const MyConnections = () => {
//   const [connections, setConnections] = useState([]);
//   const token = localStorage.getItem("token");

//   useEffect(() => {
//     fetch("http://localhost:5000/api/connections", {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     })
//       .then(res => res.json())
//       .then(data => setConnections(data));
//   }, []);

//   return (
//     <div className="connections-page">
//       <h1 className="page-title">My Connections</h1>

//       {connections.length === 0 ? (
//         <p className="empty-text">You don’t have any connections yet.</p>
//       ) : (
//         <div className="connections-grid">
//           {connections.map((conn) => (
//             <div className="connection-card" key={conn.id}>
//               <div className="avatar">
//                 {conn.name?.charAt(0) || "U"}
//               </div>

//               <h3>{conn.name || "User"}</h3>
//               <p>{conn.email || "user@email.com"}</p>

//               <span className="badge">Connected</span>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default MyConnections;
// import { useAuth } from "../context/AuthContext";

// export default function MyConnections() {
//   const { user } = useAuth();

//   return (
//     <div style={{ padding: 20 }}>
//       <h2>My Connections</h2>

//       {user.connections?.length === 0 && <p>No connections yet</p>}

//       {user.connections?.map((c) => (
//         <p key={c.id}>👤 {c.name}</p>
//       ))}
//     </div>
//   );
// }

// import { useAuth } from "../context/AuthContext";

// export default function Connections() {
//   const { user } = useAuth();

//   const connections = user?.connections || [];

//   return (
//     <div style={{ padding: 20 }}>
//       <h2>My Connections</h2>

//       {connections.length === 0 && <p>No connections yet</p>}

//       {connections.map((c) => (
//         <div
//           key={`${c.email}-${c.name}`}
//           style={{
//             marginBottom: 8,
//             padding: 8,
//             border: "1px solid #ccc",
//             borderRadius: 6,
//           }}
//         >
//           {c.name}
//         </div>
//       ))}
//     </div>
//   );
//}
import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";

export default function Connections() {
  const { user } = useAuth();
  const [connections, setConnections] = useState([]);

  const loadConnections = () => {
    const allUsers =
      JSON.parse(localStorage.getItem("hireon_users")) || [];

    const current = allUsers.find(
      (u) => u.email === user.email
    );

    let list = current?.connections || [];

    // 🧹 Clean data
    const cleaned = list.filter(
      (c, index, self) =>
        c.email &&                       // must have email
        c.email !== user.email &&        // no self
        index ===
          self.findIndex(
            (x) => x.email === c.email
          )
    );

    setConnections(cleaned);
  };

  useEffect(() => {
    if (!user) return;
    loadConnections();
  }, [user]);

  return (
    <div style={{ padding: 20 }}>
      <h2>My Connections</h2>

      {connections.length === 0 && (
        <p>No connections yet</p>
      )}

      {connections.map((c) => (
        <div
          key={c.email}
          style={{
            marginBottom: 8,
            padding: 8,
            border: "1px solid #ccc",
            borderRadius: 6,
          }}
        >
          <strong>{c.name || c.email}</strong>
          <div style={{ fontSize: 12, opacity: 0.7 }}>
            {c.role || "User"}
          </div>
        </div>
      ))}
    </div>
  );
}
