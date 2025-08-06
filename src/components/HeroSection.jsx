import React from 'react';

const HeroSection = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source
          src="/HeroVideo2.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-start md:justify-center h-full text-center text-white px-4 pt-20 sm:pt-32">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
          Luxury <span className="text-[#C49E5B]">Therapy</span>
        </h1>
        <h2 className="text-2xl md:text-3xl mb-6 font-semibold">At Your Doorstep</h2>
        <p className="text-gray-300 mb-8 text-base md:text-lg max-w-xl">
          Experience premium wellness services in the comfort of your home
        </p>
        <button className="bg-gradient-to-r from-[#f5e18c] via-[#e0a528] to-[#a66c00] text-black font-semibold px-6 py-3 rounded-full hover:opacity-90 transition">
          Book Therapy Near You
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
