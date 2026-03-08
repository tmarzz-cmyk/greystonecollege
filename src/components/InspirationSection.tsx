import studentsCampus from "@/assets/students-campus-life.png";
import studentsClassroom from "@/assets/students-classroom.png";
import studentsTeachers from "@/assets/students-teachers.png";
import AnimatedSection, { StaggerContainer, StaggerItem } from "./AnimatedSection";

const pathways = [
  {
    title: "Academic Excellence",
    desc: "Commit to your studies, push your limits, and strive for top results across all subjects.",
    img: studentsTeachers,
    alt: "Students learning with teachers in classrooms",
  },
  {
    title: "Sporting Achievement",
    desc: "Represent Greystone on the field, track, or court — dedication and teamwork earn recognition.",
    img: studentsCampus,
    alt: "Students in campus life, lab, and social settings",
  },
  {
    title: "Leadership & Service",
    desc: "Step up, mentor others, and serve the school community with integrity and purpose.",
    img: studentsClassroom,
    alt: "Students and teachers collaborating in classrooms",
  },
];

const InspirationSection = () => {
  return (
    <section className="py-20 md:py-24 soft-bg">
      <div className="container-site">
        <AnimatedSection>
          <p
            className="text-xs tracking-[0.3em] uppercase text-center mb-3 font-medium"
            style={{ color: "hsl(var(--sand))" }}
          >
            Aspire & Achieve
          </p>
          <h2 className="section-title">Earn Your Colours</h2>
          <div className="premium-divider" />
          <p className="section-intro">
            Work hard in Academics, Sports and show your leadership skills to have
            a chance of becoming a <strong>Prefect</strong> or earning{" "}
            <strong>Colours Honours</strong> for outstanding achievements.
          </p>
        </AnimatedSection>

        {/* Pathway Cards */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12" staggerDelay={0.18}>
          {pathways.map((item) => (
            <StaggerItem key={item.title}>
              <div className="site-card overflow-hidden group">
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <h3 className="absolute bottom-4 left-5 right-5 text-white font-display text-xl font-bold">
                    {item.title}
                  </h3>
                </div>
                <div className="p-5">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Inspirational Banner */}
        <AnimatedSection animation="scaleIn" delay={0.2}>
          <div
            className="rounded-2xl p-8 md:p-12 text-center relative overflow-hidden"
            style={{
              background:
                "linear-gradient(135deg, hsl(var(--turquoise-dark)), hsl(var(--turquoise-dark) / 0.85))",
            }}
          >
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 20% 50%, hsl(var(--sand)) 0%, transparent 50%), radial-gradient(circle at 80% 50%, hsl(var(--sand)) 0%, transparent 50%)",
              }}
            />
            <div className="relative z-10">
              <p className="text-white/80 text-xs tracking-[0.3em] uppercase mb-4 font-medium">
                Greystone College
              </p>
              <h3 className="font-display text-2xl md:text-4xl font-bold text-white mb-4 leading-tight">
                Be Inspired, Be a Leader ✨
              </h3>
              <p className="text-white/90 max-w-2xl mx-auto leading-relaxed">
                Every Greystone student has the potential to achieve greatness. Whether in the
                classroom, on the sports field, or through service — your effort and character
                define your legacy. Rise to the challenge and make your mark.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default InspirationSection;
