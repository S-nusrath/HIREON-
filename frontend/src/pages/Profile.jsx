// src/pages/Profile.jsx
//import { AuthContext } from "../context/AuthContext";
import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function Profile() {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return (
      <div className="container">
        <div className="card">Loading profile...</div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="container">
        <div className="card" style={{ color: "red" }}>
          Not Signed In
        </div>
      </div>
    );
  }

  // Avatar (fallback)
  const avatarUrl =
    user.avatar ||
    `https://ui-avatars.com/api/?name=${encodeURIComponent(
      user.name
    )}&background=4f46e5&color=fff`;

  return (
    <div className="container" style={{ paddingTop: 20 }}>
      <div
        className="card"
        style={{
          display: "grid",
          gridTemplateColumns: "160px 1fr",
          gap: 16,
          alignItems: "start",
        }}
      >
        {/* LEFT */}
        <div style={{ textAlign: "center" }}>
          <img
            src={avatarUrl}
            alt="avatar"
            style={{
              width: 120,
              height: 120,
              borderRadius: "999px",
              objectFit: "cover",
            }}
          />
          <div style={{ marginTop: 12 }}>
            <strong>{user.name}</strong>
            <div className="small" style={{ color: "#6b7280" }}>
              {user.email}
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div>
          <h3 style={{ marginTop: 0 }}>Profile</h3>

          <div style={{ display: "grid", gap: 8 }}>
            <div>
              <strong>Branch:</strong> {user.branch || "—"}
            </div>
            <div>
              <strong>Year:</strong> {user.year || "—"}
            </div>
            <div>
              <strong>Member since:</strong>{" "}
              {user.createdAt
                ? new Date(user.createdAt).toLocaleDateString()
                : "—"}
            </div>
          </div>

          <div style={{ marginTop: 16 }}>
            <button
              className="btn"
              onClick={() => {
                navigator.clipboard.writeText(user.email);
                alert("Email copied");
              }}
            >
              Copy Email
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

