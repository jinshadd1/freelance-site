import { Megaphone, Video, Search, Users, Zap, Code } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Video,
    title: "Video Editing & Videography",
    description: "Professional video content that captures your brand story.",
  },
  {
    icon: Search,
    title: "SEO Optimization",
    description: "Boost visibility and drive organic traffic.",
  },
  {
    icon: Users,
    title: "CRM Setup",
    description: "Streamline customer relationships with smart CRM.",
  },
  {
    icon: Zap,
    title: "Business Automation",
    description: "Save time with intelligent workflow automation.",
  },
  {
    icon: Code,
    title: "No-Code Websites & Apps",
    description: "Beautiful sites built with Webflow & Framer.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground mb-4">
            Services I Offer
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive digital solutions to help your business thrive
          </p>
        </div>

        {/* Featured Service - Digital Marketing */}
        <div className="mb-12 animate-scale-in" style={{ animationDelay: "0.1s" }}>
          <Card className="bg-foreground text-background border-0 shadow-xl rounded-2xl overflow-hidden">
            <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12">
              <div className="space-y-6">
                <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center">
                  <Megaphone size={32} className="text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-2xl sm:text-3xl mb-4">
                    Digital Marketing
                  </h3>
                  <p className="text-background/80 text-lg leading-relaxed">
                    Performance ads, lead generation, funnel building.
                  </p>
                </div>
                <ul className="space-y-3 text-background/80">
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></span>
                    Meta & Google Ads Management
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></span>
                    Campaign Strategy & Optimization
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></span>
                    Performance Tracking & Reporting
                  </li>
                </ul>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative w-full max-w-xs aspect-square">
                  <div className="absolute inset-0 bg-primary/20 rounded-3xl transform rotate-6"></div>
                  <div className="absolute inset-0 bg-primary/30 rounded-3xl transform -rotate-3"></div>
                  <div className="relative bg-card rounded-2xl p-8 h-full flex flex-col items-center justify-center text-center shadow-lg">
                    <Megaphone size={64} className="text-primary mb-4" />
                    <span className="font-heading font-bold text-foreground text-xl">Digital Marketing</span>
                    <span className="text-primary text-sm font-semibold mt-1">Featured Service</span>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Other Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {services.map((service, index) => (
            <Card 
              key={service.title} 
              className="bg-card border border-border rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <service.icon size={24} className="text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
