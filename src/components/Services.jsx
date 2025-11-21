import React from "react";
import styles from "./Services.module.css";

export default function Services() {
  return (
    <section id="services" className={styles.servicesSection}>
      <div className="section-header">
        <div>
          <div className="section-kicker">What we do</div>
          <h2 className="section-title">Our Services</h2>
        </div>
        <p className="section-subtitle">
          From cloud platforms to AI-driven products and embedded systems, we help
          teams ship production-grade software.
        </p>
      </div>

      <div className="services-grid">
        <div className="service-card">
          <div className="service-title">Enterprise Application Development</div>
          <ul className="service-list">
            <li>Microservices on Node.js, .NET Core, Django</li>
            <li>Modern web front-ends using Angular, React, Vue</li>
            <li>Serverless backends with AWS Lambda &amp; DynamoDB</li>
            <li>Docker packaging and Kubernetes deployments</li>
          </ul>
        </div>

        <div className="service-card">
          <div className="service-title">Artificial Intelligence &amp; ML</div>
          <ul className="service-list">
            <li>Custom model development for your datasets</li>
            <li>Cloud and on-prem model serving &amp; MLOps</li>
            <li>End-to-end AI product definition and delivery</li>
            <li>Computer vision and intelligent document workflows</li>
          </ul>
        </div>

        <div className="service-card">
          <div className="service-title">Mobile Application Development</div>
          <ul className="service-list">
            <li>Native Android applications</li>
            <li>Hybrid apps using Ionic and Angular/React</li>
            <li>Cross-platform apps with Flutter &amp; React Native</li>
            <li>Offline-ready apps and progressive web apps</li>
          </ul>
        </div>

        <div className="service-card">
          <div className="service-title">Embedded &amp; IoT Software</div>
          <ul className="service-list">
            <li>Linux, QNX, and Windows Embedded platforms</li>
            <li>Web-based control interfaces for devices</li>
            <li>Middleware, APIs and protocol integration</li>
            <li>IoT device management and remote control</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
