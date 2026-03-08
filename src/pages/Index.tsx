import Header from "@/components/Header";
import AboutSection from "@/components/AboutSection";
import Academics from "@/components/Academics";
import CampusSection from "@/components/CampusSection";
import UniformSection from "@/components/UniformSection";
import Partnerships from "@/components/Partnerships";
import Admissions from "@/components/Admissions";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import BackgroundMusic from "@/components/BackgroundMusic";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <BackgroundMusic />
      <main>
        <AboutSection />
        <Academics />
        <CampusSection />
        <UniformSection />
        <Partnerships />
        <Admissions />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
