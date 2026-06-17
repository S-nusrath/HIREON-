// // // import useConnections from "../hooks/useConnections";
// // // import ConnectionCard from "../components/ConnectionCard";
// // // import PendingRequests from "../components/PendingRequests";
// // // import SuggestedConnections from "../components/SuggestedConnections";

// // // export default function ConnectionsPage() {
// // //   const userId = "current-user-id"; 
// // //   const { connections, loading } = useConnections(userId);

// // //   if (loading) return <div>Loading...</div>;

// // //   return (
// // //     <div className="flex p-6 gap-6 bg-gray-50 min-h-screen">

// // //       <div className="w-1/4">
// // //         <PendingRequests />
// // //       </div>

// // //       <div className="w-2/4">
// // //         <h2 className="text-2xl font-semibold mb-4">My Connections</h2>

// // //         <div className="grid gap-4">
// // //           {connections.map((conn) => (
// // //             <ConnectionCard key={conn.id} connection={conn} />
// // //           ))}
// // //         </div>
// // //       </div>

// // //       <div className="w-1/4">
// // //         <SuggestedConnections />
// // //       </div>

// // //     </div>
// // //   );
// // // }
// // import { useEffect, useState } from "react";
// // import useConnections from "../hooks/useConnections";
// // import {
// //   sendConnectionRequest,
// //   acceptConnection,
// //   rejectConnection
// // } from "../services/connectionService";

// // export default function ConnectionsPage() {

// //   const currentUser = { id: 1 };

// //   const { connections, loading, reload } = useConnections(currentUser.id);

// //   const [users, setUsers] = useState([]);

// //   useEffect(() => {
// //     setUsers([
// //       { id: 2, name: "Arjun Reddy", skill: "React Developer" },
// //       { id: 3, name: "Priya Patel", skill: "Backend Engineer" }
// //     ]);
// //   }, []);

// //   const connectUser = async (receiverId) => {
// //     await sendConnectionRequest(currentUser.id, receiverId);
// //     alert("Connection request sent");
// //     reload();
// //   };

// //   const accept = async (id) => {
// //     await acceptConnection(id);
// //     reload();
// //   };

// //   const reject = async (id) => {
// //     await rejectConnection(id);
// //     reload();
// //   };

// //   return (
// //     <div className="p-8">

// //       <h1 className="text-3xl font-bold mb-6">Connections</h1>

// //       {/* Pending Requests */}
// //       <div className="bg-white shadow rounded-xl p-6 mb-6">
// //         <h2 className="text-xl font-semibold mb-4">Pending Requests</h2>

// //         {loading && <p>Loading...</p>}

// //         {connections.map((req, index) => (
// //           <div key={index} className="flex justify-between border-b py-3">

// //             <p>User {req.sender_id}</p>

// //             <div className="space-x-2">

// //               <button
// //                 onClick={() => accept(req.id)}
// //                 className="bg-green-500 text-white px-3 py-1 rounded"
// //               >
// //                 Accept
// //               </button>

// //               <button
// //                 onClick={() => reject(req.id)}
// //                 className="bg-red-500 text-white px-3 py-1 rounded"
// //               >
// //                 Reject
// //               </button>

// //             </div>

// //           </div>
// //         ))}
// //       </div>

// //       {/* Suggested Users */}
// //       <div className="bg-white shadow rounded-xl p-6">

// //         <h2 className="text-xl font-semibold mb-4">Suggested Users</h2>

// //         {users.map((user) => (
// //           <div key={user.id} className="flex justify-between border-b py-3">

// //             <div>
// //               <p className="font-medium">{user.name}</p>
// //               <p className="text-sm text-gray-500">{user.skill}</p>
// //             </div>

// //             <button
// //               onClick={() => connectUser(user.id)}
// //               className="bg-blue-600 text-white px-4 py-1 rounded"
// //             >
// //               Connect
// //             </button>

// //           </div>
// //         ))}

// //       </div>

// //     </div>
// //   );
// // }
// import React, { useEffect, useState } from "react";
// import {
//   getConnections,
//   getPending,
//   acceptRequest,
// } from "../services/connectionService";
// import PendingRequests from "../components/PendingRequests";

// const ConnectionsPage = () => {
//   const [connections, setConnections] = useState([]);
//   const [pending, setPending] = useState([]);
//   const userId = 1;

//   useEffect(() => {
//     loadData();
//   }, []);

//   const loadData = async () => {
//     setConnections(await getConnections(userId));
//     setPending(await getPending(userId));
//   };

//   const handleAccept = async (id) => {
//     await acceptRequest(id);
//     loadData();
//   };

