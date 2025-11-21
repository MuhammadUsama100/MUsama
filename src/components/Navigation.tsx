import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./ThemeToggle";

const Navigation = () => {
  const location = useLocation();
  
  const links = [
    { path: "/", label: "About" },
    { path: "/publications", label: "Publications" },
    { path: "/projects", label: "Projects" },
    { path: "/experience", label: "Experience" },
    { path: "/blogs", label: "Blogs" },
    { path: "/education", label: "Education" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="w-8"></div>
        
        <div className="flex items-center gap-6">
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
      </div>
    </nav>
  );
};

export default Navigation;
