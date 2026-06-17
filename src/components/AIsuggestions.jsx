export default function AISuggestions({ data }) {

  const suggestions = [];

  if (!data.summary) {
    suggestions.push("Add a strong professional summary.");
  }

  if (data.skills.split(",").length < 3) {
    suggestions.push("Add more skills (at least 5).");
  }

  if (!data.projects) {
    suggestions.push("Add at least 2 projects.");
  }

  if (!data.experience) {
    suggestions.push("Mention internships or experience.");
  }

  return (
    <div className="bg-yellow-50 p-4 rounded-xl mt-4">
      <h3 className="font-semibold mb-2">AI Suggestions 🤖</h3>

      {suggestions.length === 0 && (
        <p className="text-green-600">Your resume looks great! 🚀</p>
      )}

      {suggestions.map((s, i) => (
        <p key={i}>• {s}</p>
      ))}
    </div>
  );
}