import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#0a0a0a] py-10 border-t border-red-600/20">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-gray-500 text-sm font-bold uppercase tracking-wider">
          &copy; {new Date().getFullYear()} Dhvanit Shah. All rights reserved.
        </p>
        
        <div className="flex items-center gap-2 text-sm text-gray-500 font-bold uppercase tracking-wider">
          Built with <span className="text-red-600 text-lg mx-1">★</span> React & Tailwind
        </div>
      </div>
    </footer>
  );
};

export default Footer;
