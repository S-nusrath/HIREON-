// // // // import { useEffect, useState } from "react";
// // // // import { sendConnectionRequest } from "../services/connectionService";

// // // // export default function DiscoverPage() {

// // // //   const currentUser = { id: 1 };

// // // // //   const [users, setUsers] = useState([]);

// // // // //   useEffect(() => {
// // // // //     setUsers([
// // // // //       { id: 2, name: "Md.rehan", skill: "React Developer" },
// // // // //       { id: 3, name: "Md.Rehman", skill: "Backend Engineer" },
// // // // //       { id: 4, name: "Khaja", skill: "Java Developer" }
// // // // //     ]);
// // // // //   }, []);

// // // // //   const connectUser = async (receiverId) => {

// // // // //     await sendConnectionRequest(currentUser.id, receiverId);

// // // // //     alert("✅ Connection request sent!");
// // // // //   };

// // // // //   return (

// // // // //     <div className="p-8">

// // // // //       <h1 className="text-3xl font-bold mb-6">
// // // // //         Discover People
// // // // //       </h1>

// // // // //       <div className="grid grid-cols-3 gap-6">

// // // // //         {users.map((user) => (

// // // // //           <div
// // // // //             key={user.id}
// // // // //             className="bg-white shadow-lg rounded-xl p-5"
// // // // //           >

// // // // //             <h3 className="text-lg font-semibold">
// // // // //               {user.name}
// // // // //             </h3>

// // // // //             <p className="text-gray-500">
// // // // //               {user.skill}
// // // // //             </p>

// // // // //             <button
// // // // //               onClick={() => connectUser(user.id)}
// // // // //               className="mt-3 bg-blue-600 text-white px-4 py-2 rounded"
// // // // //             >
// // // // //               Connect
// // // // //             </button>

// // // // //           </div>

// // // // //         ))}

// // // // //       </div>

// // // // //     </div>
// // // // //   );
// // // // // }
// // // // import { useEffect, useState } from "react";
// // // // import { sendConnectionRequest } from "../services/connectionService";

// // // // export default function DiscoverPage() {

// // // //   const currentUser = { id: 1 };

// // // //   const [users, setUsers] = useState([]);

// // // //   useEffect(() => {

// // // //     const loadUsers = async () => {

// // // //       const res = await fetch("http://localhost:8080/api/users");

// // // //       const data = await res.json();

// // // //       setUsers(data);
// // // //     };

// // // //     loadUsers();

// // // //   }, []);

// // // //   const connectUser = async (receiverId) => {

// // // //     await sendConnectionRequest(currentUser.id, receiverId);

// // // //     alert("✅ Connection request sent!");
// // // //   };

// // // //   return (

// // // //     <div className="p-8">

// // // //       <h1 className="text-3xl font-bold mb-6">
// // // //         Discover People
// // // //       </h1>

// // // //       <div className="grid grid-cols-3 gap-6">

// // // //         {users.map((user) => (

// // // //           <div
// // // //             key={user.id}
// // // //             className="bg-white shadow-lg rounded-xl p-5"
// // // //           >

// // // //             <h3 className="text-lg font-semibold">
// // // //               {user.name}
// // // //             </h3>

// // // //             <p className="text-gray-500">
// // // //               {user.skills}
// // // //             </p>

// // // //             <button
// // // //               onClick={() => connectUser(user.id)}
// // // //               className="mt-3 bg-blue-600 text-white px-4 py-2 rounded"
// // // //             >
// // // //               Connect
// // // //             </button>

// // // //           </div>

// // // //         ))}

// // // //       </div>

// // // //     </div>
// // // //   );
// // // // }
// // // import React, { useEffect, useState } from "react";
// // // import { getAllUsers } from "../services/userService";
// // // import { sendRequest } from "../services/connectionService";
// // // import ConnectionCard from "../components/ConnectionCard";

// // // const DiscoverPage = () => {
// // //   const [users, setUsers] = useState([]);
// // //   const userId = 1; // replace with logged-in user

// // //   useEffect(() => {
// // //     loadUsers();
// // //   }, []);

// // //   const loadUsers = async () => {
// // //     const data = await getAllUsers();
// // //     setUsers(data);
// // //   };

// // //   const handleConnect = async (receiverId) => {
// // //     await sendRequest(userId, receiverId);
// // //     alert("Request Sent");
// // //   };

