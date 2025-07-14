import { useState } from "react";
import { Button } from "@/components/ui/button";
import { User, Globe, Menu } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Airbnb
            </h1>
          </div>

          {/* Search Bar - Hidden on mobile */}
          <div className="hidden md:flex items-center bg-background border border-border rounded-full shadow-card hover:shadow-card-hover transition-all duration-300 px-6 py-2">
            <span className="text-sm font-medium text-foreground">Anywhere</span>
            <div className="h-6 w-px bg-border mx-4" />
            <span className="text-sm font-medium text-foreground">Any week</span>
            <div className="h-6 w-px bg-border mx-4" />
            <span className="text-sm text-muted-foreground">Add guests</span>
            <Button size="sm" className="ml-4 rounded-full h-8 w-8" variant="hero">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </Button>
          </div>

          {/* Right side */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="hidden md:flex">
              Airbnb your home
            </Button>
            
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <Globe className="h-4 w-4" />
            </Button>

            <div className="relative">
              <Button
                variant="outline"
                className="flex items-center space-x-2 rounded-full p-2 hover:shadow-card-hover transition-all duration-300"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <Menu className="h-4 w-4" />
                <User className="h-6 w-6 bg-muted rounded-full p-1" />
              </Button>

              {isMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-background border border-border rounded-lg shadow-card-hover py-2 z-50">
                  <a href="#" className="block px-4 py-2 text-sm hover:bg-muted transition-colors">
                    Sign up
                  </a>
                  <a href="#" className="block px-4 py-2 text-sm hover:bg-muted transition-colors">
                    Log in
                  </a>
                  <hr className="my-2 border-border" />
                  <a href="#" className="block px-4 py-2 text-sm hover:bg-muted transition-colors">
                    Airbnb your home
                  </a>
                  <a href="#" className="block px-4 py-2 text-sm hover:bg-muted transition-colors">
                    Help Center
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;