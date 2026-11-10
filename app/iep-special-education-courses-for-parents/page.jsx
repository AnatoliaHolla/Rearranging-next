import { SectionTab, CtaBand } from "../../components/SectionTab";

export const metadata = {
  title: "Special Education Courses for Parents | Raegan Holladay Advocacy",
  description:
    "Self-paced courses that help parents understand the IEP process and advocate confidently for their children.",
};

export default function Courses() {
  return (
    <>
      <section className="hero">
        <div className="wrap">
          <SectionTab>Courses</SectionTab>
          <h1>Learn the process on your own schedule.</h1>
          <p className="lede">
            Self-paced courses designed to turn the special education process
            from a foreign language into something you can navigate with
            confidence, built from years of real advocacy experience.
          </p>
        </div>
      </section>

      <section className="alt">
        <div className="wrap">
          <div className="card-grid">
            {/*
              COURSE CARDS: duplicate this card for each course.
              Link the button to the course checkout or details page.
            */}
            <div className="card">
              <h3>IEP Fundamentals for Parents</h3>
              <p>
                Understand what an IEP is, how eligibility works, what the
                school is required to provide, and how to participate as an
                equal member of your child&rsquo;s team.
              </p>
              <a className="btn btn-secondary" href="#">
                Coming Soon
              </a>
            </div>
            <div className="card">
              <h3>Preparing for Your IEP Meeting</h3>
              <p>
                A step-by-step walkthrough for organizing your concerns,
                reviewing documents, asking the right questions, and leaving
                the meeting with a plan you understand.
              </p>
              <a className="btn btn-secondary" href="#">
                Coming Soon
              </a>
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        heading="Want to be notified when courses launch?"
        body="Join the email list and you'll be the first to know, plus get free resources for parents in the meantime."
        buttonLabel="Join the Email List"
        buttonHref="/contact"
      />
    </>
  );
}
