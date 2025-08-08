import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { motion } from 'framer-motion';

const HeroSection = () => {
  const { isDarkMode } = useTheme();

  const overlayColor = isDarkMode ? 'bg-black/50' : 'bg-white/10';
  const textMain = isDarkMode ? 'text-white' : 'text-gray-900';
  const textSub = isDarkMode ? 'text-gray-300' : 'text-gray-600';

  // Animation settings
  const fadeInUp = {
    hidden: { opacity: 0, y: 70 },
    visible: { opacity: 1, y: 0, transition: { duration: 2, ease: "easeOut" } },
  };

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
        <source src="/HeroVideo2.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className={`absolute inset-0 ${overlayColor} z-10`} />

      {/* Text Content with Animation */}
      <motion.div
        className={`relative z-20 flex flex-col items-center justify-start md:justify-center h-full text-center px-4 pt-20 sm:pt-32 ${textMain}`}
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
      >
        <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
          Luxury <span className="text-[#C49E5B]">Therapy</span>
        </h1>
        <h2 className="text-2xl md:text-3xl mb-6 font-semibold">At Your Doorstep</h2>
        <p className={`mb-8 text-base md:text-lg max-w-xl ${textSub}`}>
          Experience premium wellness services in the comfort of your home
        </p>
        <button className="bg-gradient-to-r from-[#f5e18c] via-[#e0a528] to-[#a66c00] text-black font-semibold px-6 py-3 rounded-full hover:opacity-90 transition">
          Launching Soon
        </button>
      </motion.div>
    </div>
  );
};

export default HeroSection;
