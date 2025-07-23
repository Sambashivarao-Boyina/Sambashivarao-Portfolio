import React from 'react';
import { GraduationCap, MapPin, Calendar } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            About Me
          </h2>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Profile Image */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative">
                <div className="w-64 h-64 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-500 p-1 hover:scale-105 transition-transform duration-300">
                  <img
                    src="https://res.cloudinary.com/dknqzs98u/image/upload/v1753252941/1726757653417-removebg-preview_ektjpp.png"
                    alt="Samba Shiva Rao Boyina - Profile"
                    className="w-full h-full rounded-2xl object-cover"
                  />
                </div>
                {/* <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-500 opacity-20 blur-xl"></div> */}
              </div>
            </div>

            {/* About Content */}
            <div className="space-y-8">
              <div className="bg-slate-800/50 backdrop-blur-md rounded-2xl p-8 border border-slate-700/50">
                <h3 className="text-2xl font-bold text-slate-200 mb-6">
                  Who I Am
                </h3>
                <p className="text-slate-300 text-lg leading-relaxed mb-6">
                  I am a passionate software developer who loves building modern
                  and efficient applications. With a strong foundation in
                  computer science and a curiosity-driven mindset, I
                  continuously explore new technologies to enhance my skills and
                  create impactful solutions.
                </p>
                <p className="text-slate-400 leading-relaxed">
                  I enjoy turning ideas into real products through clean code
                  and thoughtful design. Whether working on web applications or
                  mobile interfaces, I strive to deliver seamless user
                  experiences and scalable architectures that solve real-world
                  problems effectively.
                </p>
              </div>

              {/* Education */}
              <div className="bg-slate-800/50 backdrop-blur-md rounded-2xl p-8 border border-slate-700/50">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-blue-600/20 rounded-lg">
                    <GraduationCap className="text-blue-400" size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-200">
                    Education
                  </h3>
                </div>

                <div className="space-y-4">
                  <h4 className="text-xl font-semibold text-slate-300">
                    B.Tech in Computer Science and Engineering
                  </h4>
                  <div className="flex flex-wrap gap-4 text-slate-400">
                    <div className="flex items-center gap-2">
                      <MapPin size={16} />
                      <span>
                        Rajiv Gandhi University of Knowledge Technologies,
                        Srikakulam
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar size={16} />
                      <span>Expected Graduation: May 2026</span>
                    </div>
                  </div>
                  <div className="inline-block bg-gradient-to-r from-blue-600/20 to-cyan-600/20 backdrop-blur-md border border-blue-500/30 rounded-full px-4 py-2 text-blue-300 font-semibold">
                    CGPA: 8.83
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

export default About;