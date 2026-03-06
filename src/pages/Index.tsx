import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Programs from "@/components/Programs";
import About from "@/components/About";
import CampusLife from "@/components/CampusLife";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Programs />
        <About />
        <CampusLife />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
