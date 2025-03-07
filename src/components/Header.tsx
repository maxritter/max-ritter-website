
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <a href="#" className="text-xl font-bold text-foreground">
            Max
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {["Blog", "Work", "Skills"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-foreground/80 hover:text-primary transition-colors"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-foreground" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 top-16 bg-background z-40 p-4">
          <nav className="flex flex-col space-y-4 pt-4">
            {["Blog", "Work", "Skills"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-foreground/80 hover:text-primary transition-colors text-lg py-2"
                onClick={toggleMenu}
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
