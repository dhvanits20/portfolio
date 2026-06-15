import React from 'react';
import profileImg from '../assets/profile.jpeg';

const Hero = () => {
  return (
    <section id="home" className="relative w-full min-h-screen overflow-hidden flex items-center">
      {/* Full Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={profileImg}
          alt="Profile Background"
          className="w-full h-full object-cover object-[80%_center] md:object-center"
        />
        {/* Dark overlay gradient from left to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/50 to-black/10 sm:to-transparent" />
      </div>

      {/* Content Container */}
      <div className="relative z-20 px-6 pt-24 pb-20 md:pb-[8%] md:px-12 max-w-7xl mx-auto flex flex-col justify-center text-left w-full h-full">
        <div className="w-full max-w-3xl">
          
          {/* Text Content */}
          <div className="flex flex-col items-start text-left w-full">
            <h1 
              data-aos="fade-up"
              className="text-white text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-4 tracking-tighter leading-none"
            >
              DHVANIT<br />
              <span className="text-red-500 drop-shadow-[0_0_15px_rgba(239,68,68,0.5)]">SHAH</span>
            </h1>

            <p 
              data-aos="fade-up"
              data-aos-delay="200"
              className="text-gray-200 text-lg md:text-xl lg:text-2xl font-bold mb-8 max-w-xl tracking-tight drop-shadow-md"
            >
              Full Stack Developer & Student
            </p>

            <div 
              data-aos="fade-up"
              data-aos-delay="400"
              className="flex flex-wrap items-center gap-4"
            >
              <a href="#experience" className="px-8 py-4 text-sm md:text-base rounded-full bg-red-600 text-white font-bold hover:bg-white hover:text-red-600 transition-colors shadow-[0_0_20px_rgba(255,0,0,0.4)]">
                View My Work
              </a>
              <a href="#contact" className="px-8 py-4 text-sm md:text-base rounded-full bg-black/40 backdrop-blur-md border-2 border-white text-white font-bold hover:bg-white hover:text-black transition-all">
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
