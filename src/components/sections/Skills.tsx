import { useState } from 'react';
import AnimatedSection from '../AnimatedSection';
import SkillBar from '../ui/SkillBar';
import { useTheme } from '../../context/ThemeContext';

const Skills = () => {
  const { theme } = useTheme();
  const [activeTab, setActiveTab] = useState('frontend');
  
  const tabs = [
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'languages', label: 'Languages' }
  ];
  
  const skills = {
    frontend: [
      { name: 'React', level: 85 },
      { name: 'HTML & CSS', level: 90 },
      { name: 'JavaScript', level: 80 },
      { name: 'TypeScript', level: 75 },
      { name: 'UI/UX Design', level: 65 }
    ],
    backend: [
      { name: 'Node.js', level: 80 },
      { name: 'Express', level: 75 },
      { name: 'MongoDB', level: 70 },
      { name: 'GraphQL', level: 65 },
      { name: 'RESTful APIs', level: 85 }
    ],
    languages: [
      { name: 'JavaScript', level: 90 },
      { name: 'TypeScript', level: 80 },
      { name: 'Python', level: 75 },
      { name: 'Java', level: 60 },
      { name: 'SQL', level: 70 }
    ]
  };

  return (
    <AnimatedSection id="skills" className={theme === 'dark' ? 'bg-gray-800/50' : 'bg-gray-50'}>
      <h2 className="text-4xl md:text-5xl font-light text-center mb-16 tracking-tight">
        My <span className="text-indigo-500 dark:text-indigo-400">Skills</span>
      </h2>
      
      <div className={`max-w-4xl mx-auto rounded-3xl p-8 shadow-lg ${
        theme === 'dark' ? 'bg-gray-900' : 'bg-white'
      }`}>
        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className={`inline-flex p-1 rounded-xl ${
            theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'
          }`}>
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activeTab === tab.id
                    ? `bg-indigo-500 text-white shadow-md`
                    : `text-gray-500 hover:text-gray-700 dark:hover:text-gray-300`
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Skill bars */}
        <div className="space-y-8">
          {skills[activeTab as keyof typeof skills].map((skill, index) => (
            <SkillBar 
              key={skill.name} 
              name={skill.name} 
              level={skill.level} 
              index={index} 
            />
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Skills;