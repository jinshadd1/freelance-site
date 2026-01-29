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
    <section className="min-h-screen flex items-center pt-24 md:pt-28 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-10 animate-fade-in-left" style={{ animationDelay: "0.1s" }}>
            {/* Headline */}
            <div className="space-y-6">
              <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl leading-tight text-foreground">
                Grow Your Business With{" "}
                <span className="text-primary">Smart Digital Marketing</span>
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-xl leading-relaxed">
                I help brands scale using Digital Marketing, Automation, SEO, and No-Code Solutions.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                onClick={() => scrollToSection("contact")}
                className="font-semibold text-base px-8 py-6 rounded-xl"
              >
                Get Free Strategy Call
                <ArrowRight size={20} />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => scrollToSection("services")}
                className="font-semibold text-base px-8 py-6 rounded-xl border-2 border-foreground text-foreground hover:bg-foreground hover:text-background"
              >
                View Services
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="inline-flex items-center gap-2 px-4 py-2.5 bg-card border border-border rounded-xl shadow-sm">
                <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Megaphone size={16} className="text-primary" />
                </div>
                <span className="text-sm font-medium text-foreground">Digital Marketing</span>
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2.5 bg-card border border-border rounded-xl shadow-sm">
                <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Zap size={16} className="text-primary" />
                </div>
                <span className="text-sm font-medium text-foreground">Automation</span>
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2.5 bg-card border border-border rounded-xl shadow-sm">
                <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Code size={16} className="text-primary" />
                </div>
                <span className="text-sm font-medium text-foreground">No-Code Development</span>
              </div>
            </div>
          </div>

          {/* Right - Abstract Illustration */}
          <div className="relative animate-fade-in-right" style={{ animationDelay: "0.3s" }}>
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Abstract background shapes */}
              <div className="absolute inset-0 bg-primary/5 rounded-3xl transform rotate-3"></div>
              <div className="absolute inset-4 bg-card rounded-2xl shadow-2xl border border-border flex items-center justify-center overflow-hidden">
                {/* Modern abstract digital illustration */}
                <div className="relative w-full h-full p-8 flex flex-col items-center justify-center">
                  {/* Decorative circles */}
                  <div className="absolute top-8 right-8 w-20 h-20 bg-primary/10 rounded-full"></div>
                  <div className="absolute bottom-12 left-8 w-16 h-16 bg-primary/5 rounded-full"></div>
                  <div className="absolute top-1/3 left-12 w-8 h-8 bg-primary/20 rounded-full"></div>
                  
                  {/* Main icon */}
                  <div className="relative z-10 w-28 h-28 bg-primary/10 rounded-3xl flex items-center justify-center mb-6">
                    <Megaphone size={56} className="text-primary" />
                  </div>
                  
                  <div className="relative z-10 text-center">
                    <h3 className="font-heading font-bold text-2xl text-foreground mb-2">Digital Marketing Expert</h3>
                    <p className="text-muted-foreground text-sm">Transforming businesses through strategic digital solutions</p>
                  </div>
                  
                  {/* Bottom icons */}
                  <div className="relative z-10 flex gap-4 mt-8">
                    <div className="w-12 h-12 bg-muted rounded-xl flex items-center justify-center">
                      <Zap size={24} className="text-foreground" />
                    </div>
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                      <Code size={24} className="text-primary" />
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating accent elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-primary rounded-2xl shadow-lg flex items-center justify-center">
                <span className="text-primary-foreground text-2xl">📈</span>
              </div>
              <div className="absolute -bottom-4 -left-4 w-14 h-14 bg-foreground rounded-xl shadow-lg flex items-center justify-center">
                <span className="text-background text-xl">🚀</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
