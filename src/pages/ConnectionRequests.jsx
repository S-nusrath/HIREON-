/*import { useEffect, useState } from "react";

const ConnectionRequests = () => {
  const [requests, setRequests] = useState([]);
  const token = localStorage.getItem("token");

  const fetchRequests = async () => {
    const res = await fetch(
      "http://localhost:5000/api/connections/requests",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const data = await res.json();
    setRequests(data);
  };

  const acceptRequest = async (id) => {
    await fetch(
      `http://localhost:5000/api/connections/accept/${id}`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    fetchRequests();
  };

  const rejectRequest = async (id) => {
    await fetch(
      `http://localhost:5000/api/connections/reject/${id}`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    fetchRequests();
  };

  useEffect(() => {
    fetchRequests();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Connection Requests</h2>

      {requests.length === 0 && <p>No new requests</p>}

      {requests.map((req) => (
        <div
          key={req.id}
          style={{
            border: "1px solid #ccc",
            padding: "10px",
            marginBottom: "10px",
          }}
        >
          <p><b>{req.sender.name}</b></p>
          <p>{req.sender.email}</p>

          <button onClick={() => acceptRequest(req.id)}>
            Accept
          </button>

          <button
            onClick={() => rejectRequest(req.id)}
            style={{ marginLeft: "10px" }}
          >
            Reject
          </button>
        </div>
      ))}
    </div>
  );
};

export default ConnectionRequests;
*/
// import { useEffect, useState } from "react";
// import "./ConnectionRequests.css";

// export default function ConnectionRequests() {
//   const [requests, setRequests] = useState([]);
//   const token = localStorage.getItem("token");

//   const fetchRequests = async () => {
//     const res = await fetch(
//       "http://localhost:5000/api/connections/requests",
//       {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       }
//     );
//     const data = await res.json();
//     setRequests(data);
//   };

//   const acceptRequest = async (id) => {
//     await fetch(
//       `http://localhost:5000/api/connections/accept/${id}`,
//       {
//         method: "POST",
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       }
//     );
//     fetchRequests();
//   };

//   const rejectRequest = async (id) => {
//     await fetch(
//       `http://localhost:5000/api/connections/reject/${id}`,
//       {
//         method: "POST",
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       }
//     );
//     fetchRequests();
//   };

//   useEffect(() => {
//     fetchRequests();
//   }, []);

//   return (
//     <div className="requests-page">
//       <h1 className="page-title">Connection Requests</h1>

//       {requests.length === 0 ? (
//         <p className="empty-text">No new requests</p>
//       ) : (
//         <div className="requests-grid">
//           {requests.map((req) => (
//             <div className="request-card" key={req.id}>
//               <div className="avatar">
//                 {req.sender.name.charAt(0)}
//               </div>

//               <h3>{req.sender.name}</h3>
//               <p>{req.sender.email}</p>

//               <div className="action-row">
//                 <button
//                   className="accept-btn"
//                   onClick={() => acceptRequest(req.id)}
//                 >
//                   Accept
//                 </button>

//                 <button
//                   className="reject-btn"
//                   onClick={() => rejectRequest(req.id)}
//                 >
//                   Reject
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }
// import { useEffect, useState } from "react";
// import { useAuth } from "../context/AuthContext";

// export default function ConnectionRequests() {
//   const { user, login } = useAuth();
//   const [requests, setRequests] = useState([]);

//   useEffect(() => {
//     setRequests(user.requests || []);
//   }, [user]);

//   const acceptRequest = (requestUser) => {
//     const allUsers = JSON.parse(localStorage.getItem("hireon_users")) || [];

//     const updatedUsers = allUsers.map((u) => {
//       if (u.id === user.id) {
//         return {
//           ...u,
//           connections: [...u.connections, requestUser],
//           requests: u.requests.filter((r) => r.id !== requestUser.id),
//         };
//       }
//       if (u.id === requestUser.id) {
//         return {
//           ...u,
//           connections: [...u.connections, user],
//         };
//       }
//       return u;
//     });

//     localStorage.setItem("hireon_users", JSON.stringify(updatedUsers));

//     // update auth context user
//     const updatedCurrentUser = updatedUsers.find(
//       (u) => u.id === user.id
//     );
//     login(updatedCurrentUser);

//     alert("Connection accepted 🎉");
//   };

//   return (
//     <div style={{ padding: 20 }}>
//       <h2>Connection Requests</h2>

//       {requests.length === 0 && <p>No requests</p>}

//       {requests.map((r) => (
//         <div key={r.id}>
//           <strong>{r.name}</strong>
//           <button onClick={() => acceptRequest(r)}>Accept</button>
//         </div>
//       ))}
//     </div>
//   );
// }
// import { useEffect, useState } from "react";
// import { useAuth } from "../context/AuthContext";

// export default function ConnectionRequests() {
//   const { user, login } = useAuth();
//   const [requests, setRequests] = useState([]);

//   useEffect(() => {
//     if (!user) return;
//     setRequests(user.requests || []);
//   }, [user]);

//   const acceptRequest = (requestUser) => {
//     const allUsers = JSON.parse(localStorage.getItem("hireon_users")) || [];

//     const updatedUsers = allUsers.map((u) => {
//       // current logged-in user
//       if (u.email === user.email) {
//         const connections = u.connections || [];
//         const requests = u.requests || [];

//         // prevent duplicate connections
//         const alreadyConnected = connections.some(
//           (c) => c.email === requestUser.email
//         );

//         return {
//           ...u,
//           connections: alreadyConnected
//             ? connections
//             : [...connections, requestUser],
//           requests: requests.filter(
//             (r) => r.email !== requestUser.email
//           ),
//         };
//       }

