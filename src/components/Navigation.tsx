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
    { path: "/apps", label: "Apps" },
    { path: "/experience", label: "Experience" },
    { path: "/collaborate", label: "Collaborate" },
    { path: "/articles", label: "Articles" },
    { path: "/education", label: "Education" },
    { path: "/contact", label: "Contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  const MobileMenuLinks = () => (
    <div className="container flex flex-col gap-1 py-3">
      {links.map((link) => (
        <Link
          key={link.path}
          to={link.path}
          onClick={() => setIsMenuOpen(false)}
          className={cn(
            "rounded-md px-3 py-3 text-sm font-medium transition-colors hover:bg-secondary",
            isActive(link.path) ? "text-accent" : "text-foreground"
          )}
        >
          {link.label}
        </Link>
      ))}
    </div>
  );

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border/80 bg-background/92 backdrop-blur-xl supports-[backdrop-filter]:bg-background/80">
      <div className="container flex h-16 max-w-6xl items-center justify-between px-4">
        <Link to="/" className="group flex items-center gap-3" onClick={() => setIsMenuOpen(false)}>
          <span className="flex h-9 w-9 items-center justify-center rounded-md bg-primary text-sm font-bold text-primary-foreground transition-colors group-hover:bg-accent">
            MU
          </span>
          <span className="hidden leading-tight sm:block">
            <span className="block text-sm font-semibold text-foreground">Muhammad Usama</span>
            <span className="block text-xs text-muted-foreground">3D Vision · Generative AI</span>
          </span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-secondary hover:text-foreground",
                isActive(link.path)
                  ? "bg-secondary text-foreground"
                  : "text-muted-foreground"
              )}
            >
              {link.label}
            </Link>
          ))}
          <ThemeToggle />
        </div>

        <div className="flex items-center md:hidden">
            <ThemeToggle />
            <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
                className="ml-2 rounded-md p-2 hover:bg-secondary"
            >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="absolute w-full border-t border-border/80 bg-background/95 shadow-lg backdrop-blur-xl md:hidden">
          <MobileMenuLinks />
        </div>
      )}
    </nav>
  );
};

export default Navigation;
