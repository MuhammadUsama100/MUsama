import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./ThemeToggle";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = [
    { path: "/", label: "About" },
    { path: "/publications", label: "Publications" },
    { path: "/projects", label: "Projects" },
    { path: "/experience", label: "Experience" },
    { path: "/blogs", label: "Blogs" },
    { path: "/education", label: "Education" },
    { path: "/contact", label: "Contact" },
  ];

  const MobileMenuLinks = () => (
    <div className="flex flex-col space-y-4 p-4">
      {links.map((link) => (
        <Link
          key={link.path}
          to={link.path}
          onClick={() => setIsMenuOpen(false)}
          className={cn(
            "text-lg font-medium transition-colors hover:text-accent",
            location.pathname === link.path
              ? "text-accent"
              : "text-foreground"
          )}
        >
          {link.label}
        </Link>
      ))}
    </div>
  );

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border bg-background/99 backdrop-blur supports-[backdrop-filter]:bg-background/90">
      <div className="container flex h-16 items-center justify-between">
        {/* Placeholder for logo/site title - keeping original structure */}
        <div className="w-8"></div> 

        {/* Desktop Navigation (Hidden on small screens) */}
        <div className="hidden md:flex items-center gap-6">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "text-sm font-medium transition-colors hover:text-accent",
                location.pathname === link.path
                  ? "text-accent"
                  : "text-muted-foreground"
              )}
            >
              {link.label}
            </Link>
          ))}
          <ThemeToggle />
        </div>

        {/* Mobile Menu Button (Hidden on larger screens) */}
        <div className="flex items-center md:hidden">
            <ThemeToggle />
            <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
                className="ml-4 p-2"
            >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-border absolute w-full bg-background/99 backdrop-blur supports-[backdrop-filter]:bg-background/90 shadow-lg">
          <MobileMenuLinks />
        </div>
      )}
    </nav>
  );
};

export default Navigation;