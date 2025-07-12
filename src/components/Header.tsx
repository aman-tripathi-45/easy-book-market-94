
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const Header = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <header className="absolute top-0 left-0 right-0 z-50 bg-transparent">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo and Title - Positioned slightly lower and moved left */}
          <div className="flex items-center gap-3 ml-4">
            <img 
              src="/lovable-uploads/69bd91d0-725e-492c-aa0d-ca13c2901092.png" 
              alt="Ideal Institute of Technology Logo" 
              className="h-12 w-12 mt-2"
            />
            <h1 className="text-hero-text font-poppins text-lg font-semibold tracking-wide mt-2">
              Ideal Institute of Technology
            </h1>
          </div>

          {/* Navigation - Centered and moved slightly left */}
          <nav className="hidden md:flex items-center gap-6 -ml-8">
            <NavItem href="/" active>Home</NavItem>
            <NavItem href="/login">Login</NavItem>
            <NavItem href="/register">Register</NavItem>
          </nav>

          {/* Theme Toggle Button - Settings icon removed */}
          <div className="flex items-center">
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-hero-text hover:bg-hero-text/10 flex items-center gap-2 font-inter"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              <span className="hidden md:inline text-sm font-medium">
                {theme === "dark" ? "Light" : "Dark"}
              </span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

const NavItem = ({ href, children, active = false }: { href: string; children: React.ReactNode; active?: boolean }) => {
  return (
    <a
      href={href}
      className={`font-inter px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
        active
          ? "bg-hero-text/20 text-hero-text backdrop-blur-sm shadow-lg"
          : "text-hero-text/80 hover:text-hero-text hover:bg-hero-text/10"
      }`}
    >
      {children}
    </a>
  );
};

export default Header;
