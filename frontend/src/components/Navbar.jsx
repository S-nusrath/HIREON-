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
// import { Link } from "react-router-dom";
// import { useAuth } from "../context/AuthContext";

// export default function Navbar() {
//   return (
//     <div className="navbar-wrapper">
//       <div className="navbar">
//         <Link to="/" className="navbar-logo">HireOn</Link>

//         <div className="navbar-links">
//           <Link to="/jobs">Jobs</Link>
//           <Link to="/resume">Resume</Link> { 👈 THIS */}
//           <Link to="/practice">Practice</Link>
//           <Link to="/applications">My Applications</Link>

//         </div>

//         <div className="navbar-actions">
//           <Link to="/signin" className="nav-link">Sign in</Link>
//           <Link to="/signup" className="nav-btn">Sign up</Link>
          
//         </div>
//       </div>
//     </div>
//   );
// }



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
