export default function UserCard({ user, onAction, actionText }) {
  return (
    <div className="border p-4 rounded flex justify-between items-center">
      <div>
        <h3 className="font-semibold">{user.name}</h3>
        <p className="text-sm text-gray-500">{user.email}</p>
      </div>
      {onAction && (
        <button
          onClick={onAction}
          className="bg-blue-600 text-white px-3 py-1 rounded"
        >
          {actionText}
        </button>
      )}
    </div>
  );
}
