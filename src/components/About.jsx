import React from 'react';
import profileImage from '../assets/profile2.jpeg';

const About = () => {
  const skills = ["Java", "Python", "PHP", "Laravel", "MySQL", "HTML/CSS", "React", "Power BI"];

  return (
    <section id="about" className="py-24 bg-black text-white overflow-hidden relative border-t border-red-600/20">
      {/* Decorative Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#333_1px,transparent_1px),linear-gradient(to_bottom,#333_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 flex flex-col md:flex-row items-center gap-16">
        
        {/* Image/Visual Side */}
        <div 
          data-aos="fade-right"
          className="w-full md:w-5/12 flex justify-center md:justify-start"
        >
          <div className="relative w-full max-w-sm aspect-[4/5] rounded-3xl overflow-hidden shadow-[15px_15px_0px_0px_rgba(255,0,0,1)] border-4 border-white">
            <img 
              src={profileImage} 
              alt="Dhvanit Shah" 
              className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-700"
            />
            {/* Absolute badge */}
            <div className="absolute -bottom-6 -right-6 bg-red-600 text-white p-6 rounded-full w-32 h-32 flex flex-col items-center justify-center font-bold border-8 border-black hidden md:flex shadow-2xl">
              <span className="text-3xl">BSc</span>
              <span className="text-xs uppercase text-center mt-1">IT<br/>Student</span>
            </div>
          </div>
        </div>

        {/* Text Content Side */}
        <div 
          data-aos="fade-left"
          className="w-full md:w-7/12 flex flex-col items-start"
        >
          <div className="inline-block border-2 border-red-600 rounded-full px-4 py-1 text-xs font-bold uppercase tracking-widest mb-6 bg-black text-red-600">
            About Me
          </div>
          
          <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight tracking-tight text-white">
            I craft digital solutions that <span className="text-red-600 italic">perform</span> and scale.
          </h2>
          
          <p className="text-gray-300 text-lg mb-6 leading-relaxed font-medium">
            I'm an ambitious BSc IT student and software developer based in Ahmedabad, Gujarat. I have practical experience building university websites, automating workflows, and delivering user-focused solutions using modern tech stacks.
          </p>

          <p className="text-gray-300 text-lg mb-8 leading-relaxed font-medium">
            My expertise spans across full-stack development, database management, and data visualization, allowing me to take projects from concept to deployment.
          </p>

          {/* Skills tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {skills.map((skill) => (
              <span key={skill} className="px-4 py-2 bg-black border border-red-600/50 rounded-lg text-sm font-bold text-gray-200 hover:bg-red-600 hover:text-white transition-colors">
                {skill}
              </span>
            ))}
          </div>

          <a href="#experience" className="px-8 py-4 bg-white text-black rounded-full font-bold hover:bg-red-600 hover:text-white transition-colors shadow-lg">
            View My Experience
          </a>
        </div>

      </div>
    </section>
  );
};

export default About;
