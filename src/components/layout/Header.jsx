import React from "react";
import { Link } from "react-router-dom";
import "../../styles/header.css";

const styles = {
  header: {
    background: "#007bff",
    padding: "15px",
    textAlign: "center",
  },
  nav: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
  },
  link: {
    color: "#fff",
    textDecoration: "none",
    fontSize: "18px",
    fontWeight: "bold",
  },
};

const Header = () => {
  return (
    <header style={styles.header}>
      <nav style={styles.nav}>
        <Link to="/" style={styles.link}>
          Home
        </Link>
        <Link to="/about" style={styles.link}>
          About
        </Link>
        <Link to="/contact" style={styles.link}>
          Contact
        </Link>
      </nav>
    </header>
  );
};

export default Header;
