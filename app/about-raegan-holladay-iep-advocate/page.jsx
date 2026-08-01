import { SectionTab, CtaBand } from "../../components/SectionTab";

export const metadata = {
  title: "About Raegan Holladay | IEP Advocate & Attorney",
  description:
    "Raegan Holladay is a Harvard Law School graduate, attorney, and parent helping families navigate special education.",
};

export default function About() {
  return (
    <>
      <section className="hero">
        <div className="wrap">
          <SectionTab>About</SectionTab>
          <h1>Attorney. Advocate. Fellow parent.</h1>
          <p className="lede">
            I&rsquo;m a Harvard Law School graduate, attorney, and parent who
            understands that educational decisions can have a profound impact
            on a child&rsquo;s future.
          </p>
        </div>
      </section>

      <section className="alt">
        <div className="wrap">
          <div className="split">
            <div>
              {/* Replace with Raegan's photo: /public/raegan.jpg */}
              <div
                style={{
                  background: "var(--paper)",
                  border: "1px solid var(--line)",
                  borderRadius: "var(--radius)",
                  padding: "3rem 2rem",
                  textAlign: "center",
                  color: "var(--brand)",
                  fontFamily: "'Bricolage Grotesque', system-ui, sans-serif",
                }}
              >
                Photo of Raegan
              </div>
            </div>
            <div>
              <h2>Why I do this work</h2>
              <p style={{ marginTop: "1rem" }}>
                For years, I have helped families navigate complex legal and
                educational issues. My goal is to help parents understand their
                options, communicate effectively with schools, and advocate
                confidently for their children.
              </p>
              <p style={{ marginTop: "1rem" }}>
                I believe informed parents are powerful advocates. You
                don&rsquo;t need to become a special education expert overnight
                — you need clear information, a practical plan, and someone in
                your corner who has seen how this process works from every
                side.
              </p>
              {/*
                EXPAND HERE: Raegan can add her fuller story — credentials,
                bar admissions, her experience as a parent, and what families
                can expect when working with her.
              */}
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        heading="Let's talk about your child's situation."
        body="A Strategy Session is the simplest way to get started — one conversation, focused entirely on your family."
        buttonLabel="Book Your Strategy Session"
        buttonHref="https://calendly.com/raegan-holladay/iep-strategy-session"
      />
    </>
  );
}
