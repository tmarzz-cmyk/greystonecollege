import blazerStudent from "@/assets/blazer-student.png";
import blazerPrefect from "@/assets/blazer-prefect.png";
import backpacks from "@/assets/backpacks.png";

const UniformSection = () => {
  return (
    <section id="uniform" className="soft-bg py-[72px]">
      <div className="container-site">
        <h2 className="section-title">Official Uniform Identity</h2>
        <p className="section-intro">
          The Greystone College uniform reflects excellence, discipline, and prestige.
          The official blazer colours distinguish everyday students and school leaders.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="site-card overflow-hidden">
            <img src={blazerStudent} alt="Greystone College dark turquoise student blazer with official crest" className="w-full h-80 object-contain bg-white p-4" loading="lazy" />
            <div className="p-5">
              <h3 className="font-bold text-lg mb-1" style={{ color: "hsl(var(--turquoise-dark))" }}>Student Blazer</h3>
              <p className="text-muted-foreground text-sm">
                Dark Turquoise / Airforce Blue blazer with the official Greystone College crest.
              </p>
            </div>
          </div>

          <div className="site-card overflow-hidden">
            <img src={blazerPrefect} alt="Greystone College sand and gold prefect blazer with official crest" className="w-full h-80 object-contain bg-white p-4" loading="lazy" />
            <div className="p-5">
              <h3 className="font-bold text-lg mb-1" style={{ color: "hsl(var(--turquoise-dark))" }}>Prefect Blazer</h3>
              <p className="text-muted-foreground text-sm">
                Sand / Gold leadership blazer with Dark Turquoise trim, reserved for prefects and school leaders.
              </p>
            </div>
          </div>

          <div className="site-card overflow-hidden">
            <img src={backpacks} alt="Greystone College official backpacks in dark turquoise and sand gold" className="w-full h-80 object-contain bg-white p-4" loading="lazy" />
            <div className="p-5">
              <h3 className="font-bold text-lg mb-1" style={{ color: "hsl(var(--turquoise-dark))" }}>Official School Bags</h3>
              <p className="text-muted-foreground text-sm">
                Standard students use the Dark Turquoise bag. Sand / Gold bags are reserved for prefects and top achieving students.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UniformSection;
