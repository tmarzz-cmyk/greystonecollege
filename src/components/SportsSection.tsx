import { useState } from "react";
import sportsRugby1 from "@/assets/sports-rugby-1.png";
import sportsRugby2 from "@/assets/sports-rugby-2.png";
import sportsBasketball from "@/assets/sports-basketball.png";
import sportsTracksuit1 from "@/assets/sports-tracksuit-1.png";
import sportsTracksuit2 from "@/assets/sports-tracksuit-2.png";

const sportsImages = [
  { 
    img: sportsRugby1, 
    alt: "Greystone College rugby team in striped jerseys", 
    title: "Rugby",
    desc: "Building teamwork and resilience through competitive rugby."
  },
  { 
    img: sportsRugby2, 
    alt: "Greystone College students playing rugby", 
    title: "Team Sports",
    desc: "Gold and turquoise kits representing school pride on the field."
  },
  { 
    img: sportsBasketball, 
    alt: "Greystone College basketball team", 
    title: "Basketball",
    desc: "Excellence on the court with official Greystone jerseys."
  },
  { 
    img: sportsTracksuit1, 
    alt: "Greystone College students in tracksuits", 
    title: "Athletics",
    desc: "Official tracksuits and sportswear for training and events."
  },
  { 
    img: sportsTracksuit2, 
    alt: "Greystone College students in sports casual wear", 
    title: "Sports Identity",
    desc: "Branded beanies, caps, and polo shirts for everyday wear."
  },
];

const SportsSection = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <section id="sports" className="py-20 md:py-24">
      <div className="container-site">
        <p className="text-xs tracking-[0.3em] uppercase text-center mb-3 font-medium" style={{ color: "hsl(var(--sand))" }}>Athletics</p>
        <h2 className="section-title">Sports &amp; Athletics</h2>
        <div className="premium-divider" />
        <p className="section-intro">
          Greystone College champions athletic excellence through a diverse sports programme. 
          Our students compete with pride in official school colours.
        </p>

        {/* Main Display */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Featured Image */}
          <div className="site-card overflow-hidden group">
            <div className="relative overflow-hidden">
              <img 
                src={sportsImages[selectedIndex].img} 
                alt={sportsImages[selectedIndex].alt} 
                className="w-full h-[400px] md:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="font-display text-2xl md:text-3xl font-bold mb-2">
                  {sportsImages[selectedIndex].title}
                </h3>
                <p className="text-white/90 text-sm md:text-base leading-relaxed">
                  {sportsImages[selectedIndex].desc}
                </p>
              </div>
            </div>
          </div>

          {/* Info Panel */}
          <div className="flex flex-col justify-center">
            <div className="site-card p-7 mb-6">
              <h3 className="font-bold text-lg mb-4" style={{ color: "hsl(var(--turquoise-dark))" }}>
                Sports Programme
              </h3>
              <div className="space-y-3 text-muted-foreground leading-relaxed">
                <p>
                  Our athletics programme develops discipline, teamwork, and physical fitness 
                  across multiple sporting codes including rugby, basketball, soccer, athletics, and more.
                </p>
                <p>
                  Students represent the school in inter-school competitions, 
                  wearing our distinctive sand and turquoise colours with pride.
                </p>
              </div>
            </div>

            <div className="site-card p-7">
              <h3 className="font-bold text-lg mb-4" style={{ color: "hsl(var(--turquoise-dark))" }}>
                Sports Kit
              </h3>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: "hsl(var(--sand))" }} />
                  Rugby jerseys in striped and solid designs
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: "hsl(var(--sand))" }} />
                  Basketball uniforms with numbering
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: "hsl(var(--sand))" }} />
                  Official tracksuits and training wear
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: "hsl(var(--sand))" }} />
                  Branded accessories: beanies, caps, polo shirts
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Thumbnail Gallery */}
        <div className="grid grid-cols-5 gap-3 md:gap-4">
          {sportsImages.map((item, index) => (
            <button
              key={index}
              onClick={() => setSelectedIndex(index)}
              className={`relative overflow-hidden rounded-lg transition-all duration-300 ${
                selectedIndex === index 
                  ? "ring-2 ring-[hsl(var(--turquoise-dark))] ring-offset-2 ring-offset-background scale-105" 
                  : "opacity-70 hover:opacity-100"
              }`}
            >
              <img 
                src={item.img} 
                alt={item.alt} 
                className="w-full h-20 md:h-28 object-cover"
                loading="lazy"
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SportsSection;
