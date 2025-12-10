import React from "react";
import "./Home.css";

export default function Home() {
  return (
    <div className="home">

      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-overlay" />

        <div className="hero-inner">
          <div className="hero-eyebrow">
            HIREON • FOR STUDENTS & FRESHERS
          </div>

          <h1>
            Welcome to <span>HireOn</span>
          </h1>

          <p className="hero-sub">
            Real-time job listings, skill-gap hints, practice arena, and a smart
            resume builder — everything you need to land your first paid internship or job.
          </p>

          <div className="hero-buttons">
            <button className="btn-primary">Start Practicing</button>
            <button className="btn-outline">Browse Jobs</button>
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="features">
        <div className="features-header">
          <p className="features-eyebrow">What you get with HireOn</p>
          <h2>Built to help you land opportunities faster</h2>
          <p className="features-sub">
            Everything from job discovery to preparation to resume generation —
            all in one place, made for students.
          </p>
        </div>

        <div className="features-grid">

          <article className="feature-card">
            <div className="feature-icon">📡</div>
            <h3>Real-time Jobs</h3>
            <p>
              Get instant job updates, bookmarks, filters and personalized job feeds.
            </p>
          </article>

          <article className="feature-card">
            <div className="feature-icon">🧠</div>
            <h3>Practice Arena</h3>
            <p>
              Solve coding challenges, MCQs and mini-projects designed for IT roles.
            </p>
          </article>

          <article className="feature-card">
            <div className="feature-icon">📄</div>
            <h3>Resume Builder</h3>
            <p>
              Create beautiful ATS-friendly resumes directly from your HireOn profile.
            </p>
          </article>
        </div>
      </section>

    </div>
  );
}
