import { useState, useEffect, useRef } from 'react';
import { useTheme } from '../../context/ThemeContext';

interface SkillBarProps {
  name: string;
  level: number;
  index: number;
}

const SkillBar: React.FC<SkillBarProps> = ({ name, level, index }) => {
  const { theme } = useTheme();
  const [animate, setAnimate] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Stagger animation slightly based on index
          setTimeout(() => {
            setAnimate(true);
          }, index * 150);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    
    if (ref.current) {
      observer.observe(ref.current);
    }
    
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [index]);

  // Get skill level color based on percentage
  const getSkillColor = () => {
    if (level >= 80) return 'bg-emerald-500';
    if (level >= 60) return 'bg-indigo-500';
    return 'bg-blue-500';
  };
  
  return (
    <div ref={ref} className="relative">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium">{name}</span>
        <span className={`text-xs font-medium ${
          theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
        }`}>
          {animate ? `${level}%` : '0%'}
        </span>
      </div>
      
      <div className={`h-2 w-full rounded-full overflow-hidden ${
        theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'
      }`}>
        <div 
          className={`h-full rounded-full transition-all duration-1000 ease-out ${getSkillColor()}`}
          style={{ 
            width: animate ? `${level}%` : '0%',
            transitionDelay: `${index * 100}ms`
          }}
        />
      </div>
    </div>
  );
};

export default SkillBar;