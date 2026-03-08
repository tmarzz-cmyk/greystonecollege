const Partnerships = () => {
  return (
    <section id="partnerships" className="py-20 md:py-24">
      <div className="container-site">
        <p className="text-xs tracking-[0.3em] uppercase text-center mb-3 font-medium" style={{ color: "hsl(var(--sand))" }}>Collaboration</p>
        <h2 className="section-title">Strategic Partnerships</h2>
        <div className="premium-divider" />
        <p className="section-intro">
          Greystone College aims to create meaningful collaborations that strengthen student learning
          and prepare young people for life beyond the classroom.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          <div className="site-card p-7">
            <h3 className="font-bold text-lg mb-3" style={{ color: "hsl(var(--turquoise-dark))" }}>Financial Literacy</h3>
            <p className="text-muted-foreground leading-relaxed">
              The college is exploring a potential partnership with <strong>First Capital Bank</strong>{" "}
              to support financial literacy, entrepreneurship awareness, and practical student programmes.
            </p>
          </div>

          <div className="site-card p-7">
            <h3 className="font-bold text-lg mb-3" style={{ color: "hsl(var(--turquoise-dark))" }}>Future-Focused Development</h3>
            <p className="text-muted-foreground leading-relaxed">
              Greystone College combines academic excellence with modern learning,
              strategic planning, and practical life preparation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partnerships;
