/*import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function Navbar() {
  const { user } = useContext(AuthContext);

  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "14px 40px",
        background: "rgba(10,15,30,0.8)",
        backdropFilter: "blur(10px)",
        position: "sticky",
        top: 0,
        zIndex: 1000,
      }}
    >
      <Link to="/" style={{ fontWeight: 800, fontSize: 20 }}>
        HireOn
      </Link>

      <div style={{ display: "flex", gap: 18 }}>
        <Link to="/jobs">Jobs</Link>
        <Link to="/practice">Practice</Link>

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
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function Navbar() {
  const { user, setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
    navigate("/signin");
  };

  return (
    <header className="navbar-wrapper">
      <nav className="navbar">
        {/* LEFT */}
        <Link to="/" className="navbar-logo">
          HireOn
        </Link>

        {/* CENTER */}
        <div className="navbar-links">
          <Link to="/jobs">Jobs</Link>
          <Link to="/practice">Practice</Link>
          <Link to="/resume">Resume</Link>
        </div>

        {/* RIGHT */}
        <div className="navbar-actions">
          {!user ? (
            <>
              <Link to="/signin" className="nav-link">
                Sign in
              </Link>
              <Link to="/signup" className="nav-btn">
                Sign up
              </Link>
            </>
          ) : (
            <>
              <Link to="/profile" className="nav-user">
                {user.name}
              </Link>
              <button onClick={logout} className="nav-logout">
                Logout
              </button>
            </>
          )}
        </div>
      </nav>
    </header>
  );
}
