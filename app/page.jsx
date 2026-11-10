import Link from "next/link";
import { SectionTab, CtaBand } from "../components/SectionTab";

const CALENDLY = "https://calendly.com/raegan-holladay";

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="wrap">
          <p className="credential">
            Harvard-trained attorney · Experienced advocate · Fellow parent
          </p>
          <h1>
            Helping parents navigate special education with practical,
            confident guidance.
          </h1>
          <p className="lede">
            Whether you&rsquo;re facing your first IEP meeting, struggling to
            get school support, or wondering if your child qualifies for
            services, you don&rsquo;t have to figure it out alone.
          </p>
          <div className="btn-row">
            <a
              className="btn btn-primary"
              href={`${CALENDLY}/iep-strategy-session`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Book Your Strategy Session
            </a>
            <Link className="btn btn-secondary" href="/free-resources">
              Get the Free IEP Starter Guide
            </Link>
          </div>
        </div>
      </section>

      <section className="alt">
        <div className="wrap">
          <SectionTab>You&rsquo;re not alone</SectionTab>
          <div className="split">
            <div>
              <h2>Navigating special education can feel overwhelming.</h2>
              <p style={{ marginTop: "1rem" }}>
                You don&rsquo;t need to become a special education expert
                overnight. Sometimes a single conversation provides the clarity
                and direction you&rsquo;ve been looking for. Many parents leave
                with a clear action plan and greater confidence about their
                next steps.
              </p>
            </div>
            <div>
              <p><strong>Parents often come to me because they:</strong></p>
              <ul className="check-list">
                <li>Don&rsquo;t understand the IEP process</li>
                <li>Feel intimidated during school meetings</li>
                <li>Aren&rsquo;t sure whether their child qualifies for services</li>
                <li>Suspect their child needs more support than the school provides</li>
                <li>Have concerns about behavior, accommodations, or progress</li>
                <li>Want a clear plan before an upcoming meeting</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <SectionTab>How I can help</SectionTab>
          <h2>Four ways to get support</h2>
          <div className="card-grid">
            <div className="card">
              <h3>Strategy Sessions</h3>
              <p>
                A focused one-on-one consultation to discuss your concerns,
                answer questions, and develop a plan for moving forward:
                eligibility, IEPs, 504 plans, school communication, behavior
                and discipline, and advocacy planning.
              </p>
              <a
                className="btn btn-secondary"
                href={`${CALENDLY}/iep-strategy-session`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Book a Strategy Session
              </a>
            </div>
            <div className="card">
              <h3>Document Review</h3>
              <p>
                Professional feedback on your child&rsquo;s educational
                records, evaluations, IEP, or 504 Plan, identifying strengths,
                concerns, and areas that may warrant further attention.
              </p>
              <a
                className="btn btn-secondary"
                href={`${CALENDLY}/document-review`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Book a Document Review
              </a>
            </div>
            <div className="card">
              <h3>Meeting Preparation</h3>
              <p>
                Walk into your next school meeting prepared and confident.
                Together we&rsquo;ll review the agenda, identify priorities,
                develop questions, and create a strategy for the meeting.
              </p>
              <a
                className="btn btn-secondary"
                href={`${CALENDLY}/iep-meeting-preparation-session`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Book Meeting Prep
              </a>
            </div>
            <div className="card">
              <h3>Local Advocacy Support</h3>
              <p>
                For families in the Metro Atlanta area, limited advocacy
                support may be available for school meetings and other special
                education matters.
              </p>
              <Link className="btn btn-secondary" href="/contact">
                Ask About Availability
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="alt">
        <div className="wrap">
          <SectionTab>Meet Raegan</SectionTab>
          <div className="split">
            <div>
              <h2>Informed parents are powerful advocates.</h2>
              <p style={{ marginTop: "1rem" }}>
                I&rsquo;m a Harvard Law School graduate, attorney, and parent
                who understands that educational decisions can have a profound
                impact on a child&rsquo;s future. For years, I have helped
                families navigate complex legal and educational issues, so
                parents can understand their options, communicate effectively
                with schools, and advocate confidently for their children.
              </p>
              <div className="btn-row mt-2">
                <Link
                  className="btn btn-secondary"
                  href="/about-raegan-holladay-iep-advocate"
                >
                  Learn More About Raegan
                </Link>
              </div>
            </div>
            <div>
              {/* Replace with Raegan's photo: /public/raegan.jpg */}
              <div
                style={{
                  background: "var(--paper)",
                  border: "1px solid var(--line)",
                  borderRadius: "var(--radius)",
                  padding: "2rem",
                  textAlign: "center",
                  color: "var(--brand)",
                  fontFamily: "'Bricolage Grotesque', system-ui, sans-serif",
                }}
              >
                Photo of Raegan
                <br />
                <small style={{ color: "var(--ink-soft)" }}>
                  (drop raegan.jpg into /public and swap this placeholder)
                </small>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <SectionTab>Free resources</SectionTab>
          <h2>Special education shouldn&rsquo;t feel like a foreign language.</h2>
          <p className="section-intro" style={{ marginTop: "0.8rem" }}>
            Access free guides, checklists, and educational resources designed
            to help parents better understand the special education process.
          </p>
          <div className="btn-row mt-2">
            <Link className="btn btn-primary" href="/free-resources">
              Download Free Resources
            </Link>
          </div>
        </div>
      </section>

      <CtaBand
        heading="Ready to take the next step?"
        body="Whether you're preparing for an upcoming meeting, reviewing an IEP, or simply trying to understand your options, I'm here to help."
        buttonLabel="Book Your Strategy Session"
        buttonHref={`${CALENDLY}/iep-strategy-session`}
      />
    </>
  );
}
