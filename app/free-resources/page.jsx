import { SectionTab, CtaBand } from "../../components/SectionTab";

export const metadata = {
  title: "Free Resources for Parents | Raegan Holladay Advocacy",
  description:
    "Free guides, checklists, and educational resources to help parents understand the special education process.",
};

export default function FreeResources() {
  return (
    <>
      <section className="hero">
        <div className="wrap">
          <SectionTab>Free resources</SectionTab>
          <h1>Guides and checklists, free for parents.</h1>
          <p className="lede">
            Special education shouldn&rsquo;t feel like a foreign language.
            These resources are designed to help you understand the process,
            know your rights, and walk into every conversation prepared.
          </p>
        </div>
      </section>

      <section className="alt">
        <div className="wrap">
          <div className="card-grid">
            {/*
              RESOURCE CARDS: duplicate for each downloadable.
              Put PDF files in /public/resources/ and link directly,
              e.g. href="/resources/iep-starter-guide.pdf"
            */}
            <div className="card">
              <h3>The Free IEP Starter Guide</h3>
              <p>
                The essentials of the IEP process in plain language: what to
                expect, what to ask, and where to start.
              </p>
              <a className="btn btn-secondary" href="#">
                Coming Soon
              </a>
            </div>
            <div className="card">
              <h3>IEP Meeting Checklist</h3>
              <p>
                A simple pre-meeting checklist to organize your documents,
                priorities, and questions before you sit down with the school.
              </p>
              <a className="btn btn-secondary" href="#">
                Coming Soon
              </a>
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        heading="Have a question a guide can't answer?"
        body="Sometimes a single conversation provides the clarity you've been looking for."
        buttonLabel="Book Your Strategy Session"
        buttonHref="https://calendly.com/raegan-holladay/iep-strategy-session"
      />
    </>
  );
}
