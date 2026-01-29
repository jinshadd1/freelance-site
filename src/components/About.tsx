const About = () => {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-5 gap-12 items-center">
            {/* Image Placeholder */}
            <div className="md:col-span-2 animate-fade-in-left">
              <div className="relative">
                <div className="absolute inset-0 bg-primary/10 rounded-2xl transform rotate-3"></div>
                <div className="relative bg-foreground rounded-2xl aspect-square flex items-center justify-center shadow-xl">
                  <div className="text-center p-8">
                    <div className="w-20 h-20 mx-auto bg-primary/20 rounded-2xl flex items-center justify-center mb-4">
                      <span className="text-4xl">👨‍💻</span>
                    </div>
                    <span className="text-background font-heading font-semibold text-lg">
                      Muhammed Jinshad K
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="md:col-span-3 animate-fade-in-right">
              <h2 className="font-heading font-bold text-3xl sm:text-4xl text-foreground mb-6">
                About Me
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                I'm a freelance digital creator helping businesses grow using marketing, automation, and smart systems.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
