import { useState } from "react";
import { ExternalLink, X } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const projects = [
  {
    id: 1,
    title: "E-commerce Brand Campaign",
    category: "Marketing Creatives",
    description: "Meta Ads campaign for a fashion brand with 3x ROAS improvement.",
    placeholder: true,
  },
  {
    id: 2,
    title: "Product Launch Video",
    category: "Video Edits",
    description: "Promotional video for a tech product launch with motion graphics.",
    placeholder: true,
  },
  {
    id: 3,
    title: "SaaS Landing Page",
    category: "Websites",
    description: "High-converting landing page built with Framer for a B2B SaaS company.",
    placeholder: true,
  },
  {
    id: 4,
    title: "Restaurant Social Media",
    category: "Marketing Creatives",
    description: "Complete social media strategy and content for a local restaurant chain.",
    placeholder: true,
  },
  {
    id: 5,
    title: "Brand Story Documentary",
    category: "Video Edits",
    description: "Mini documentary showcasing a startup's journey and mission.",
    placeholder: true,
  },
  {
    id: 6,
    title: "Portfolio Website",
    category: "Websites",
    description: "Personal portfolio website for a photographer with gallery features.",
    placeholder: true,
  },
];

const categories = ["All", "Video Edits", "Websites", "Marketing Creatives"];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="portfolio" className="py-20 md:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground mb-4">
            Portfolio
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A selection of projects showcasing my work across different services
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full font-medium text-sm transition-all duration-200 ${
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative bg-muted rounded-2xl overflow-hidden aspect-[4/3] hover:shadow-xl transition-all duration-300">
                {/* Placeholder Content */}
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/80 to-secondary flex items-center justify-center">
                  <div className="text-center p-6">
                    <span className="text-secondary-foreground/60 text-sm font-medium block mb-2">
                      Sample Project
                    </span>
                    <span className="text-secondary-foreground font-heading font-semibold text-lg">
                      {project.title}
                    </span>
                  </div>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-primary/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center p-6">
                    <ExternalLink size={32} className="mx-auto text-primary-foreground mb-3" />
                    <span className="text-primary-foreground font-medium">View Project</span>
                  </div>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-background/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-foreground">
                    {project.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle className="font-heading font-bold text-xl">
              {selectedProject?.title}
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            {/* Placeholder Image */}
            <div className="bg-muted rounded-xl aspect-video flex items-center justify-center">
              <span className="text-muted-foreground">Sample Project Preview</span>
            </div>
            <div>
              <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-3">
                {selectedProject?.category}
              </span>
              <p className="text-muted-foreground leading-relaxed">
                {selectedProject?.description}
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Portfolio;
