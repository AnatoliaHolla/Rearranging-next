"use client";

import { useState } from "react";
import Link from "next/link";

/*
  LOGO: drop Raegan's existing logo file into /public/logo.png
  and uncomment the <img> below. Until then, the styled text
  brand mark renders in its place.
*/

const links = [
  { href: "/", label: "Home" },
  { href: "/iep-advocacy", label: "Work With Me" },
  { href: "/iep-special-education-courses-for-parents", label: "Courses" },
  { href: "/free-resources", label: "Free Resources" },
  { href: "/about-raegan-holladay-iep-advocate", label: "About" },
  { href: "/faqs-iep-meaning", label: "FAQs" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="wrap">
        <Link href="/" className="brand-link" onClick={() => setOpen(false)}>
          <img src="/logo.png" alt="Raegan Holladay, IEP Coach & Parent Advocate" className="brand-logo" />
        </Link>

        <button
          className="menu-btn"
          aria-expanded={open}
          aria-label="Toggle navigation menu"
          onClick={() => setOpen(!open)}
        >
          ☰ Menu
        </button>

        <nav className={`nav ${open ? "open" : ""}`}>
          {links.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </Link>
          ))}
          <a
            className="nav-cta"
            href="https://calendly.com/raegan-holladay/iep-strategy-session"
            target="_blank"
            rel="noopener noreferrer"
          >
            Book a Session
          </a>
        </nav>
      </div>
    </header>
  );
}
