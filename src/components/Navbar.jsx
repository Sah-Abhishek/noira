import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import noira from '/noira.svg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#111] h-13 text-white px-6 py-4 flex justify-between items-center shadow-md relative z-50">
      {/* Logo */}
      <div className="flex items-center h-10">
        <img
          src={noira}
          alt="Logo"
          className="h-20 sm:h-30"
        />
      </div>

      {/* Hamburger Icon - Mobile */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden text-white focus:outline-none"
      >
        {isOpen ? <FaTimes className="text-[#95793e] w-6 h-6" /> : <FaBars className="text-[#95793e] w-6 h-6" />}
      </button>

      {/* Desktop Nav */}
      <div className="hidden md:flex gap-6 text-sm items-center">
        <a href="#services" className="hover:text-[#95793e] transition">
          Services
        </a>
        <a href="#therapists" className="hover:text-[#C49E5B] transition">
          Therapists
        </a>
        <a href="#about" className="hover:text-[#95793e] transition">
          About
        </a>
        <a
          href="#book"
          className="bg-gradient-to-r from-[#f5e18c] via-[#e0a528] to-[#a66c00] hover:from-yellow-300 hover:to-yellow-500 text-black font-semibold px-4 py-2 rounded-full transition"
        >
          Book Now
        </a>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="absolute top-14 left-0 w-full bg-[#111] flex flex-col items-start gap-4 px-6 py-4 md:hidden transition-all duration-300">
          <a href="#services" className="hover:text-yellow-400 transition" onClick={() => setIsOpen(false)}>
            Services
          </a>
          <a href="#therapists" className="hover:text-[#C49E5B] transition" onClick={() => setIsOpen(false)}>
            Therapists
          </a>
          <a href="#about" className="hover:text-yellow-400 transition" onClick={() => setIsOpen(false)}>
            About
          </a>
          <a
            href="#book"
            className="bg-gradient-to-r from-[#f5e18c] via-[#e0a528] to-[#a66c00] hover:from-yellow-300 hover:to-yellow-500 text-black font-semibold px-4 py-2 rounded-full transition"
            onClick={() => setIsOpen(false)}
          >
            Book Now
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
