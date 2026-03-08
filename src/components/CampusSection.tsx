import gateDesigns from "@/assets/gate-designs.png";
import studentsIct from "@/assets/students-ict.jpg";

const CampusSection = () => {
  return (
    <section id="campus" className="py-20 md:py-24">
      <div className="container-site">
        <p className="text-xs tracking-[0.3em] uppercase text-center mb-3 font-medium" style={{ color: "hsl(var(--sand))" }}>Our Campus</p>
        <h2 className="section-title">Campus &amp; Facilities Vision</h2>
        <div className="premium-divider" />
        <p className="section-intro">
          The campus is designed for progressive growth around the existing academic block,
          with future expansion in classrooms, laboratories, ICT facilities, indoor sports,
          and later boarding accommodation.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          <div className="site-card overflow-hidden group">
            <div className="overflow-hidden">
              <img src={gateDesigns} alt="Greystone College entrance gate, sports park gate and monument sign" className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
            </div>
            <div className="p-6">
              <h3 className="font-bold text-lg mb-2" style={{ color: "hsl(var(--turquoise-dark))" }}>Campus Identity</h3>
              <p className="text-muted-foreground leading-relaxed">
                Main entrance, sports park entrance, and monument sign designed in official
                Greystone College colours with the official crest.
              </p>
            </div>
          </div>

          <div className="site-card overflow-hidden group">
            <div className="overflow-hidden">
              <img src={studentsIct} alt="Greystone College students at the ICT and media centre" className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
            </div>
            <div className="p-6">
              <h3 className="font-bold text-lg mb-2" style={{ color: "hsl(var(--turquoise-dark))" }}>Future Learning Environment</h3>
              <p className="text-muted-foreground leading-relaxed">
                A modern educational environment that includes ICT, media, science,
                and strong academic spaces for future-focused learning.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CampusSection;
