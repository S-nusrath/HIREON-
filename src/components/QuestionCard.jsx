export default function QuestionCard({ q, onClick }) {
  return (
    <div
      onClick={() => onClick(q)}
      className="p-2 mb-2 bg-gray-800 text-white cursor-pointer hover:bg-gray-700"
    >
      {q.title}
    </div>
  );
}