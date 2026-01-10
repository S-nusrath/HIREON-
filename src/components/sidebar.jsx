import { NavLink } from "react-router-dom";
import "./Sidebar.css";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      {/* Logo */}
      <div className="sidebar-logo">HireOn</div>

      {/* Navigation */}
      <nav className="sidebar-nav">
        <NavLink to="/" end className="sidebar-link">
          🏠 Dashboard
        </NavLink>

        <NavLink to="/jobs" className="sidebar-link">
          💼 Jobs
        </NavLink>

        <NavLink to="/discover" className="sidebar-link">
          👥 Discover
        </NavLink>

        <NavLink to="/connections" className="sidebar-link">
          🤝 Connections
        </NavLink>

        <NavLink to="/requests" className="sidebar-link">
          🔔 Requests
        </NavLink>

        <NavLink to="/resume" className="sidebar-link">
          📄 Resume
        </NavLink>

        <NavLink to="/practice" className="sidebar-link">
          🧠 Practice
        </NavLink>
      </nav>
    </aside>
  );
}
