import React from 'react';
import { Trophy, Code, Users, Award } from 'lucide-react';

const Achievements: React.FC = () => {
  const achievements = [
    {
      category: 'Competitive Programming',
      icon: <Code className="text-yellow-400" size={24} />,
      items: [
        {
          title: 'LeetCode Problem Solver',
          description: 'Solved 600+ problems across various difficulty levels and topics on LeetCode platform',
          highlight: '600+ Problems'
        }
      ]
    },
    {
      category: 'Hackathons',
      icon: <Trophy className="text-orange-400" size={24} />,
      items: [
        {
          title: 'GMRIT Web Hackathon',
          description: 'Runner-up for developing an innovative Hostel Management System',
          highlight: 'Runner-up'
        },
        {
          title: 'RGUKT Techniverse Fest',
          description: 'Runner-up in software development hackathon competition',
          highlight: 'Runner-up'
        }
      ]
    },
    {
      category: 'Open Source',
      icon: <Users className="text-green-400" size={24} />,
      items: [
        {
          title: 'GirlScript Summer of Code',
          description: 'Contributed to frontend development and UI enhancement projects',
          highlight: 'Contributor'
        }
      ]
    }
  ];

  return (
    <section id="achievements" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Achievements
          </h2>

          <div className="space-y-12">
            {achievements.map((category, categoryIndex) => (
              <div key={category.category} className="space-y-6">
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-3 bg-slate-800/50 rounded-xl border border-slate-700/50">
                    {category.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-slate-200">{category.category}</h3>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {category.items.map((item, itemIndex) => (
                    <div
                      key={item.title}
                      className="group bg-slate-800/50 backdrop-blur-md rounded-2xl p-6 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 hover:scale-105"
                      style={{ animationDelay: `${(categoryIndex * category.items.length + itemIndex) * 0.1}s` }}
                    >
                      <div className="flex items-start justify-between mb-4">
                        <h4 className="text-lg font-bold text-slate-200 group-hover:text-blue-300 transition-colors duration-300">
                          {item.title}
                        </h4>
                        <div className="flex items-center gap-2 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 backdrop-blur-md border border-blue-500/30 rounded-full px-3 py-1">
                          <Award size={14} className="text-blue-400" />
                          <span className="text-sm text-blue-300 font-semibold">{item.highlight}</span>
                        </div>
                      </div>
                      <p className="text-slate-400 leading-relaxed">{item.description}</p>
                    </div>
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

export default Achievements;