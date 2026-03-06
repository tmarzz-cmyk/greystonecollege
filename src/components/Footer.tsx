import logo from "@/assets/logo.jpg";

const Footer = () => {
  return (
    <footer className="border-t py-8">
      <div className="container-site grid grid-cols-1 md:grid-cols-[1.2fr_0.8fr] gap-4 items-start">
        {/* Brand */}
        <div className="flex gap-3.5 items-start">
          <img src={logo} alt="Greyston College logo" className="w-[52px] h-[52px] rounded-full object-cover" />
          <div>
            <b className="font-display text-navy text-lg">Greyston College</b>
            <div className="text-sm text-muted-foreground mt-0.5">Achieving Excellence Together</div>
            <div className="text-sm text-muted-foreground">
              Ruwa, Zimbabwe • +263 77 670 6614 •{" "}
              <a href="mailto:tonaqprojects@gmail.com" className="underline">
                tonaqprojects@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Newsletter + links */}
        <div className="site-card p-4 bg-card/75">
          <b className="text-navy">Newsletter</b>
          <div className="text-sm text-muted-foreground mt-1">Get news and admissions updates.</div>
          <div className="flex gap-2.5 mt-2.5 flex-wrap">
            <input placeholder="Your email" aria-label="Newsletter email" className="input-site flex-1 min-w-[160px]" />
            <button
              type="button"
              className="btn-site-gold text-sm"
              onClick={() => alert("Newsletter signup placeholder")}
            >
              Subscribe
            </button>
          </div>
          <div className="h-3" />
          <div className="grid grid-cols-2 gap-2 text-sm">
            {["About", "Academics", "Admissions", "Student Life", "News & Events", "Contact"].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase().replace(/[^a-z]/g, "").slice(0, 7)}`}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
