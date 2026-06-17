// // import { useEffect, useState } from "react";
// // import { useAuth } from "../context/AuthContext";

// // export default function ConnectionRequests() {
// //   const { user, login } = useAuth();
// //   const [requests, setRequests] = useState([]);

// //   useEffect(() => {
// //     if (!user) return;
// //     loadRequests();
// //   }, [user]);

// //   const loadRequests = () => {
// //     const allUsers = JSON.parse(localStorage.getItem("hireon_users")) || [];

// //     const current = allUsers.find((u) => u.email === user.email);
// //     setRequests(current?.requests || []);
// //   };

// //   const acceptRequest = (reqUser) => {
// //     let allUsers = JSON.parse(localStorage.getItem("hireon_users")) || [];

// //     allUsers = allUsers.map((u) => {
// //       if (u.email === user.email) {
// //         return {
// //           ...u,
// //           connections: [...(u.connections || []), reqUser],
// //           requests: (u.requests || []).filter(r => r.email !== reqUser.email)
// //         };
// //       }

// //       if (u.email === reqUser.email) {
// //         return {
// //           ...u,
// //           connections: [
// //             ...(u.connections || []),
// //             { name: user.name, email: user.email, role: user.role }
// //           ]
// //         };
// //       }

// //       return u;
// //     });

// //     localStorage.setItem("hireon_users", JSON.stringify(allUsers));

// //     const updatedUser = allUsers.find(u => u.email === user.email);
// //     login(updatedUser);

// //     loadRequests();
// //   };

// //   return (
// //     <div className="bg-white p-4 rounded-xl shadow mb-6">
// //       <h2 className="font-bold mb-4">Pending Requests</h2>

// //       {requests.length === 0 && <p>No requests</p>}

// //       {requests.map((r) => (
// //         <div key={r.email} className="flex justify-between mb-2">
// //           <span>{r.name}</span>

// //           <button
// //             onClick={() => acceptRequest(r)}
// //             className="bg-green-500 text-white px-3 py-1 rounded"
// //           >
// //             Accept
// //           </button>
// //         </div>
// //       ))}
// //     </div>
// //   );
// // }
// import { useEffect, useState } from "react";
// import { useAuth } from "../context/AuthContext";

// export default function ConnectionRequests() {
//   const { user, login } = useAuth();
//   const [requests, setRequests] = useState([]);

//   useEffect(() => {
//     if (!user) return;
//     loadRequests();
//   }, [user]);

//   const loadRequests = () => {
//     const allUsers = JSON.parse(localStorage.getItem("hireon_users")) || [];

//     const current = allUsers.find((u) => u.email === user.email);
//     setRequests(current?.requests || []);
//   };

//   const acceptRequest = (reqUser) => {
//     let allUsers = JSON.parse(localStorage.getItem("hireon_users")) || [];

//     allUsers = allUsers.map((u) => {
//       if (u.email === user.email) {
//         return {
//           ...u,
//           connections: [...(u.connections || []), reqUser],
//           requests: (u.requests || []).filter(r => r.email !== reqUser.email)
//         };
//       }

//       if (u.email === reqUser.email) {
//         return {
//           ...u,
//           connections: [
//             ...(u.connections || []),
//             { name: user.name, email: user.email, role: user.role }
//           ]
//         };
//       }

//       return u;
//     });

//     localStorage.setItem("hireon_users", JSON.stringify(allUsers));

//     const updatedUser = allUsers.find(u => u.email === user.email);
//     login(updatedUser);

//     loadRequests();
//   };

//   return (
//     <div className="bg-white p-4 rounded-xl shadow mb-6">
//       <h2 className="font-bold mb-4">Pending Requests</h2>

//       {requests.length === 0 && <p>No requests</p>}

//       {requests.map((r) => (
//         <div key={r.email} className="flex justify-between mb-2">
//           <span>{r.name}</span>

//           <button
//             onClick={() => acceptRequest(r)}
//             className="bg-green-500 text-white px-3 py-1 rounded"
//           >
//             Accept
//           </button>
//         </div>
//       ))}
//     </div>
// //   );
// // }
// // import { useEffect, useState } from "react";
// // import { useAuth } from "../context/AuthContext";

// // export default function ConnectionRequests() {
// //   const { user, login } = useAuth();
// //   const [requests, setRequests] = useState([]);
// //   const [toast, setToast] = useState("");

// //   useEffect(() => {
// //     if (!user) return;
// //     loadRequests();
// //   }, [user]);

// //   const loadRequests = () => {
// //     const allUsers =
// //       JSON.parse(localStorage.getItem("hireon_users")) || [];

// //     const current = allUsers.find(
// //       (u) => u.email === user.email
// //     );

// //     setRequests(current?.requests || []);
// //   };

// //   const acceptRequest = (reqUser) => {
// //     let allUsers =
// //       JSON.parse(localStorage.getItem("hireon_users")) || [];

// //     allUsers = allUsers.map((u) => {
// //       // ✅ Current user
// //       if (u.email === user.email) {
// //         return {
// //           ...u,
// //           connections: [...(u.connections || []), reqUser],
// //           requests: (u.requests || []).filter(
// //             (r) => r.email !== reqUser.email
// //           ),
// //         };
// //       }

// //       // ✅ Sender user
// //       if (u.email === reqUser.email) {
// //         return {
// //           ...u,
// //           connections: [
// //             ...(u.connections || []),
// //             {
// //               name: user.name,
// //               email: user.email,
// //               role: user.role,
// //             },
// //           ],
// //         };
// //       }

// //       return u;
// //     });

// //     localStorage.setItem(
// //       "hireon_users",
// //       JSON.stringify(allUsers)
// //     );

// //     const updatedUser = allUsers.find(
// //       (u) => u.email === user.email
// //     );