//       // requester user
//       if (u.email === requestUser.email) {
//         const connections = u.connections || [];

//         const alreadyConnected = connections.some(
//           (c) => c.email === user.email
//         );

//         return {
//           ...u,
//           connections: alreadyConnected
//             ? connections
//             : [...connections, user],
//         };
//       }

//       return u;
//     });

//     localStorage.setItem("hireon_users", JSON.stringify(updatedUsers));

//     // update auth context user
//     const updatedCurrentUser = updatedUsers.find(
//       (u) => u.email === user.email
//     );
//     login(updatedCurrentUser);

//     alert("Connection accepted 🎉");
//   };

//   return (
//     <div style={{ padding: 20 }}>
//       <h2>Connection Requests</h2>

//       {requests.length === 0 && <p>No requests</p>}

//       {requests.map((r) => (
//         <div
//           key={r.email}
//           style={{ display: "flex", gap: 10, marginBottom: 8 }}
//         >
//           <strong>{r.name}</strong>
//           <button onClick={() => acceptRequest(r)}>Accept</button>
//         </div>
//       ))}
//     </div>
//   );
// }
// import { useEffect, useState } from "react";
// import { useAuth } from "../context/AuthContext";

// export default function ConnectionRequests() {
//   const { user, login } = useAuth();
//   const [requests, setRequests] = useState([]);

//   // Load & Deduplicate Requests
//   useEffect(() => {
//     if (!user) return;

//     const uniqueRequests = (user.requests || []).filter(
//       (req, index, self) =>
//         index === self.findIndex((r) => r.email === req.email)
//     );

//     setRequests(uniqueRequests);
//   }, [user]);

//   // Accept Request
//   const acceptRequest = (requestUser) => {
//     const allUsers =
//       JSON.parse(localStorage.getItem("hireon_users")) || [];

//     const updatedUsers = allUsers.map((u) => {
//       // Logged in user
//       if (u.email === user.email) {
//         const connections = u.connections || [];
//         const requests = u.requests || [];

//         const alreadyConnected = connections.some(
//           (c) => c.email === requestUser.email
//         );

//         return {
//           ...u,
//           connections: alreadyConnected
//             ? connections
//             : [...connections, requestUser],
//           requests: requests.filter(
//             (r) => r.email !== requestUser.email
//           ),
//         };
//       }

//       // Request sender user
//       if (u.email === requestUser.email) {
//         const connections = u.connections || [];

//         const alreadyConnected = connections.some(
//           (c) => c.email === user.email
//         );

//         return {
//           ...u,
//           connections: alreadyConnected
//             ? connections
//             : [...connections, user],
//         };
//       }

//       return u;
//     });

//     // Save
//     localStorage.setItem(
//       "hireon_users",
//       JSON.stringify(updatedUsers)
//     );

//     // Update auth user
//     const updatedCurrentUser = updatedUsers.find(
//       (u) => u.email === user.email
//     );

//     login(updatedCurrentUser);

//     // Instantly update UI
//     setRequests((prev) =>
//       prev.filter((r) => r.email !== requestUser.email)
//     );

//     alert("Connection accepted 🎉");
//   };

//   return (
//     <div style={{ padding: 20 }}>
//       <h2>Connection Requests</h2>

//       {requests.length === 0 && <p>No requests</p>}

//       {requests.map((r) => (
//         <div
//           key={`${r.email}-${r.name}`}
//           style={{
//             display: "flex",
//             gap: 10,
//             marginBottom: 8,
//           }}
//         >
//           <strong>{r.name}</strong>
//           <button onClick={() => acceptRequest(r)}>
//             Accept
//           </button>
//         </div>
//       ))}
//     </div>
//   );
// }
import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";

export default function ConnectionRequests() {
  const { user, login } = useAuth();
  const [requests, setRequests] = useState([]);

  // 🔁 Load requests from storage
  const loadRequests = () => {
    const allUsers =
      JSON.parse(localStorage.getItem("hireon_users")) || [];

    const current = allUsers.find(
      (u) => u.email === user.email
    );

    const unique =
      (current?.requests || []).filter(
        (req, index, self) =>
          index ===
          self.findIndex((r) => r.email === req.email)
      );

    setRequests(unique);
  };

  useEffect(() => {
    if (!user) return;
    loadRequests();
  }, [user]);

  // ✅ Accept Request
  const acceptRequest = (requestUser) => {
    const allUsers =
      JSON.parse(localStorage.getItem("hireon_users")) || [];

    const updatedUsers = allUsers.map((u) => {
      // Current user
      if (u.email === user.email) {
        return {
          ...u,
          connections: [
            ...(u.connections || []),
            requestUser,
          ],
          requests: (u.requests || []).filter(
            (r) => r.email !== requestUser.email
          ),
        };
      }

      // Sender
      if (u.email === requestUser.email) {
        return {
          ...u,
          connections: [
            ...(u.connections || []),
            {
              name: user.name,
              email: user.email,
              role: user.role,
            },
          ],
        };
      }

      return u;
    });

    localStorage.setItem(
      "hireon_users",
      JSON.stringify(updatedUsers)
    );

    const updatedCurrent = updatedUsers.find(
      (u) => u.email === user.email
    );

    login(updatedCurrent);

    loadRequests();

    alert("Connection accepted 🎉");
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Connection Requests</h2>

      {requests.length === 0 && <p>No requests</p>}

      {requests.map((r) => (
        <div
          key={r.email}
          style={{
            display: "flex",
            gap: 10,
            marginBottom: 8,
          }}
        >
          <strong>{r.name}</strong>
          <button onClick={() => acceptRequest(r)}>
            Accept
          </button>
        </div>
      ))}
    </div>
  );
}
