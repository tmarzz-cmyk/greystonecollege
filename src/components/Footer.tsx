import crest from "@/assets/crest-official.png";

const Footer = () => {
  return (
    <footer className="mt-10 py-10" style={{ background: "hsl(var(--turquoise-dark))", color: "white" }}>
      <div className="container-site text-center">
        <img src={crest} alt="Greystone College Official Crest" className="w-[72px] mx-auto mb-3.5" />
        <p className="font-bold text-lg">Greystone College</p>
        <p className="mt-2">Achieving Excellence Together</p>
        <p className="italic mt-2 text-white/80">Kubudirira Mukurumbira Tiri Pamwechete</p>
        <p className="mt-3">Ruwa, Zimbabwe</p>
        <p>enquiries@greyston-college.com</p>
      </div>
    </footer>
  );
};

export default Footer;
