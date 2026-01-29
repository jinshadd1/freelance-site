const tools = [
  "Meta Ads",
  "Google Ads",
  "SEO",
  "Zapier",
  "CRM",
  "Webflow",
  "Framer",
  "Notion",
  "Automation",
  "No-Code",
  "Video Editing",
  "Analytics",
];

const Tools = () => {
  return (
    <section className="py-20 md:py-28 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground mb-4">
            Tools & Skills
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The technologies and platforms I use to deliver exceptional results
          </p>
        </div>

        {/* Tools Grid */}
        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {tools.map((tool, index) => (
            <span
              key={tool}
              className="px-6 py-3 bg-card border border-border rounded-full font-medium text-foreground hover:bg-secondary hover:text-secondary-foreground hover:border-secondary transition-all duration-200 cursor-default animate-scale-in"
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
