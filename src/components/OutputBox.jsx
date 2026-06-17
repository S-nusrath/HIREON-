export default function OutputBox({ output }) {
  return (
    <div className="bg-black text-green-400 p-3 mt-3 h-40 overflow-auto">
      {output}
    </div>
  );
}