//   return (
//     <div>
//       <h1>My Connections</h1>
//       {connections.map((c) => (
//         <p key={c.id}>
//           {c.senderId === userId ? c.receiverId : c.senderId}
//         </p>
//       ))}

//       <PendingRequests requests={pending} onAccept={handleAccept} />
//     </div>
//   );
// };

// export default ConnectionsPage;
// import { useEffect, useState } from "react";
// import { acceptRequest } from "../services/connectionService";
// import {
//   getConnections,
//   getPending,
//   acceptRequest
// } from "../services/connectionService";
// import PendingRequests from "../components/PendingRequests";

// export default function ConnectionsPage() {
//   const [connections, setConnections] = useState([]);
//   const [pending, setPending] = useState([]);

//   const user = JSON.parse(localStorage.getItem("user"));

//   useEffect(() => {
//     loadData();
//   }, []);

//   const loadData = async () => {
//     setConnections(await getConnections(user.id));
//     setPending(await getPending(user.id));
//   };

//   const handleAccept = async (id) => {
//     await acceptRequest(id);
//     loadData();
//   };

//   return (
//     <div className="p-6">

//       <h1 className="text-xl font-bold mb-4">Connections</h1>

//       {/* Connections */}
//       <div className="mb-6">
//         {connections.map(c => (
//           <p key={c.id}>
//             Connected with user: {c.senderId === user.id ? c.receiverId : c.senderId}
//           </p>
//         ))}
//       </div>

//       {/* Pending */}
//       <PendingRequests requests={pending} onAccept={handleAccept} />

//     </div>
//   );
// }
// import { useEffect, useState } from "react";
// import {
//   getConnections,
//   getPending,
//   acceptRequest
// } from "../services/connectionService";
// import PendingRequests from "../components/PendingRequests";

// export default function ConnectionsPage() {
//   const [connections, setConnections] = useState([]);
//   const [pending, setPending] = useState([]);

//   const user = JSON.parse(localStorage.getItem("user")) || {};

//   useEffect(() => {
//     if (user?.id) {
//       loadData();
//     }
//   }, []);

//   const loadData = async () => {
//     try {
//       const conn = await getConnections(user.id);
//       const pend = await getPending(user.id);

//       setConnections(conn || []);
//       setPending(pend || []);
//     } catch (err) {
//       console.error("Error loading connections:", err);
//     }
//   };

//   const handleAccept = async (id) => {
//     try {
//       await acceptRequest(id);
//       loadData(); // refresh after accept
//     } catch (err) {
//       console.error("Error accepting request:", err);
//     }
//   };

//   return (
//     <div className="p-6">

//       <h1 className="text-xl font-bold mb-4">Connections</h1>

//       {/* ✅ CONNECTIONS LIST */}
//       <div className="mb-6">
//         {connections.length === 0 ? (
//           <p className="text-gray-500">No connections yet</p>
//         ) : (
//           connections.map((c) => {
//             const otherUser =
//               c.senderId === user.id ? c.receiverId : c.senderId;

//             return (
//               <div
//                 key={c.id}
//                 className="bg-white p-3 rounded shadow mb-2"
//               >
//                 Connected with user ID: {otherUser}
//               </div>
//             );
//           })
//         )}
//       </div>

//       {/* ✅ PENDING REQUESTS */}
//       <PendingRequests
//         requests={pending || []}
//         onAccept={handleAccept}
//       />

//     </div>
//   );
// }
// import { useEffect, useState } from "react";
// import { useAuth } from "../context/AuthContext";
// import ConnectionRequests from "../components/ConnectionRequests";


// export default function ConnectionsPage() {
// //   const { user } = useAuth();
// //   const [connections, setConnections] = useState([]);

// //   useEffect(() => {
// //     if (!user) return;
// //     loadConnections();
// //   }, [user]);

// //   const loadConnections = () => {
// //     const allUsers = JSON.parse(localStorage.getItem("hireon_users")) || [];

// //     const current = allUsers.find((u) => u.email === user.email);
// //     setConnections(current?.connections || []);
// //   };

// //   return (
// //     <div className="p-6">
// //       <h1 className="text-2xl font-bold mb-4">My Network</h1>

// //       {/* Pending Requests */}
// //       <ConnectionRequests />

// //       {/* Connections */}
// //       <div className="bg-white p-4 rounded-xl shadow">
// //         <h2 className="font-bold mb-4">Connections</h2>

// //         {connections.length === 0 && <p>No connections yet</p>}

