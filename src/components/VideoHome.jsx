import React from 'react';

function AutoPlayVideo() {
  return (
    <div className="bg-black text-white py-8 px-4 text-center">
      <h2 className="text-3xl text-yellow-500 font-bold  mb-6">Welcome Experience</h2>

      <div className='flex mt-20 mx-30' >
        <video
          className="mx-auto rounded-lg shadow-lg"
          width="720"
          height="405"
          src="/0_Massage_Spa_3840x2160.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
        <video
          className="mx-auto rounded-lg shadow-lg"
          width="720"
          height="405"
          src="/0_Spa_Massage_3840x2160.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
      </div>

    </div>
  );
}

export default AutoPlayVideo;
