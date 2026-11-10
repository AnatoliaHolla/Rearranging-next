import Link from "next/link";
import { SectionTab, CtaBand } from "../../components/SectionTab";

export const metadata = {
  title: "Work With Me | Raegan Holladay Advocacy",
  description:
    "Strategy sessions, document reviews, meeting preparation, and local advocacy support for parents navigating special education.",
};

const CALENDLY = "https://calendly.com/raegan-holladay";

const services = [
  {
    title: "Strategy Session",
    body: "A focused one-on-one consultation to discuss your concerns, answer questions, and develop a practical plan for moving forward. Ideal for eligibility questions, IEP concerns, 504 plans, school communication issues, behavior and discipline matters, and parent advocacy planning.",
    cta: "Book Your Strategy Session",
    href: `${CALENDLY}/iep-strategy-session`,
  },
  {
    title: "Document Review",
    body: "Receive professional feedback on your child's educational records, evaluations, IEP, or 504 Plan. I'll help identify strengths, concerns, and areas that may warrant further attention, so you know exactly what you're looking at.",
    cta: "Book Your Document Review",
    href: `${CALENDLY}/document-review`,
  },
  {
    title: "Meeting Preparation",
    body: "Walk into your next school meeting prepared and confident. Together we'll review the agenda, identify priorities, develop questions, organize your concerns, and create a strategy for the meeting. You don't have to know all the answers. You just need a plan.",
    cta: "Book Meeting Preparation",
    href: `${CALENDLY}/iep-meeting-preparation-session`,
  },
];

export default function WorkWithMe() {
  return (
    <>
      <section className="hero">
        <div className="wrap">
          <SectionTab>Work with me</SectionTab>
          <h1>Practical support, matched to where you are.</h1>
          <p className="lede">
            Every family&rsquo;s situation is different. Choose the kind of
            help that fits yours, from a single clarity-building conversation
            to hands-on preparation for your next school meeting.
          </p>
        </div>
      </section>

      <section className="alt">
        <div className="wrap">
          <div className="card-grid">
            {services.map((s) => (
              <div className="card" key={s.title}>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
                <a
                  className="btn btn-secondary"
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {s.cta}
                </a>
              </div>
            ))}
            <div className="card">
              <h3>Local Advocacy Support</h3>
              <p>
                For families in the Metro Atlanta area, limited advocacy
                support may be available for school meetings and other special
                education matters. Reach out to discuss availability.
              </p>
              <Link className="btn btn-secondary" href="/contact">
                Contact Me
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        heading="Not sure which option fits?"
        body="Start with a Strategy Session. It's the best way to talk through your situation and decide on next steps together."
        buttonLabel="Book Your Strategy Session"
        buttonHref={`${CALENDLY}/iep-strategy-session`}
      />
    </>
  );
}