// //         {connections.map((c) => (
// //           <div key={c.email} className="border p-3 rounded mb-2">
// //             <h3>{c.name}</h3>
// //             <p className="text-sm text-gray-500">{c.role}</p>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // }
// import { useEffect, useState } from "react";
// import { useAuth } from "../context/AuthContext";
// import ConnectionRequests from "../components/ConnectionRequests";

// export default function ConnectionsPage() {
//   const { user } = useAuth();
//   const [connections, setConnections] = useState([]);

//   useEffect(() => {
//     if (!user) return;
//     loadConnections();
//   }, [user]);

//   const loadConnections = () => {
//     const allUsers = JSON.parse(localStorage.getItem("hireon_users")) || [];

//     const current = allUsers.find((u) => u.email === user.email);
//     setConnections(current?.connections || []);
//   };

//   return (
//     <div className="p-6">

//       <h1 className="text-2xl font-bold mb-4">My Network</h1>

//       {/* Pending */}
//       <ConnectionRequests />

//       {/* Connections */}
//       <div className="bg-white p-4 rounded-xl shadow">
//         <h2 className="font-bold mb-4">Connections</h2>

//         {connections.length === 0 && <p>No connections yet</p>}

//         {connections.map((c) => (
//           <div key={c.email} className="border p-3 rounded mb-2">
//             <h3>{c.name}</h3>
//             <p className="text-sm text-gray-500">{c.role}</p>
//           </div>
//         ))}
//       </div>

//     </div>
//   );
// }
// import { useEffect, useState } from "react";
// import { useAuth } from "../context/AuthContext";
// import ConnectionRequests from "../components/ConnectionRequests";

// export default function ConnectionsPage() {
//   const { user } = useAuth();
//   const [connections, setConnections] = useState([]);

//   useEffect(() => {
//     if (!user) return;
//     loadConnections();
//   }, [user]);

//   const loadConnections = () => {
//     const allUsers = JSON.parse(localStorage.getItem("hireon_users")) || [];
//     const current = allUsers.find((u) => u.email === user.email);
//     setConnections(current?.connections || []);
//   };

//   return (
//     <div className="p-6">

//       <h1 className="text-2xl font-bold mb-6">My Network</h1>

//       <ConnectionRequests />

//       <div className="grid md:grid-cols-3 gap-4">
//         {connections.map((c) => (
//           <div
//             key={c.email}
//             className="bg-white p-4 rounded-xl shadow"
//           >
//             <div className="w-12 h-12 bg-indigo-500 text-white flex items-center justify-center rounded-full mb-2">
//               {c.name?.charAt(0)}
//             </div>

//             <h3 className="font-semibold">{c.name}</h3>
//             <p className="text-sm text-gray-500">{c.role}</p>
//           </div>
//         ))}
//       </div>

//     </div>
//   );
// }
// import { useAuth } from "../context/AuthContext";
// import ConnectionRequests from "../components/ConnectionRequests";

// export default function ConnectionsPage() {
//   const { user } = useAuth();

//   const allUsers =
//     JSON.parse(localStorage.getItem("hireon_users")) || [];

//   const current = allUsers.find(
//     (u) => u.email === user.email
//   );

//   const connections = current?.connections || [];

//   return (
//     <div className="p-6">
//       <h1 className="text-xl font-bold mb-4">
//         Connections
//       </h1>

//       <ConnectionRequests />

//       {connections.map((c) => (
//         <div key={c.email} className="border p-2 mb-2">
//           {c.name}
//         </div>
//       ))}
//     </div>
//   );
// }
import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import ConnectionRequests from "../components/ConnectionRequests";

export default function ConnectionsPage() {
  const { user } = useAuth();
  const [connections, setConnections] = useState([]);

  useEffect(() => {
    if (!user) return;
    loadConnections();
  }, [user]);

  const loadConnections = () => {
    const allUsers = JSON.parse(localStorage.getItem("hireon_users")) || [];
    const current = allUsers.find((u) => u.email === user.email);
    setConnections(current?.connections || []);
  };

  return (
    <div className="p-6">

      <h1 className="text-2xl font-bold mb-6">My Network</h1>

      <ConnectionRequests />

      <div className="grid md:grid-cols-3 gap-4">
        {connections.map((c) => (
          <div
            key={c.email}
            className="bg-white p-4 rounded-xl shadow"
          >
            <div className="w-12 h-12 bg-indigo-500 text-white flex items-center justify-center rounded-full mb-2">
              {c.name?.charAt(0)}
            </div>

            <h3 className="font-semibold">{c.name}</h3>
            <p className="text-sm text-gray-500">{c.role}</p>
          </div>
        ))}
      </div>

    </div>
  );
}