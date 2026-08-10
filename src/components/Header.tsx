import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { to: "/work", label: "Work" },
  { to: "/projects", label: "Projects" },
  { to: "/skills", label: "Skills" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  
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
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" aria-label="Max Ritter — Home" className="text-xl font-bold text-foreground relative group">
            <span aria-hidden="true">MR</span>
            <span className="absolute bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              onClick={closeMenu}
              className={({ isActive }) =>
                `relative group py-2.5 transition-colors ${
                  isActive ? "text-primary" : "text-foreground/80 hover:text-primary"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <span>{item.label}</span>
                  <span
                    className={`absolute bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </>
              )}
            </NavLink>
          ))}
          <a
            href="https://maxritter.bloggi.co/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
            className="text-foreground/80 hover:text-primary transition-colors relative group py-2.5"
          >
            <span>Blog</span>
            <span className="absolute bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden -mr-2 flex h-11 w-11 items-center justify-center rounded-lg text-foreground transition-colors duration-300 hover:text-primary"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
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
            className="md:hidden fixed inset-0 top-12 bg-background/95 backdrop-blur-md z-40 border-t border-muted/20"
          >
            <nav className="flex flex-col p-4 bg-background">
              {navItems.map((item, i) => (
                <motion.button
                  key={item.to}
                  custom={i}
                  variants={itemVariants}
                  onClick={() => navigateTo(item.to)}
                  aria-current={location.pathname === item.to ? "page" : undefined}
                  className={`transition-colors text-lg py-3.5 text-left border-b border-muted/20 ${
                    location.pathname === item.to
                      ? "text-primary font-medium"
                      : "text-foreground/80 hover:text-primary"
                  }`}
                >
                  {item.label}
                </motion.button>
              ))}
              <motion.button
                custom={navItems.length}
                variants={itemVariants}
                onClick={() => openBlog()}
                className="text-foreground/80 hover:text-primary transition-colors text-lg py-3.5 text-left border-b border-muted/20"
              >
                Blog
              </motion.button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
