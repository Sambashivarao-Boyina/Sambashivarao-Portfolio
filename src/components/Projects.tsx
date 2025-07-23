import React from 'react';
import { ExternalLink, Github, Monitor, Smartphone, ShoppingCart } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'SitePulse',
      description: 'Website monitoring and analytics platform with real-time metrics, dashboards, and downtime alerts for comprehensive site performance tracking.',
      icon: <Monitor className="text-blue-400" size={24} />,
      link: 'https://sitepulse-bc6z.onrender.com/',
      technologies: ['React', 'Node.js', 'MongoDB', 'WebSockets', 'Chart.js'],
      type: 'Live Demo'
    },
    {
      title: 'MovieGo',
      description: 'Movie ticket booking Android app with intuitive seat selection interface and secure Razorpay payment integration for seamless booking experience.',
      icon: <Smartphone className="text-emerald-400" size={24} />,
      link: 'https://github.com/Sambashivarao-Boyina/MovieGo',
      technologies: ['Kotlin', 'Jetpack Compose', 'MVVM', 'Retrofit', 'Razorpay'],
      type: 'Repository'
    },
    {
      title: 'UniCart',
      description: 'Full-featured MERN stack ecommerce platform with user-friendly interface, cloud storage integration, and robust authentication system.',
      icon: <ShoppingCart className="text-cyan-400" size={24} />,
      link: 'https://unicart-q0ek.onrender.com/',
      technologies: ['React', 'Redux', 'Node.js', 'Express', 'MongoDB', 'AWS S3'],
      type: 'Live Demo'
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="group bg-slate-800/50 backdrop-blur-md rounded-2xl border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/10 overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Project Header */}
                <div className="p-6 border-b border-slate-700/50">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-slate-700/50 rounded-lg group-hover:bg-blue-600/20 transition-colors duration-300">
                      {project.icon}
                    </div>
                    <h3 className="text-xl font-bold text-slate-200">{project.title}</h3>
                  </div>
                  
                  <p className="text-slate-400 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Technologies */}
                <div className="p-6 border-b border-slate-700/50">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-slate-700/50 rounded-md text-xs text-slate-300 border border-slate-600/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project Link */}
                <div className="p-6">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors duration-300 font-medium group-hover:scale-105"
                  >
                    {project.type === 'Repository' ? <Github size={16} /> : <ExternalLink size={16} />}
                    {project.type}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;