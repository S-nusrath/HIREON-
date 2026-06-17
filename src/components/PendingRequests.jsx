// // export default function PendingRequests() {

// //   const requests = [
// //     { name: "Rahul Sharma", id: 1 },
// //     { name: "Ananya Gupta", id: 2 },
// //   ];

// //   return (
// //     <div className="bg-white shadow-md p-4 rounded-xl">

// //       <h2 className="font-semibold mb-3">Pending Requests</h2>

// //       {requests.map((r) => (
// //         <div key={r.id} className="flex justify-between mb-2">

// //           <span>{r.name}</span>

// //           <div className="flex gap-2">
// //             <button className="text-green-600">Accept</button>
// //             <button className="text-red-500">Reject</button>
// //           </div>

// //         </div>
// //       ))}

// //     </div>
// //   );
// // }
// import { useEffect, useState } from "react";

// export default function PendingRequests() {

//   const currentUserId = 1; // logged-in user (for demo)

//   const [requests, setRequests] = useState([]);

//   // Load pending requests
//   const loadRequests = async () => {

//     const res = await fetch(
//       `http://localhost:8080/api/connections/pending/${currentUserId}`
//     );

//     const data = await res.json();

//     setRequests(data);
//   };

//   useEffect(() => {
//     loadRequests();
//   }, []);

//   // Accept request
//   const accept = async (id) => {

//     await fetch(`http://localhost:8080/api/connections/accept/${id}`, {
//       method: "PUT"
//     });

//     loadRequests();
//   };

//   // Reject request
//   const reject = async (id) => {

//     await fetch(`http://localhost:8080/api/connections/reject/${id}`, {
//       method: "PUT"
//     });

//     loadRequests();
//   };

//   return (

//     <div className="bg-white shadow-md p-4 rounded-xl">

//       <h2 className="font-semibold mb-3">Pending Requests</h2>

//       {requests.length === 0 && (
//         <p className="text-gray-500 text-sm">No pending requests</p>
//       )}

//       {requests.map((r) => (

//         <div key={r.id} className="flex justify-between items-center mb-2">

//           <span>{r.senderName}</span>

//           <div className="flex gap-2">

//             <button
//               onClick={() => accept(r.id)}
//               className="text-green-600 font-medium"
//             >
//               Accept
//             </button>

//             <button
//               onClick={() => reject(r.id)}
//               className="text-red-500 font-medium"
//             >
//               Reject
//             </button>

//           </div>

//         </div>

//       ))}

//     </div>
//   );
// }
import React from "react";

const PendingRequests = ({ requests, onAccept }) => {
  return (
    <div>
      <h2>Pending Requests</h2>
      {requests.map((r) => (
        <div key={r.id}>
          <p>User ID: {r.senderId}</p>
          <button onClick={() => onAccept(r.id)}>Accept</button>
        </div>
      ))}
    </div>
  );
};

export default PendingRequests;