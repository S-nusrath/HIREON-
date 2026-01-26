// // import { useEffect, useState } from "react";
// // import "./DiscoverUsers.css";

// // export default function DiscoverUsers() {
// //   const [users, setUsers] = useState([]);
// //   const token = localStorage.getItem("token");

// //   useEffect(() => {
// //     fetch("http://localhost:5000/api/users", {
// //       headers: {
// //         Authorization: `Bearer ${token}`,
// //       },
// //     })
// //       .then((res) => res.json())
// //       .then((data) => setUsers(data));
// //   }, []);

// //   const sendRequest = async (id) => {
// //     await fetch("http://localhost:5000/api/connections/send", {
// //       method: "POST",
// //       headers: {
// //         "Content-Type": "application/json",
// //         Authorization: `Bearer ${token}`,
// //       },
// //       body: JSON.stringify({ receiver_id: id }),
// //     });

// //     alert("Connection request sent");
// //   };

// //   return (
// //     <div className="discover-page">
// //       <h1 className="discover-title">Discover People</h1>

// //       <div className="discover-grid">
// //         {users.map((user) => (
// //           <div className="user-card" key={user.id}>
// //             <div className="user-avatar">
// //               {user.name.charAt(0)}
// //             </div>

// //             <h3>{user.name}</h3>
// //             <p>{user.email}</p>

// //             <button onClick={() => sendRequest(user.id)}>
// //               Connect
// //             </button>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // }

// // // import { useEffect, useState } from "react";
// // // import "./DiscoverUsers.css";

// // // export default function DiscoverUsers() {
// // //   const [users, setUsers] = useState([]);
// // //   const [error, setError] = useState("");
// // //   const token = localStorage.getItem("token");

// // //   useEffect(() => {
// // //     if (!token) {
// // //       setError("Please login first");
// // //       return;
// // //     }

// // //     fetch("http://localhost:5000/api/users", {
// // //       headers: {
// // //         Authorization: `Bearer ${token}`,
// // //       },
// // //     })
// // //       .then(async (res) => {
// // //         if (!res.ok) {
// // //           const err = await res.json();
// // //           throw new Error(err.message || "Unauthorized");
// // //         }
// // //         return res.json();
// // //       })
// // //       .then((data) => {
// // //         if (Array.isArray(data)) {
// // //           setUsers(data);
// // //         } else {
// // //           setUsers([]);
// // //         }
// // //       })
// // //       .catch((err) => {
// // //         console.error(err);
// // //         setError(err.message);
// // //         setUsers([]);
// // //       });
// // //   }, [token]);

// // //   if (error) {
// // //     return <p style={{ padding: 20, color: "red" }}>{error}</p>;
// // //   }

// // //   return (
// // //     <div className="discover-page">
// // //       <h1 className="discover-title">Discover People</h1>

// // //       <div className="discover-grid">
// // //         {users.length === 0 && <p>No users found</p>}

// // //         {users.map((user) => (
// // //           <div className="user-card" key={user.id}>
// // //             <div className="user-avatar">
// // //               {user.name.charAt(0)}
// // //             </div>

// // //             <h3>{user.name}</h3>
// // //             <p>{user.email}</p>

// // //             <button>Connect</button>
// // //           </div>
// // //         ))}
// // //       </div>
// // //     </div>
// // //   );
// // // }
// import { useEffect, useState } from "react";
// import "./DiscoverUsers.css";

// export default function DiscoverUsers() {
//   const [users, setUsers] = useState([]);
//   const token = localStorage.getItem("token");

//   useEffect(() => {
//     fetch("http://localhost:5000/api/users", {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     })
//       .then((res) => res.json())
//       .then((data) => setUsers(data));
//   }, [token]);

//   const sendRequest = async (id) => {
//     await fetch("http://localhost:5000/api/connections/send", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${token}`,
//       },
//       body: JSON.stringify({ receiver_id: id }),
//     });

//     alert("Connection request sent");
//   };

//   return (
//     <div className="discover-page">
//       <h1>Discover People</h1>

//       <div className="discover-grid">
//         {users.map((user) => (
//           <div key={user.id} className="user-card">
//             <h3>{user.name}</h3>
//             <p>{user.email}</p>
//             <button onClick={() => sendRequest(user.id)}>
//               Connect
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
// import { useEffect, useState } from "react";
// import DashboardLayout from "../layout/DashboardLayout";

// export default function DiscoverUsers() {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     const storedUsers =
//       JSON.parse(localStorage.getItem("hireon_users")) || [];
//     setUsers(storedUsers);
//   }, []);

//   return (
//     <DashboardLayout>
//       <h2>Discover People</h2>

//       {users.length === 0 ? (
//         <p>No users found</p>
//       ) : (
//         users.map((user) => (
//           <div key={user.id} className="user-card">
//             <h3>{user.name}</h3>
//             <p>{user.email}</p>
//             <p>{user.role}</p>
//             <button>Connect</button>
//           </div>
//         ))
//       )}
//     </DashboardLayout>
//   );
// }
// import { useEffect, useState } from "react";
// import { useAuth } from "../context/AuthContext";

