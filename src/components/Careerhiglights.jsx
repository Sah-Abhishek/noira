import React from "react";

import { FaCrown, FaStar, FaGlobeEurope, FaCheck } from "react-icons/fa";

const CareerHighlights = () => {
  return (
    <div className="text-white w-full">
      {/* Why Choose Section */}
      <div className="bg-black px-4 sm:px-6 md:px-16 py-12 sm:py-16">
        <h2 className="text-center text-[#C49E5B] text-3xl md:text-4xl sm:text-3xl mb-10 sm:mb-12">
          Why Choose NOIRA?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {/* Highlight Item */}
          {[{
            icon: <FaCrown className="text-[#C49E5B] text-3xl mb-4" />,
            title: "Highest Industry Pay",
            text: "Earn £700–£1000/week as a top performer"
          }, {
            icon: <FaStar className="text-[#C49E5B] text-3xl mb-4" />,
            title: "VIP Clientele",
            text: "Work with celebrities and elite professionals"
          }, {
            icon: <FaGlobeEurope className="text-[#C49E5B] text-3xl mb-4" />,
            title: "Global Opportunities",
            text: "Expansion to Dubai and Europe"
          }].map((item, index) => (
            <div key={index} className="border border-[#C49E5B]/20 p-6 rounded hover:shadow-lg transition-shadow duration-300">
              {item.icon}
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-300 text-sm">{item.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Who We're Looking For */}
      <div className="bg-[#1f1f1f] px-4 sm:px-6 md:px-16 py-12 sm:py-16">
        <h2 className="text-center text-[#C49E5B]  sm:text-3xl text-3xl md:text-4xl font-serif mb-10 sm:mb-12">
          Who We're Looking For
        </h2>

        <div className="flex flex-col-reverse md:flex-row gap-10 items-center">
          {/* Checklist */}
          <ul className="flex-1 space-y-4 text-sm sm:text-base text-gray-300">
            {[
              "Female therapists skilled in Swedish, Deep Tissue, and Aromatherapy",
              "Well-groomed, discreet, and professional appearance",
              "Fluent English (additional languages are a plus)",
              "Based in London with right to work in the UK"
            ].map((text, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <FaCheck className="text-[#C49E5B] mt-1 flex-shrink-0" />
                <span>{text}</span>
              </li>
            ))}
          </ul>

          {/* Image */}
          <div className="flex-1 w-full flex justify-center">
            <img
              src="https://imgs.search.brave.com/o89-CXJ-kdvIXXRSLUDyHtxORiw1WJNg6G6TBfy1ZH4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9m/cm9udC12aWV3LXdv/bWFuLXdvcmtpbmct/c3BhXzIzLTIxNTA5/MTE3NjQuanBnP3Nl/bXQ9YWlzX2h5YnJp/ZA"
              alt="Therapist"
              className="rounded-lg object-cover w-[250px] sm:w-[300px] h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerHighlights;
