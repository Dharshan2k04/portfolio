import { useState, useEffect } from "react";
import { Menu, X, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [{
    label: "Home",
    href: "#home"
  }, {
    label: "About",
    href: "#about"
  }, {
    label: "Projects",
    href: "#projects"
  }, {
    label: "Skills",
    href: "#skills"
  }, {
    label: "Certifications",
    href: "#certifications"
  }, {
    label: "Contact",
    href: "#contact"
  }];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
    setIsOpen(false);
  };

  return <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-white bg-clip-text text-transparent">
            Portfolio
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => <button key={index} onClick={() => scrollToSection(item.href)} className="text-gray-300 hover:text-blue-400 transition-colors duration-300 font-medium">
                {item.label}
              </button>)}
            
          </div>
          
          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white hover:text-blue-400 transition-colors duration-300">
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isOpen && <div className="md:hidden bg-slate-900/95 backdrop-blur-md rounded-lg mt-2 p-4 space-y-4">
            {navItems.map((item, index) => <button key={index} onClick={() => scrollToSection(item.href)} className="block w-full text-left text-gray-300 hover:text-blue-400 transition-colors duration-300 font-medium py-2">
                {item.label}
              </button>)}
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full transition-all duration-300 w-full" size="sm">
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </Button>
          </div>}
      </div>
    </nav>;
};

export default Navigation;
