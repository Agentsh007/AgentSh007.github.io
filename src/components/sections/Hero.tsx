import { ChevronDown } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

const Hero = () => {
  const { theme } = useTheme();
  
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 -z-10">
        <div className={`absolute inset-0 ${
          theme === 'dark' 
            ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900' 
            : 'bg-gradient-to-br from-gray-50 via-white to-gray-100'
        }`}></div>
        <div className="absolute inset-0 opacity-30">
          {/* Abstract pattern with SVG grid */}
          <div className={`h-full w-full ${
            theme === 'dark' ? 'opacity-20' : 'opacity-10'
          }`} style={{
            backgroundImage: `radial-gradient(circle at 25px 25px, ${theme === 'dark' ? '#444' : '#666'} 2%, transparent 0%), radial-gradient(circle at 75px 75px, ${theme === 'dark' ? '#444' : '#666'} 2%, transparent 0%)`,
            backgroundSize: '100px 100px'
          }}></div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center">
        <h1 className="text-7xl md:text-8xl lg:text-9xl font-light tracking-tight mb-6 animate-fadeInUp">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-600 dark:from-indigo-400 dark:to-purple-500">
            Shanto
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed animate-fadeInUp animation-delay-300">
          Developer & Explorer crafting digital experiences that blend creativity with technology
        </p>
        <button
          onClick={scrollToAbout}
          className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-indigo-500 hover:bg-indigo-600 text-white font-medium transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 animate-fadeInUp animation-delay-500"
        >
          <span>Explore</span>
          <ChevronDown size={18} />
        </button>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-1 h-16 mx-auto">
          <div className={`h-full w-0.5 mx-auto ${
            theme === 'dark' ? 'bg-gray-700' : 'bg-gray-300'
          }`}>
            <div className="h-1/3 w-full bg-indigo-500 animate-scrollIndicator"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;