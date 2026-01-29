import { Megaphone, Video, Search, Users, Zap, Code } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: Video,
    title: "Video Editing & Videography",
    description: "Professional video content that captures attention and tells your brand story effectively.",
  },
  {
    icon: Search,
    title: "SEO Optimization",
    description: "Boost your visibility on search engines and drive organic traffic to your business.",
  },
  {
    icon: Users,
    title: "CRM Setup",
    description: "Streamline your customer relationships with tailored CRM solutions and automation.",
  },
  {
    icon: Zap,
    title: "Business Automation",
    description: "Save time and reduce errors with smart automation workflows using Zapier and more.",
  },
  {
    icon: Code,
    title: "No-Code Websites & Apps",
    description: "Beautiful, functional websites and apps built with Webflow, Framer, and other no-code tools.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 md:py-28 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground mb-4">
            Services I Offer
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive digital solutions to help your business thrive in the online world
          </p>
        </div>

        {/* Featured Service - Digital Marketing */}
        <div className="mb-12 animate-scale-in" style={{ animationDelay: "0.1s" }}>
          <Card className="bg-secondary text-secondary-foreground border-0 shadow-xl overflow-hidden">
            <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12">
              <div className="space-y-6">
                <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center">
                  <Megaphone size={32} className="text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-2xl sm:text-3xl mb-3">
                    Digital Marketing
                  </h3>
                  <p className="text-secondary-foreground/80 text-lg leading-relaxed">
                    Strategic digital marketing campaigns across Meta Ads, Google Ads, and other platforms. 
                    I help you reach the right audience, generate leads, and maximize your ROI with data-driven strategies.
                  </p>
                </div>
                <ul className="space-y-2 text-secondary-foreground/80">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    Meta & Google Ads Management
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    Campaign Strategy & Optimization
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
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
                    <span className="text-muted-foreground text-sm mt-1">Featured Service</span>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Other Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card 
              key={service.title} 
              className="bg-card border border-border hover:shadow-xl hover:-translate-y-1 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <service.icon size={24} className="text-primary" />
                </div>
                <CardTitle className="font-heading font-semibold text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
