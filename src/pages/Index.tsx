import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import Academics from "@/components/Academics";
import Houses from "@/components/Houses";
import Partnerships from "@/components/Partnerships";
import Admissions from "@/components/Admissions";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background" id="home">
      <Header />
      <main>
        <Hero />
        <AboutSection />
        <Academics />
        <Houses />
        <Partnerships />
        <Admissions />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
