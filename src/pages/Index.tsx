import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Highlights from "@/components/Highlights";
import AboutSection from "@/components/AboutSection";
import Academics from "@/components/Academics";
import Admissions from "@/components/Admissions";
import StudentLife from "@/components/StudentLife";
import NewsEvents from "@/components/NewsEvents";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background" id="home">
      <Header />
      <main>
        <Hero />
        <Highlights />
        <AboutSection />
        <Academics />
        <Admissions />
        <StudentLife />
        <NewsEvents />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
