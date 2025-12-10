import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <header className={styles.nav}>
      <div className={styles.inner}>
        <div className={styles.brand}>HireOn</div>

        <nav className={styles.links}>
          <Link className={styles.link} to="/">
            Home
          </Link>
          <Link className={styles.link} to="/jobs">
            Jobs
          </Link>
          <Link className={styles.link} to="/practice">
            Practice
          </Link>
          <Link className={styles.link} to="/profile">
            Profile
          </Link>

          <Link to="/login" className={styles.signIn}>
            Sign in
          </Link>
          <Link to="/signup" className={styles.signUp}>
            Sign up
          </Link>
        </nav>
      </div>
    </header>
  );
}
