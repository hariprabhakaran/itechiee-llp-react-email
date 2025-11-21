import React from "react";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footerRoot}>
      <div className="footer-inner">
        <div>
          <div>© iTechiee LLP. All rights reserved.</div>
        </div>
        <div className="footer-links">
          <div className="footer-links-group">
            <span>Navigate</span>
            <a href="#home">Home</a>
            <a href="#about">About us</a>
            <a href="#services">Services</a>
          </div>
          <div className="footer-links-group">
            <span>Explore</span>
            <a href="#projects">Projects</a>
            <a href="#rnd">Research &amp; Development</a>
            <a href="#contact">Contact</a>
          </div>
          <div className="footer-quote">
            “Progress comes from the people who challenge constraints and imagine
            better systems.”
          </div>
        </div>
      </div>
    </footer>
  );
}