// // //   return (
// // //     <div>
// // //       <h1>Discover Users</h1>
// // //       {users.map((user) => (
// // //         <ConnectionCard
// // //           key={user.id}
// // //           user={user}
// // //           onConnect={handleConnect}
// // //         />
// // //       ))}
// // //     </div>
// // //   );
// // // };

// // // export default DiscoverPage;
// // import { useEffect, useState } from "react";
// // import { getAllUsers } from "../services/userService";
// // import { sendRequest } from "../services/connectionService";

// // export default function DiscoverPage() {
// //   const [users, setUsers] = useState([]);

// //   const currentUser = JSON.parse(localStorage.getItem("user"));

// //   useEffect(() => {
// //     fetchUsers();
// //   }, []);

// //   const fetchUsers = async () => {
// //     const data = await getAllUsers();

// //     // ❗ remove logged-in user
// //     const filtered = data.filter(u => u.email !== currentUser.email);

// //     setUsers(filtered);
// //   };

// //   const handleConnect = async (id) => {
// //     await sendRequest(currentUser.id, id);
// //     alert("Request sent ✅");
// //   };

// //   return (
// //     <div className="p-6">
// //       <h1 className="text-xl font-bold mb-4">Discover People</h1>

// //       {users.map(user => (
// //         <div key={user.id} className="bg-white p-4 rounded shadow mb-3">
// //           <h3>{user.name}</h3>
// //           <p>{user.email}</p>

// //           <button
// //             onClick={() => handleConnect(user.id)}
// //             className="bg-indigo-600 text-white px-3 py-1 rounded mt-2"
// //           >
// //             Connect
// //           </button>
// //         </div>
// //       ))}
// //     </div>
// //   );
// // }
// import { useEffect, useState } from "react";
// import { getAllUsers } from "../services/userService";
// import { sendRequest } from "../services/connectionService";

// export default function DiscoverPage() {
//   const [users, setUsers] = useState([]);

//   const currentUser = JSON.parse(localStorage.getItem("user"));

//   useEffect(() => {
//     fetchUsers();
//   }, []);

//   const fetchUsers = async () => {
//     const data = await getAllUsers();

//     // ❗ remove logged-in user
//     const filtered = data.filter(
//       (u) => u.email !== currentUser.email
//     );

//     setUsers(filtered);
//   };

//   const handleConnect = async (receiverId) => {
//     await sendRequest(currentUser.id, receiverId);
//     alert("Request sent ✅");
//   };

//   return (
//     <div className="p-6">
//       <h1 className="text-xl font-bold mb-4">Discover People</h1>

//       {users.map((user) => (
//         <div key={user.id} className="bg-white p-4 rounded shadow mb-3">
//           <h3>{user.name}</h3>
//           <p>{user.email}</p>

//           <button
//             onClick={() => handleConnect(user.id)}
//             className="bg-indigo-600 text-white px-3 py-1 rounded mt-2"
//           >
//             Connect
//           </button>
//         </div>
//       ))}
//     </div>
//   );
// }
// import { useEffect, useState } from "react";
// import { useAuth } from "../context/AuthContext";

// export default function DiscoverPage() {
//   const { user } = useAuth();
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     if (!user) return;

//     syncUser();
//     loadUsers();
//   }, [user]);

//   const syncUser = () => {
//     let allUsers = JSON.parse(localStorage.getItem("hireon_users")) || [];

//     const exists = allUsers.some((u) => u.email === user.email);

//     if (!exists) {
//       allUsers.push({ ...user, connections: [], requests: [] });
//       localStorage.setItem("hireon_users", JSON.stringify(allUsers));
//     }
//   };

//   const loadUsers = () => {
//     const allUsers = JSON.parse(localStorage.getItem("hireon_users")) || [];

//     const current = allUsers.find((u) => u.email === user.email);

//     const filtered = allUsers.filter((u) => {
//       if (u.email === user.email) return false;

//       const connected = current?.connections?.some(c => c.email === u.email);
//       const requested = current?.requests?.some(r => r.email === u.email);

//       return !connected && !requested;
//     });

//     setUsers(filtered);
//   };

//   const sendRequest = (targetUser) => {
//     let allUsers = JSON.parse(localStorage.getItem("hireon_users")) || [];

