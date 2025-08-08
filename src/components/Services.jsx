import React from 'react';
import devineHand from '../assets/devineHand.png';
import dumbell from '../assets/dumbell.png';
import leave from '../assets/leaf.png';
import heart from '../assets/heart.png';
import twoLeaves from '../assets/twoLeaves.png';
import cartWheel from '../assets/cartWheel.png';
import { FaArrowRight } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext'; // make sure path is correct

const services = [
  {
    title: 'Quick Reset',
    description: 'An express escape—back, neck & shoulder focus to melt tension fast.',
    prices: ['45 mins – £65'],
    icon: devineHand,
  },
  {
    title: 'Deep Comfort Massage',
    description: 'Slow, deep, muscle-focused massage to release knots and restore balance.',
    prices: ['60 mins – £85', '90 mins – £120', '120 mins – £155', '150 mins – £190'],
    icon: dumbell,
  },
  {
    title: 'Jet Lag Reset',
    description: 'Boosts circulation, reduces swelling, and leaves your body light and refreshed.',
    prices: ['60 mins – £95', '90 mins – £135', '120 mins – £175', '150 mins – £215'],
    icon: leave,
  },
  {
    title: 'Goddess Glow Ritual',
    description: 'Soft strokes with aromatic oils to calm the mind and leave skin radiant.',
    prices: ['60 mins – £105', '90 mins – £145', '120 mins – £185'],
    icon: heart,
  },
  {
    title: 'The Executive Reset',
    description: 'Deep tissue & pressure-point therapy for stress relief and mental clarity.',
    prices: ['60 mins – £115', '90 mins – £155', '120 mins – £195'],
    icon: cartWheel,
  },
  {
    title: 'Couple’s Bespoke Escape',
    description: 'Two therapists in sync for an intimate and relaxing home or hotel experience.',
    prices: ['60 mins – £180', '90 mins – £250', '120 mins – £320'],
    icon: twoLeaves,
  },
  {
    title: 'The Black Label Experience',
    description: 'Full-body indulgence with warm oil infusion and flowing, luxurious strokes.',
    prices: ['90 mins – £200', '120 mins – £270', '150 mins – £340'],
    icon: devineHand,
  },
];

const Services = () => {
  const { isDarkMode } = useTheme();

  const sectionBg = isDarkMode ? 'bg-black text-white' : 'bg-gray-200/70 text-black';
  const descriptionText = isDarkMode ? 'text-gray-400' : 'text-gray-600';
  const cardBg = isDarkMode ? 'bg-[#1a1a1a]' : 'bg-gray-100';
  const borderColor = isDarkMode ? 'border-white/20' : 'border-gray-300';
  const titleBg = isDarkMode ? 'bg-yellow-600/10' : 'bg-gray-300/50';
  
  return (
    <section
      className={`${sectionBg} py-16 px-4 sm:px-6 md:px-10 lg:px-20`}
      id="services"
    >
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold">
          Our <span className="text-[#C49E5B]">Services</span>
        </h2>
        <p className={`${descriptionText} mt-4 text-sm sm:text-base`}>
          Premium wellness treatments tailored to your needs
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className={`${cardBg} border-b-2 ${borderColor} rounded-xl p-6 transition duration-300 shadow-lg hover:shadow-[#C49E5B]/30 hover:scale-105`}
          >
            <h3 className={`text-lg flex items-center gap-3 sm:text-2xl font-semibold mb-2 ${titleBg} px-4 py-2 rounded-2xl text-[#C49E5B]`}>
              <div className="bg-gradient-to-r from-[#f5e18c] via-[#e0a528] to-[#a66c00] w-12 h-12 rounded-full flex items-center justify-center overflow-hidden">
                <img
                  src={service.icon}
                  alt={service.title}
                  className="w-6 h-6 object-contain"
                />
              </div>
              {service.title}
            </h3>
            <p className={`${descriptionText} text-sm sm:text-base mb-4`}>
              {service.description}
            </p>
            <ul className="pl-4 space-y-1">
              {service.prices.map((price, idx) => (
                <li
                  key={idx}
                  className={`flex items-center text-md -ml-4 ${titleBg} rounded-2xl px-4 py-2`}
                >
                  <FaArrowRight className="text-xs mr-2 text-yellow-500" /> {price}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
