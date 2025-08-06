import noira_logo from '../../public/noira_logo.png';

const Navbar = () => {
  return (
    <nav className="bg-[#111] text-white px-6 py-4 flex justify-between items-center shadow-md">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <img
          src={noira_logo}
          alt="Logo"
          className="w-8 h-8"
        />
        <span className="text-yellow-400 font-bold text-xl">NOIRA</span>
      </div>

      {/* Desktop Nav */}
      <div className="hidden md:flex gap-6 text-sm items-center">
        <a href="#services" className="hover:text-yellow-400 transition">
          Services
        </a>
        <a href="#therapists" className="hover:text-yellow-400 transition">
          Therapists
        </a>
        <a href="#about" className="hover:text-yellow-400 transition">
          About
        </a>

        {/* Book Now Button */}
        <a
          href="#book"
          className="bg-yellow-400 text-black font-semibold px-4 py-2 rounded-full hover:bg-yellow-300 transition"
        >
          Book Now
        </a>
      </div>
    </nav>
  );
};

export default Navbar;

