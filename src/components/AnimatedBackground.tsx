import React from 'react';

const AnimatedBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Base universe background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-slate-900 to-black"></div>
      
      {/* Nebula clouds */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-radial from-purple-900/30 via-transparent to-transparent opacity-60 animate-pulse-slow"></div>
        <div className="absolute top-1/3 right-0 w-2/3 h-2/3 bg-gradient-radial from-blue-900/40 via-transparent to-transparent opacity-50 animate-pulse-slow delay-1000"></div>
        <div className="absolute bottom-0 left-1/4 w-1/2 h-1/2 bg-gradient-radial from-indigo-900/30 via-transparent to-transparent opacity-70 animate-pulse-slow delay-2000"></div>
      </div>

      {/* Large stars */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={`star-${i}`}
            className="absolute bg-white rounded-full animate-twinkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${1 + Math.random() * 3}px`,
              height: `${1 + Math.random() * 3}px`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          ></div>
        ))}
      </div>

      {/* Medium stars */}
      <div className="absolute inset-0">
        {[...Array(100)].map((_, i) => (
          <div
            key={`medium-star-${i}`}
            className="absolute bg-blue-200 rounded-full animate-twinkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${0.5 + Math.random() * 1.5}px`,
              height: `${0.5 + Math.random() * 1.5}px`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          ></div>
        ))}
      </div>

      {/* Small stars */}
      <div className="absolute inset-0">
        {[...Array(200)].map((_, i) => (
          <div
            key={`small-star-${i}`}
            className="absolute bg-slate-300 rounded-full animate-twinkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: '1px',
              height: '1px',
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${4 + Math.random() * 6}s`
            }}
          ></div>
        ))}
      </div>

      {/* Shooting stars */}
      <div className="absolute inset-0">
        {[...Array(3)].map((_, i) => (
          <div
            key={`shooting-star-${i}`}
            className="absolute w-1 h-1 bg-white rounded-full animate-shooting-star"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 50}%`,
              animationDelay: `${Math.random() * 10 + 5}s`,
              animationDuration: '3s'
            }}
          ></div>
        ))}
      </div>

      {/* Cosmic dust particles */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <div
            key={`dust-${i}`}
            className="absolute bg-blue-400/20 rounded-full animate-float-cosmic"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${2 + Math.random() * 4}px`,
              height: `${2 + Math.random() * 4}px`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${8 + Math.random() * 12}s`
            }}
          ></div>
        ))}
      </div>

      {/* Galaxy spiral effect */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 opacity-20">
        <div className="w-full h-full rounded-full bg-gradient-conic from-blue-500 via-purple-500 to-cyan-500 animate-spin-slow blur-3xl"></div>
      </div>

      {/* Distant galaxy */}
      <div className="absolute bottom-1/4 left-1/6 w-64 h-64 opacity-15">
        <div className="w-full h-full rounded-full bg-gradient-radial from-indigo-400 via-purple-600 to-transparent animate-pulse-slow blur-2xl"></div>
      </div>
    </div>
  );
};

export default AnimatedBackground;