import studentsReading from "@/assets/students-reading.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="container-site py-8" aria-label="About">
      <div className="section-heading">
        <div>
          <h2 className="font-display text-2xl md:text-[2rem] text-navy m-0">About Greystone College</h2>
        </div>
        <span className="badge-tag">Est. 2024</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5">
        <div className="site-card p-5">
          <p className="text-muted-foreground leading-[1.75] m-0">
            Greystone College is a modern secondary school located in Ruwa, Zimbabwe.
            The institution is committed to academic excellence, leadership development and innovation.
          </p>
          <div className="h-4" />
          <p className="text-muted-foreground leading-[1.75] m-0">
            Greystone College will initially operate as a <b>day school</b>, with plans for future{" "}
            <b>boarding facilities</b> as the campus expands.
          </p>
        </div>

        <div className="site-card overflow-hidden">
          <img
            src={studentsReading}
            alt="Greystone College students"
            className="w-full h-60 md:h-full object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
