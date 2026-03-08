import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/crest-official.png";
import studentsIct from "@/assets/students-ict.jpg";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Academics", href: "#academics" },
  { label: "Campus", href: "#campus" },
  { label: "Uniform", href: "#uniform" },
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
        className="site-header relative"
        style={{
          background: `linear-gradient(rgba(15,111,115,0.90), rgba(10,79,82,0.92)), url(${studentsIct}) center/cover no-repeat`,
        }}
      >
        <div className="container-site">
          <div className="flex items-center justify-between gap-5 py-4 flex-wrap">
            <a href="#home" className="flex items-center gap-4" aria-label="Greystone College Home">
              <img
                src={logo}
                alt="Greystone College Official Crest"
                className="w-[88px] h-[88px] object-contain rounded-[14px] p-2"
                style={{ background: "rgba(255,255,255,0.08)" }}
              />
              <div className="leading-tight">
                <h1 className="text-[clamp(1.8rem,3vw,2.6rem)] font-bold text-white tracking-wide m-0">Greystone College</h1>
                <p className="text-white/95 mt-0.5">Modern Secondary School • Ruwa, Zimbabwe</p>
              </div>
            </a>

            <nav
              className="hidden lg:flex flex-wrap gap-2.5 items-center rounded-full px-3.5 py-2.5"
              aria-label="Main Navigation"
              style={{
                background: "rgba(214,179,106,0.18)",
                border: "1px solid rgba(255,255,255,0.15)",
                backdropFilter: "blur(6px)",
              }}
            >
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-white font-bold py-2.5 px-3.5 rounded-full hover:bg-white/[0.12] transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <button className="lg:hidden text-white" onClick={() => setMobileOpen(!mobileOpen)}>
              {mobileOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {mobileOpen && (
            <div className="lg:hidden rounded-[22px] p-4 mb-4 flex flex-col gap-1" style={{ background: "rgba(214,179,106,0.18)", border: "1px solid rgba(255,255,255,0.15)" }}>
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-white font-bold py-2.5 px-3.5 rounded-full hover:bg-white/[0.12] transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </div>
          )}

          <div className="py-12 text-center" id="home">
            <h2 className="text-[clamp(2rem,4vw,3.6rem)] leading-[1.1] text-white max-w-[900px] mx-auto mb-4 font-bold">
              Welcome to Greystone College
            </h2>
            <div className="text-[1.2rem] font-bold text-[#fff7df] mb-1.5">Achieving Excellence Together</div>
            <div className="text-[1.05rem] italic text-[#f3e1b6] mb-4">Kubudirira Mukurumbira Tiri Pamwechete</div>
            <p className="max-w-[820px] mx-auto text-[1.08rem] text-white/95 mb-7">
              Greystone College is a modern secondary school committed to academic excellence,
              character development, leadership, innovation, and practical preparation for the future.
            </p>
            <div className="flex flex-wrap justify-center gap-3.5">
              <a href="#admissions" className="btn-site-primary">Apply for Admission</a>
              <a href="#contact" className="btn-site-secondary">Contact the College</a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
