import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Download, ChevronDown, Code2 } from 'lucide-react';

const Hero: React.FC = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = "Passionate about building scalable applications and modern solutions that impact real users.";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setDisplayText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 50);

    return () => clearInterval(timer);
  }, []);

  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Profile Image */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="w-32 h-32  bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full shadow-lg shadow-blue-500 ">
                <img
                  src="https://res.cloudinary.com/dknqzs98u/image/upload/v1753252941/1726757653417-removebg-preview_ektjpp.png"
                  alt="Samba Shiva Rao Boyina"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              {/* <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 opacity-30 blur-xl animate-pulse"></div> */}
            </div>
          </div>

          {/* Name and Title */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent animate-fade-in">
            Samba Shiva Rao Boyina
          </h1>

          <h2 className="text-xl md:text-2xl text-slate-300 mb-8 font-medium">
            Software Developer | MERN & Android Developer
          </h2>

          {/* Animated Description */}
          <p className="text-lg md:text-xl text-slate-400 mb-12 max-w-3xl mx-auto min-h-[60px]">
            {displayText}
            <span className="animate-pulse">|</span>
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap justify-center gap-6 mb-16">
            <a
              href="https://www.linkedin.com/in/sambashivarao-boyina/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 bg-blue-600/20 backdrop-blur-md border border-blue-500/30 rounded-full px-6 py-3 text-slate-300 hover:bg-blue-600/30 hover:text-white transition-all duration-300 hover:scale-105"
            >
              <Linkedin size={20} className="group-hover:animate-bounce" />
              LinkedIn
            </a>

            <a
              href="https://github.com/Sambashivarao-Boyina"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 bg-slate-800/50 backdrop-blur-md border border-slate-600/30 rounded-full px-6 py-3 text-slate-300 hover:bg-slate-700/50 hover:text-white transition-all duration-300 hover:scale-105"
            >
              <Github size={20} className="group-hover:animate-bounce" />
              GitHub
            </a>

            <a
              href="https://leetcode.com/u/sambashivarao/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 bg-orange-600/20 backdrop-blur-md border border-orange-500/30 rounded-full px-6 py-3 text-slate-300 hover:bg-orange-600/30 hover:text-white transition-all duration-300 hover:scale-105"
            >
              <Code2 size={20} className="group-hover:animate-bounce" />
              LeetCode
            </a>

            <a
              href="https://drive.google.com/file/d/1fQVZ_fMNxsHBInfsTerZ0wGBZFaLzMW5/view?usp=sharing"
              download
              className="group flex items-center gap-3 bg-gradient-to-r from-cyan-600/20 to-blue-600/20 backdrop-blur-md border border-cyan-500/30 rounded-full px-6 py-3 text-slate-300 hover:from-cyan-600/30 hover:to-blue-600/30 hover:text-white transition-all duration-300 hover:scale-105"
            >
              <Download size={20} className="group-hover:animate-bounce" />
              Resume
            </a>
          </div>

          {/* Scroll Indicator */}
          <button
            onClick={scrollToAbout}
            className="animate-bounce text-slate-400 hover:text-blue-400 transition-colors duration-300"
          >
            <ChevronDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;