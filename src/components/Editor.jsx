export default function Editor({ code, setCode }) {
  return (
    <textarea
      className="w-full h-48 border p-2"
      placeholder="Write your code here..."
      value={code}
      onChange={(e) => setCode(e.target.value)}
    />
  );
}