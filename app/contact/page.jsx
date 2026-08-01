"use client";

import { useState } from "react";
import { SectionTab } from "../../components/SectionTab";

/*
  FORM SEAM: this form currently opens the visitor's email client
  (zero backend needed — works on day one). To upgrade it later to
  the Supabase pattern from BattingCageLand, replace handleSubmit
  with a POST to a /app/api/contact/route.js handler that inserts
  into a Supabase table. The UI won't need to change.
*/

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = () => {
    const subject = encodeURIComponent(
      `Website inquiry from ${form.name || "a parent"}`
    );
    const body = encodeURIComponent(
      `${form.message}\n\nFrom: ${form.name} (${form.email})`
    );
    window.location.href = `mailto:contact@raeganking.com?subject=${subject}&body=${body}`;
  };

  return (
    <>
      <section className="hero">
        <div className="wrap">
          <SectionTab>Contact</SectionTab>
          <h1>Get in touch.</h1>
          <p className="lede">
            Questions about working together, local advocacy availability in
            Metro Atlanta, or anything else — send a message and I&rsquo;ll get
            back to you.
          </p>
        </div>
      </section>

      <section className="alt">
        <div className="wrap">
          <div className="form-grid">
            <div>
              <label htmlFor="name">Name</label>
              <input
                id="name"
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
            </div>
            <div>
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                rows={6}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
              />
            </div>
            <div>
              <button className="btn btn-primary" onClick={handleSubmit}>
                Send Message
              </button>
            </div>
          </div>
          <p style={{ marginTop: "1.6rem", fontSize: "0.9rem" }}>
            Prefer to book directly? Head straight to a{" "}
            <a
              href="https://calendly.com/raegan-holladay/iep-strategy-session"
              target="_blank"
              rel="noopener noreferrer"
            >
              Strategy Session
            </a>
            .
          </p>
        </div>
      </section>
    </>
  );
}
