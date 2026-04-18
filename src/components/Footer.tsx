import logo from "@/assets/drillsync-logo.png";

const Footer = () => (
  <footer className="bg-gradient-dark py-12">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <a href="#home" className="flex items-center gap-2">
          <img src={logo} alt="Drill Sync Systems logo" className="h-12 w-12 object-contain bg-primary-foreground rounded-md p-1" />
          <span className="sr-only">Drill Sync Systems</span>
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
          &copy; {new Date().getFullYear()} Drill Sync Systems. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
