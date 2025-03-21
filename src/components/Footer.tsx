
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-background py-3 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-2 md:mb-0">
            <p className="text-xs text-muted-foreground">
              © {currentYear} Max Ritter. All rights reserved.
            </p>
          </div>
          <div className="flex space-x-6">
            <Link 
              to="/imprint" 
              className="text-xs text-muted-foreground hover:text-primary transition-colors"
            >
              Imprint
            </Link>
            <Link 
              to="/privacy" 
              className="text-xs text-muted-foreground hover:text-primary transition-colors"
            >
              Privacy Policy
            </Link>
            <Link 
              to="/terms" 
              className="text-xs text-muted-foreground hover:text-primary transition-colors"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
