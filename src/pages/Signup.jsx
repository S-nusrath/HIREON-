// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";
// import { useAuth } from "../context/AuthContext";
// import "./Auth.css";

// export default function Signup() {
//   const { login } = useAuth();
//   const navigate = useNavigate();

//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     password: "",
//     branch: "CS",
//     year: "1",
//   });

//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);

//   const onChange = (e) =>
//     setForm({ ...form, [e.target.name]: e.target.value });

//   const onSubmit = async (e) => {
//     e.preventDefault();
//     setError("");

//     try {
//       setLoading(true);

//       const res = await axios.post(
//         "http://localhost:5000/api/auth/register",
//         form
//       );

//       login(res.data.user, res.data.token);
//       navigate("/profile");
//     } catch (err) {
//       setError(err.response?.data?.message || "Signup failed");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="auth-page">
//       <form onSubmit={onSubmit} className="auth-card">
//         <h3>Create account</h3>

//         <input name="name" placeholder="Name" onChange={onChange} />
//         <input name="email" placeholder="Email" onChange={onChange} />
//         <input
//           name="password"
//           type="password"
//           placeholder="Password"
//           onChange={onChange}
//         />

//         {error && <p className="form-error">{error}</p>}

//         <button disabled={loading}>
//           {loading ? "Creating..." : "Sign up"}
//         </button>

//         <p>
//           Already registered? <Link to="/signin">Sign in</Link>
//         </p>
//       </form>
//     </div>
//   );
// }
// import { Link, useNavigate } from "react-router-dom";
// import { useState } from "react";
// import { useAuth } from "../context/AuthContext";
// import "./Auth.css";

// export default function Signup() {
//   const { login } = useAuth();
//   const navigate = useNavigate();

//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Get existing users
//     const users = JSON.parse(localStorage.getItem("hireon_users")) || [];

//     // Check duplicate email
//     const alreadyExists = users.find((u) => u.email === email);
//     if (alreadyExists) {
//       alert("Email already registered. Please sign in.");
//       return;
//     }

//     // Create new user
//     const newUser = {
//       id: Date.now(),
//       name,
//       email,
//       password, // ⚠ demo only (not secure)
//       role: "Job Seeker",
//     };

//     // Save login state
//     login(newUser);

//     // Save user list
//     localStorage.setItem(
//       "hireon_users",
//       JSON.stringify([...users, newUser])
//     );

//     // Redirect to dashboard
//     navigate("/dashboard");
//   };

//   return (
//     <div className="auth-page">
//       <div className="auth-left">
//         <h1>HireOn</h1>
//         <p>
//           Join thousands of students and professionals finding better
//           opportunities every day.
//         </p>
//       </div>

//       <div className="auth-card">
//         <h2>Create your account</h2>
//         <p className="auth-sub">It only takes a minute</p>

//         <form onSubmit={handleSubmit}>
//           <input
//             type="text"
//             placeholder="Full name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             required
//           />

//           <input
//             type="email"
//             placeholder="Email address"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />

//           <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />

//           <button type="submit" className="primary-btn">
//             Create account
//           </button>
//         </form>

//         <p className="auth-footer">
//           Already have an account? <Link to="/signin">Sign in</Link>
//         </p>
//       </div>
//     </div>
//   );
// }
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import "./Auth.css";

export default function Signup() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Get existing users
    const users = JSON.parse(localStorage.getItem("hireon_users")) || [];

    // Check duplicate email
    const alreadyExists = users.find((u) => u.email === email);
    if (alreadyExists) {
      alert("Email already registered. Please sign in.");
      return;
    }

    // Create new user
    const newUser = {
      id: Date.now(),
      name,
      email,
      password, // demo only
      role: "Job Seeker",
    };

    // Save login state
    login(newUser);

    // Save users list
    localStorage.setItem(
      "hireon_users",
      JSON.stringify([...users, newUser])
    );

    // ✅ Redirect to Dashboard ("/" in your app)
    navigate("/");
  };

  return (
    <div className="auth-page">
      <div className="auth-left">
        <h1>HireOn</h1>
        <p>
          Join thousands of students and professionals finding better
          opportunities every day.
        </p>
      </div>

      <div className="auth-card">
        <h2>Create your account</h2>
        <p className="auth-sub">It only takes a minute</p>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit" className="primary-btn">
            Create account
          </button>
        </form>

        <p className="auth-footer">
          Already have an account? <Link to="/signin">Sign in</Link>
        </p>
      </div>
    </div>
  );
}
const handleSubmit = (e) => {
  e.preventDefault();

  const users = JSON.parse(localStorage.getItem("hireon_users")) || [];

  const alreadyExists = users.find((u) => u.email === email);
  if (alreadyExists) {
    alert("Email already registered. Please sign in.");
    return;
  }

  const newUser = {
    id: Date.now(),
    name,
    email,
    role: "Job Seeker",
    connections: [],
    requests: [],
  };

  // save all users
  localStorage.setItem(
    "hireon_users",
    JSON.stringify([...users, newUser])
  );

  // login
  login(newUser);

  // 🎉 POPUP
  alert(`🎉 Welcome to HireOn, ${name}!`);

  // redirect
  navigate("/");
};
