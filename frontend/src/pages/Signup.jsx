// src/pages/Signup.jsx
import axios from "axios";
import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export default function Signup() {
  const navigate = useNavigate();
  const { setUser } = useContext(AuthContext);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    branch: "CS",
    year: "1",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const onChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!form.name || !form.email || !form.password) {
      setError("Please fill required fields.");
      return;
    }

    try {
      setLoading(true);

      const res = await axios.post(
        "http://localhost:5000/api/auth/register",
        form,
        { headers: { "Content-Type": "application/json" } }
      );

      // 🔥 IMPORTANT FIX
      localStorage.setItem("token", res.data.token);
      setUser(res.data.user); // updates profile instantly

      navigate("/profile"); // go directly to profile
    } catch (err) {
      setError(err.response?.data?.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-wrap">
        <div className="auth-hero">
          <h2>Create your HireOn account</h2>
          <p>
            Build profile, apply to jobs, track skill gaps and practice for
            interviews.
          </p>

          <div style={{ marginTop: 18 }}>
            <p className="small">Already have an account?</p>
            {/* SIGN IN (not login) */}
            <Link to="/signin" className="link-primary">
              Sign in →
            </Link>
          </div>
        </div>

        <div className="auth-card">
          <h3 style={{ margin: 0 }}>Sign up</h3>
          <p className="small" style={{ marginTop: 6 }}>
            Start with your name, email and a password.
          </p>

          <form onSubmit={onSubmit} style={{ marginTop: 14 }}>
            <div className="form-field">
              <label htmlFor="name">Full name</label>
              <input
                id="name"
                name="name"
                value={form.name}
                onChange={onChange}
                placeholder="Your full name"
              />
            </div>

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

            <div className="row">
              <div style={{ flex: 1 }}>
                <div className="form-field">
                  <label htmlFor="branch">Branch</label>
                  <select
                    id="branch"
                    name="branch"
                    value={form.branch}
                    onChange={onChange}
                  >
                    <option>CS</option>
                    <option>IT</option>
                    <option>ECE</option>
                    <option>ME</option>
                  </select>
                </div>
              </div>

              <div style={{ width: 120 }}>
                <div className="form-field">
                  <label htmlFor="year">Year</label>
                  <select
                    id="year"
                    name="year"
                    value={form.year}
                    onChange={onChange}
                  >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="form-field">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                value={form.password}
                onChange={onChange}
                placeholder="Choose a strong password"
              />
            </div>

            {error && <div className="form-error">{error}</div>}

            <div style={{ marginTop: 12 }}>
              <button
                className="btn btn-primary"
                style={{ width: "100%" }}
                type="submit"
                disabled={loading}
              >
                {loading ? "Creating..." : "Create account"}
              </button>
            </div>
          </form>

          <div className="sep" />
          <div style={{ fontSize: 13, color: "var(--muted)" }}>
            By creating an account you agree to our{" "}
            <a href="#" className="link-muted">
              Terms
            </a>{" "}
            and{" "}
            <a href="#" className="link-muted">
              Privacy policy
            </a>
            .
          </div>
        </div>
      </div>
    </div>
  );
}
