import React from 'react';
import { FaEnvelope, FaGithub, FaLinkedin, FaPhone } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-black text-white relative overflow-hidden border-t border-red-600/20">
      {/* Decorative blurred circles */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-red-900 rounded-full blur-[150px] opacity-40 pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gray-800 rounded-full blur-[150px] opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 flex flex-col md:flex-row gap-16">
        
        {/* Contact Info Side */}
        <div className="w-full md:w-5/12 flex flex-col items-start" data-aos="fade-right">
          <div className="inline-block border-2 border-red-600 rounded-full px-4 py-1 text-xs font-bold uppercase tracking-widest mb-6 bg-black text-red-600">
            Get in touch
          </div>
          <h2 className="text-5xl md:text-6xl font-black mb-6 tracking-tight">
            Let's build something <span className="text-red-600">great.</span>
          </h2>
          <p className="text-gray-400 text-lg mb-10 leading-relaxed font-medium">
            Whether you have a project idea, need a full-stack developer, or just want to connect, feel free to drop a message!
          </p>

          <div className="flex flex-col gap-6 w-full">
            <a href="mailto:dhvanitcshah172006@gmail.com" className="flex items-center gap-4 group p-4 border-2 border-transparent hover:border-red-600/50 rounded-2xl transition-all">
              <div className="w-14 h-14 rounded-full bg-white text-black flex items-center justify-center group-hover:bg-red-600 group-hover:text-white transition-colors shadow-[0_0_10px_rgba(255,255,255,0.2)] group-hover:shadow-[0_0_20px_rgba(255,0,0,0.5)]">
                <FaEnvelope className="text-xl" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-bold text-gray-500 uppercase">Email</span>
                <span className="text-lg font-bold text-white break-all">dhvanitcshah172006@gmail.com</span>
              </div>
            </a>

            <a href="tel:+919998322429" className="flex items-center gap-4 group p-4 border-2 border-transparent hover:border-red-600/50 rounded-2xl transition-all">
              <div className="w-14 h-14 rounded-full bg-white text-black flex items-center justify-center group-hover:bg-red-600 group-hover:text-white transition-colors shadow-[0_0_10px_rgba(255,255,255,0.2)] group-hover:shadow-[0_0_20px_rgba(255,0,0,0.5)]">
                <FaPhone className="text-xl" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-bold text-gray-500 uppercase">Phone</span>
                <span className="text-lg font-bold text-white">+91 99983 22429</span>
              </div>
            </a>

            <div className="flex gap-4 mt-4 ml-4">
              <a href="https://github.com/dhvanits20" target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-full border-2 border-white/20 bg-[#111] flex items-center justify-center hover:bg-white hover:text-black transition-all shadow-md">
                <FaGithub className="text-2xl" />
              </a>
              <a href="https://www.linkedin.com/in/dhvanitshah-/" target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-full border-2 border-white/20 bg-[#111] flex items-center justify-center hover:bg-[#0A66C2] hover:text-white hover:border-[#0A66C2] transition-all shadow-md">
                <FaLinkedin className="text-2xl" />
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form Side */}
        <div className="w-full md:w-7/12 mt-8 md:mt-0" data-aos="fade-left" data-aos-delay="200">
          <form action="https://formsubmit.co/dhvanitcshah172006@gmail.com" method="POST" className="bg-[#111] p-8 md:p-10 rounded-3xl border-2 border-gray-800 shadow-[0_0_40px_rgba(255,0,0,0.1)] flex flex-col gap-6">
            <h3 className="text-2xl font-black mb-2 text-white">Send a Message</h3>
            
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-sm font-bold text-gray-400 uppercase">Name</label>
              <input type="text" id="name" name="name" required placeholder="John Doe" className="w-full bg-black border-2 border-gray-800 rounded-xl px-4 py-3 text-white font-medium focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 transition-all placeholder-gray-700" />
            </div>
            
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-sm font-bold text-gray-400 uppercase">Email</label>
              <input type="email" id="email" name="email" required placeholder="john@example.com" className="w-full bg-black border-2 border-gray-800 rounded-xl px-4 py-3 text-white font-medium focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 transition-all placeholder-gray-700" />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-sm font-bold text-gray-400 uppercase">Message</label>
              <textarea id="message" name="message" required rows="5" placeholder="Tell me about your project..." className="w-full bg-black border-2 border-gray-800 rounded-xl px-4 py-3 text-white font-medium focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 transition-all resize-none placeholder-gray-700"></textarea>
            </div>

            <input type="hidden" name="_captcha" value="false" />

            <button type="submit" className="w-full mt-4 bg-red-600 text-white font-black text-lg py-4 rounded-xl hover:bg-red-700 transition-colors shadow-[0_0_15px_rgba(255,0,0,0.4)]">
              Submit Message
            </button>
          </form>
        </div>

      </div>
    </section>
  );
};

export default Contact;
