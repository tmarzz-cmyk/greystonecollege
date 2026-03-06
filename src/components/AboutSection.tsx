import studentsReading from "@/assets/students-reading.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="container-site py-8" aria-label="About">
      <div className="section-heading">
        <div>
          <h2 className="font-display text-2xl md:text-[2rem] text-navy m-0">About Greyston College</h2>
          <p className="text-muted-foreground mt-1">
            Established in 2024, Greyston College is building a premium, future-ready institution in Ruwa, Zimbabwe.
          </p>
        </div>
        <span className="badge-tag">Est. 2024</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5">
        <div className="site-card p-5">
          <h3 className="font-display text-navy mb-2">Mission</h3>
          <p className="text-muted-foreground leading-[1.75] m-0">
            To deliver high-quality education that equips learners with strong academic foundations, practical skills,
            confidence, and values to thrive in a rapidly changing world.
          </p>

          <div className="h-3" />

          <h3 className="font-display text-navy mb-2">Vision</h3>
          <p className="text-muted-foreground leading-[1.75] m-0">
            To become one of Zimbabwe's leading educational institutions known for excellence, innovation, discipline,
            and leadership development.
          </p>

          <div className="h-3" />

          <h3 className="font-display text-navy mb-2">Values</h3>
          <p className="text-muted-foreground leading-[1.75] m-0">
            Excellence • Integrity • Discipline • Innovation • Respect • Community
          </p>
        </div>

        <div className="site-card overflow-hidden">
          <img
            src={studentsReading}
            alt="Greyston College students reading"
            className="w-full h-60 md:h-full object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
