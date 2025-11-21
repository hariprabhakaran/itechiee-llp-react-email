import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import styles from "./Contact.module.css";

/**
 * IMPORTANT:
 * 1. Go to https://www.emailjs.com
 * 2. Create an account (free).
 * 3. Add an email service (Gmail / other).
 * 4. Create an email template with fields: name, email, subject, message.
 * 5. Set the TO email in the template to: hariprabhakaran.70@gmail.com
 * 6. Get your:
 *    - SERVICE ID
 *    - TEMPLATE ID
 *    - PUBLIC KEY
 * 7. Replace the placeholders below.
 */

const SERVICE_ID = "service_6dtgy9x";
const TEMPLATE_ID = "template_kxfhph8";
const PUBLIC_KEY = "t1cqI3ZxRnZXWx2A8";

export default function Contact() {
  const formRef = useRef(null);
  const [status, setStatus] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (!SERVICE_ID.startsWith("YOUR_")) {
      emailjs
        .sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, {
          publicKey: PUBLIC_KEY,
        })
        .then(
          () => {
            setStatus("✅ Message sent successfully!");
            setTimeout(() => setStatus(""), 5000);
            e.target.reset();
          },
          (error) => {
            console.error("EmailJS error:", error);
            setStatus("❌ Failed to send. Please try again later.");
          }
        );
    } else {
      // Fallback demo behavior if EmailJS is not configured
      setStatus(
        "Demo mode: configure EmailJS keys in Contact.jsx to actually send emails."
      );
      setTimeout(() => setStatus(""), 5000);
      e.target.reset();
    }
  };

  return (
    <section id="contact" className={styles.contactSection}>
      <div className="section-header">
        <div>
          <div className="section-kicker">Get in touch</div>
          <h2 className="section-title">Contact</h2>
        </div>
        <p className="section-subtitle">
          Share a problem statement or product idea and we’ll explore how we can
          help.
        </p>
      </div>

      <div className="contact-grid">
        <div className="contact-details">
          <div>
            <h4>Australia</h4>
            <p>11 Farlow PDE, Marsden Park, NSW – 2765</p>
            <p>ABN: 50 675 133 392</p>
          </div>

          <div>
            <h4>India</h4>
            <p>
              Plot No. 10, Door No. 2/563,
              <br />
              V. Nagar, Semmozhi Salai,
              <br />
              Sholinganallur Main Rd,
              <br />
              Perumbakkam, Chennai, Tamil Nadu 600100
            </p>
          </div>

          <div>
            <h4>Email</h4>
            <p>
              <a href="mailto:hariprabhakaran.70@gmail.com">
                hariprabhakaran.70@gmail.com
              </a>
            </p>
          </div>

          <div>
            <h4>Call</h4>
            <p>India: +91 93619 54376</p>
            <p>Australia: +61 452 294 331</p>
          </div>
        </div>

        <form ref={formRef} onSubmit={onSubmit}>
          <div className="form-row">
            <div>
              <label htmlFor="name">Your Name</label>
              <input id="name" name="name" required />
            </div>
            <div>
              <label htmlFor="email">Your Email</label>
              <input id="email" name="email" type="email" required />
            </div>
          </div>

          <div>
            <label htmlFor="subject">Subject</label>
            <input id="subject" name="subject" />
          </div>

          <div>
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" required />
          </div>

          <div className="form-footer">
            <button type="submit" className="btn-primary">
              Send message
            </button>
            <div className={`form-status ${status ? "visible" : ""}`}>
              {status}
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
