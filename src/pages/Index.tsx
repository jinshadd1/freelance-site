import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyMe from "@/components/WhyMe";
import Workflow from "@/components/Workflow";
import Tools from "@/components/Tools";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Services />
      <WhyMe />
      <Workflow />
      <Tools />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