// //     login(updatedUser);

// //     // 🔥 Toast feedback
// //     setToast(`Connected with ${reqUser.name} 🎉`);
// //     setTimeout(() => setToast(""), 2000);

// //     loadRequests();
// //   };

// //   return (
// //     <div className="bg-white p-5 rounded-2xl shadow mb-6">

// //       <h2 className="text-lg font-semibold mb-4">
// //         Pending Requests
// //       </h2>

// //       {requests.length === 0 ? (
// //         <div className="text-center text-gray-500 py-6">
// //           No pending requests
// //         </div>
// //       ) : (
// //         <div className="space-y-3">
// //           {requests.map((r) => (
// //             <div
// //               key={r.email}
// //               className="flex items-center justify-between bg-gray-50 p-3 rounded-lg hover:shadow transition"
// //             >
// //               {/* User Info */}
// //               <div className="flex items-center gap-3">
// //                 {/* Avatar */}
// //                 <div className="w-10 h-10 bg-indigo-500 text-white flex items-center justify-center rounded-full font-bold">
// //                   {r.name?.charAt(0)}
// //                 </div>

// //                 <div>
// //                   <p className="font-medium">{r.name}</p>
// //                   <p className="text-xs text-gray-500">
// //                     {r.role || "User"}
// //                   </p>
// //                 </div>
// //               </div>

// //               {/* Accept Button */}
// //               <button
// //                 onClick={() => acceptRequest(r)}
// //                 className="bg-green-500 hover:bg-green-600 text-white px-4 py-1 rounded-lg text-sm transition"
// //               >
// //                 Accept
// //               </button>
// //             </div>
// //           ))}
// //         </div>
// //       )}

// //       {/* ✅ Toast Popup */}
// //       {toast && (
// //         <div className="fixed top-5 right-5 bg-green-500 text-white px-4 py-2 rounded shadow-lg">
// //           {toast}
// //         </div>
// //       )}

// //     </div>
// //   );
// // }
// import { useAuth } from "../context/AuthContext";

// export default function ConnectionRequests() {
//   const { user, login } = useAuth();

//   const allUsers =
//     JSON.parse(localStorage.getItem("hireon_users")) || [];

//   const current = allUsers.find(
//     (u) => u.email === user.email
//   );

//   const requests = current?.requests || [];

//   const accept = (reqUser) => {
//     let updated = allUsers.map((u) => {
//       if (u.email === user.email) {
//         return {
//           ...u,
//           connections: [...(u.connections || []), reqUser],
//           requests: (u.requests || []).filter(
//             (r) => r.email !== reqUser.email
//           ),
//         };
//       }

//       if (u.email === reqUser.email) {
//         return {
//           ...u,
//           connections: [
//             ...(u.connections || []),
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

//     localStorage.setItem("hireon_users", JSON.stringify(updated));

//     const updatedUser = updated.find(
//       (u) => u.email === user.email
//     );

//     login(updatedUser);
//   };

//   return (
//     <div>
//       <h3>Requests</h3>

//       {requests.map((r) => (
//         <div key={r.email}>
//           {r.name}
//           <button onClick={() => accept(r)}>Accept</button>
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
  const [toast, setToast] = useState("");

  useEffect(() => {
    if (!user) return;
    loadRequests();
  }, [user]);

  const loadRequests = () => {
    const allUsers =
      JSON.parse(localStorage.getItem("hireon_users")) || [];

    const current = allUsers.find(
      (u) => u.email === user.email
    );

    setRequests(current?.requests || []);
  };

  const acceptRequest = (reqUser) => {
    let allUsers =
      JSON.parse(localStorage.getItem("hireon_users")) || [];

    allUsers = allUsers.map((u) => {
      // ✅ Current user
      if (u.email === user.email) {
        return {
          ...u,
          connections: [...(u.connections || []), reqUser],
          requests: (u.requests || []).filter(
            (r) => r.email !== reqUser.email
          ),
        };
      }

      // ✅ Sender user
      if (u.email === reqUser.email) {
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
      JSON.stringify(allUsers)
    );

    const updatedUser = allUsers.find(
      (u) => u.email === user.email
    );

    login(updatedUser);

    // 🔥 Toast feedback
    setToast(`Connected with ${reqUser.name} 🎉`);
    setTimeout(() => setToast(""), 2000);

    loadRequests();
  };

  return (
    <div className="bg-white p-5 rounded-2xl shadow mb-6">

      <h2 className="text-lg font-semibold mb-4">
        Pending Requests
      </h2>

      {requests.length === 0 ? (
        <div className="text-center text-gray-500 py-6">
          No pending requests
        </div>
      ) : (
        <div className="space-y-3">
          {requests.map((r) => (
            <div
              key={r.email}
              className="flex items-center justify-between bg-gray-50 p-3 rounded-lg hover:shadow transition"
            >
              {/* User Info */}
              <div className="flex items-center gap-3">
                {/* Avatar */}
                <div className="w-10 h-10 bg-indigo-500 text-white flex items-center justify-center rounded-full font-bold">
                  {r.name?.charAt(0)}
                </div>

                <div>
                  <p className="font-medium">{r.name}</p>
                  <p className="text-xs text-gray-500">
                    {r.role || "User"}
                  </p>
                </div>
              </div>

              {/* Accept Button */}
              <button
                onClick={() => acceptRequest(r)}
                className="bg-green-500 hover:bg-green-600 text-white px-4 py-1 rounded-lg text-sm transition"
              >
                Accept
              </button>
            </div>
          ))}
        </div>
      )}

      {/* ✅ Toast Popup */}
      {toast && (
        <div className="fixed top-5 right-5 bg-green-500 text-white px-4 py-2 rounded shadow-lg">
          {toast}
        </div>
      )}

    </div>
  );
}