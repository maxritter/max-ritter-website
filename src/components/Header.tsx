import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/work", label: "Work" },
  { to: "/skills", label: "Skills" },
  { to: "/projects", label: "Projects" },
];

const BLOG_URL = "https://maxritter.bloggi.co/";

const menuVariants = {
  closed: { opacity: 0, y: -12, transition: { duration: 0.2 } },
  open: { opacity: 1, y: 0, transition: { duration: 0.25 } },
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navigateTo = (path: string) => {
    navigate(path);
    setIsMenuOpen(false);
  };

  return (
    <header className="relative z-50">
      <div className="shell flex items-center justify-between pt-7">
        <Link to="/" className="text-sm font-semibold tracking-[-0.01em]">
          Max Ritter
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) =>
                `py-2.5 text-sm transition-colors ${
                  isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <a
            href={BLOG_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="py-2.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Blog
          </a>
        </nav>

        {/* Mobile menu button */}
        <button
          className="-mr-2 flex h-11 w-11 items-center justify-center rounded-md text-foreground transition-colors hover:text-primary md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="absolute inset-x-0 top-full border-b border-border bg-background md:hidden"
          >
            <nav className="shell flex flex-col py-2" aria-label="Primary mobile">
              {navItems.map((item) => (
                <button
                  key={item.to}
                  onClick={() => navigateTo(item.to)}
                  aria-current={location.pathname === item.to ? "page" : undefined}
                  className={`border-b border-border/60 py-3.5 text-left text-lg transition-colors ${
                    location.pathname === item.to
                      ? "font-medium text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <a
                href={BLOG_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMenuOpen(false)}
                className="py-3.5 text-lg text-muted-foreground transition-colors hover:text-foreground"
              >
                Blog
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
