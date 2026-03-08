import gateDesigns from "@/assets/gate-designs.png";
import campusHero from "@/assets/campus-hero.jpg";

const CampusSection = () => {
  return (
    <section id="campus" className="py-[72px]">
      <div className="container-site">
        <h2 className="section-title">Campus & Facilities</h2>
        <p className="section-intro">
          Greystone College is implementing upgrades to create a modern, premium learning environment.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="site-card p-6">
            <h3 className="font-bold text-lg mb-3" style={{ color: "hsl(var(--turquoise-dark))" }}>
              Development Plan
            </h3>
            <ul className="list-disc pl-5 text-muted-foreground leading-[1.8]">
              <li>ICT block &amp; computers</li>
              <li>Science laboratory &amp; equipment</li>
              <li>Food canteen</li>
              <li>Upgrading existing infrastructure</li>
              <li>Sports hall</li>
              <li>Boarding facilities (100 students)</li>
            </ul>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="site-card overflow-hidden">
              <img
                src={gateDesigns}
                alt="Greystone College gate designs"
                className="w-full h-80 object-cover"
                loading="lazy"
              />
            </div>
            <div className="site-card overflow-hidden">
              <img
                src={campusHero}
                alt="Greystone College campus"
                className="w-full h-80 object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CampusSection;
