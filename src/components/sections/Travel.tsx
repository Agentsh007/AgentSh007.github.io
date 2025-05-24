import { useState } from 'react';
import AnimatedSection from '../AnimatedSection';
import { useTheme } from '../../context/ThemeContext';
import { MapPin, Globe, Mountain, Palmtree, Building } from 'lucide-react';

const Travel = () => {
  const { theme } = useTheme();
  const [activeCard, setActiveCard] = useState<number | null>(null);
  
  const travelExperiences = [
    {
      title: 'Mountain Explorer',
      description: 'Finding inspiration in breathtaking peaks and serene landscapes that fuel creativity and problem-solving approaches.',
      icon: <Mountain className="h-8 w-8" />,
      color: 'from-blue-500 to-indigo-600'
    },
    {
      title: 'Coastal Wanderer',
      description: 'Discovering peace along pristine coastlines and drawing parallels to fluid design principles and adaptive interfaces.',
      icon: <Palmtree className="h-8 w-8" />,
      color: 'from-teal-500 to-emerald-600'
    },
    {
      title: 'Culture Seeker',
      description: 'Immersing in diverse cultures to understand different approaches to problem-solving and user experience design.',
      icon: <Globe className="h-8 w-8" />,
      color: 'from-purple-500 to-indigo-600'
    },
    {
      title: 'Urban Explorer',
      description: 'Navigating bustling cities to understand user behavior in complex environments and how to create intuitive systems.',
      icon: <Building className="h-8 w-8" />,
      color: 'from-orange-500 to-red-600'
    }
  ];

  return (
    <AnimatedSection id="travel">
      <h2 className="text-4xl md:text-5xl font-light text-center mb-16 tracking-tight">
        My <span className="text-indigo-500 dark:text-indigo-400">Travels</span>
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {travelExperiences.map((item, index) => (
          <div 
            key={index}
            className={`group rounded-3xl overflow-hidden transition-all duration-500 ${
              theme === 'dark' ? 'bg-gray-800 hover:bg-gray-750' : 'bg-white hover:bg-gray-50'
            } shadow-lg hover:shadow-xl transform hover:-translate-y-2 cursor-pointer`}
            onMouseEnter={() => setActiveCard(index)}
            onMouseLeave={() => setActiveCard(null)}
          >
            <div className={`h-40 flex items-center justify-center bg-gradient-to-r ${item.color} p-6 relative overflow-hidden`}>
              <div className="relative z-10 text-white">
                {item.icon}
              </div>
              <div className="absolute inset-0 opacity-20">
                <div className="absolute inset-0 bg-black opacity-10"></div>
                <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
              
              {/* Animated pattern overlay */}
              <div 
                className="absolute inset-0 opacity-30 transition-transform duration-1000 ease-in-out"
                style={{
                  backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.8) 2px, transparent 0)`,
                  backgroundSize: '16px 16px',
                  transform: activeCard === index ? 'translateY(-10px)' : 'translateY(0)'
                }}
              ></div>
            </div>
            
            <div className="p-6">
              <div className="flex items-center mb-2">
                <MapPin className="h-4 w-4 text-indigo-500 dark:text-indigo-400 mr-2" />
                <h3 className="font-medium text-lg">{item.title}</h3>
              </div>
              <p className={`text-sm leading-relaxed ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
              }`}>
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </AnimatedSection>
  );
};

export default Travel;