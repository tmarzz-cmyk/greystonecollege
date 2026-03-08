import crest from "@/assets/crest-official.png";
import AnimatedSection, { StaggerContainer, StaggerItem } from "./AnimatedSection";

const subjects = [
  "English Language", "Mathematics", "Shona", "Heritage Studies", "Geography", "History",
  "Biology", "Chemistry", "Physics", "Combined Science", "Computer Studies", "ICT",
];

const crestSymbols = [
  { name: "Book", meaning: "Knowledge and academic excellence" },
  { name: "Torch", meaning: "Leadership and enlightenment" },
  { name: "Microscope", meaning: "Science and innovation" },
  { name: "Tree", meaning: "Growth and strong foundations" },
];

const Academics = () => {
  return (
    <section id="academics" className="soft-bg py-20 md:py-24">
      <div className="container-site">
        <AnimatedSection>
          <p className="text-xs tracking-[0.3em] uppercase text-center mb-3 font-medium" style={{ color: "hsl(var(--sand))" }}>Curriculum</p>
          <h2 className="section-title">Academic Programme</h2>
          <div className="premium-divider" />
          <p className="section-intro">
            Greystone College offers a balanced curriculum with a strong emphasis on
            academic excellence, STEM learning, and character formation.
          </p>
        </AnimatedSection>

        <StaggerContainer className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4" staggerDelay={0.06}>
          {subjects.map((s) => (
            <StaggerItem key={s}>
              <div className="subject-chip">{s}</div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <div className="h-10" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <AnimatedSection animation="slideLeft" delay={0.1}>
            <div className="site-card p-7">
              <h3 className="font-bold text-lg mb-4" style={{ color: "hsl(var(--turquoise-dark))" }}>House System</h3>
              <div className="mb-4">
                {["Hunhu", "Uchenjeri", "Ushingi", "Kubudirira"].map((h) => (
                  <span key={h} className="house-tag">{h}</span>
                ))}
              </div>
              <p className="text-muted-foreground leading-relaxed">
                The house system promotes teamwork, school spirit, leadership,
                healthy competition, and a strong sense of belonging.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="slideRight" delay={0.2}>
            <div className="site-card p-7">
              <h3 className="font-bold text-lg mb-4" style={{ color: "hsl(var(--turquoise-dark))" }}>Educational Focus</h3>
              <p className="text-muted-foreground leading-relaxed">
                Greystone College is committed to strong learning in sciences, technology,
                heritage, leadership, discipline, and real-world preparation through
                practical knowledge and responsible citizenship.
              </p>
            </div>
          </AnimatedSection>
        </div>

        <div className="h-10" />

        {/* School Crest Section */}
        <AnimatedSection animation="scaleIn" delay={0.15}>
          <div className="site-card p-7 md:p-10">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <img src={crest} alt="Greystone College Official Crest" className="w-[140px] md:w-[180px] flex-shrink-0" />
              <div>
                <h3 className="font-bold text-xl mb-2" style={{ color: "hsl(var(--turquoise-dark))" }}>The Greystone Crest</h3>
                <p className="text-muted-foreground leading-relaxed mb-5">
                  The official crest of Greystone College embodies the school's core pillars. Each element represents a foundational value:
                </p>
                <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-4" staggerDelay={0.12}>
                  {crestSymbols.map((item) => (
                    <StaggerItem key={item.name}>
                      <div className="flex items-start gap-3">
                        <span className="w-2.5 h-2.5 rounded-full mt-1.5 flex-shrink-0" style={{ background: "hsl(var(--sand))" }} />
                        <div>
                          <p className="font-semibold text-sm" style={{ color: "hsl(var(--turquoise-dark))" }}>{item.name}</p>
                          <p className="text-muted-foreground text-sm">{item.meaning}</p>
                        </div>
                      </div>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Academics;
