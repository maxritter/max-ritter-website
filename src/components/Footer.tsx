import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-16 border-t border-border">
      <div className="shell flex flex-col gap-4 py-8 text-[13.5px] text-muted-foreground md:flex-row md:items-center md:justify-between">
        <a href="mailto:mail@maxritter.net" className="transition-colors hover:text-primary">
          mail@maxritter.net
        </a>
        <nav className="flex flex-wrap items-center gap-x-6 gap-y-2" aria-label="Profiles">
          <a
            href="https://www.linkedin.com/in/rittermax/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-primary"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/maxritter"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-primary"
          >
            GitHub
          </a>
          <a
            href="https://flowcv.com/resume/hcaa0q4wdd"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-primary"
          >
            CV
          </a>
        </nav>
      </div>
      <div className="border-t border-border/60">
        <div className="shell flex flex-col gap-2 py-4 text-xs text-faint md:flex-row md:items-center md:justify-between">
          <span>&copy; {currentYear} Max Ritter. All rights reserved.</span>
          <nav className="flex items-center gap-5" aria-label="Legal">
            <Link to="/imprint" className="transition-colors hover:text-foreground">
              Imprint
            </Link>
            <Link to="/privacy" className="transition-colors hover:text-foreground">
              Privacy
            </Link>
            <Link to="/terms" className="transition-colors hover:text-foreground">
              Terms
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
