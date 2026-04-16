const Footer = () => (
  <footer className="bg-gradient-dark py-12">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <a href="#home" className="font-heading text-xl font-bold text-primary-foreground tracking-tight">
          DRILL<span className="text-accent">NAV</span>
        </a>
        <div className="flex gap-6">
          {["Home", "Services", "About", "Contact"].map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className="text-sm text-primary-foreground/50 hover:text-accent transition-colors"
            >
              {l}
            </a>
          ))}
        </div>
        <p className="text-xs text-primary-foreground/40">
          &copy; {new Date().getFullYear()} ApexNav. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
