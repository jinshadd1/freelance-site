import { MessageSquare, Lightbulb, Rocket, BarChart3 } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    step: "01",
    title: "Understand Your Business",
    description: "Deep dive into your goals and audience.",
  },
  {
    icon: Lightbulb,
    step: "02",
    title: "Build Strategy",
    description: "Customized plan for your needs.",
  },
  {
    icon: Rocket,
    step: "03",
    title: "Execute Marketing + Automation",
    description: "Implementation that drives results.",
  },
  {
    icon: BarChart3,
    step: "04",
    title: "Track Results & Optimize",
    description: "Continuous improvement for max ROI.",
  },
];

const Workflow = () => {
  return (
    <section className="py-24 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground mb-4">
            How I Work
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A simple process to take your business forward
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-5xl mx-auto">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-border -translate-y-1/2"></div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {steps.map((step, index) => (
              <div 
                key={step.step}
                className="relative animate-fade-in"
                style={{ animationDelay: `${0.1 + index * 0.15}s` }}
              >
                {/* Card */}
                <div className="bg-card rounded-2xl p-6 shadow-md border border-border hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                  {/* Step Number */}
                  <div className="absolute -top-4 left-6 w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-md">
                    <span className="text-primary-foreground font-semibold text-sm">{step.step}</span>
                  </div>

                  {/* Icon */}
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mt-4 mb-4">
                    <step.icon size={24} className="text-primary" />
                  </div>

                  {/* Content */}
                  <h3 className="font-heading font-semibold text-base text-foreground mb-2">
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
