import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "@/assets/crest-official.png";
import studentsIct from "@/assets/students-ict.jpg";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Academics", href: "#academics" },
  { label: "Student Life", href: "#academic-studio" },
  { label: "Campus", href: "#campus" },
  { label: "Uniform", href: "#uniform" },
  { label: "Sports", href: "#sports" },
  { label: "Partnerships", href: "#partnerships" },
  { label: "Admissions", href: "#admissions" },
  { label: "Contact", href: "#contact" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <div className="topbar">
        <div className="container-site topbar-inner">
          <div>Ruwa, Zimbabwe</div>
          <div>Greystone College</div>
          <div>Day School First • Boarding Later</div>
        </div>
      </div>

      <header
        className="site-header relative overflow-hidden"
        style={{
          background: `linear-gradient(160deg, rgba(10,79,82,0.94), rgba(15,111,115,0.88) 50%, rgba(10,79,82,0.92)), url(${studentsIct}) center/cover no-repeat`,
        }}
      >
        {/* Subtle decorative gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/10 pointer-events-none" />

        <div className="container-site relative z-10">
          <div className="flex items-center justify-between gap-5 py-5 flex-wrap">
            <a href="#home" className="flex items-center gap-4 group" aria-label="Greystone College Home">
              <img
                src={logo}
                alt="Greystone College Official Crest"
                className="w-[92px] h-[92px] object-contain rounded-2xl p-2 transition-transform duration-300 group-hover:scale-105"
                style={{ background: "rgba(255,255,255,0.1)", backdropFilter: "blur(8px)" }}
              />
              <div className="leading-tight">
                <h1 className="text-[clamp(1.8rem,3vw,2.6rem)] font-bold text-white tracking-wide m-0">Greystone College</h1>
                <p className="text-white/90 mt-1 text-sm tracking-widest uppercase">Modern Secondary School • Ruwa</p>
              </div>
            </a>

            <nav
              className="hidden lg:flex flex-wrap gap-1 items-center rounded-full px-2 py-2"
              aria-label="Main Navigation"
              style={{
                background: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.12)",
                backdropFilter: "blur(12px)",
              }}
            >
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-white/90 font-semibold text-sm py-2.5 px-4 rounded-full hover:bg-white/[0.14] hover:text-white transition-all duration-200"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <button className="lg:hidden text-white p-2 rounded-xl hover:bg-white/10 transition-colors" onClick={() => setMobileOpen(!mobileOpen)}>
              {mobileOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>

          {mobileOpen && (
            <div
              className="lg:hidden rounded-2xl p-3 mb-4 flex flex-col gap-0.5 animate-fade-up"
              style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.12)", backdropFilter: "blur(12px)" }}
            >
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-white font-semibold py-3 px-4 rounded-xl hover:bg-white/[0.12] transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </div>
          )}

          <div className="py-16 md:py-20 text-center" id="home">
            <div className="opacity-0 animate-fade-up">
              <p className="text-sm tracking-[0.3em] uppercase text-white/60 mb-4 font-medium">Welcome to</p>
              <h2 className="text-[clamp(2.2rem,5vw,4rem)] leading-[1.05] text-white max-w-[900px] mx-auto mb-6 font-bold tracking-tight">
                Greystone College
              </h2>
            </div>
            <div className="opacity-0 animate-fade-up stagger-2">
              <div className="text-[1.15rem] font-bold text-accent mb-1">Achieving Excellence Together</div>
              <div className="text-[1rem] italic text-white/60 mb-6">Kubudirira Mukurumbira Tiri Pamwechete</div>
            </div>
            <div className="opacity-0 animate-fade-up stagger-4">
              <p className="max-w-[700px] mx-auto text-[1.05rem] text-white/80 mb-9 leading-relaxed">
                A modern secondary school committed to academic excellence,
                character development, leadership, innovation, and practical preparation for the future.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4 opacity-0 animate-fade-up stagger-5">
              <a href="#admissions" className="btn-site-primary text-base px-7 py-3.5">Apply for Admission</a>
              <a href="#contact" className="btn-site-secondary text-base px-7 py-3.5">Contact the College</a>
            </div>

            <div className="mt-12 opacity-0 animate-fade-up stagger-6">
              <a href="#about" className="inline-flex flex-col items-center text-white/40 hover:text-white/70 transition-colors">
                <span className="text-xs uppercase tracking-widest mb-1">Explore</span>
                <ChevronDown size={20} className="animate-bounce" />
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
