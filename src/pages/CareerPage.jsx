
import React from 'react';
import career from '../../public/career.png'; 
import euro from '../../public/euro.png'; 
import time from '../../public/time.png';
import location from '../../public/location.png';
import CareerHighlights from '../components/Careerhiglights';
import ApplyForm from '../components/ApplyForm';
import Careerfooter from '../components/Careerfooter';

const CareerPage = () => {
  return (
    <section className="relative w-full">
      {/* Hero Section */}
     <div
  className="relative min-h-[calc(100vh-70px)] flex items-center justify-center bg-cover bg-center"
  style={{
    backgroundImage: `url(${career})`,
  }}
>
  {/* Overlay */}
  <div className="absolute bg-black/65 inset-0 z-10" />

  {/* Content */}
  <div className="relative z-20 text-white px-6 w-full max-w-5xl">
    <div className="flex flex-col items-start sm:items-start gap-6">
      {/* Title */}
      <h1 className="text-4xl md:text-5xl lg:text-6xl  leading-tight">
        Where Prestige Meets Wellness
      </h1>

      {/* Subtitle */}
      <p className="text-[#C49E5B] text-base md:text-lg lg:text-xl">
        Luxury Mobile Massage Therapy
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-4 mt-2">
        {/* Tag 1 */}
        <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded text-sm sm:text-base">
          <img src={euro} alt="Euro" className="w-3 h-5" />
          <span>£120–£200/day</span>
        </div>

        {/* Tag 2 */}
        <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded text-sm sm:text-base">
          <img src={time} alt="Time" className="w-4 h-4" />
          <span>Flexible Hours</span>
        </div>

        {/* Tag 3 */}
        <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded text-sm sm:text-base">
          <img src={location} alt="Location" className="w-3 h-4" />
          <span>London</span>
        </div>
      </div>
    </div>
  </div>
</div>


      {/* Add more sections below if needed */}

     <CareerHighlights />
     <ApplyForm />
     <Careerfooter />
    </section>
  );
};

export default CareerPage;
