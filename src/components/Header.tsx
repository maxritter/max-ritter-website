
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const closeMenu = () => {
    if (isMenuOpen) setIsMenuOpen(false);
  };

  const openBlog = () => {
    window.open("https://maxritter.bloggi.co/", "_blank");
    closeMenu();
  };

  const navigateTo = (path: string) => {
    navigate(path);
    closeMenu();
  };

  const menuVariants = {
    closed: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.2
      }
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3
      }
    }
  };

  const itemVariants = {
    closed: { opacity: 0, x: -10 },
    open: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.3
      }
    })
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="text-xl font-bold text-foreground relative group">
            <span className="relative z-10">Max</span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <button 
            onClick={() => openBlog()} 
            className="text-foreground/80 hover:text-primary transition-colors relative group"
          >
            <span>Blog</span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
          </button>
          <button 
            onClick={() => navigateTo('/work')} 
            className="text-foreground/80 hover:text-primary transition-colors relative group"
          >
            <span>Work</span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
          </button>
          <button 
            onClick={() => navigateTo('/skills')} 
            className="text-foreground/80 hover:text-primary transition-colors relative group"
          >
            <span>Skills</span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-foreground transition-colors duration-300 hover:text-primary" 
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="md:hidden fixed inset-0 top-16 bg-background/95 backdrop-blur-md z-40 border-t border-muted/20"
          >
            <nav className="flex flex-col space-y-4 p-6 bg-background">
              <motion.button 
                custom={0}
                variants={itemVariants}
                onClick={() => openBlog()} 
                className="text-foreground/80 hover:text-primary transition-colors text-lg py-3 text-left border-b border-muted/20"
              >
                Blog
              </motion.button>
              <motion.button 
                custom={1}
                variants={itemVariants}
                onClick={() => navigateTo('/work')}
                className="text-foreground/80 hover:text-primary transition-colors text-lg py-3 text-left border-b border-muted/20"
              >
                Work
              </motion.button>
              <motion.button 
                custom={2}
                variants={itemVariants}
                onClick={() => navigateTo('/skills')}
                className="text-foreground/80 hover:text-primary transition-colors text-lg py-3 text-left border-b border-muted/20"
              >
                Skills
              </motion.button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
