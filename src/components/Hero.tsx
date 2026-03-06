import heroImg from "@/assets/students-hero.jpg";

const Hero = () => {
  return (
    <section className="container-site">
      <div
        className="relative overflow-hidden rounded-[26px] my-4 min-h-[520px] border border-primary-foreground/10"
        role="region"
        aria-label="Greyston College hero"
        style={{ boxShadow: "var(--shadow)" }}
      >
        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center scale-[1.02] saturate-[1.05] contrast-[1.02]"
          style={{ backgroundImage: `url(${heroImg})` }}
          aria-hidden="true"
        />
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(90deg, rgba(11,31,58,.92) 0%, rgba(11,31,58,.82) 45%, rgba(11,31,58,.55) 100%)",
          }}
          aria-hidden="true"
        />

        {/* Content */}
        <div className="relative grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-7 p-10 lg:p-14">
          <div>
            <span className="pill">Achieving Excellence Together</span>
            <h1 className="font-display text-[clamp(2.2rem,4vw,3.2rem)] text-primary-foreground mt-2 mb-0">
              Greyston College
            </h1>
            <p className="text-primary-foreground/90 text-[1.05rem] leading-relaxed mt-4 mb-6">
              A premium, STEM-focused learning institution in <b>Ruwa, Zimbabwe</b> — offering both{" "}
              <b>Secondary School</b> and <b>College &amp; Skills</b> pathways, built on discipline, character, and
              academic excellence.
            </p>
            <div className="flex gap-3 flex-wrap">
              <a href="#admissions" className="btn-site-primary">Apply Now</a>
              <a href="#contact" className="btn-hero-outline">Request Information</a>
              <a href="#contact" className="btn-site-gold">Book a Visit</a>
            </div>
          </div>

          <div className="flex flex-col gap-3.5">
            {[
              { title: "Secondary School", desc: "Rigorous academic preparation with a strong STEM foundation." },
              {
                title: "College & Skills",
                desc: "Practical, career-ready programmes in technology, business and leadership.",
              },
              {
                title: "Boarding & Growth Vision",
                desc: "Expanding facilities to support modern labs, ICT, sports and boarding for 100 students.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="p-4 rounded-[18px] border border-primary-foreground/15 bg-primary-foreground/[0.08]"
              >
                <b className="text-primary-foreground">{item.title}</b>
                <p className="text-primary-foreground/80 text-[0.95rem] mt-1.5 mb-0">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
