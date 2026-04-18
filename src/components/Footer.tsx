import logo from "@/assets/drillsync-logo.png";

const Footer = () => (
  <footer className="bg-gradient-dark py-12">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <a href="#home" className="flex items-center gap-2">
          <img src={logo} alt="Drill Sync Systems logo" className="h-10 w-10 object-contain" />
          <span className="font-heading text-lg font-bold text-primary-foreground tracking-tight leading-none">
            DRILL <span className="text-accent">SYNC</span>
            <span className="block text-[10px] font-medium tracking-[0.2em] text-primary-foreground/60">SYSTEMS</span>
          </span>
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
