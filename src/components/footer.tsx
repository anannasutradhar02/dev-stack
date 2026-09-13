import React from 'react';
import logo from '../assets/react.svg';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-slate-100 py-10 text-slate-500 text-sm">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between gap-8 mb-10">
          
          
           <div className="max-w-xs">
            <div className="flex items-center gap-2 mb-3">
              <img src={logo} alt="Logo" className="w-7 h-7" />
              <span className="text-xl font-bold text-slate-900">
                Dev <span className="text-pink-600">Stack</span>
              </span>
            </div>
            <p className="text-xs text-slate-400 mb-4">
              Curated tools, technologies, and resources for developers building modern software.
            </p>
            <div className="flex gap-4 font-medium text-slate-600">
              <a href="#">GitHub</a>
              <a href="#">Twitter</a>
              <a href="#">LinkedIn</a>
            </div>
          </div>

         
          <div className="flex flex-wrap gap-12">
            <div>
              <h4 className="font-bold text-xs text-slate-900 uppercase mb-3">Product</h4>
              <ul className="space-y-2 text-xs">
                <li><a href="#home">Home</a></li>
                <li><a href="#technologies">Technologies</a></li>
                <li><a href="#projects">Projects</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-xs text-slate-900 uppercase mb-3">Company</h4>
              <ul className="space-y-2 text-xs">
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="#">Careers</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-xs text-slate-900 uppercase mb-3">Legal</h4>
              <ul className="space-y-2 text-xs">
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms of Service</a></li>
              </ul>
            </div>
          </div>

        </div>

       <div className="border-t border-slate-100 pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-slate-400 gap-2">
          <p>© 2026 Dev Stack. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;