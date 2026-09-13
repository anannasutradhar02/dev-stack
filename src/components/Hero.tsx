import React from 'react';
import heroImg from "../assets/banner-stack.png";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-12 gap-8 max-w-7xl mx-auto">
      
      {/* বাম পাশের কন্টেন্ট */}
      <div className="w-full md:w-1/2 space-y-6">
        
        {/* প্রধান হেডিং */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight">
          Build Your Ideal <br />
          <span 
            className="block text-4xl sm:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent"
            style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
          >
            Development Stack
          </span>
        </h1>

        {/* প্যারাগ্রাফ */}
        <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-lg">
          Explore frontend, backend, database, and tooling options,
          compare them side by side, and put together the stack that fits your
          next project.
        </p>

        {/* বাটন গ্রুপ */}
        <div className="flex flex-wrap items-center gap-4 pt-2">
          <button className="px-6 py-3 bg-gradient-to-r from-orange-500 to-pink-500 text-white font-medium rounded-lg shadow-md hover:opacity-90 transition-all duration-200">
            Explore Technologies
          </button>

          <button className="px-6 py-3 bg-white text-slate-700 font-medium rounded-lg border border-slate-300 hover:bg-slate-50 transition-all duration-200">
            Learn More
          </button>
        </div>

      </div>

      {/* ডান পাশের ইমেজ */}
      <div className="w-full md:w-1/2 flex justify-center md:justify-end">
        <img src={heroImg} 
          alt="Hero Image" 
          className="w-[500px] max-w-full h-auto object-contain ml-auto"/>
      </div>

    </section>
  );
};

export default Hero;