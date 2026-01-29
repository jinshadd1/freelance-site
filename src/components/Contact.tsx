import { useState } from "react";
import { Send, MessageCircle, Mail, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const services = [
  "Digital Marketing",
  "Video Editing & Videography",
  "SEO Optimization",
  "CRM Setup",
  "Business Automation",
  "No-Code Websites & Apps",
  "Other",
];

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setIsSubmitted(true);
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });

    // Reset form after a delay
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", service: "", message: "" });
    }, 3000);
  };

  const openWhatsApp = () => {
    const message = encodeURIComponent("Hi Jinshad! I'm interested in your services.");
    window.open(`https://wa.me/918129632798?text=${message}`, "_blank");
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground mb-4">
              Let's Work Together
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ready to grow your business? Get in touch.
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-3 animate-fade-in-left">
              <div className="bg-card rounded-2xl p-8 shadow-lg border border-border">
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 mx-auto bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
                      <CheckCircle size={32} className="text-primary" />
                    </div>
                    <h3 className="font-heading font-semibold text-xl text-foreground mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-muted-foreground">
                      I'll get back to you soon.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-foreground font-medium">Name</Label>
                        <Input
                          id="name"
                          placeholder="Your name"
                          className="rounded-xl border-border"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-foreground font-medium">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="your@email.com"
                          className="rounded-xl border-border"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="service" className="text-foreground font-medium">Service Needed</Label>
                      <Select
                        value={formData.service}
                        onValueChange={(value) => setFormData({ ...formData, service: value })}
                      >
                        <SelectTrigger className="rounded-xl border-border">
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent className="bg-card border border-border rounded-xl">
                          {services.map((service) => (
                            <SelectItem key={service} value={service}>
                              {service}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-foreground font-medium">Message</Label>
                      <Textarea
                        id="message"
                        placeholder="Tell me about your project..."
                        rows={5}
                        className="rounded-xl border-border resize-none"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        required
                      />
                    </div>

                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full font-semibold rounded-xl"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        "Sending..."
                      ) : (
                        <>
                          Send Message
                          <Send size={18} />
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </div>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-6 animate-fade-in-right">
              {/* WhatsApp */}
              <div className="bg-card rounded-2xl p-6 shadow-lg border border-border">
                <h3 className="font-heading font-semibold text-lg text-foreground mb-4">
                  Quick Contact
                </h3>
                <Button 
                  onClick={openWhatsApp}
                  className="w-full bg-[#25D366] hover:bg-[#20BD5A] text-white font-semibold rounded-xl"
                >
                  <MessageCircle size={20} />
                  WhatsApp Me
                </Button>
                <p className="text-muted-foreground text-sm mt-3 text-center">
                  +91 8129632798
                </p>
              </div>

              {/* Email */}
              <div className="bg-card rounded-2xl p-6 shadow-lg border border-border">
                <h3 className="font-heading font-semibold text-lg text-foreground mb-4">
                  Email
                </h3>
                <a 
                  href="mailto:jinshad312@gmail.com"
                  className="flex items-center gap-3 text-foreground hover:text-primary transition-colors"
                >
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Mail size={20} className="text-primary" />
                  </div>
                  <span className="font-medium">jinshad312@gmail.com</span>
                </a>
              </div>

              {/* Response Time */}
              <div className="bg-foreground text-background rounded-2xl p-6 shadow-lg">
                <h3 className="font-heading font-semibold text-lg mb-2">
                  Response Time
                </h3>
                <p className="text-background/80 text-sm leading-relaxed">
                  I typically respond within 24 hours. For urgent inquiries, 
                  WhatsApp is the fastest way.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
