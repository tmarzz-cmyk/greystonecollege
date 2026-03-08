import { motion } from "framer-motion";
import studentsCampus from "@/assets/students-campus-life.png";
import studentsClassroom from "@/assets/students-classroom.png";
import studentsTeachers from "@/assets/students-teachers.png";
import AnimatedSection, { StaggerContainer, StaggerItem, HoverCard, Float } from "./AnimatedSection";

const pathways = [
  {
    title: "Academic Excellence",
    desc: "Commit to your studies, push your limits, and strive for top results across all subjects.",
    img: studentsTeachers,
    alt: "Students learning with teachers in classrooms",
    icon: "📚",
  },
  {
    title: "Sporting Achievement",
    desc: "Represent Greystone on the field, track, or court — dedication and teamwork earn recognition.",
    img: studentsCampus,
    alt: "Students in campus life, lab, and social settings",
    icon: "🏆",
  },
  {
    title: "Leadership & Service",
    desc: "Step up, mentor others, and serve the school community with integrity and purpose.",
    img: studentsClassroom,
    alt: "Students and teachers collaborating in classrooms",
    icon: "⭐",
  },
];

const InspirationSection = () => {
  return (
    <section className="py-20 md:py-24 soft-bg relative overflow-hidden">
      {/* Floating decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <Float delay={0}>
          <div className="absolute top-[20%] right-[5%] w-20 h-20 rounded-full opacity-[0.08]" style={{ background: "hsl(var(--turquoise))" }} />
        </Float>
        <Float delay={2}>
          <div className="absolute bottom-[30%] left-[3%] w-16 h-16 rounded-full opacity-[0.06]" style={{ background: "hsl(var(--sand))" }} />
        </Float>
      </div>

      <div className="container-site relative z-10">
        <AnimatedSection>
          <p className="text-xs tracking-[0.3em] uppercase text-center mb-3 font-medium" style={{ color: "hsl(var(--sand))" }}>
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
              <HoverCard>
                <div className="site-card overflow-hidden group">
                  <div className="relative h-56 overflow-hidden">
                    <motion.img
                      src={item.img}
                      alt={item.alt}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      whileHover={{ scale: 1.08 }}
                      transition={{ duration: 0.6 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                    <div className="absolute top-4 left-4 text-2xl bg-white/20 backdrop-blur-sm w-10 h-10 rounded-full flex items-center justify-center">
                      {item.icon}
                    </div>
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
              </HoverCard>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Inspirational Banner */}
        <AnimatedSection animation="scaleIn" delay={0.2}>
          <div
            className="rounded-2xl p-8 md:p-12 text-center relative overflow-hidden"
            style={{
              background: "linear-gradient(135deg, hsl(var(--turquoise-dark)), hsl(var(--turquoise-dark) / 0.85))",
            }}
          >
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 20% 50%, hsl(var(--sand)) 0%, transparent 50%), radial-gradient(circle at 80% 50%, hsl(var(--sand)) 0%, transparent 50%)",
              }}
            />
            {/* Animated sparkles */}
            <Float delay={0}>
              <div className="absolute top-6 left-[15%] text-xl opacity-30">✨</div>
            </Float>
            <Float delay={1}>
              <div className="absolute bottom-8 right-[20%] text-xl opacity-30">✨</div>
            </Float>
            <div className="relative z-10">
              <p className="text-white/80 text-xs tracking-[0.3em] uppercase mb-4 font-medium">
                Greystone College
              </p>
              <motion.h3
                className="font-display text-2xl md:text-4xl font-bold text-white mb-4 leading-tight"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              >
                Be Inspired, Be a Leader ✨
              </motion.h3>
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
