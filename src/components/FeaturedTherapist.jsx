
import React from 'react';
import sarahImg from '../assets/sarah.jpg';
import michaelImg from '../assets/micheal.jpg';
import emmaImg from '../assets/emma.jpg';
// Assume David has no image

const therapists = [
  {
    name: 'Sarah Johnson',
    title: 'Massage Therapist',
    rating: 4.9,
    tags: ['Deep Tissue', 'Swedish'],
    image: sarahImg,
  },
  {
    name: 'Michael Chen',
    title: 'Physiotherapist',
    rating: 4.8,
    tags: ['Sports Injury', 'Rehab'],
    image: michaelImg,
  },
  {
    name: 'Emma Rodriguez',
    title: 'Skincare Specialist',
    rating: 5.0,
    tags: ['Anti-aging', 'Hydrafacial'],
    image: emmaImg,
  },
  {
    name: 'David Kim',
    title: 'Wellness Coach',
    rating: 4.9,
    tags: ['Nutrition', 'Mindfulness'],
    image: emmaImg // No image
  },
];

const FeaturedTherapists = () => {
  return (
    <section className="bg-gradient-to-l from-[#0f1118] to-black scroll-mt-24 text-white py-20 px-6 md:px-20" id="therapists">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold">
          Featured <span className="text-[#C49E5B]">Therapists</span>
        </h2>
        <p className="text-gray-400 mt-4">Meet our certified wellness professionals</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {therapists.map((therapist, index) => (
          <div key={index} className="bg-[#1a1c23] border border-white/10 rounded-2xl p-6 text-center shadow-md">
            {/* Avatar */}
            <div className="flex justify-center mb-4">
              <div className="w-20 h-20 rounded-full border-4 border-yellow-400 overflow-hidden">
                {therapist.image ? (
                  <img
                    src={therapist.image}
                    alt={therapist.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-transparent flex items-center justify-center text-yellow-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-10 h-10"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 20.25a8.25 8.25 0 1115 0v.375a.375.375 0 01-.375.375H4.875a.375.375 0 01-.375-.375V20.25z"
                      />
                    </svg>
                  </div>
                )}
              </div>
            </div>

            {/* Name & Title */}
            <h3 className="text-lg font-semibold">{therapist.name}</h3>
            <p className="text-yellow-400 text-sm mt-1">{therapist.title}</p>

            {/* Rating */}
            <div className="flex items-center justify-center gap-2 mt-4">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-4 h-4 ${therapist.rating >= i + 1 ? 'fill-yellow-400' : 'fill-gray-600'
                      }`}
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 .587l3.668 7.431L24 9.587l-6 5.841 1.417 8.249L12 18.896 4.583 23.677 6 15.428 0 9.587l8.332-1.569z" />
                  </svg>
                ))}
              </div>
              <span className="text-gray-300 text-sm">{therapist.rating.toFixed(1)}</span>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap justify-center gap-2 mt-4">
              {therapist.tags.map((tag, i) => (
                <span
                  key={i}
                  className="bg-[#2b2d35] text-yellow-300 px-3 py-1 rounded-full text-xs font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Book Now Button */}
            <button className="mt-6 bg-gradient-to-r from-[#f5e18c] via-[#e0a528] to-[#a66c00] w-full text-black font-semibold px-6 py-2 rounded-full hover:opacity-90 transition">
              Book Now
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedTherapists;
