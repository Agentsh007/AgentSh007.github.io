import { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { Moon, Sun } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'travel', label: 'Travel' },
    { id: 'contact', label: 'Contact' }
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed top-8 left-1/2 transform -translate-x-1/2 z-50 px-6 py-3 rounded-full transition-all duration-300 ${
      scrolled 
        ? 'bg-opacity-90 backdrop-blur-md shadow-lg ' +
          (theme === 'dark' ? 'bg-gray-800' : 'bg-white')
        : 'bg-opacity-50 backdrop-blur-sm ' +
          (theme === 'dark' ? 'bg-gray-900' : 'bg-white/70')
    }`}>
      <div className="flex items-center">
        <ul className="flex space-x-8">
          {navLinks.map(link => (
            <li key={link.id}>
              <button
                onClick={() => scrollToSection(link.id)}
                className={`font-medium text-sm transition-all duration-300 ${
                  activeSection === link.id
                    ? 'text-indigo-500 dark:text-indigo-400'
                    : theme === 'dark'
                      ? 'text-gray-300 hover:text-white' 
                      : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>
        <button 
          onClick={toggleTheme}
          className="ml-8 p-2 rounded-full transition-colors duration-300 hover:bg-gray-200 dark:hover:bg-gray-700"
          aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          {theme === 'dark' ? (
            <Sun size={18} className="text-gray-300" />
          ) : (
            <Moon size={18} className="text-gray-600" />
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;