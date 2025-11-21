import React from "react";
import styles from "./RnD.module.css";

export default function RnD() {
  return (
    <section id="rnd" className={styles.rndSection}>
      <div className="section-header">
        <div>
          <div className="section-kicker">Exploration</div>
          <h2 className="section-title">Research &amp; Development</h2>
        </div>
        <p className="section-subtitle">
          Alongside delivery, we invest in prototypes and accelerators in healthcare
          and data-exchange ecosystems.
        </p>
      </div>

      <div className="rd-grid">
        <div className="rd-card">
          <div className="rd-title">Health Information Exchange on OpenHIE</div>
          <p>
            Investigating interoperability patterns, registries and reference
            architectures for national-scale health data exchange built on
            standards-based components.
          </p>
        </div>
        <div className="rd-card">
          <div className="rd-title">Speech Recognition for Clinicians</div>
          <p>
            Experiments with speech-to-text workflows for medical dictation, note
            taking and structured data capture to reduce documentation friction.
          </p>
        </div>
        <div className="rd-card">
          <div className="rd-title">AI-Assisted Imaging for Lung Diseases</div>
          <p>
            Prototyping decision-support pipelines that score radiology scans to
            highlight potential findings and support clinicians in triage.
          </p>
        </div>
      </div>
    </section>
  );
}
