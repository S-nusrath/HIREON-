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
import { Link } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import "./Auth.css";

export default function Signup() {
  const { login } = useAuth();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newUser = {
      id: Date.now(),
      name,
      email,
      role: "Job Seeker",
    };

    // Save logged in user
    login(newUser);

    // Save for Discover People
    const users = JSON.parse(localStorage.getItem("hireon_users")) || [];
    localStorage.setItem(
      "hireon_users",
      JSON.stringify([...users, newUser])
    );
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
