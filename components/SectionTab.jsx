export function SectionTab({ children }) {
  return (
    <>
      <span className="tab">{children}</span>
      <div className="tab-rule" />
    </>
  );
}

export function CtaBand({ heading, body, buttonLabel, buttonHref }) {
  return (
    <section className="alt">
      <div className="wrap">
        <SectionTab>Next step</SectionTab>
        <h2>{heading}</h2>
        <p className="section-intro" style={{ marginTop: "0.8rem" }}>{body}</p>
        <div className="btn-row mt-2">
          <a
            className="btn btn-primary"
            href={buttonHref}
            target={buttonHref.startsWith("http") ? "_blank" : undefined}
            rel="noopener noreferrer"
          >
            {buttonLabel}
          </a>
        </div>
      </div>
    </section>
  );
}
