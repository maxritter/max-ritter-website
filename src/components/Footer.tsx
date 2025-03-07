
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background py-8 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-center items-center text-muted-foreground">
          <div className="mb-4 md:mb-0 flex space-x-6">
            <a href="#" className="hover:text-primary transition-colors">Imprint</a>
            <span>|</span>
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <span>|</span>
            <a href="#" className="hover:text-primary transition-colors">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