//     allUsers = allUsers.map((u) => {
//       if (u.email === targetUser.email) {
//         return {
//           ...u,
//           requests: [
//             ...(u.requests || []),
//             { name: user.name, email: user.email, role: user.role }
//           ]
//         };
//       }
//       return u;
//     });

//     localStorage.setItem("hireon_users", JSON.stringify(allUsers));
//     loadUsers();
//   };

//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-bold mb-6">Discover People</h1>

//       {users.length === 0 && <p>No users found</p>}

//       <div className="grid gap-4">
//         {users.map((u) => (
//           <div key={u.email} className="bg-white p-4 rounded-xl shadow flex justify-between">
//             <div>
//               <h3 className="font-semibold">{u.name}</h3>
//               <p className="text-sm text-gray-500">{u.role}</p>
//             </div>

//             <button
//               onClick={() => sendRequest(u)}
//               className="bg-indigo-600 text-white px-4 py-2 rounded"
//             >
//               Connect
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
// import { useEffect, useState } from "react";
// import { useAuth } from "../context/AuthContext";

// export default function DiscoverPage() {
//   const { user } = useAuth();
//   const [users, setUsers] = useState([]);
//   const [toast, setToast] = useState("");

//   useEffect(() => {
//     if (!user) return;

//     syncUser();
//     loadUsers();
//   }, [user]);

//   // ✅ Ensure logged-in user exists in storage
//   const syncUser = () => {
//     let allUsers = JSON.parse(localStorage.getItem("hireon_users")) || [];

//     const exists = allUsers.some((u) => u.email === user.email);

//     if (!exists) {
//       allUsers.push({
//         ...user,
//         connections: [],
//         requests: [],
//       });

//       localStorage.setItem("hireon_users", JSON.stringify(allUsers));
//     }
//   };

//   // ✅ Load discover users
//   const loadUsers = () => {
//     const allUsers = JSON.parse(localStorage.getItem("hireon_users")) || [];

//     const current = allUsers.find((u) => u.email === user.email);

//     const filtered = allUsers.filter((u) => {
//       if (u.email === user.email) return false;

//       const connected = current?.connections?.some(
//         (c) => c.email === u.email
//       );

//       const requested = current?.requests?.some(
//         (r) => r.email === u.email
//       );

//       return !connected && !requested;
//     });

//     setUsers(filtered);
//   };

//   // ✅ SEND REQUEST WITH POPUP
//   const sendRequest = (targetUser) => {
//     let allUsers = JSON.parse(localStorage.getItem("hireon_users")) || [];

//     allUsers = allUsers.map((u) => {
//       if (u.email === targetUser.email) {
//         const already = (u.requests || []).some(
//           (r) => r.email === user.email
//         );

//         if (already) return u;

//         return {
//           ...u,
//           requests: [
//             ...(u.requests || []),
//             {
//               name: user.name,
//               email: user.email,
//               role: user.role,
//             },
//           ],
//         };
//       }
//       return u;
//     });

//     localStorage.setItem("hireon_users", JSON.stringify(allUsers));

//     // 🔥 TOAST POPUP
//     setToast(`Request sent to ${targetUser.name} ✅`);
//     setTimeout(() => setToast(""), 2500);

//     loadUsers();
//   };

//   return (
//     <div className="p-6">

//       <h1 className="text-2xl font-bold mb-6">Discover People</h1>

//       {users.length === 0 && (
//         <p className="text-gray-500">No users available</p>
//       )}

//       <div className="grid gap-4">
//         {users.map((u) => (
//           <div
//             key={u.email}
//             className="bg-white p-4 rounded-xl shadow flex justify-between items-center"
//           >
//             <div>
//               <h3 className="font-semibold">{u.name}</h3>
//               <p className="text-sm text-gray-500">{u.role}</p>
//             </div>

//             <button
//               onClick={() => sendRequest(u)}
//               className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded"
//             >
//               Connect
//             </button>
//           </div>
//         ))}
//       </div>

//       {/* ✅ TOAST UI */}
//       {toast && (
//         <div className="fixed top-5 right-5 bg-green-500 text-white px-4 py-2 rounded shadow-lg">
//           {toast}
//         </div>
//       )}

//     </div>
//   );
// }
// import { useEffect, useState } from "react";
// import { useAuth } from "../context/AuthContext";

// export default function DiscoverPage() {
//   const { user } = useAuth();
//   const [users, setUsers] = useState([]);
//   const [toast, setToast] = useState("");

