import { CheckCircle } from "lucide-react";

const highlights = [
  "ISO 9001 & API certified operations",
  "24/7 remote monitoring & support",
  "Proprietary navigation algorithms",
  "Experienced multi-disciplinary crew",
];

const AboutSection = () => (
  <section id="about" className="py-20 lg:py-28 bg-muted/50">
    <div className="container mx-auto px-4">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-2">About Us</p>
          <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Engineering Excellence Below the Surface
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            With over two decades of field expertise, ApexNav delivers integrated drilling and
            hydraulic navigation solutions to the oil &amp; gas, geothermal, and mining industries.
            Our commitment to safety, precision, and innovation sets us apart.
          </p>
          <ul className="space-y-3">
            {highlights.map((h) => (
              <li key={h} className="flex items-center gap-3 text-foreground">
                <CheckCircle className="w-5 h-5 text-accent shrink-0" />
                <span className="text-sm">{h}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative">
          <div className="rounded-2xl overflow-hidden shadow-card bg-gradient-dark p-10 lg:p-14">
            <blockquote className="text-primary-foreground/90 text-lg italic leading-relaxed">
              "ApexNav's directional drilling team delivered pinpoint accuracy on our most
              challenging offshore well — on time and under budget."
            </blockquote>
            <p className="mt-6 text-sm font-semibold text-accent">— Senior VP Operations, Major E&P Company</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
