import React from "react";
import { useTheme } from "../context/ThemeContext"; // Adjust path as needed

const HowItWorks = () => {
  const { isDarkMode } = useTheme();

  const steps = [
    {
      number: 1,
      title: "Book Online",
      description:
        "Choose your service, preferred date and time through our secure booking platform with instant confirmation.",
    },
    {
      number: 2,
      title: "Therapist Arrives",
      description:
        "Your certified therapist arrives punctually with all premium equipment, linens, and organic oils.",
    },
    {
      number: 3,
      title: "Setup & Consultation",
      description:
        "Professional setup in your space with personalized consultation to customize your treatment.",
    },
    {
      number: 4,
      title: "Relax & Enjoy",
      description:
        "Experience your premium massage in complete comfort, privacy, and luxury without leaving your space.",
    },
  ];

  return (
    <div
      className={`py-16 px-4 transition-colors duration-500 ${
        isDarkMode
          ? "bg-gradient-to-br from-black via-gray-900 to-black"
          : "bg-gradient-to-br from-white via-gray-100 to-white"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2
            className={`text-5xl md:text-6xl font-bold mb-6 ${
              isDarkMode ? "text-[#C49E5B]" : "text-yellow-700"
            }`}
          >
            How It Works
          </h2>
          <p
            className={`text-xl max-w-2xl mx-auto leading-relaxed ${
              isDarkMode ? "text-gray-300" : "text-gray-700"
            }`}
          >
            Simple steps to your perfect luxury massage experience
          </p>
          <div
            className={`w-24 h-1 mx-auto mt-8 rounded-full ${
              isDarkMode ? "bg-[#C49E5B]" : "bg-yellow-600"
            }`}
          ></div>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div key={step.number} className="group relative overflow-hidden">
              {/* Background glow */}
              <div
                className={`absolute inset-0 rounded-2xl blur-xl group-hover:blur-lg transition-all duration-500 ${
                  isDarkMode ? "bg-[#C49E5B]/10" : "bg-yellow-500/10"
                }`}
              ></div>

              {/* Card */}
              <div
                className={`relative backdrop-blur-sm border rounded-2xl p-8 h-full min-h-[300px] flex flex-col group-hover:scale-105 transition-all duration-500
                ${
                  isDarkMode
                    ? "bg-gray-900/60 border-[#C49E5B]/30 group-hover:border-[#C49E5B]/50"
                    : "bg-white/60 border-yellow-500/30 group-hover:border-yellow-500/50"
                }`}
              >
                {/* Number */}
                <div className="relative mb-6 flex justify-center lg:justify-start">
                  <div
                    className={`w-16 h-16 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-500
                    ${
                      isDarkMode
                        ? "bg-[#C49E5B] shadow-[#C49E5B]/20 group-hover:shadow-[#C49E5B]/40"
                        : "bg-yellow-500 shadow-yellow-500/20 group-hover:shadow-yellow-500/40"
                    }`}
                  >
                    <span className="text-2xl font-bold text-black">
                      {step.number}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 space-y-4 text-center lg:text-left">
                  <h3
                    className={`text-2xl font-bold group-hover:brightness-110 transition-colors duration-300 ${
                      isDarkMode ? "text-[#C49E5B]" : "text-yellow-600"
                    }`}
                  >
                    {step.title}
                  </h3>
                  <p
                    className={`leading-relaxed group-hover:brightness-110 transition-colors duration-300 ${
                      isDarkMode ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    {step.description}
                  </p>
                </div>

                {/* Bottom accent */}
                <div
                  className={`absolute bottom-0 left-0 right-0 h-1 transition-all duration-500 ${
                    isDarkMode
                      ? "bg-[#C49E5B]/40 group-hover:bg-[#C49E5B]/60"
                      : "bg-yellow-500/40 group-hover:bg-yellow-500/60"
                  }`}
                ></div>
              </div>

              {/* Connection line */}
              {index < steps.length - 1 && (
                <>
                  <div className="hidden lg:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 z-10">
                    <div
                      className={`w-8 h-0.5 ${
                        isDarkMode ? "bg-[#C49E5B]/40" : "bg-yellow-500/40"
                      }`}
                    ></div>
                  </div>
                  <div className="lg:hidden flex justify-center py-4">
                    <div
                      className={`h-8 w-0.5 ${
                        isDarkMode ? "bg-[#C49E5B]/40" : "bg-yellow-500/40"
                      }`}
                    ></div>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <button
            className={`group relative px-8 py-4 font-semibold rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300
            ${
              isDarkMode
                ? "bg-[#C49E5B] text-black shadow-[#C49E5B]/25 hover:shadow-[#C49E5B]/40"
                : "bg-yellow-500 text-black shadow-yellow-500/25 hover:shadow-yellow-500/40"
            }`}
          >
            <span className="relative z-10">Book Your Experience</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
