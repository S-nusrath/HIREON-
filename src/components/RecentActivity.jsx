export default function RecentActivity() {
  const activities = [
    "Applied to Frontend Intern",
    "New connection request received",
    "Completed JS Practice Test",
    "Resume updated",
  ];

  return (
    <div className="card">
      <h3>Recent Activity</h3>
      <ul className="activity-list">
        {activities.map((a, i) => (
          <li key={i}>{a}</li>
        ))}
      </ul>
    </div>
  );
}
