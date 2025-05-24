import AnimatedSection from '../AnimatedSection';
import { useTheme } from '../../context/ThemeContext';

const About = () => {
  const { theme } = useTheme();

  return (
    <AnimatedSection id="about">
      <h2 className="text-4xl md:text-5xl font-light text-center mb-16 tracking-tight">
        About <span className="text-indigo-500 dark:text-indigo-400">Me</span>
      </h2>
      
      <div className="grid md:grid-cols-7 gap-12 items-center">
        <div className="md:col-span-3 mx-auto">
          <div className="relative group">
            <div className={`absolute inset-0 rounded-3xl transform group-hover:rotate-6 transition-all duration-300 ${
              theme === 'dark' ? 'bg-gradient-to-tr from-indigo-600 to-purple-600' : 'bg-gradient-to-tr from-indigo-500 to-purple-500'
            }`}></div>
            
            <div className={`relative flex items-center justify-center h-64 w-64 md:h-80 md:w-80 rounded-3xl overflow-hidden transform transition-all duration-500 shadow-xl group-hover:shadow-2xl ${
              theme === 'dark' ? 'bg-gray-800' : 'bg-white'
            }`}>
              <span className="text-8xl font-light text-indigo-500 dark:text-indigo-400 transform transition-all duration-300 group-hover:scale-110">
                S
              </span>
            </div>
          </div>
        </div>
        
        <div className="md:col-span-4">
          <div className="space-y-6">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              I'm a passionate developer who believes in creating meaningful digital experiences. With expertise spanning frontend and backend technologies, I bring ideas to life through clean, efficient code.
            </p>
            
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              When I'm not coding, you'll find me exploring new destinations and cultures. Travel has taught me that the best solutions often come from seeing the world through different perspectives.
            </p>
            
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              I'm always eager to learn, grow, and take on challenges that push the boundaries of what's possible in the digital landscape.
            </p>
            
            <div className="pt-4 flex gap-4">
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200">
                React
              </span>
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                TypeScript
              </span>
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                Node.js
              </span>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default About;