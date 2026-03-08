import logo from "@/assets/logo.jpg";

const Footer = () => {
  return (
    <footer className="mt-10 py-10" style={{ background: "hsl(var(--turquoise-dark))", color: "white" }}>
      <div className="container-site text-center">
        <img src={logo} alt="Greystone College logo" className="w-[72px] h-[72px] mx-auto mb-3.5 rounded-full object-cover" />
        <p className="font-bold text-lg">Greystone College</p>
        <p className="mt-2">Achieving Excellence Together</p>
        <p className="italic mt-2 text-white/80">Kubudirira Mukurumbira Tiri Pamwechete</p>
      </div>
    </footer>
  );
};

export default Footer;
