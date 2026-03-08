import { motion } from "framer-motion";
import gateDesigns from "@/assets/gate-designs.png";
import studentsIct from "@/assets/students-science-lab.png";
import AnimatedSection, { Parallax, HoverCard } from "./AnimatedSection";

const CampusSection = () => {
  return (
    <section id="campus" className="py-20 md:py-24">
      <div className="container-site">
        <AnimatedSection>
          <p className="text-xs tracking-[0.3em] uppercase text-center mb-3 font-medium" style={{ color: "hsl(var(--sand))" }}>Our Campus</p>
          <h2 className="section-title">Campus &amp; Facilities Vision</h2>
          <div className="premium-divider" />
          <p className="section-intro">
            The campus is designed for progressive growth around the existing academic block,
            with future expansion in classrooms, laboratories, ICT facilities, indoor sports,
            and later boarding accommodation.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          <AnimatedSection animation="slideLeft" delay={0.15}>
            <HoverCard>
              <div className="site-card overflow-hidden group">
                <div className="overflow-hidden">
                  <motion.img
                    src={gateDesigns}
                    alt="Greystone College entrance gate, sports park gate and monument sign"
                    className="w-full h-80 object-cover"
                    loading="lazy"
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.6 }}
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg mb-2" style={{ color: "hsl(var(--turquoise-dark))" }}>Campus Identity</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Main entrance, sports park entrance, and monument sign designed in official
                    Greystone College colours with the official crest.
                  </p>
                </div>
              </div>
            </HoverCard>
          </AnimatedSection>

          <AnimatedSection animation="slideRight" delay={0.3}>
            <HoverCard>
              <div className="site-card overflow-hidden group">
                <div className="overflow-hidden">
                  <motion.img
                    src={studentsIct}
                    alt="Greystone College students at the ICT and media centre"
                    className="w-full h-80 object-cover"
                    loading="lazy"
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.6 }}
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg mb-2" style={{ color: "hsl(var(--turquoise-dark))" }}>Future Learning Environment</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    A modern educational environment that includes ICT, media, science,
                    and strong academic spaces for future-focused learning.
                  </p>
                </div>
              </div>
            </HoverCard>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default CampusSection;
