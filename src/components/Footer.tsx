import { useTheme } from '../context/ThemeContext';
import { Mail, Briefcase, Github, Twitter } from 'lucide-react';

const Footer = () => {
  const { theme } = useTheme();
  
  const socialLinks = [
    { icon: <Mail size={20} />, href: '#', label: 'Email' },
    { icon: <Briefcase size={20} />, href: '#', label: 'Portfolio' },
    { icon: <Github size={20} />, href: '#', label: 'GitHub' },
    { icon: <Twitter size={20} />, href: '#', label: 'Twitter' }
  ];
  
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`py-12 ${
      theme === 'dark' ? 'bg-gray-900' : 'bg-white'
    } border-t ${
      theme === 'dark' ? 'border-gray-800' : 'border-gray-100'
    }`}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col items-center">
          <div className="flex space-x-4 mb-8">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                aria-label={link.label}
                className={`w-12 h-12 flex items-center justify-center rounded-full border transition-all duration-300 ${
                  theme === 'dark'
                    ? 'border-gray-700 text-gray-400 hover:text-white hover:border-gray-500'
                    : 'border-gray-200 text-gray-500 hover:text-indigo-600 hover:border-indigo-200'
                } hover:transform hover:-translate-y-1 hover:shadow-md`}
              >
                {link.icon}
              </a>
            ))}
          </div>
          
          <p className={`text-sm ${
            theme === 'dark' ? 'text-gray-500' : 'text-gray-400'
          }`}>
            © {currentYear} Shanto. Designed with purpose and passion.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;