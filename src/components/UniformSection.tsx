import { motion } from "framer-motion";
import blazerStudent from "@/assets/blazer-student.png";
import blazerPrefect from "@/assets/blazer-prefect.png";
import backpacks from "@/assets/backpacks.png";
import AnimatedSection, { StaggerContainer, StaggerItem, HoverCard } from "./AnimatedSection";

const items = [
  { img: blazerStudent, alt: "Greystone College dark turquoise student blazer with official crest", title: "Student Blazer", desc: "Dark Turquoise / Airforce Blue blazer with the official Greystone College crest." },
  { img: blazerPrefect, alt: "Greystone College sand and gold prefect blazer with official crest", title: "Prefect Blazer", desc: "Sand / Gold leadership blazer with Dark Turquoise trim, reserved for prefects and school leaders." },
  { img: backpacks, alt: "Greystone College official backpacks in dark turquoise and sand gold", title: "Official School Bags", desc: "Standard students use the Dark Turquoise bag. Sand / Gold bags are reserved for prefects and top achieving students." },
];

const UniformSection = () => {
  return (
    <section id="uniform" className="soft-bg py-20 md:py-24">
      <div className="container-site">
        <AnimatedSection>
          <p className="text-xs tracking-[0.3em] uppercase text-center mb-3 font-medium" style={{ color: "hsl(var(--sand))" }}>Identity</p>
          <h2 className="section-title">Official Uniform Identity</h2>
          <div className="premium-divider" />
          <p className="section-intro">
            The Greystone College uniform reflects excellence, discipline, and prestige.
            The official blazer colours distinguish everyday students and school leaders.
          </p>
        </AnimatedSection>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7" staggerDelay={0.15}>
          {items.map((item) => (
            <StaggerItem key={item.title}>
              <HoverCard>
                <div className="site-card overflow-hidden group">
                  <div className="overflow-hidden bg-white">
                    <motion.img
                      src={item.img}
                      alt={item.alt}
                      className="w-full h-80 object-contain p-6"
                      loading="lazy"
                      whileHover={{ scale: 1.1, rotate: 2 }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-lg mb-1.5" style={{ color: "hsl(var(--turquoise-dark))" }}>{item.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </HoverCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default UniformSection;
