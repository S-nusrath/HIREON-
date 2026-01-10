export default function StatsCards() {
  const stats = [
    { label: "Jobs Applied", value: 12 },
    { label: "Connections", value: 8 },
    { label: "Requests", value: 3 },
    { label: "Practice Sessions", value: 5 },
  ];

  return (
    <div className="stats-grid">
      {stats.map((item, i) => (
        <div key={i} className="stat-card">
          <h3>{item.value}</h3>
          <p>{item.label}</p>
        </div>
      ))}
    </div>
  );
}
