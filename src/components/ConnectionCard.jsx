// import { useState } from "react";
// import MessageModal from "./MessageModal";

// export default function ConnectionCard({ connection }) {

//   const [openChat, setOpenChat] = useState(false);

//   return (
//     <div className="bg-white shadow-md rounded-xl p-4 flex justify-between items-center">

//       <div className="flex items-center gap-4">
//         <img
//           src={connection.avatar || "/avatar.png"}
//           className="w-12 h-12 rounded-full"
//         />

//         <div>
//           <h3 className="font-semibold">{connection.name}</h3>
//           <p className="text-sm text-gray-500">{connection.title}</p>
//         </div>
//       </div>

//       <div className="flex gap-2">

//         <button
//           onClick={() => setOpenChat(true)}
//           className="bg-blue-500 text-white px-3 py-1 rounded"
//         >
//           Message
//         </button>

//         <button className="border px-3 py-1 rounded">
//           Collaborate
//         </button>

//       </div>

//       {openChat && (
//         <MessageModal
//           user={connection}
//           close={() => setOpenChat(false)}
//         />
//       )}

//     </div>
//   );
// }
import React from "react";

const ConnectionCard = ({ user, onConnect }) => {
  return (
    <div className="card">
      <h3>{user.name}</h3>
      <p>{user.email}</p>
      <button onClick={() => onConnect(user.id)}>Connect</button>
    </div>
  );
};

export default ConnectionCard;