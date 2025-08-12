import React from 'react';
import noira from '/noira.png';
import {
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaMapMarkerAlt,
} from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';

const Footer = () => {
  const { isDarkMode } = useTheme();

  const bgColor = isDarkMode ? 'bg-[#0f111d]' : 'bg-gray-100';
  const textColor = isDarkMode ? 'text-white' : 'text-gray-800';
  const mutedText = isDarkMode ? 'text-gray-300' : 'text-gray-600';
  const divider = isDarkMode ? 'border-white/10' : 'border-gray-300';

  return (
    <footer className={`${bgColor} ${textColor} px-6 md:px-20 py-12`}>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Logo & Socials */}
        <div>
          <div className="mb-4">
            <img src={noira} alt="Noira Logo" className="w-32" />
          </div>

          <div className="flex gap-4 text-yellow-500 text-lg">
            <a href="https://www.instagram.com/noira_london?igsh=MTNsN3E0YTJ0MDU3Zw==" aria-label="Instagram" className="hover:opacity-80">
              <FaInstagram />
            </a>
            <a href="#" aria-label="Facebook" className="hover:opacity-80">
              <FaFacebookF />
            </a>
            <a href="#" aria-label="Twitter" className="hover:opacity-80">
              <FaTwitter />
            </a>
          </div>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-yellow-500 font-semibold mb-4">Services</h4>
          <ul className={`space-y-2 text-sm ${mutedText}`}>
            <li>Quick Reset</li>
            <li>Deep Comfort Massage</li>
            <li>Jet Lag Reset</li>
            <li>The Executive Reset</li>
            <li>Couple’s Bespoke Escape</li>
            <li>The Black Label Experience</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-yellow-500 font-semibold mb-4">Contact</h4>
          <ul className={`space-y-3 text-sm ${mutedText}`}>
            <li className="flex items-center gap-2">
              <FaPhoneAlt className="text-yellow-500" />
              +44 7350 700055
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-yellow-500" />
              info@noira.co.uk
            </li>
            <li className="flex items-center gap-2">
              <FaClock className="text-yellow-500" />
              24/7 Available
            </li>
            <li className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-yellow-500" />
              London & surrounding boroughs
            </li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className={`border-t ${divider} mt-10 pt-6 text-center text-sm ${mutedText}`}>
        © 2025 NOIRA. A luxury without noise. Available to the discerning few      </div>
    </footer>
  );
};

export default Footer;
