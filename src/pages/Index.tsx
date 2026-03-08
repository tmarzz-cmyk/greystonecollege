import Header from "@/components/Header";
import AboutSection from "@/components/AboutSection";
import Academics from "@/components/Academics";
import AcademicStudio from "@/components/AcademicStudio";
import CampusSection from "@/components/CampusSection";
import UniformSection from "@/components/UniformSection";
import SportsSection from "@/components/SportsSection";
import InspirationSection from "@/components/InspirationSection";
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
        <AcademicStudio />
        <CampusSection />
        <UniformSection />
        <SportsSection />
        <InspirationSection />
        <Partnerships />
        <Admissions />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
