import crest from "@/assets/crest-official.png";
import AnimatedSection from "./AnimatedSection";

const Footer = () => {
  return (
    <footer className="mt-10 py-14" style={{ background: "linear-gradient(160deg, hsl(var(--turquoise-dark)), hsl(var(--turquoise)))", color: "white" }}>
      <div className="container-site text-center">
        <AnimatedSection animation="scaleIn">
          <img src={crest} alt="Greystone College Official Crest" className="w-[76px] mx-auto mb-5 opacity-90" />
          <p className="font-bold text-xl tracking-wide">Greystone College</p>
          <div className="premium-divider !my-5" style={{ background: "linear-gradient(90deg, rgba(255,255,255,0.2), rgba(214,179,106,0.6), rgba(255,255,255,0.2))" }} />
          <p className="text-white/90 font-medium">Achieving Excellence Together</p>
          <p className="italic mt-1 text-white/60 text-sm">Kubudirira Mukurumbira Tiri Pamwechete</p>
          <p className="mt-5 text-white/70 text-sm">Ruwa, Zimbabwe</p>
          <p className="text-white/70 text-sm">enquiries@greyston-college.com</p>
        </AnimatedSection>
      </div>
    </footer>
  );
};

export default Footer;
