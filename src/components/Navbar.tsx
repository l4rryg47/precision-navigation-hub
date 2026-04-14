import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-md border-b border-primary-foreground/10">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <a href="#home" className="font-heading text-xl font-bold text-primary-foreground tracking-tight">
          APEX<span className="text-accent">NAV</span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-primary-foreground/70 hover:text-accent transition-colors"
            >
              {l.label}
            </a>
          ))}
          <Button
            variant="default"
            size="sm"
            className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold"
            asChild
          >
            <a href="#contact">
              <Phone className="w-4 h-4 mr-2" />
              Get a Quote
            </a>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-primary-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-primary border-t border-primary-foreground/10 px-4 pb-4">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-sm font-medium text-primary-foreground/70 hover:text-accent transition-colors"
            >
              {l.label}
            </a>
          ))}
          <Button
            variant="default"
            size="sm"
            className="w-full mt-2 bg-accent text-accent-foreground hover:bg-accent/90 font-semibold"
            asChild
          >
            <a href="#contact">
              <Phone className="w-4 h-4 mr-2" />
              Get a Quote
            </a>
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
