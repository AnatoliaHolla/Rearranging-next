import { SectionTab, CtaBand } from "../../components/SectionTab";

export const metadata = {
  title: "FAQs: What Is an IEP? | Raegan Holladay Advocacy",
  description:
    "Answers to common questions about IEPs, 504 plans, eligibility, and working with a special education advocate.",
};

const faqs = [
  {
    q: "What is an IEP?",
    a: "An IEP (Individualized Education Program) is a written plan, developed by a team that includes the parents, describing the special education services, supports, and goals for a child who qualifies under the Individuals with Disabilities Education Act (IDEA).",
  },
  {
    q: "What's the difference between an IEP and a 504 Plan?",
    a: "An IEP provides specialized instruction and services under IDEA for students who meet eligibility criteria. A 504 Plan provides accommodations under Section 504 of the Rehabilitation Act for students with a disability that substantially limits a major life activity, but who may not need specialized instruction.",
  },
  {
    q: "How do I know if my child qualifies for services?",
    a: "Eligibility depends on evaluation results and whether your child meets criteria under one of IDEA's disability categories and needs specialized instruction as a result. If you suspect your child needs support, you can request an evaluation from the school in writing. A Strategy Session is a good way to talk through your specific situation.",
  },
  {
    q: "Do I need an advocate or attorney for my IEP meeting?",
    a: "Not always. Many parents simply need preparation and a clear plan. That's exactly what Strategy Sessions and Meeting Preparation are designed for. For families in the Metro Atlanta area, limited in-person advocacy support may also be available.",
  },
  {
    q: "What should I bring to a Strategy Session?",
    a: "Anything you have: current IEP or 504 Plan, recent evaluations, report cards, and any school communication that concerns you. If you don't have documents yet, that's fine too. We'll start with your questions.",
  },
];

export default function Faqs() {
  return (
    <>
      <section className="hero">
        <div className="wrap">
          <SectionTab>FAQs</SectionTab>
          <h1>Common questions, plain answers.</h1>
          <p className="lede">
            The special education process comes with a lot of acronyms. Here
            are clear answers to the questions parents ask most.
          </p>
        </div>
      </section>

      <section className="alt">
        <div className="wrap" style={{ maxWidth: "820px" }}>
          {faqs.map((f) => (
            <details className="faq-item" key={f.q}>
              <summary>{f.q}</summary>
              <p>{f.a}</p>
            </details>
          ))}
          <p style={{ marginTop: "2rem", fontSize: "0.9rem" }}>
            The information on this page is general in nature and is not legal
            advice about your specific situation.
          </p>
        </div>
      </section>

      <CtaBand
        heading="Have a question that isn't here?"
        body="Bring it to a Strategy Session: one focused conversation, entirely about your child."
        buttonLabel="Book Your Strategy Session"
        buttonHref="https://calendly.com/raegan-holladay/iep-strategy-session"
      />
    </>
  );
}
