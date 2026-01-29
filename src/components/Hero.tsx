import { ArrowRight, Megaphone, Zap, Code } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center pt-20 md:pt-24 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in-left" style={{ animationDelay: "0.1s" }}>
            {/* Trust Badges */}
            <div className="flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-medium">
                <Megaphone size={16} />
                Digital Marketing
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-medium">
                <Zap size={16} />
                Automation
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-medium">
                <Code size={16} />
                No-Code Development
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl leading-tight text-foreground">
                Grow Your Business With{" "}
                <span className="text-primary">Smart Digital Marketing</span>
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-xl">
                I help businesses scale with strategic digital marketing, automation, 
                and no-code solutions. From ads to websites — all under one roof.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                onClick={() => scrollToSection("contact")}
                className="font-semibold text-base px-8 py-6"
              >
                Get Free Strategy Call
                <ArrowRight size={20} />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => scrollToSection("services")}
                className="font-semibold text-base px-8 py-6 border-2 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground"
              >
                View Services
              </Button>
            </div>
          </div>

          {/* Right - Abstract Illustration */}
          <div className="relative animate-fade-in-right" style={{ animationDelay: "0.3s" }}>
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Abstract shapes representing digital marketing */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl transform rotate-3"></div>
              <div className="absolute inset-4 bg-card rounded-2xl shadow-2xl flex items-center justify-center">
                <div className="text-center p-8 space-y-6">
                  <div className="w-24 h-24 mx-auto bg-primary/10 rounded-2xl flex items-center justify-center">
                    <Megaphone size={48} className="text-primary" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-heading font-bold text-2xl text-foreground">Digital Marketing Expert</h3>
                    <p className="text-muted-foreground">Transforming businesses through strategic digital solutions</p>
                  </div>
                  <div className="flex justify-center gap-4">
                    <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center">
                      <Zap size={24} className="text-secondary" />
                    </div>
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                      <Code size={24} className="text-primary" />
                    </div>
                  </div>
                </div>
              </div>
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary rounded-2xl shadow-lg flex items-center justify-center animate-bounce" style={{ animationDuration: "3s" }}>
                <span className="text-primary-foreground font-bold text-xl">📈</span>
              </div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-secondary rounded-xl shadow-lg flex items-center justify-center animate-bounce" style={{ animationDuration: "4s", animationDelay: "0.5s" }}>
                <span className="text-secondary-foreground text-2xl">🚀</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
