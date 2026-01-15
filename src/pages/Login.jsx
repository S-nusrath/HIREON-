// import { Link } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import "./Auth.css";

export default function Login() {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    login({
      id: Date.now(),
      name: email.split("@")[0],
      email,
      role: "Job Seeker",
    });
  };

  return (
    <div className="auth-page">
      <div className="auth-left">
        <h1>HireOn</h1>
        <p>
          Find jobs, connect with professionals, and build your career — all in
          one platform.
        </p>
      </div>

      <div className="auth-card">
        <h2>Welcome back</h2>
        <p className="auth-sub">Sign in to your account</p>

        <form onSubmit={handleSubmit}>
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
            Sign in
          </button>
        </form>

        <p className="auth-footer">
          Don’t have an account? <Link to="/signup">Create one</Link>
        </p>
      </div>
    </div>
  );
}
