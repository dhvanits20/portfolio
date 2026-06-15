import React, { useRef, useState } from 'react';
import { motion, useScroll, useSpring, useMotionValueEvent } from 'framer-motion';

const TagCard = ({ number, title, subtitle, text, className, aosDelay, aosType, pathLength, containerRef }) => {
  const ref = useRef(null);
  const [isActive, setIsActive] = useState(false);

  useMotionValueEvent(pathLength, "change", (latest) => {
    if (!ref.current || !containerRef.current) return;
    
    const cardRect = ref.current.getBoundingClientRect();
    const containerRect = containerRef.current.getBoundingClientRect();
    const cardTopRelativeToContainer = cardRect.top - containerRect.top;
    const containerHeight = containerRect.height;
    
    const triggerY = cardTopRelativeToContainer + 50;
    const lineTipY = latest * containerHeight;
    
    if (lineTipY >= triggerY && !isActive) {
      setIsActive(true);
    } else if (lineTipY < triggerY && isActive) {
      setIsActive(false);
    }
  });

  return (
    <div 
      ref={ref}
      data-aos={aosType || "fade-up"} 
      data-aos-delay={aosDelay}
      className={`w-72 sm:w-80 rounded-[2rem] p-2 relative flex flex-col items-center hover:scale-[1.02] transition-all duration-700 z-10 ${className} ${
        isActive ? 'bg-red-600 border-red-500 shadow-[0_0_40px_rgba(255,0,0,0.4)]' : 'bg-[#111] border border-gray-800 shadow-md hover:shadow-[0_0_20px_rgba(255,255,255,0.05)] hover:border-gray-600'
      }`}
    >
      <div className="w-5 h-5 bg-gradient-to-br from-gray-700 to-gray-900 rounded-full shadow-[inset_0_2px_4px_rgba(0,0,0,0.5)] absolute top-4 border border-gray-600 z-10 flex items-center justify-center">
        <div className="w-2 h-2 bg-black rounded-full opacity-50"></div>
      </div>
      
      <div className={`w-full h-full rounded-[1.5rem] mt-8 p-8 flex flex-col min-h-[220px] transition-colors duration-700 ${
        isActive ? 'bg-black' : 'bg-black'
      }`}>
        <span className={`text-xl font-bold mb-2 font-serif italic transition-colors duration-700 ${
          isActive ? 'text-red-500' : 'text-gray-500'
        }`}>{number}</span>
        
        <h3 className={`text-2xl font-black tracking-tight transition-colors duration-700 ${
          isActive ? 'text-white' : 'text-white'
        }`}>{title}</h3>

        {subtitle && (
          <h4 className={`text-sm font-bold mb-3 uppercase tracking-wider transition-colors duration-700 ${
            isActive ? 'text-gray-400' : 'text-red-600'
          }`}>{subtitle}</h4>
        )}
        
        <p className={`text-sm leading-relaxed font-medium mt-2 transition-colors duration-700 ${
          isActive ? 'text-gray-300' : 'text-gray-400'
        }`}>
          {text}
        </p>
      </div>
    </div>
  );
};

