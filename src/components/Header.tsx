import { useState } from "react";
import { Search, Menu, X } from "lucide-react";
import logo from "@/assets/logo.jpg";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Academics", href: "#academics" },
  { label: "Admissions", href: "#admissions" },
  { label: "Student Life", href: "#life" },
  { label: "News & Events", href: "#news" },
  { label: "Contact", href: "#contact" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [search, setSearch] = useState("");

  const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== "Enter") return;
    const q = search.toLowerCase().trim();
    if (!q) return;
    const targets = [
      { k: ["about", "mission", "vision", "values"], id: "about" },
      { k: ["academics", "secondary", "skills", "college", "stem"], id: "academics" },
      { k: ["admissions", "apply", "fees", "tuition", "scholarship"], id: "admissions" },
      { k: ["student", "life", "clubs", "sports", "boarding"], id: "life" },
      { k: ["news", "events", "open day"], id: "news" },
      { k: ["contact", "phone", "email", "ruwa"], id: "contact" },
    ];
    const match = targets.find((t) => t.k.some((w) => q.includes(w)));
    if (match) {
      document.getElementById(match.id)?.scrollIntoView({ behavior: "smooth", block: "start" });
      setSearch("");
    }
  };

  return (
    <header className="sticky top-0 z-50 border-b bg-background/82 backdrop-blur-[10px]">
      <div className="container-site flex items-center justify-between py-3 gap-4">
        {/* Brand */}
        <a href="#home" className="flex items-center gap-3" aria-label="Greyston College Home">
          <img src={logo} alt="Greyston College logo" className="w-11 h-11 rounded-full object-cover" />
          <div className="leading-none">
            <b className="font-display text-[1.05rem] block">Greyston College</b>
            <small className="text-muted-foreground text-[0.85rem] mt-0.5 block">Ruwa, Zimbabwe • Est. 2024</small>
          </div>
        </a>

        {/* Desktop nav */}
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

        {/* Actions */}
        <div className="hidden lg:flex gap-2.5 items-center">
          <div className="flex items-center gap-1.5 py-2 px-3 rounded-full border bg-card/65" role="search">
            <Search size={16} className="text-muted-foreground" />
            <input
              placeholder="Search…"
              aria-label="Search site"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={handleSearch}
              className="border-none outline-none bg-transparent w-40 text-sm"
            />
          </div>
          <a href="#apply" className="btn-site-outline text-sm">Staff Login</a>
          <a href="#admissions" className="btn-site-primary text-sm">Apply Now</a>
          <a href="#contact" className="btn-site-gold text-sm">Request Info</a>
        </div>

        {/* Mobile toggle */}
        <button className="lg:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile nav */}
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
