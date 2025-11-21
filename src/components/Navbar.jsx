import React from "react";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <header className={styles.header}>
      <nav className="nav">
        <div className="logo">
          <div className="logo-mark">
            <div className="logo-inner">IT</div>
          </div>
          <div className="logo-text">
            <span>iTechiee LLP</span>
            <span>Innovation · Consulting · Engineering</span>
          </div>
        </div>
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#projects">Projects</a>
          <a href="#rnd">R&amp;D</a>
          <a href="#contact">Contact</a>
        </div>
        <a href="#contact" className="nav-cta">
          Let&apos;s talk
        </a>
      </nav>
    </header>
  );
}
