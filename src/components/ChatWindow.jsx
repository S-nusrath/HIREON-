// import { useState } from "react";

// export default function ChatWindow({ user }) {

//   const [messages, setMessages] = useState([]);
//   const [text, setText] = useState("");

//   const sendMessage = () => {

//     if (!text) return;

//     const newMsg = { text, sender: "me" };

//     setMessages([...messages, newMsg]);
//     setText("");
//   };

//   return (
//     <div className="p-3">

//       <div className="h-60 overflow-y-auto">

//         {messages.map((m, i) => (
//           <div key={i} className="mb-2">

//             <span className="bg-gray-200 px-2 py-1 rounded">
//               {m.text}
//             </span>

//           </div>
//         ))}

//       </div>

//       <div className="flex gap-2 mt-2">

//         <input
//           className="border flex-1 px-2 py-1 rounded"
//           value={text}
//           onChange={(e) => setText(e.target.value)}
//         />

//         <button
//           onClick={sendMessage}
//           className="bg-blue-500 text-white px-3 rounded"
//         >
//           Send
//         </button>

//       </div>

//     </div>
//   );
// }
import React, { useEffect, useState } from "react";
import { getMessages, sendMessage } from "../services/messageService";

const ChatWindow = ({ userId, otherUserId }) => {
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");

  useEffect(() => {
    loadMessages();
  }, []);

  const loadMessages = async () => {
    const data = await getMessages(userId, otherUserId);
    setMessages(data);
  };

  const handleSend = async () => {
    await sendMessage({
      senderId: userId,
      receiverId: otherUserId,
      content: text,
    });
    setText("");
    loadMessages();
  };

  return (
    <div>
      <div>
        {messages.map((m) => (
          <p key={m.id}>
            {m.senderId === userId ? "Me: " : "Them: "}
            {m.content}
          </p>
        ))}
      </div>

      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleSend}>Send</button>
    </div>
  );
};

export default ChatWindow;