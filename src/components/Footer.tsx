import logo from "@/assets/logo.jpg";

const Footer = () => {
  return (
    <footer className="border-t py-8">
      <div className="container-site flex flex-col items-center text-center gap-3">
        <img src={logo} alt="Greystone College logo" className="w-[52px] h-[52px] rounded-full object-cover" />
        <b className="font-display text-navy text-lg">Greystone College</b>
        <div className="text-sm text-muted-foreground">Achieving Excellence Together</div>
        <div className="text-sm text-muted-foreground italic">Kubudirira Mukurumbira Tiri Pamwechete</div>
      </div>
    </footer>
  );
};

export default Footer;
