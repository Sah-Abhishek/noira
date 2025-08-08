import React from 'react';

const HowItWorks = () => {
  const steps = [
    {
      number: 1,
      title: "Book Online",
      description: "Choose your service, preferred date and time through our secure booking platform with instant confirmation.",
      gradient: "from-amber-400 to-yellow-600"
    },
    {
      number: 2,
      title: "Therapist Arrives",
      description: "Your certified therapist arrives punctually with all premium equipment, linens, and organic oils.",
      gradient: "from-yellow-500 to-amber-500"
    },
    {
      number: 3,
      title: "Setup & Consultation",
      description: "Professional setup in your space with personalized consultation to customize your treatment.",
      gradient: "from-amber-500 to-yellow-400"
    },
    {
      number: 4,
      title: "Relax & Enjoy",
      description: "Experience your premium massage in complete comfort, privacy, and luxury without leaving your space.",
      gradient: "from-yellow-400 to-amber-300"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-300 bg-clip-text text-transparent mb-6">
            How It Works
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Simple steps to your perfect luxury massage experience
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-yellow-400 mx-auto mt-8 rounded-full"></div>
        </div>

        {/* Steps - Horizontal Cards */}
        {/* Steps - Horizontal Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="group relative overflow-hidden"
            >
              {/* Background glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-yellow-500/5 rounded-2xl blur-xl group-hover:blur-lg transition-all duration-500"></div>

              {/* Card */}
              <div className="relative bg-gray-900/60 backdrop-blur-sm border border-amber-500/20 rounded-2xl p-8 h-full group-hover:border-amber-400/40 transition-all duration-500 group-hover:transform group-hover:scale-105 min-h-[300px] flex flex-col">
                {/* Number Circle */}
                <div className="relative mb-6 flex justify-center lg:justify-start">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${step.gradient} flex items-center justify-center shadow-lg shadow-amber-500/20 group-hover:shadow-amber-400/40 transition-all duration-500`}>
                    <span className="text-2xl font-bold text-black">
                      {step.number}
                    </span>
                  </div>
                  {/* Decorative ring */}
                  <div className="absolute -inset-2 rounded-xl border border-amber-400/20 group-hover:border-amber-400/40 transition-all duration-500"></div>
                </div>

                {/* Content */}
                <div className="flex-1 space-y-4 text-center lg:text-left">
                  <h3 className="text-2xl font-bold text-amber-300 group-hover:text-amber-200 transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                    {step.description}
                  </p>
                </div>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-400/50 to-transparent group-hover:via-amber-400/80 transition-all duration-500"></div>
              </div>

              {/* Connection Line for desktop */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 z-10">
                  <div className="w-8 h-0.5 bg-gradient-to-r from-amber-400/60 to-yellow-400/40"></div>
                </div>
              )}

              {/* Connection Line for mobile (vertical) */}
              {index < steps.length - 1 && (
                <div className="lg:hidden flex justify-center py-4">
                  <div className="h-8 w-0.5 bg-gradient-to-b from-amber-400/60 to-yellow-400/40"></div>
                </div>
              )}
            </div>
          ))}
        </div>
        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <button className="group relative px-8 py-4 bg-gradient-to-r from-amber-500 to-yellow-500 text-black font-semibold rounded-xl shadow-lg shadow-amber-500/25 hover:shadow-amber-400/40 transform hover:scale-105 transition-all duration-300">
            <span className="relative z-10">Book Your Experience</span>
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-amber-400 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
