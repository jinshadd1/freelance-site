import { MessageSquare, Lightbulb, Rocket, BarChart3 } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    step: "01",
    title: "Understand Your Business",
    description: "We start with a deep dive into your goals, challenges, and target audience.",
  },
  {
    icon: Lightbulb,
    step: "02",
    title: "Build Strategy",
    description: "I create a customized plan tailored to your specific needs and budget.",
  },
  {
    icon: Rocket,
    step: "03",
    title: "Execute Marketing + Automation",
    description: "Implementation of campaigns, workflows, and systems that drive results.",
  },
  {
    icon: BarChart3,
    step: "04",
    title: "Track Results & Optimize",
    description: "Continuous monitoring and optimization to maximize your ROI.",
  },
];

const Workflow = () => {
  return (
    <section className="py-20 md:py-28 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground mb-4">
            How I Work
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A simple, transparent process to take your business from where it is to where you want it to be
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-border -translate-y-1/2"></div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
            {steps.map((step, index) => (
              <div 
                key={step.step}
                className="relative animate-fade-in"
                style={{ animationDelay: `${0.1 + index * 0.15}s` }}
              >
                {/* Card */}
                <div className="bg-card rounded-2xl p-6 shadow-lg border border-border hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                  {/* Step Number */}
                  <div className="absolute -top-4 left-6 w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                    <span className="text-primary-foreground font-bold text-sm">{step.step}</span>
                  </div>

                  {/* Icon */}
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mt-4 mb-5">
                    <step.icon size={28} className="text-primary" />
                  </div>

                  {/* Content */}
                  <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Workflow;
