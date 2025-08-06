
import React from 'react';

const CtaSection = () => {
  return (
    <section className="bg-black py-20 px-6 md:px-20 text-white flex justify-center items-center">
      <div className="bg-[#1a1a1a] rounded-2xl px-10 py-12 w-full max-w-5xl text-center shadow-lg border border-white/10">
        {/* Heading */}
        <div className="relative inline-block">
          <h2 className="text-3xl md:text-4xl font-bold leading-snug">
            Ready to Transform Your <span className="text-[#C49E5B]">Wellness Journey ?</span>
          </h2>

          {/* Overlay Text */}
        </div>

        {/* Description */}
        <p className="text-gray-400 text-sm md:text-base mt-6">
          Book your premium therapy session today and experience luxury wellness at your doorstep
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center items-center">
          <a
            href="#book"
            className="bg-gradient-to-r from-[#f5e18c] via-[#e0a528] to-[#a66c00] text-black font-semibold px-6 py-3 rounded-full shadow hover:opacity-90 transition"
          >
            Book Therapy Near You
          </a>
          <a
            href="#services"
            className="border border-yellow-400 text-yellow-400 font-semibold px-6 py-3 rounded-full hover:bg-yellow-500 hover:text-black transition"
          >
            View All Services
          </a>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
