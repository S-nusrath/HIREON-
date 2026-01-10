import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "./Navbar.css";

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
        {/* Left: Logo */}
        <Link to="/" className="navbar-logo">
          HireOn
        </Link>

        {/* Center: Search */}
        <div className="navbar-search">
          <input
            type="text"
            placeholder="Search jobs, people, skills..."
          />
        </div>

        {/* Right: Actions */}
        <div className="navbar-actions">
          {/* Logged in user icons */}
          {!loading && user && (
            <>
              <Link to="/discover" className="icon-btn">👥</Link>
              <Link to="/requests" className="icon-btn">🔔</Link>
            </>
          )}

          {/* Auth buttons */}
          {!user && !loading && (
            <>
              <Link to="/signin" className="nav-link">
                Sign in
              </Link>
              <Link to="/signup" className="nav-btn">
                Sign up
              </Link>
            </>
          )}

          {/* User avatar */}
          {user && (
            <div className="user-box">
              <div className="avatar">
                {user.name?.charAt(0).toUpperCase()}
              </div>
              <span className="user-name">{user.name}</span>
              <button onClick={handleLogout} className="logout-btn">
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
