
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const closeMenu = () => {
    if (isMenuOpen) setIsMenuOpen(false);
  };

  const openBlog = () => {
    window.open("https://maxritter.bloggi.co/", "_blank");
    closeMenu();
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="text-xl font-bold text-foreground">
            Max
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <button 
            onClick={() => openBlog()} 
            className="text-foreground/80 hover:text-primary transition-colors"
          >
            Blog
          </button>
          <Link 
            to="/work" 
            className="text-foreground/80 hover:text-primary transition-colors"
          >
            Work
          </Link>
          <Link 
            to="/skills" 
            className="text-foreground/80 hover:text-primary transition-colors"
          >
            Skills
          </Link>
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
            <button 
              onClick={() => openBlog()} 
              className="text-foreground/80 hover:text-primary transition-colors text-lg py-2"
            >
              Blog
            </button>
            <Link 
              to="/work" 
              onClick={closeMenu}
              className="text-foreground/80 hover:text-primary transition-colors text-lg py-2"
            >
              Work
            </Link>
            <Link 
              to="/skills" 
              onClick={closeMenu}
              className="text-foreground/80 hover:text-primary transition-colors text-lg py-2"
            >
              Skills
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
