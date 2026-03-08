import AnimatedSection from "./AnimatedSection";

const Admissions = () => {
  return (
    <section id="admissions" className="soft-bg py-20 md:py-24">
      <div className="container-site">
        <AnimatedSection>
          <p className="text-xs tracking-[0.3em] uppercase text-center mb-3 font-medium" style={{ color: "hsl(var(--sand))" }}>Enrol</p>
          <h2 className="section-title">Admissions</h2>
          <div className="premium-divider" />
          <p className="section-intro">
            Greystone College initially welcomes students for Forms 1 to 3 and will expand
            as the college grows in line with its master development plan.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          <AnimatedSection animation="slideLeft" delay={0.15}>
            <div className="site-card p-7">
              <h3 className="font-bold text-lg mb-4" style={{ color: "hsl(var(--turquoise-dark))" }}>Application Requirements</h3>
              <ul className="list-none pl-0 text-muted-foreground leading-[2.2]">
                {["Birth certificate copy", "Latest school report", "Passport-size photograph"].map((item) => (
                  <li key={item} className="flex items-center gap-2.5">
                    <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: "hsl(var(--sand))" }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="slideRight" delay={0.3}>
            <div className="site-card p-7">
              <h3 className="font-bold text-lg mb-4" style={{ color: "hsl(var(--turquoise-dark))" }}>Admissions Enquiries</h3>
              <p className="text-muted-foreground leading-relaxed">
                To begin the application process, contact the admissions office using the official email below.
              </p>
              <p className="mt-4">
                <a href="mailto:admissions@greyston-college.com" className="font-bold transition-colors hover:underline" style={{ color: "hsl(var(--turquoise-dark))" }}>
                  admissions@greyston-college.com
                </a>
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Admissions;
