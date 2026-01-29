const About = () => {
  return (
    <section id="about" className="py-20 md:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-5 gap-12 items-center">
            {/* Image Placeholder */}
            <div className="md:col-span-2 animate-fade-in-left">
              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 rounded-3xl transform rotate-3"></div>
                <div className="relative bg-secondary rounded-2xl aspect-square flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-24 h-24 mx-auto bg-primary/20 rounded-full flex items-center justify-center mb-4">
                      <span className="text-4xl">👨‍💻</span>
                    </div>
                    <span className="text-secondary-foreground font-heading font-semibold">
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
              <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                <p>
                  Hi, I'm <strong className="text-foreground">Muhammed Jinshad K</strong>, a freelance digital marketing expert 
                  and multi-skilled creator based in India.
                </p>
                <p>
                  I help businesses and startups grow their online presence through strategic 
                  digital marketing, smart automation, and modern no-code solutions. With experience 
                  across Meta Ads, Google Ads, SEO, video production, and web development, I bring 
                  a holistic approach to every project.
                </p>
                <p>
                  My goal is simple: deliver results that matter. Whether you need to generate leads, 
                  build a stunning website, or automate your workflows — I've got you covered.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