// export default function DiscoverUsers() {
//   const { user } = useAuth();
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     const allUsers = JSON.parse(localStorage.getItem("hireon_users")) || [];

//     // exclude logged-in user
//     const filtered = allUsers.filter((u) => u.id !== user.id);
//     setUsers(filtered);
//   }, [user]);

//   const sendRequest = (targetUser) => {
//     const allUsers = JSON.parse(localStorage.getItem("hireon_users")) || [];

//     const updated = allUsers.map((u) => {
//       if (u.id === targetUser.id) {
//         return {
//           ...u,
//           requests: [...u.requests, user],
//         };
//       }
//       return u;
//     });

//     localStorage.setItem("hireon_users", JSON.stringify(updated));
//     alert("Connection request sent ✅");
//   };

//   return (
//     <div style={{ padding: 20 }}>
//       <h2>Discover People</h2>

//       {users.length === 0 && <p>No users found</p>}

//       {users.map((u) => (
//         <div key={u.id} style={{ marginBottom: 10 }}>
//           <strong>{u.name}</strong> – {u.role}
//           <button onClick={() => sendRequest(u)}>Connect</button>
//         </div>
//       ))}
//     </div>
//   );
// }
// import { useEffect, useState } from "react";
// import { useAuth } from "../context/AuthContext";

// export default function DiscoverUsers() {
//   const { user } = useAuth();
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     if (!user) return;

//     const allUsers = JSON.parse(localStorage.getItem("hireon_users")) || [];

//     // 🧹 remove duplicate users by email
//     const uniqueMap = new Map();
//     allUsers.forEach((u) => {
//       uniqueMap.set(u.email, u);
//     });

//     const uniqueUsers = Array.from(uniqueMap.values());

//     // ❌ exclude logged-in user
//     const filtered = uniqueUsers.filter(
//       (u) => u.email !== user.email
//     );

//     setUsers(filtered);
//   }, [user]);

//   const sendRequest = (targetUser) => {
//     const allUsers = JSON.parse(localStorage.getItem("hireon_users")) || [];

//     const updatedUsers = allUsers.map((u) => {
//       // target user → receive request
//       if (u.email === targetUser.email) {
//         const requests = u.requests || [];

//         // 🚫 prevent duplicate request
//         const alreadySent = requests.some(
//           (r) => r.email === user.email
//         );
//         if (alreadySent) return u;

//         return {
//           ...u,
//           requests: [...requests, user],
//         };
//       }
//       return u;
//     });

//     localStorage.setItem("hireon_users", JSON.stringify(updatedUsers));
//     alert("Connection request sent ✅");
//   };

//   return (
//     <div style={{ padding: 20 }}>
//       <h2>Discover People</h2>

//       {users.length === 0 && <p>No users found</p>}

//       {users.map((u) => (
//         <div key={u.email} style={{ marginBottom: 10 }}>
//           <strong>{u.name}</strong> – {u.role}
//           <button onClick={() => sendRequest(u)}>Connect</button>
//         </div>
//       ))}
//     </div>
//   );
// }
import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";

export default function DiscoverUsers() {
  const { user } = useAuth();
  const [users, setUsers] = useState([]);

  // 🔍 Get only connectable people
  const getConnectableUsers = (currentUser) => {
    const allUsers = JSON.parse(localStorage.getItem("hireon_users")) || [];

    return allUsers.filter((u) => {
      // ❌ exclude self
      if (u.email === currentUser.email) return false;

      const connections = currentUser.connections || [];
      const requests = currentUser.requests || [];

      // ❌ already connected
      const alreadyConnected = connections.some(
        (c) => c.email === u.email
      );

      // ❌ request already received from this user
      const requestAlreadyExists = requests.some(
        (r) => r.email === u.email
      );

      return !alreadyConnected && !requestAlreadyExists;
    });
  };

  useEffect(() => {
    if (!user) return;

    const connectableUsers = getConnectableUsers(user);
    setUsers(connectableUsers);
  }, [user]);

  const sendRequest = (targetUser) => {
    const allUsers = JSON.parse(localStorage.getItem("hireon_users")) || [];

    const updatedUsers = allUsers.map((u) => {
      if (u.email === targetUser.email) {
        const requests = u.requests || [];

        // 🚫 prevent duplicate request
        const alreadySent = requests.some(
          (r) => r.email === user.email
        );
        if (alreadySent) return u;

        return {
          ...u,
          requests: [
            ...requests,
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

    localStorage.setItem("hireon_users", JSON.stringify(updatedUsers));
    alert("Connection request sent ✅");

    // refresh list after request
    setUsers((prev) =>
      prev.filter((u) => u.email !== targetUser.email)
    );
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Discover People</h2>

      {users.length === 0 && (
        <p>No people available to connect right now</p>
      )}

      {users.map((u) => (
        <div
          key={u.email}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 10,
            padding: 10,
            border: "1px solid #333",
            borderRadius: 6,
          }}
        >
          <div>
            <strong>{u.name}</strong>
            <div style={{ fontSize: 12, opacity: 0.7 }}>
              {u.role}
            </div>
          </div>

          <button onClick={() => sendRequest(u)}>
            Connect
          </button>
        </div>
      ))}
    </div>
  );
}
