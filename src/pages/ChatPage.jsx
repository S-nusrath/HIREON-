import React from "react";
import ChatWindow from "../components/ChatWindow";

const ChatPage = () => {
  const userId = 1;
  const otherUserId = 2;

  return (
    <div>
      <h1>Chat</h1>
      <ChatWindow userId={userId} otherUserId={otherUserId} />
    </div>
  );
};

export default ChatPage;