const tools = [
  "Meta Ads",
  "Google Ads",
  "SEO",
  "Zapier",
  "CRM",
  "Automation",
  "No-Code",
];

const Tools = () => {
  return (
    <section className="py-24 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground mb-4">
            Tools & Skills
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Technologies I use to deliver results
          </p>
        </div>

        {/* Tools Grid */}
        <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
          {tools.map((tool, index) => (
            <span
              key={tool}
              className="px-5 py-2.5 bg-card border border-border rounded-xl font-medium text-sm text-foreground hover:bg-foreground hover:text-background hover:border-foreground transition-all duration-200 cursor-default animate-scale-in shadow-sm"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tools;
