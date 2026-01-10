import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { user, logout, loading } = useAuth();

  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/signin");
  };

<<<<<<< HEAD
        {user ? (
          <Link to="/profile">{user.name}</Link>
        ) : (
          <>
            <Link to="/signin">Sign in</Link>
            <Link to="/signup">Sign up</Link>
          </>
        )}
      </div>
    </nav>
  );
}
*/
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function Navbar() {
  const { user, logout } = useContext(AuthContext);

=======
>>>>>>> dbf9f0a26092fecf38171284619372168d03710f
  return (
    <div className="navbar-wrapper">
      <div className="navbar">
        {/* Logo */}
        <Link to="/" className="navbar-logo">
          HireOn
        </Link>

        {/* Center Links */}
        <div className="navbar-links">
          <Link to="/jobs">Jobs</Link>
          <Link to="/resume">Resume</Link>
          <Link to="/practice">Practice</Link>
<<<<<<< HEAD

          {user && (
            <>
              <Link to="/discover">Discover</Link>
              <Link to="/requests">Requests</Link>
              <Link to="/connections">Connections</Link>
            </>
          )}
=======
{!loading && user && (
  <Link to="/applications">My Applications</Link>
)}
{user?.role === "admin" && (
  <>
    <Link to="/admin/jobs">Post Job</Link>
    <Link to="/admin/my-jobs">My Jobs</Link>
  </>
)}

  
>>>>>>> dbf9f0a26092fecf38171284619372168d03710f
        </div>

        {/* Right Actions */}
        <div className="navbar-actions">
<<<<<<< HEAD
          {user ? (
            <>
              <Link to="/profile" className="nav-link">
                {user.name}
              </Link>
              <button onClick={logout} className="nav-btn">
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/signin" className="nav-link">
                Sign in
              </Link>
              <Link to="/signup" className="nav-btn">
                Sign up
              </Link>
            </>
=======
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
>>>>>>> dbf9f0a26092fecf38171284619372168d03710f
          )}
        </div>
      </div>
    </div>
  );
}
