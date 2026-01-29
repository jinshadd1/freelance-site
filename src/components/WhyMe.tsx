import { Target, Zap, User, Wallet } from "lucide-react";

const reasons = [
  {
    icon: Target,
    title: "Results Focused",
    description: "Every strategy is built around measurable outcomes. I track what matters and optimize continuously.",
  },
  {
    icon: Zap,
    title: "Automation Mindset",
    description: "I believe in working smarter, not harder. Automation saves you time and reduces human error.",
  },
  {
    icon: User,
    title: "One Person, Many Skills",
    description: "No agency overhead. You work directly with me across marketing, video, design, and development.",
  },
  {
    icon: Wallet,
    title: "Affordable for Startups",
    description: "Quality services at fair prices. Flexible packages designed for growing businesses and startups.",
  },
];

const WhyMe = () => {
  return (
    <section id="why-me" className="py-20 md:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground mb-4">
            Why Choose Me?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Working with a freelance specialist means personalized attention and dedicated expertise
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div 
              key={reason.title}
              className="text-center group animate-fade-in"
              style={{ animationDelay: `${0.1 + index * 0.1}s` }}
            >
              <div className="w-20 h-20 mx-auto bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <reason.icon size={36} className="text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              <h3 className="font-heading font-semibold text-xl text-foreground mb-3">
                {reason.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyMe;
