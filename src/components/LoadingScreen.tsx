import { useTheme } from '../context/ThemeContext';

const LoadingScreen = () => {
  const { theme } = useTheme();
  
  return (
    <div className={`fixed inset-0 flex items-center justify-center z-50 transition-opacity duration-500 ${
      theme === 'dark' ? 'bg-gray-900' : 'bg-white'
    }`}>
      <div className="relative">
        <div className="text-3xl font-light tracking-widest">
          <span className="inline-block animate-fadeIn">S</span>
          <span className="inline-block animate-fadeIn animation-delay-100">H</span>
          <span className="inline-block animate-fadeIn animation-delay-200">A</span>
          <span className="inline-block animate-fadeIn animation-delay-300">N</span>
          <span className="inline-block animate-fadeIn animation-delay-400">T</span>
          <span className="inline-block animate-fadeIn animation-delay-500">O</span>
        </div>
        <div className="mt-4 h-0.5 w-full bg-gray-200 dark:bg-gray-700 overflow-hidden">
          <div className="h-full bg-indigo-500 animate-loadingBar"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;