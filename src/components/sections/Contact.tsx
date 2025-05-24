import { useState } from 'react';
import AnimatedSection from '../AnimatedSection';
import { useTheme } from '../../context/ThemeContext';
import { Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const { theme } = useTheme();
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  
  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formState.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formState.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formState.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formState.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formState.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setFormStatus('submitting');
      
      // Simulate form submission
      setTimeout(() => {
        setFormStatus('success');
        setFormState({ name: '', email: '', message: '' });
        
        // Reset form after showing success message
        setTimeout(() => {
          setFormStatus('idle');
        }, 3000);
      }, 1500);
    }
  };

  return (
    <AnimatedSection id="contact" className={theme === 'dark' ? 'bg-gray-800/50' : 'bg-gray-50'}>
      <h2 className="text-4xl md:text-5xl font-light text-center mb-8 tracking-tight">
        Let's <span className="text-indigo-500 dark:text-indigo-400">Connect</span>
      </h2>
      
      <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
        Ready to bring your ideas to life? Let's start a conversation about how we can work together.
      </p>
      
      <div className="max-w-2xl mx-auto">
        {formStatus === 'success' ? (
          <div className={`rounded-2xl p-8 text-center shadow-lg ${
            theme === 'dark' ? 'bg-gray-900' : 'bg-white'
          }`}>
            <div className="flex flex-col items-center">
              <CheckCircle className="h-16 w-16 text-green-500 mb-4" />
              <h3 className="text-2xl font-medium mb-2">Message Sent!</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Thank you for reaching out. I'll get back to you soon!
              </p>
            </div>
          </div>
        ) : (
          <form 
            onSubmit={handleSubmit}
            className={`rounded-2xl p-8 shadow-lg ${
              theme === 'dark' ? 'bg-gray-900' : 'bg-white'
            }`}
          >
            <div className="space-y-6">
              <div>
                <label 
                  htmlFor="name" 
                  className={`block text-sm font-medium mb-2 ${
                    theme === 'dark' ? 'text-gray-200' : 'text-gray-700'
                  }`}
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg ${
                    theme === 'dark' 
                      ? 'bg-gray-800 text-white border-gray-700 focus:ring-indigo-500' 
                      : 'bg-white text-gray-900 border-gray-300 focus:ring-indigo-600'
                  } border focus:ring-2 focus:border-transparent transition-all duration-300`}
                  placeholder="Your name"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                )}
              </div>
              
              <div>
                <label 
                  htmlFor="email" 
                  className={`block text-sm font-medium mb-2 ${
                    theme === 'dark' ? 'text-gray-200' : 'text-gray-700'
                  }`}
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg ${
                    theme === 'dark' 
                      ? 'bg-gray-800 text-white border-gray-700 focus:ring-indigo-500' 
                      : 'bg-white text-gray-900 border-gray-300 focus:ring-indigo-600'
                  } border focus:ring-2 focus:border-transparent transition-all duration-300`}
                  placeholder="Your email"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                )}
              </div>
              
              <div>
                <label 
                  htmlFor="message" 
                  className={`block text-sm font-medium mb-2 ${
                    theme === 'dark' ? 'text-gray-200' : 'text-gray-700'
                  }`}
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formState.message}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg ${
                    theme === 'dark' 
                      ? 'bg-gray-800 text-white border-gray-700 focus:ring-indigo-500' 
                      : 'bg-white text-gray-900 border-gray-300 focus:ring-indigo-600'
                  } border focus:ring-2 focus:border-transparent transition-all duration-300`}
                  placeholder="Your message"
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-500">{errors.message}</p>
                )}
              </div>
              
              <button
                type="submit"
                disabled={formStatus === 'submitting'}
                className={`w-full py-3 px-6 flex items-center justify-center gap-2 rounded-lg text-white font-medium ${
                  formStatus === 'submitting'
                    ? 'bg-indigo-400 cursor-not-allowed'
                    : 'bg-indigo-600 hover:bg-indigo-700'
                } transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1`}
              >
                {formStatus === 'submitting' ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </AnimatedSection>
  );
};

export default Contact;