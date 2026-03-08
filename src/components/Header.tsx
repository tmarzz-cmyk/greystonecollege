import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.jpg";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Academics", href: "#academics" },
  { label: "Houses", href: "#houses" },
  { label: "Partnerships", href: "#partnerships" },
  { label: "Admissions", href: "#admissions" },
  { label: "Contact", href: "#contact" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b bg-background/82 backdrop-blur-[10px]">
      <div className="container-site flex items-center justify-between py-3 gap-4">
        <a href="#home" className="flex items-center gap-3" aria-label="Greystone College Home">
          <img src={logo} alt="Greystone College logo" className="w-11 h-11 rounded-full object-cover" />
          <div className="leading-none">
            <b className="font-display text-[1.05rem] block">Greystone College</b>
            <small className="text-muted-foreground text-[0.85rem] mt-0.5 block">Ruwa, Zimbabwe • Est. 2024</small>
          </div>
        </a>

        <nav className="hidden lg:block" aria-label="Primary navigation">
          <ul className="flex gap-1 items-center list-none m-0 p-0">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="py-2 px-2.5 rounded-[10px] text-sm hover:bg-foreground/5 transition-colors">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden lg:flex gap-2.5 items-center">
          <a href="#admissions" className="btn-site-primary text-sm">Apply Now</a>
          <a href="#contact" className="btn-site-gold text-sm">Request Info</a>
        </div>

        <button className="lg:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden border-t bg-background py-4 px-4 flex flex-col gap-2">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="py-2 text-sm text-muted-foreground hover:text-foreground"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div className="flex flex-col gap-2 mt-3">
            <a href="#admissions" className="btn-site-primary text-sm text-center">Apply Now</a>
            <a href="#contact" className="btn-site-gold text-sm text-center">Request Info</a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
