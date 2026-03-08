const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-24">
      <div className="container-site">
        <p className="text-xs tracking-[0.3em] uppercase text-center mb-3 font-medium" style={{ color: "hsl(var(--sand))" }}>Who We Are</p>
        <h2 className="section-title">About Greystone College</h2>
        <div className="premium-divider" />
        <p className="section-intro">
          Greystone College is a modern secondary school located in Ruwa, Zimbabwe.
          The college is being built on a strong foundation of discipline, academic excellence,
          science and innovation, leadership development, and future-focused learning.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-7 items-start">
          <div className="site-card p-7">
            <h3 className="font-bold text-lg mb-3" style={{ color: "hsl(var(--turquoise-dark))" }}>Vision</h3>
            <p className="text-muted-foreground leading-relaxed">
              To become a respected centre of learning recognised for academic excellence,
              strong values, and modern educational opportunities.
            </p>

            <div className="premium-divider !my-6 !mx-0 !w-10" />

            <h3 className="font-bold text-lg mb-3" style={{ color: "hsl(var(--turquoise-dark))" }}>Mission</h3>
            <p className="text-muted-foreground leading-relaxed">
              To provide high-quality education that nurtures knowledge, leadership,
              character, and responsibility.
            </p>

            <div className="premium-divider !my-6 !mx-0 !w-10" />

            <h3 className="font-bold text-lg mb-3" style={{ color: "hsl(var(--turquoise-dark))" }}>Core Values</h3>
            <ul className="list-none pl-0 text-muted-foreground leading-[2]">
              {["Excellence", "Integrity", "Knowledge", "Leadership", "Community"].map((v) => (
                <li key={v} className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: "hsl(var(--sand))" }} />
                  {v}
                </li>
              ))}
            </ul>
          </div>

          <div className="site-card-soft p-7">
            <h3 className="font-bold text-lg mb-3" style={{ color: "hsl(var(--turquoise-dark))" }}>Leadership</h3>
            <p className="text-muted-foreground"><strong>Director:</strong> Tony Mazaiwana</p>
            <p className="text-muted-foreground"><strong>Director:</strong> Aqueline Garamukanwa</p>

            <div className="premium-divider !my-6 !mx-0 !w-10" />

            <h3 className="font-bold text-lg mb-3" style={{ color: "hsl(var(--turquoise-dark))" }}>School Identity</h3>
            <p className="text-muted-foreground leading-relaxed">
              Official colours: <strong>Dark Turquoise / Airforce Blue</strong> and <strong>Sand / Gold</strong>.
            </p>
            <p className="text-muted-foreground mt-1 leading-relaxed">
              Official crest symbolises knowledge, leadership, science, and growth.
            </p>

            <div className="flex flex-wrap gap-3 justify-center mt-6">
              {["Knowledge", "Leadership", "Science", "Growth"].map((badge) => (
                <div
                  key={badge}
                  className="bg-card border rounded-full py-2.5 px-5 font-bold text-sm transition-all duration-200 hover:scale-105"
                  style={{
                    color: "hsl(var(--turquoise-dark))",
                    borderColor: "hsl(var(--border))",
                    boxShadow: "0 4px 16px rgba(0, 0, 0, 0.05)",
                  }}
                >
                  {badge}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
