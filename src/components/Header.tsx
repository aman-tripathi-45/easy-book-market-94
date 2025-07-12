import { Moon, Sun, Settings } from "lucide-react";
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
      <div className="container mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          {/* Logo and Title */}
          <div className="flex items-center gap-3">
            <img 
              src="/lovable-uploads/69bd91d0-725e-492c-aa0d-ca13c2901092.png" 
              alt="Ideal Institute of Technology Logo" 
              className="h-12 w-12 rounded-full shadow-lg"
            />
            <h1 className="text-hero-text font-poppins text-lg font-semibold tracking-wide">
              Ideal Institute of Technology
            </h1>
          </div>

          {/* Navigation - Centered */}
          <nav className="hidden md:flex items-center gap-8">
            <NavItem href="/" active>Home</NavItem>
            <NavItem href="#browse">Academic Analyzer</NavItem>
            <NavItem href="#placement">Placement Hub</NavItem>
            <NavItem href="#training">Training Analyzer</NavItem>
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center gap-4">
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
            <Button variant="ghost" size="icon" className="text-hero-text hover:bg-hero-text/10">
              <Settings className="h-5 w-5" />
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