import { useState } from 'react';
import { Menu, X, GraduationCap, Moon, Sun } from 'lucide-react';
import { Button } from './ui/button';
import { useTheme } from './ThemeContext';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 dark:bg-[#1B3C53]/95 backdrop-blur-sm z-50 border-b border-[#D2C1B6]/30 dark:border-[#D2C1B6]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <img src="/logo.svg" alt="AMIGOS AGENCY" className="w-8 h-8" />
            <span className="text-xl text-[#1B3C53] dark:text-[#F9F3EF]">AMIGOS AGENCY</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('about')} className="text-[#456882] dark:text-[#D2C1B6] hover:text-[#1B3C53] dark:hover:text-[#F9F3EF] transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection('services')} className="text-[#456882] dark:text-[#D2C1B6] hover:text-[#1B3C53] dark:hover:text-[#F9F3EF] transition-colors">
              Services
            </button>
            <button onClick={() => scrollToSection('packages')} className="text-[#456882] dark:text-[#D2C1B6] hover:text-[#1B3C53] dark:hover:text-[#F9F3EF] transition-colors">
              Packages
            </button>
            <button onClick={() => scrollToSection('countries')} className="text-[#456882] dark:text-[#D2C1B6] hover:text-[#1B3C53] dark:hover:text-[#F9F3EF] transition-colors">
              Countries
            </button>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg text-[#456882] dark:text-[#D2C1B6] hover:bg-[#F9F3EF] dark:hover:bg-[#1B3C53]/50 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
            </button>
            <Button onClick={() => scrollToSection('contact')} className="bg-[#1B3C53] hover:bg-[#456882] dark:bg-[#D2C1B6] dark:text-[#1B3C53] dark:hover:bg-[#F9F3EF]">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-[#1B3C53] dark:text-[#F9F3EF]"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-3">
            <button
              onClick={() => scrollToSection('about')}
              className="block w-full text-left px-4 py-2 text-[#456882] dark:text-[#D2C1B6] hover:bg-[#F9F3EF] dark:hover:bg-[#1B3C53]/50"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="block w-full text-left px-4 py-2 text-[#456882] dark:text-[#D2C1B6] hover:bg-[#F9F3EF] dark:hover:bg-[#1B3C53]/50"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('packages')}
              className="block w-full text-left px-4 py-2 text-[#456882] dark:text-[#D2C1B6] hover:bg-[#F9F3EF] dark:hover:bg-[#1B3C53]/50"
            >
              Packages
            </button>
            <button
              onClick={() => scrollToSection('countries')}
              className="block w-full text-left px-4 py-2 text-[#456882] dark:text-[#D2C1B6] hover:bg-[#F9F3EF] dark:hover:bg-[#1B3C53]/50"
            >
              Countries
            </button>
            <div className="px-4">
              <button
                onClick={toggleTheme}
                className="w-full flex items-center gap-2 px-4 py-2 text-[#456882] dark:text-[#D2C1B6] hover:bg-[#F9F3EF] dark:hover:bg-[#1B3C53]/50 rounded-lg transition-colors"
              >
                {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
                <span>{theme === 'light' ? 'Dark Mode' : 'Light Mode'}</span>
              </button>
            </div>
            <div className="px-4 pt-2">
              <Button onClick={() => scrollToSection('contact')} className="w-full bg-[#1B3C53] hover:bg-[#456882] dark:bg-[#D2C1B6] dark:text-[#1B3C53] dark:hover:bg-[#F9F3EF]">
                Get Started
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}