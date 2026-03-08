import heroImg from "@/assets/students-hero.jpg";

const Hero = () => {
  return (
    <section className="container-site">
      <div
        className="relative overflow-hidden rounded-[26px] my-4 min-h-[520px] border border-primary-foreground/10"
        role="region"
        aria-label="Greystone College hero"
        style={{ boxShadow: "var(--shadow)" }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center scale-[1.02] saturate-[1.05] contrast-[1.02]"
          style={{ backgroundImage: `url(${heroImg})` }}
          aria-hidden="true"
        />
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(90deg, hsla(178,76%,25%,.92) 0%, hsla(178,76%,25%,.82) 45%, hsla(178,76%,25%,.55) 100%)",
          }}
          aria-hidden="true"
        />

        <div className="relative flex flex-col items-center justify-center text-center p-10 lg:p-14 min-h-[520px]">
          <span className="pill">Achieving Excellence Together</span>
          <h1 className="font-display text-[clamp(2.2rem,4vw,3.2rem)] text-primary-foreground mt-2 mb-0">
            Welcome to Greystone College
          </h1>
          <p className="text-primary-foreground/90 text-[1.05rem] leading-relaxed mt-4 mb-2 max-w-2xl">
            A modern secondary school in Ruwa focused on excellence, leadership and innovation.
          </p>
          <p className="text-primary-foreground/70 italic text-sm">
            Kubudirira Mukurumbira Tiri Pamwechete
          </p>
          <div className="flex gap-3 flex-wrap mt-6">
            <a href="#admissions" className="btn-site-primary">Apply Now</a>
            <a href="#contact" className="btn-hero-outline">Contact Us</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