const Services = () => {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const pathLength = useSpring(scrollYProgress, { stiffness: 60, damping: 20, restDelta: 0.001 });

  return (
    <section 
      id="experience"
      ref={containerRef}
      className="bg-[#0a0a0a] pt-24 pb-32 px-6 md:px-12 w-full relative overflow-hidden font-sans border-t border-red-600/20"
    >
      <div className="max-w-6xl mx-auto relative md:h-[1350px]">
        
        <div data-aos="fade-up" className="md:absolute top-10 left-0 md:w-[450px] z-20 mb-16 md:mb-0">
          <div className="inline-block border-2 border-red-600 rounded-full px-5 py-1.5 text-xs font-bold uppercase tracking-widest mb-8 shadow-sm bg-black text-red-600">
            Experience
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] mb-6 tracking-tight relative">
            My Journey &<br/><span className="text-red-600">Milestones</span>
          </h2>
          <p className="text-gray-400 text-base md:text-lg max-w-sm font-medium leading-relaxed">
            From mentoring students to building and managing robust university websites, here is a timeline of my professional growth.
          </p>
        </div>

        <svg className="hidden md:block absolute top-0 left-0 w-full h-[1350px] pointer-events-none z-0" viewBox="0 0 1000 1350" preserveAspectRatio="none">
          <path d="M 650,200 C 400,300 200,400 300,600 C 400,800 750,750 700,950 C 650,1150 400,1150 300,1200" fill="none" stroke="#333" strokeWidth="4" strokeDasharray="8 10" />
          <mask id="path-mask">
            <motion.path d="M 650,200 C 400,300 200,400 300,600 C 400,800 750,750 700,950 C 650,1150 400,1150 300,1200" fill="none" stroke="white" strokeWidth="20" style={{ pathLength }} />
          </mask>
          <path d="M 650,200 C 400,300 200,400 300,600 C 400,800 750,750 700,950 C 650,1150 400,1150 300,1200" fill="none" stroke="#ff0000" strokeWidth="4" strokeDasharray="8 10" mask="url(#path-mask)" className="drop-shadow-[0_0_10px_rgba(255,0,0,0.8)]" />
        </svg>

        <svg className="md:hidden absolute top-0 left-[50%] -translate-x-1/2 w-4 h-[100%] pointer-events-none z-0" viewBox="0 0 4 100" preserveAspectRatio="none">
          <path d="M 2,0 L 2,100" fill="none" stroke="#333" strokeWidth="4" strokeDasharray="4 6" vectorEffect="non-scaling-stroke" />
          <mask id="path-mask-mobile">
            <motion.path d="M 2,0 L 2,100" fill="none" stroke="white" strokeWidth="4" style={{ pathLength }} vectorEffect="non-scaling-stroke" />
          </mask>
          <path d="M 2,0 L 2,100" fill="none" stroke="#ff0000" strokeWidth="4" strokeDasharray="4 6" mask="url(#path-mask-mobile)" vectorEffect="non-scaling-stroke" className="drop-shadow-[0_0_5px_rgba(255,0,0,0.8)]" />
        </svg>

        <div className="flex flex-col gap-8 md:gap-12 items-center md:block relative z-10 w-full pt-4 md:pt-0 pb-12 md:pb-0">
          <TagCard number="2026-Present" title="Web & Ops Intern" subtitle="LJ University" text="Managing tele calling and admissions for the university website. Automating admissions tasks with scripted workflows & Power BI dashboards." className="md:absolute md:top-[10px] md:right-[5%] lg:right-[10%] rotate-2 md:rotate-6" aosType="fade-left" aosDelay="100" pathLength={pathLength} containerRef={containerRef} />
          <TagCard number="2025-2026" title="Exam Supervisor" subtitle="Govt of Gujarat" text="Supervised official government examinations, ensuring strict adherence to protocols, managing logistics, and maintaining security." className="md:absolute md:top-[450px] md:left-[5%] lg:left-[10%] -rotate-2 md:-rotate-6" aosType="fade-right" aosDelay="200" pathLength={pathLength} containerRef={containerRef} />
          <TagCard number="2023-2025" title="Private Educator" subtitle="1st to 8th Standard" text="Taught a comprehensive curriculum, developing strong communication and leadership skills by adapting to diverse learning paces." className="md:absolute md:top-[700px] md:right-[5%] lg:right-[15%] rotate-1 md:rotate-3" aosType="fade-left" aosDelay="300" pathLength={pathLength} containerRef={containerRef} />
          <TagCard number="Education" title="BSc IT" subtitle="LJ University" text="Currently in 3rd year pursuing BSc in Information Technology. Strong foundation in mathematics, problem-solving, and database management." className="md:absolute md:top-[1050px] md:left-[15%] lg:left-[25%] -rotate-1 md:-rotate-3" aosType="fade-right" aosDelay="400" pathLength={pathLength} containerRef={containerRef} />
        </div>
      </div>
    </section>
  );
};

export default Services;
