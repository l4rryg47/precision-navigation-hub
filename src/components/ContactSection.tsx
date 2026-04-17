import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const ContactSection = () => (
  <section id="contact" className="py-20 lg:py-28 bg-background">
    <div className="container mx-auto px-4">
      <div className="grid lg:grid-cols-2 gap-16">
        <AnimatedSection>
          <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-2">Get In Touch</p>
          <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Ready to Start Your Next Project?
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Whether you need directional drilling consultation or a full-service navigation package,
            our team is ready to help.
          </p>

          <div className="space-y-5">
            {[
              { icon: Phone, text: "+1 (713) 555-0192" },
              { icon: Mail, text: "info@drillsyncsystems.com" },
              { icon: MapPin, text: "Houston, TX — Aberdeen, UK — Dubai, UAE" },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                  <item.icon className="w-5 h-5 text-accent" />
                </div>
                <span className="text-sm text-foreground">{item.text}</span>
              </div>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <form
            className="rounded-xl bg-card shadow-card p-8 space-y-5"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <Input placeholder="Full Name" className="bg-muted/50" />
              <Input placeholder="Company" className="bg-muted/50" />
            </div>
            <Input placeholder="Email Address" type="email" className="bg-muted/50" />
            <Input placeholder="Phone Number" type="tel" className="bg-muted/50" />
            <Textarea placeholder="Tell us about your project..." rows={4} className="bg-muted/50" />
            <Button
              type="submit"
              size="lg"
              className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-semibold"
            >
              Send Inquiry
            </Button>
          </form>
        </AnimatedSection>
      </div>
    </div>
  </section>
);

export default ContactSection;
