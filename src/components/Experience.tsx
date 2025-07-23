import React from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Experience
          </h2>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-cyan-500"></div>

            <div className="relative pl-20">
              <div className="bg-slate-800/50 backdrop-blur-md rounded-2xl p-8 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300">
                {/* Timeline dot */}
                {/* <div className="absolute left-6 top-8 w-4 h-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full border-4 border-slate-900"></div> */}

                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-blue-600/20 rounded-lg">
                    <Briefcase className="text-blue-400" size={24} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-200">
                      Software Development Engineer Intern
                    </h3>
                    <p className="text-xl text-blue-400 font-semibold">
                      TaskLabs
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 text-slate-400 mb-6">
                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    <span>January 2025 - June 2025</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={16} />
                    <span>Remote</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-slate-300 leading-relaxed">
                      Optimized UI for TaskLabs AI Browser Automation Chrome
                      Extension using DOM manipulation and Redux, improving user
                      experience and performance.
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-slate-300 leading-relaxed">
                      Developed background scripts to automate complex browser
                      workflows, streamlining user interactions with web
                      applications.
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-slate-300 leading-relaxed">
                      Built a second Chrome Extension with Redux state handling
                      and data caching, enhancing application performance and
                      user productivity.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;