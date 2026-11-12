import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-grid">
          <div>
            <h3>Raegan Holladay Advocacy</h3>
            <p>
              Practical special-education guidance for parents, from a
              Harvard-trained attorney, experienced advocate, and fellow parent.
            </p>
          </div>
          <div>
            <h3>Site</h3>
            <ul>
              <li><Link href="/iep-advocacy">Work With Me</Link></li>
              <li><Link href="/iep-special-education-courses-for-parents">Courses</Link></li>
              <li><Link href="/free-resources">Free Resources</Link></li>
              <li><Link href="/about-raegan-holladay-iep-advocate">About</Link></li>
            </ul>
          </div>
          <div>
            <h3>Connect</h3>
            <ul>
              <li><Link href="/contact">Contact</Link></li>
              <li><Link href="/faqs-iep-meaning">FAQs</Link></li>
              <li>
                <a
                  href="https://calendly.com/raegan-holladay/iep-strategy-session"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book a Strategy Session
                </a>
              </li>
            </ul>
          </div>
        </div>
        <p className="copyright">
          Copyright © {new Date().getFullYear()} Raegan Holladay Advocacy,
          LLC. This website provides general information and does not
          constitute legal advice.
        </p>
      </div>
    </footer>
  );
}
