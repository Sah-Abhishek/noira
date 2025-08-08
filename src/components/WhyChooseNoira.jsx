import React from "react";
import { FaHome, FaCertificate, FaClock } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext"; // Adjust path

const WhyChooseNoira = () => {
  const { isDarkMode } = useTheme();

  const features = [
    {
      icon: <FaHome size={28} />,
      title: "At Your Location",
      description:
        "Professional massage services delivered to your home, hotel, or preferred private location."
    },
    {
      icon: <FaCertificate size={28} />,
      title: "Licensed Professionals",
      description:
        "Certified and experienced massage therapists with premium training and expertise."
    },
    {
      icon: <FaClock size={28} />,
      title: "Flexible Scheduling",
      description:
        "Book sessions that fit your schedule, including evenings and weekends."
    }
  ];

  return (
    <section
      className={`py-16 px-6 text-center transition-colors duration-300 ${
        isDarkMode ? "bg-[#111] text-[#D59940]" : "bg-white text-black"
      }`}
    >
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-braven font-semibold mb-2">
        Why Choose Noira Wellness
      </h2>
      <p
        className={`mb-12 text-lg ${
          isDarkMode ? "text-gray-300" : "text-gray-600"
        }`}
      >

      </p>

      {/* Features */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <div
              className={`w-16 h-16 flex items-center justify-center rounded-full mb-4 shadow-md transition-colors duration-300 ${
                isDarkMode ? "bg-gray-800 text-[#D59940]" : "bg-gray-100 text-gray-700"
              }`}
            >
              {feature.icon}
            </div>
            <h3 className="font-semibold font-braven text-lg mb-2">{feature.title}</h3>
            <p
              className={`text-sm leading-relaxed ${
                isDarkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseNoira;
