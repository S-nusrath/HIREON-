import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { user, logout, loading } = useAuth();

  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/signin");
  };

  return (
    <div className="navbar-wrapper">
      <div className="navbar">
        <Link to="/" className="navbar-logo">HireOn</Link>

        <div className="navbar-links">
          <Link to="/jobs">Jobs</Link>
          <Link to="/resume">Resume</Link>
          <Link to="/practice">Practice</Link>
{!loading && user && (
  <Link to="/applications">My Applications</Link>
)}
{user?.role === "admin" && (
  <Link to="/admin/jobs">Post Job</Link>
)}

  
        </div>

        <div className="navbar-actions">
          {/* ❌ NOT logged in */}
          {!user && (
            <>
              <Link to="/signin" className="nav-link">Sign in</Link>
              <Link to="/signup" className="nav-btn">Sign up</Link>
            </>
          )}

          {/* ✅ logged in */}
          {user && (
            <>
              <span className="nav-user">Hi, {user.name}</span>
              <button onClick={handleLogout} className="nav-btn">
                Logout
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