//   // useEffect(() => {
//   //   if (!user) return;
//   //   syncUser();
//   //   loadUsers();
//   // }, [user]);

//   // const syncUser = () => {
//   //   let allUsers = JSON.parse(localStorage.getItem("hireon_users")) || [];

//   //   const exists = allUsers.some((u) => u.email === user.email);

//   //   if (!exists) {
//   //     allUsers.push({ ...user, connections: [], requests: [] });
//   //     localStorage.setItem("hireon_users", JSON.stringify(allUsers));
//   //   }
//   // };
//   useEffect(() => {
//   if (!user) return;

//   let allUsers = JSON.parse(localStorage.getItem("hireon_users")) || [];

//   // ✅ Add current user if not exists
//   const exists = allUsers.some((u) => u.email === user.email);

//   if (!exists) {
//     allUsers.push({
//       ...user,
//       connections: [],
//       requests: [],
//     });

//     localStorage.setItem("hireon_users", JSON.stringify(allUsers));
//   }

//   setUsers(allUsers.filter((u) => u.email !== user.email));
// }, [user]);

//   const loadUsers = () => {
//     const allUsers = JSON.parse(localStorage.getItem("hireon_users")) || [];
//     const current = allUsers.find((u) => u.email === user.email);

//     const updated = allUsers.map((u) => {
//       if (u.email === user.email) return null;

//       const isConnected = current?.connections?.some(
//         (c) => c.email === u.email
//       );

//       const isRequested = current?.requests?.some(
//         (r) => r.email === u.email
//       );

//       return {
//         ...u,
//         status: isConnected
//           ? "connected"
//           : isRequested
//           ? "pending"
//           : "connect",
//       };
//     });

//     setUsers(updated.filter(Boolean));
//   };

//   const sendRequest = (targetUser) => {
//     let allUsers = JSON.parse(localStorage.getItem("hireon_users")) || [];

//     allUsers = allUsers.map((u) => {
//       if (u.email === targetUser.email) {
//         return {
//           ...u,
//           requests: [
//             ...(u.requests || []),
//             { name: user.name, email: user.email, role: user.role },
//           ],
//         };
//       }
//       return u;
//     });

//     localStorage.setItem("hireon_users", JSON.stringify(allUsers));

//     setToast(`Request sent to ${targetUser.name} ✅`);
//     setTimeout(() => setToast(""), 2000);

//     loadUsers();
//   };

//   return (
//     <div className="p-6">

//       <h1 className="text-2xl font-bold mb-6">Discover People</h1>

//       <div className="grid md:grid-cols-3 gap-6">
//         {users.map((u) => (
//           <div
//             key={u.email}
//             className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition"
//           >
//             {/* Avatar */}
//             <div className="w-14 h-14 bg-indigo-500 text-white flex items-center justify-center rounded-full text-lg font-bold mb-3">
//               {u.name?.charAt(0)}
//             </div>

//             <h3 className="font-semibold">{u.name}</h3>
//             <p className="text-sm text-gray-500 mb-3">{u.role}</p>

//             {/* Button */}
//             {u.status === "connect" && (
//               <button
//                 onClick={() => sendRequest(u)}
//                 className="w-full bg-indigo-600 text-white py-2 rounded"
//               >
//                 Connect
//               </button>
//             )}

//             {u.status === "pending" && (
//               <button className="w-full bg-gray-300 py-2 rounded cursor-not-allowed">
//                 Pending
//               </button>
//             )}

//             {u.status === "connected" && (
//               <button className="w-full bg-green-500 text-white py-2 rounded">
//                 Connected
//               </button>
//             )}
//           </div>
//         ))}
//       </div>

//       {/* Toast */}
//       {toast && (
//         <div className="fixed top-5 right-5 bg-green-500 text-white px-4 py-2 rounded shadow">
//           {toast}
//         </div>
//       )}
//     </div>
//   );
// }
// import { useEffect, useState } from "react";
// import { useAuth } from "../context/AuthContext";

// export default function DiscoverPage() {
//   const { user } = useAuth();
//   const [users, setUsers] = useState([]);
//   const [toast, setToast] = useState("");

//   useEffect(() => {
//     if (!user) return;

//     let allUsers =
//       JSON.parse(localStorage.getItem("hireon_users")) || [];

