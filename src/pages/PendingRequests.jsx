export default function PendingRequests({ requests, onAccept }) {
  return (
    <div>
      <h2 className="font-bold mb-2">Pending Requests</h2>

      {requests.map(r => (
        <div key={r.id} className="bg-white p-3 rounded shadow mb-2">
          <p>User ID: {r.senderId}</p>

          <button
            onClick={() => onAccept(r.id)}
            className="bg-green-500 text-white px-2 py-1 rounded"
          >
            Accept
          </button>
        </div>
      ))}
    </div>
  );
}