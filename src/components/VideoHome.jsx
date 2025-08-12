import React from 'react';

function AutoPlayVideo() {
  return (
    <div className="bg-black text-white py-12 px-4 text-center">
      <h2
        className="text-4xl font-braven text-[#D59940] font-whisper font-bold mb-6 text-center"
      >
        At Home Treatment
      </h2>

      <div className="flex flex-col lg:flex-row justify-center items-center gap-8">
        <video
          className="w-full max-w-[720px] aspect-video rounded-lg shadow-lg"
          src="/0_Massage_Spa_3840x2160.mp4"
          autoPlay
          muted
          loop
          playsInline
        >
          Your browser does not support the video tag.
        </video>

        <video
          className="w-full max-w-[720px] aspect-video rounded-lg shadow-lg"
          src="/0_Spa_Massage_3840x2160.mp4"
          autoPlay
          muted
          loop
          playsInline
        >
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}

export default AutoPlayVideo;