//     // ✅ Add current user
//     const exists = allUsers.some((u) => u.email === user.email);

//     if (!exists) {
//       allUsers.push({
//         ...user,
//         connections: [],
//         requests: [],
//       });

//       localStorage.setItem(
//         "hireon_users",
//         JSON.stringify(allUsers)
//       );
//     }

//     loadUsers();
//   }, [user]);

//   // ✅ MAIN LOGIC (IMPORTANT)
//   const loadUsers = () => {
//     const allUsers =
//       JSON.parse(localStorage.getItem("hireon_users")) || [];

//     const current = allUsers.find(
//       (u) => u.email === user.email
//     );

//     const updated = allUsers
//       .filter((u) => u.email !== user.email)
//       .map((u) => {
//         const isConnected = current?.connections?.some(
//           (c) => c.email === u.email
//         );

//         const isRequested = current?.requests?.some(
//           (r) => r.email === u.email
//         );

//         return {
//           ...u,
//           status: isConnected
//             ? "connected"
//             : isRequested
//             ? "pending"
//             : "connect",
//         };
//       });

//     setUsers(updated);
//   };

//   const sendRequest = (targetUser) => {
//     let allUsers =
//       JSON.parse(localStorage.getItem("hireon_users")) || [];

//     allUsers = allUsers.map((u) => {
//       if (u.email === targetUser.email) {
//         return {
//           ...u,
//           requests: [
//             ...(u.requests || []),
//             {
//               name: user.name,
//               email: user.email,
//               role: user.role,
//             },
//           ],
//         };
//       }
//       return u;
//     });

//     localStorage.setItem(
//       "hireon_users",
//       JSON.stringify(allUsers)
//     );

//     setToast(`Request sent to ${targetUser.name} ✅`);
//     setTimeout(() => setToast(""), 2000);

//     loadUsers(); // 🔥 refresh
//   };

//   return (
//     <div className="p-6">

//       <h1 className="text-2xl font-bold mb-6">
//         Discover People
//       </h1>

//       {users.length === 0 && (
//         <p className="text-gray-500">
//           No users found. Create another account to test.
//         </p>
//       )}

//       <div className="grid md:grid-cols-3 gap-6">
//         {users.map((u) => (
//           <div
//             key={u.email}
//             className="bg-white p-5 rounded-xl shadow"
//           >
//             {/* Avatar */}
//             <div className="w-14 h-14 bg-indigo-500 text-white flex items-center justify-center rounded-full mb-3">
//               {u.name?.charAt(0)}
//             </div>

//             <h3 className="font-semibold">{u.name}</h3>
//             <p className="text-sm text-gray-500 mb-3">
//               {u.role}
//             </p>

//             {/* Buttons */}
//             {u.status === "connect" && (
//               <button
//                 onClick={() => sendRequest(u)}
//                 className="w-full bg-indigo-600 text-white py-2 rounded"
//               >
//                 Connect
//               </button>
//             )}

//             {u.status === "pending" && (
//               <button className="w-full bg-gray-300 py-2 rounded">
//                 Pending
//               </button>
//             )}

//             {u.status === "connected" && (
//               <button className="w-full bg-green-500 text-white py-2 rounded">
//                 Connected
//               </button>
//             )}
//           </div>
//         ))}
//       </div>

//       {/* Toast */}
//       {toast && (
//         <div className="fixed top-5 right-5 bg-green-500 text-white px-4 py-2 rounded">
//           {toast}
//         </div>
//       )}
//     </div>
//   );
// }
// import { useEffect, useState } from "react";
// import { useAuth } from "../context/AuthContext";

// export default function DiscoverPage() {
//   const { user } = useAuth();
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     if (!user) return;
//     loadUsers();
//   }, [user]);

//   const loadUsers = () => {
//     const allUsers =
//       JSON.parse(localStorage.getItem("hireon_users")) || [];

//     const current = allUsers.find(
//       (u) => u.email === user.email
//     );

//     const result = allUsers
//       .filter((u) => u.email !== user.email)
//       .map((u) => {
//         const connected = current?.connections?.some(
//           (c) => c.email === u.email
//         );

//         const pending = current?.requests?.some(
//           (r) => r.email === u.email
//         );

//         return {
//           ...u,
//           status: connected
//             ? "connected"
//             : pending
//             ? "pending"
//             : "connect",
//         };
//       });

//     setUsers(result);
//   };

