import React from "react";
import styles from "./Projects.module.css";

export default function Projects() {
  return (
    <section id="projects" className={styles.projectsSection}>
      <div className="section-header">
        <div>
          <div className="section-kicker">Selected work</div>
          <h2 className="section-title">Key Projects</h2>
        </div>
        <p className="section-subtitle">
          A snapshot of the platforms we have helped design and build with our
          partners.
        </p>
      </div>

      <div className="projects-grid">
        <div className="project-card">
          <div className="project-label">GovTech · Civil Registry</div>
          <div className="project-title">
            Civil Registration &amp; Vital Statistics Platform
          </div>
          <p>
            Country-scale system to record births, deaths and major life events,
            enabling citizens to access essential services and governments to make
            data-driven decisions.
          </p>
          <div className="project-meta">
            <p>
              <strong>Scope.</strong> Microservices backend (Node.js, MongoDB),
              React-based front-end, continuous feature delivery for new event
              types and workflows.
            </p>
          </div>
          <div className="project-challenges">
            <strong>Challenges.</strong>
            <ul>
              <li>Very dynamic requirements and scope changes</li>
              <li>Coordination with multiple agencies and vendors</li>
              <li>Hybrid deployments across AWS and private DCs</li>
              <li>Biometric fingerprint integration in the web UI</li>
            </ul>
          </div>
        </div>

        <div className="project-card">
          <div className="project-label">Commerce · Logistics</div>
          <div className="project-title">
            E-Commerce Platform for Multi-Vendor Markets
          </div>
          <p>
            Marketplace that connects small vendors and local markets with city-wide
            customers, designed to support sellers affected by restrictions and
            disruptions.
          </p>
          <div className="project-meta">
            <p>
              <strong>Scope.</strong> Serverless e-commerce core on AWS Lambda
              (Node.js) with DynamoDB, React admin portal, Ionic mobile apps for
              customers and delivery partners.
            </p>
          </div>
          <div className="project-challenges">
            <strong>Challenges.</strong>
            <ul>
              <li>Delivering a production MVP in about a month</li>
              <li>Payment gateway integration and edge-case handling</li>
              <li>Complex ordering, cancellation and routing flows</li>
              <li>Fair order allocation using round-robin logic</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
