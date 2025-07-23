import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import AnimatedBackground from './components/AnimatedBackground';

function App() {
  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      <AnimatedBackground />
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Achievements />
      <Contact />
    </div>
  );
}

export default App;