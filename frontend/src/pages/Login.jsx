// src/pages/Login.jsx
import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";

export default function Login() {
  const navigate = useNavigate();
  const { setUser } = useContext(AuthContext);

  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const onChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!form.email || !form.password) {
      setError("Please fill all fields.");
      return;
    }

    try {
      setLoading(true);

      const res = await axios.post(
        "http://localhost:5000/api/auth/signin",
        form,
        { headers: { "Content-Type": "application/json" } }
      );

      // 🔥 CORE FIX
      localStorage.setItem("token", res.data.token);
      setUser(res.data.user); // updates profile immediately

      navigate("/profile");
    } catch (err) {
      setError(err.response?.data?.message || "Sign in failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-wrap">
        <div className="auth-hero">
          <h2>Welcome back to HireOn</h2>
          <p>
            Sign in and discover relevant jobs, connect with recruiters, and
            practice for interviews.
          </p>

          <div style={{ marginTop: 18 }}>
            <p className="small">Not registered?</p>
            <Link to="/signup" className="link-primary">
              Create a free account →
            </Link>
          </div>
        </div>

        <div className="auth-card">
          <h3 style={{ margin: 0 }}>Sign in</h3>
          <p className="small" style={{ marginTop: 6 }}>
            Use your email and password to sign in.
          </p>

          <form onSubmit={onSubmit} style={{ marginTop: 14 }}>
            <div className="form-field">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={onChange}
                placeholder="you@domain.com"
              />
            </div>

            <div className="form-field">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                value={form.password}
                onChange={onChange}
                placeholder="••••••••"
              />
            </div>

            {error && <div className="form-error">{error}</div>}

            <div className="form-footer">
              <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                <input id="remember" type="checkbox" />
                <label htmlFor="remember" className="small">
                  Remember me
                </label>
              </div>

              <Link to="/forgot" className="link-muted">
                Forgot?
              </Link>
            </div>

            <div style={{ marginTop: 16 }}>
              <button
                type="submit"
                className="btn btn-primary"
                style={{ width: "100%" }}
                disabled={loading}
              >
                {loading ? "Signing in..." : "Sign in"}
              </button>
            </div>
          </form>

          <div className="sep" />

          <div style={{ display: "flex", gap: 8 }}>
            <button className="btn btn-ghost" style={{ flex: 1 }}>
              Continue with Google
            </button>
            <button className="btn btn-ghost" style={{ flex: 1 }}>
              Continue with GitHub
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