//   const sendRequest = (target) => {
//     let allUsers =
//       JSON.parse(localStorage.getItem("hireon_users")) || [];

//     allUsers = allUsers.map((u) => {
//       if (u.email === target.email) {
//         return {
//           ...u,
//           requests: [
//             ...(u.requests || []),
//             {
//               name: user.name,
//               email: user.email,
//               role: user.role,
//             },
//           ],
//         };
//       }
//       return u;
//     });

//     localStorage.setItem("hireon_users", JSON.stringify(allUsers));
//     loadUsers();
//   };

//   return (
//     <div className="p-6">
//       <h1 className="text-xl font-bold mb-4">Discover</h1>

//       {users.length === 0 && <p>No users found</p>}

//       {users.map((u) => (
//         <div key={u.email} className="border p-3 mb-2">
//           <p>{u.name}</p>

//           {u.status === "connect" && (
//             <button onClick={() => sendRequest(u)}>
//               Connect
//             </button>
//           )}

//           {u.status === "pending" && <span>Pending</span>}
//           {u.status === "connected" && <span>Connected</span>}
//         </div>
//       ))}
//     </div>
//   );
// }
import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";

export default function DiscoverPage() {
  const { user } = useAuth();
  const [users, setUsers] = useState([]);
  const [toast, setToast] = useState("");

  useEffect(() => {
    if (!user) return;
    syncUser();
    loadUsers();
  }, [user]);

  const syncUser = () => {
    let allUsers = JSON.parse(localStorage.getItem("hireon_users")) || [];

    const exists = allUsers.some((u) => u.email === user.email);

    if (!exists) {
      allUsers.push({ ...user, connections: [], requests: [] });
      localStorage.setItem("hireon_users", JSON.stringify(allUsers));
    }
  };

  const loadUsers = () => {
    const allUsers = JSON.parse(localStorage.getItem("hireon_users")) || [];
    const current = allUsers.find((u) => u.email === user.email);

    const updated = allUsers.map((u) => {
      if (u.email === user.email) return null;

      const isConnected = current?.connections?.some(
        (c) => c.email === u.email
      );

      const isRequested = current?.requests?.some(
        (r) => r.email === u.email
      );

      return {
        ...u,
        status: isConnected
          ? "connected"
          : isRequested
          ? "pending"
          : "connect",
      };
    });

    setUsers(updated.filter(Boolean));
  };

  const sendRequest = (targetUser) => {
    let allUsers = JSON.parse(localStorage.getItem("hireon_users")) || [];

    allUsers = allUsers.map((u) => {
      if (u.email === targetUser.email) {
        return {
          ...u,
          requests: [
            ...(u.requests || []),
            { name: user.name, email: user.email, role: user.role },
          ],
        };
      }
      return u;
    });

    localStorage.setItem("hireon_users", JSON.stringify(allUsers));

    setToast(`Request sent to ${targetUser.name} ✅`);
    setTimeout(() => setToast(""), 2000);

    loadUsers();
  };

  return (
    <div className="p-6">

      <h1 className="text-2xl font-bold mb-6">Discover People</h1>

      <div className="grid md:grid-cols-3 gap-6">
        {users.map((u) => (
          <div
            key={u.email}
            className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition"
          >
            {/* Avatar */}
            <div className="w-14 h-14 bg-indigo-500 text-white flex items-center justify-center rounded-full text-lg font-bold mb-3">
              {u.name?.charAt(0)}
            </div>

            <h3 className="font-semibold">{u.name}</h3>
            <p className="text-sm text-gray-500 mb-3">{u.role}</p>

            {/* Button */}
            {u.status === "connect" && (
              <button
                onClick={() => sendRequest(u)}
                className="w-full bg-indigo-600 text-white py-2 rounded"
              >
                Connect
              </button>
            )}

            {u.status === "pending" && (
              <button className="w-full bg-gray-300 py-2 rounded cursor-not-allowed">
                Pending
              </button>
            )}

            {u.status === "connected" && (
              <button className="w-full bg-green-500 text-white py-2 rounded">
                Connected
              </button>
            )}
          </div>
        ))}
      </div>

      {/* Toast */}
      {toast && (
        <div className="fixed top-5 right-5 bg-green-500 text-white px-4 py-2 rounded shadow">
          {toast}
        </div>
      )}
    </div>
  );
}