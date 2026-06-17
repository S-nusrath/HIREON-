export default function SuggestedConnections() {

  const suggestions = [
    { name: "Arjun Reddy", skill: "React Developer" },
    { name: "Priya Patel", skill: "Backend Engineer" },
  ];

  return (
    <div className="bg-white p-4 shadow-md rounded-xl">

      <h2 className="font-semibold mb-3">Suggested</h2>

      {suggestions.map((s, i) => (
        <div key={i} className="flex justify-between mb-3">

          <div>
            <p className="font-medium">{s.name}</p>
            <p className="text-sm text-gray-500">{s.skill}</p>
          </div>

          <button className="text-blue-500">
            Connect
          </button>

        </div>
      ))}

    </div>
  );
}