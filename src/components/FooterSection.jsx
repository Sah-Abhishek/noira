
import React from 'react';
import { FaInstagram, FaFacebookF, FaTwitter, FaPhoneAlt, FaEnvelope, FaClock } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#0f111d] text-white px-6 md:px-20 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Logo & Description */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="bg-yellow-400 w-8 h-8 rounded-full flex items-center justify-center text-black font-bold text-lg">
              <img src='/logo.png' />
            </div>
            <span className="text-yellow-400 font-bold text-lg">NOIRA</span>
          </div>
          <p className="text-gray-400 text-sm mb-4">
            Premium wellness services delivered to your doorstep with luxury and care.
          </p>
          {/* Socials */}
          <div className="flex gap-4 text-yellow-400 text-lg">
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
          </div>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-yellow-400 font-semibold mb-4">Services</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>Massage Therapy</li>
            <li>Physiotherapy</li>
            <li>Skincare</li>
            <li>Wellness Coaching</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-yellow-400 font-semibold mb-4">Contact</h4>
          <ul className="space-y-3 text-sm text-gray-300">
            <li className="flex items-center gap-2">
              <FaPhoneAlt className="text-yellow-400" />
              +1 (555) 123-4567
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-yellow-400" />
              info@noira.co.uk
            </li>
            <li className="flex items-center gap-2">
              <FaClock className="text-yellow-400" />
              24/7 Available
            </li>
            <li className="flex items-center gap-2">
              <FaClock className="text-yellow-400" />
              London & surrounding boroughs
            </li>
          </ul>
        </div>
      </div>

      {/* Divider + Copyright */}
      <div className="border-t border-white/10 mt-10 pt-6 text-center text-sm text-gray-500">
        © 2025 NOIRA. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
