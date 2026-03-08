import { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
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
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  // Minimum swipe distance (in px)
  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEndHandler = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    
    if (isLeftSwipe) {
      goToNext();
    } else if (isRightSwipe) {
      goToPrevious();
    }
  };

  // Handle keyboard navigation in lightbox
  useEffect(() => {
    if (!lightboxOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxOpen(false);
      if (e.key === "ArrowLeft") setSelectedIndex((prev) => (prev === 0 ? sportsImages.length - 1 : prev - 1));
      if (e.key === "ArrowRight") setSelectedIndex((prev) => (prev === sportsImages.length - 1 ? 0 : prev + 1));
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [lightboxOpen]);

  const goToPrevious = () => {
    setSelectedIndex((prev) => (prev === 0 ? sportsImages.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setSelectedIndex((prev) => (prev === sportsImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
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
            <div 
              className="site-card overflow-hidden group cursor-pointer"
              onClick={() => setLightboxOpen(true)}
            >
              <div className="relative overflow-hidden h-[400px] md:h-[500px]">
                <img 
                  key={selectedIndex}
                  src={sportsImages[selectedIndex].img} 
                  alt={sportsImages[selectedIndex].alt} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 animate-scale-in" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* Zoom indicator */}
                <div className="absolute top-4 right-4 bg-black/40 backdrop-blur-sm text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ZoomIn size={20} />
                </div>

                <div 
                  key={`text-${selectedIndex}`}
                  className="absolute bottom-0 left-0 right-0 p-6 text-white animate-fade-up"
                >
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

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center animate-fade-in"
          onClick={() => setLightboxOpen(false)}
        >
          {/* Close Button */}
          <button 
            className="absolute top-4 right-4 z-10 text-white/70 hover:text-white p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            onClick={() => setLightboxOpen(false)}
            aria-label="Close lightbox"
          >
            <X size={28} />
          </button>

          {/* Previous Button */}
          <button 
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-white/70 hover:text-white p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            onClick={(e) => { e.stopPropagation(); goToPrevious(); }}
            aria-label="Previous image"
          >
            <ChevronLeft size={32} />
          </button>

          {/* Next Button */}
          <button 
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-white/70 hover:text-white p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            onClick={(e) => { e.stopPropagation(); goToNext(); }}
            aria-label="Next image"
          >
            <ChevronRight size={32} />
          </button>

          {/* Main Image */}
          <div 
            className="max-w-[90vw] max-h-[85vh] relative"
            onClick={(e) => e.stopPropagation()}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEndHandler}
          >
            <img 
              key={`lightbox-${selectedIndex}`}
              src={sportsImages[selectedIndex].img} 
              alt={sportsImages[selectedIndex].alt} 
              className="max-w-full max-h-[85vh] object-contain rounded-lg animate-scale-in"
            />
            
            {/* Caption */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
              <h3 className="text-white font-display text-xl md:text-2xl font-bold mb-1">
                {sportsImages[selectedIndex].title}
              </h3>
              <p className="text-white/80 text-sm md:text-base">
                {sportsImages[selectedIndex].desc}
              </p>
            </div>
          </div>

          {/* Thumbnail Strip */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {sportsImages.map((item, index) => (
              <button
                key={index}
                onClick={(e) => { e.stopPropagation(); setSelectedIndex(index); }}
                className={`w-16 h-12 rounded overflow-hidden transition-all duration-300 ${
                  selectedIndex === index 
                    ? "ring-2 ring-white scale-110" 
                    : "opacity-50 hover:opacity-100"
                }`}
              >
                <img 
                  src={item.img} 
                  alt={item.alt} 
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>

          {/* Image Counter */}
          <div className="absolute top-4 left-4 text-white/70 text-sm font-medium bg-white/10 px-3 py-1.5 rounded-full">
            {selectedIndex + 1} / {sportsImages.length}
          </div>
        </div>
      )}
    </>
  );
};

export default SportsSection;
