const AboutSection = () => {
  return (
    <section id="about" className="py-[72px]">
      <div className="container-site">
        <h2 className="section-title">About Greystone College</h2>
        <p className="section-intro">
          Greystone College is a modern secondary school located in Ruwa, Zimbabwe.
          The college is being built on a strong foundation of discipline, academic excellence,
          science and innovation, leadership development, and future-focused learning.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-7 items-start">
          {/* Vision / Mission / Values */}
          <div className="site-card p-6">
            <h3 className="font-bold text-lg mb-2.5" style={{ color: "hsl(var(--turquoise-dark))" }}>Vision</h3>
            <p className="text-muted-foreground">
              To become a respected centre of learning recognised for academic excellence,
              strong values, and modern educational opportunities.
            </p>

            <div className="h-5" />

            <h3 className="font-bold text-lg mb-2.5" style={{ color: "hsl(var(--turquoise-dark))" }}>Mission</h3>
            <p className="text-muted-foreground">
              To provide high-quality education that nurtures knowledge, leadership,
              character, and responsibility.
            </p>

            <div className="h-5" />

            <h3 className="font-bold text-lg mb-2.5" style={{ color: "hsl(var(--turquoise-dark))" }}>Core Values</h3>
            <ul className="list-disc pl-5 text-muted-foreground leading-[1.8]">
              <li>Excellence</li>
              <li>Integrity</li>
              <li>Knowledge</li>
              <li>Leadership</li>
              <li>Community</li>
            </ul>
          </div>

          {/* Leadership & Identity */}
          <div className="site-card-soft p-6">
            <h3 className="font-bold text-lg mb-2.5" style={{ color: "hsl(var(--turquoise-dark))" }}>Leadership</h3>
            <p className="text-muted-foreground"><strong>Director:</strong> Tony Mazaiwana</p>
            <p className="text-muted-foreground"><strong>Director:</strong> Aqueline Garamukanwa</p>

            <div className="h-5" />

            <h3 className="font-bold text-lg mb-2.5" style={{ color: "hsl(var(--turquoise-dark))" }}>School Identity</h3>
            <p className="text-muted-foreground">
              Official colours: <strong>Dark Turquoise / Airforce Blue</strong> and <strong>Sand / Gold</strong>.
            </p>
            <p className="text-muted-foreground mt-1">
              Official crest symbolises knowledge, leadership, science, and growth.
            </p>

            <div className="flex flex-wrap gap-3 justify-center mt-5">
              {["Knowledge", "Leadership", "Science", "Growth"].map((badge) => (
                <div
                  key={badge}
                  className="bg-card border rounded-full py-2.5 px-4 font-bold text-sm"
                  style={{
                    color: "hsl(var(--turquoise-dark))",
                    borderColor: "hsl(var(--border))",
                    boxShadow: "var(--shadow)",
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
