// // const API = "http://localhost:5000/api/connections";

// // export const sendConnectionRequest = async (senderId, receiverId) => {
// //   const res = await fetch(`${API}/request`, {
// //     method: "POST",
// //     headers: {
// //       "Content-Type": "application/json",
// //     },
// //     body: JSON.stringify({
// //       sender_id: senderId,
// //       receiver_id: receiverId,
// //     }),
// //   });

// //   return res.json();
// // };

// // export const getConnections = async (userId) => {
// //   const res = await fetch(`${API}/${userId}`);
// //   return res.json();
// // };

// // export const acceptConnection = async (id) => {
// //   const res = await fetch(`${API}/accept/${id}`, {
// //     method: "PUT",
// //   });

// //   return res.json();
// // };

// // export const rejectConnection = async (id) => {
// //   const res = await fetch(`${API}/reject/${id}`, {
// //     method: "PUT",
// //   });

// //   return res.json();
// // }; 
// const API = "http://localhost:8080/api/connections";


// export const sendConnectionRequest = async (senderId, receiverId) => {
//   const res = await fetch(`${API}/request`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       sender_id: senderId,
//       receiver_id: receiverId,
//     }),
//   });

//   return res.json();
// };

// export const getConnections = async (userId) => {
//   const res = await fetch(`${API}/${userId}`);
//   return res.json();
// };

// export const acceptConnection = async (id) => {
//   const res = await fetch(`${API}/accept/${id}`, { method: "PUT" });
//   return res.json();
// };

// export const rejectConnection = async (id) => {
//   const res = await fetch(`${API}/reject/${id}`, { method: "PUT" });
//   return res.json();
// };
// const API = "http://localhost:8080/api/connections";

// export const sendConnectionRequest = async (senderId, receiverId) => {
//   const res = await fetch(`${API}/request`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       sender_id: senderId,
//       receiver_id: receiverId,
//     }),
//   });

//   return res.json();
// };

// export const getConnections = async (userId) => {
//   const res = await fetch(`${API}/${userId}`);

//   if (!res.ok) {
//     throw new Error("Failed to fetch connections");
//   }

//   return res.json();
// };

// export const acceptConnection = async (id) => {
//   const res = await fetch(`${API}/accept/${id}`, {
//     method: "PUT",
//   });

//   return res.json();
// };

// export const rejectConnection = async (id) => {
//   const res = await fetch(`${API}/reject/${id}`, {
//     method: "PUT",
//   });

//   return res.json();
// };
// const API = "http://localhost:8080/api/connections";

// export const sendRequest = async (senderId, receiverId) => {
//   const res = await fetch(`${API}/request`, {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({ senderId, receiverId }),
//   });
//   return res.json();
// };

// export const getConnections = async (userId) => {
//   const res = await fetch(`${API}/my/${userId}`);
//   return res.json();
// };

// export const getPending = async (userId) => {
//   const res = await fetch(`${API}/pending/${userId}`);
//   return res.json();
// };

// export const acceptRequest = async (id) => {
//   const res = await fetch(`${API}/accept/${id}`, {
//     method: "PUT",
//   });
//   return res.json();
// };
// const API = "http://localhost:8080/api/connections";

// // export const sendRequest = async (senderId, receiverId) => {
// //   const res = await fetch(`${API}/request`, {
// //     method: "POST",
// //     headers: {
// //       "Content-Type": "application/json",
// //     },
// //     body: JSON.stringify({
// //       senderId,
// //       receiverId,
// //     }),
// //   });

// export const acceptRequest = async (id) => {
//   const res = await fetch(`http://localhost:8080/api/connections/accept/${id}`, {
//     method: "PUT",
//   });

//   return res.json();
// };
// const API = "http://localhost:8080/api/connections";
//   export const acceptRequest = async (id) => {
//   const res = await fetch(`http://localhost:8080/api/connections/accept/${id}`, {
//     method: "PUT",
//   });

//   return res.json();
// };
const API = "http://localhost:8080/api/connections";

// ✅ SEND REQUEST
export const sendRequest = async (senderId, receiverId) => {
  const res = await fetch(`${API}/request`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ senderId, receiverId }),
  });

  return res.json();
};

// ✅ GET PENDING REQUESTS
export const getPending = async (userId) => {
  const res = await fetch(`${API}/pending/${userId}`);
  return res.json();
};

// ✅ ACCEPT REQUEST
export const acceptRequest = async (id) => {
  const res = await fetch(`${API}/accept/${id}`, {
    method: "PUT",
  });

  return res.json();
};

// ✅ GET CONNECTIONS
export const getConnections = async (userId) => {
  const res = await fetch(`${API}/my/${userId}`);
  return res.json();
};
