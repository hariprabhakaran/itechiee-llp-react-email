import React from "react";
import styles from "./About.module.css";

export default function About() {
  return (
    <section id="about" className={styles.aboutSection}>
      <div className="section-header">
        <div>
          <div className="section-kicker">Who we are</div>
          <h2 className="section-title">About iTechiee LLP</h2>
        </div>
        <p className="section-subtitle">
          A focused team of engineers building deep-tech products and platforms
          across multiple industries.
        </p>
      </div>

      <div className="about">
        <div className="card">
          <div className="about-body">
            <p>
              iTechiee LLP is a software engineering studio formed by experienced
              architects and developers passionate about solving hard, real-world
              problems with technology.
            </p>
            <p>
              Our core strength is product engineering: shaping ideas, choosing the
              right stack, and delivering reliable systems that can evolve over time.
              We work end-to-end – from discovery and architecture to development,
              deployment and long-term support.
            </p>
            <div className="about-list">
              <span><span className="dot" /> Automotive platforms</span>
              <span><span className="dot" /> Industrial systems</span>
              <span><span className="dot" /> Healthcare &amp; GovTech</span>
              <span><span className="dot" /> E-commerce &amp; consumer apps</span>
            </div>
          </div>
        </div>

        <div className="card">
          <h3 style={{ fontSize: "0.95rem", marginBottom: "0.6rem" }}>How we work</h3>
          <ul className="service-list">
            <li>Product-first mindset with clear technical roadmaps</li>
            <li>Small, senior pods aligned to your business outcomes</li>
            <li>Transparent delivery with agile, iterative releases</li>
            <li>DevSecOps practices baked into architecture and code</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
