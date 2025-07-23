import React from 'react';
import { Code, Database, Smartphone, Globe, GitBranch, Terminal } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: <Code className="text-blue-400" size={24} />,
      skills: ['Java', 'C', 'Kotlin', 'JavaScript', 'TypeScript', 'Python']
    },
    {
      title: 'Frontend',
      icon: <Globe className="text-cyan-400" size={24} />,
      skills: ['HTML', 'CSS', 'Bootstrap', 'React', 'Redux', 'Tailwind']
    },
    {
      title: 'Backend',
      icon: <Database className="text-green-400" size={24} />,
      skills: ['Node.js', 'Express', 'MongoDB', 'SQL', 'REST APIs', 'WebSockets']
    },
    {
      title: 'Android',
      icon: <Smartphone className="text-emerald-400" size={24} />,
      skills: ['Jetpack Compose', 'MVVM', 'Dagger-Hilt', 'Retrofit', 'Room']
    },
    {
      title: 'Others',
      icon: <Terminal className="text-purple-400" size={24} />,
      skills: ['Git', 'GitHub', 'Linux (Ubuntu)', 'Windows']
    }
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <div
                key={category.title}
                className="group bg-slate-800/50 backdrop-blur-md rounded-2xl p-6 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/10"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-slate-700/50 rounded-lg group-hover:bg-blue-600/20 transition-colors duration-300">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-200">{category.title}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-slate-700/50 rounded-full text-sm text-slate-300 border border-slate-600/50 hover:border-blue-400/50 hover:text-blue-300 transition-all duration-300 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;