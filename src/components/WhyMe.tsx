import { Target, Zap, User, Wallet } from "lucide-react";

const reasons = [
  {
    icon: Target,
    title: "Results Focused",
    description: "Every strategy built around measurable outcomes.",
  },
  {
    icon: Zap,
    title: "Automation Mindset",
    description: "Work smarter with intelligent automation.",
  },
  {
    icon: User,
    title: "One Person, Many Skills",
    description: "No agency overhead. Direct collaboration.",
  },
  {
    icon: Wallet,
    title: "Affordable for Startups",
    description: "Quality services at fair, flexible prices.",
  },
];

const WhyMe = () => {
  return (
    <section id="why-me" className="py-24 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground mb-4">
            Why Choose Me?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Personalized attention and dedicated expertise
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {reasons.map((reason, index) => (
            <div 
              key={reason.title}
              className="text-center group animate-fade-in"
              style={{ animationDelay: `${0.1 + index * 0.1}s` }}
            >
              <div className="w-16 h-16 mx-auto bg-primary/10 rounded-2xl flex items-center justify-center mb-5 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <reason.icon size={28} className="text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                {reason.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
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
