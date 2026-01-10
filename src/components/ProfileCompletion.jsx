export default function ProfileCompletion() {
  const percent = 65;

  return (
    <div className="card">
      <h3>Profile Completion</h3>
      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{ width: `${percent}%` }}
        ></div>
      </div>
      <p>{percent}% complete</p>
    </div>
  );
}
