import React from "react";
import styles from "./Hero.module.css";

export default function Hero() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className={`hero ${styles.heroSection}`}>
      <div className="hero-text">
        <div className="hero-kicker">Digital product studio</div>
        <h1 className="hero-title">
          Innovation, Consulting &amp; <span>Engineering</span>
        </h1>
        <p className="hero-subtitle">
          We partner with teams to design, build and scale next-generation software
          products – from core platforms to intelligent, cloud-native solutions.
        </p>

        <div className="hero-tags">
          <div className="hero-tag">Enterprise Apps</div>
          <div className="hero-tag">Cloud &amp; DevOps</div>
          <div className="hero-tag">AI &amp; ML</div>
          <div className="hero-tag">Embedded &amp; IoT</div>
        </div>

        <div className="hero-actions">
          <button className="btn-primary" onClick={() => scrollTo("contact")}>
            Start a conversation →
          </button>
          <button className="btn-ghost" onClick={() => scrollTo("projects")}>
            View key projects
          </button>
        </div>

        <div className="hero-meta">
          <div className="hero-stat">
            <span>Multi-domain</span>
            <small>Automotive · Industrial · Gaming</small>
          </div>
          <div className="hero-stat">
            <span>Deep tech</span>
            <small>Cloud, AI, Embedded &amp; Mobile systems</small>
          </div>
        </div>
      </div>

      <div className="hero-visual">
        <div className="hero-grid">
          <div className="pill">
            <div className="pill-title">Enterprise Platforms</div>
            <div className="pill-body">
              Microservices on Node.js, .NET, and Python, tuned for scale and resilience.
            </div>
            <div className="pill-tag">API-first · Observability-ready</div>
          </div>
          <div className="pill">
            <div className="pill-title">AI &amp; ML Solutions</div>
            <div className="pill-body">
              Custom models, MLOps pipelines and deployment to cloud or on-prem.
            </div>
            <div className="pill-tag">Computer Vision · Speech</div>
          </div>
          <div className="pill">
            <div className="pill-title">Mobile Experiences</div>
            <div className="pill-body">
              Native and cross-platform apps with offline-first capabilities.
            </div>
            <div className="pill-tag">Android · Flutter · Ionic</div>
          </div>
          <div className="pill">
            <div className="pill-title">Embedded Engineering</div>
            <div className="pill-body">
              From OS-level work to device connectivity and IoT control planes.
            </div>
            <div className="pill-tag">Linux · QNX · Windows IoT</div>
          </div>
        </div>
        <div className="hero-orbit" />
      </div>
    </section>
  );
}
