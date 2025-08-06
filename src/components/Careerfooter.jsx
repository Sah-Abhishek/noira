import React from "react";
import { FaCrown, FaGem, FaStar } from "react-icons/fa";

const Careerfooter = () => {
  return (
    <footer className="bg-[#1a1a1a] text-white text-center py-10">
      <div className="max-w-xl mx-auto">
        <h3 className="text-[#C49E5B] text-2xl  mb-2">
          NOIRA
        </h3>
        <p className="text-md text-gray-400 mb-4">
          Luxury Without Noise.
        </p>
        <div className="flex items-center justify-center text-[#C49E5B] text-[2rem] gap-8">
          <FaCrown />
          <span className=" justify-center ">.</span>
          <FaGem />
          <span>.</span>
          <FaStar />
        </div>
      </div>
    </footer>
  );
};

export default Careerfooter;
