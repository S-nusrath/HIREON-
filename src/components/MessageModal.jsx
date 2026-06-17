import ChatWindow from "./ChatWindow";

export default function MessageModal({ user, close }) {

  return (
    <div className="fixed bottom-5 right-5 bg-white shadow-xl rounded-xl w-80">

      <div className="flex justify-between p-3 border-b">

        <span>{user.name}</span>

        <button onClick={close}>✕</button>

      </div>

      <ChatWindow user={user} />

    </div>
  );
}