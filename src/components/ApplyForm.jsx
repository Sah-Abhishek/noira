import React from "react";

const ApplyForm = () => {
  return (
    <div className="bg-black text-white px-4 py-16" id="apply">
      {/* Heading */}
      <h2 className="text-center text-3xl md:text-4xl text-[#C49E5B] mb-4 hover:text-yellow-400">
        Apply Now
      </h2>
      <p className="text-center mb-10">
        Send your application to{" "}
        <a
          href="mailto:careers@noiralondon.com"
          className="text-[#95793e] hover:underline"
        >
          careers@noira.co.uk
        </a>
      </p>

      {/* Form Box */}
      {/* <div className="max-w-xl mx-auto border border-[#C49E5B]/20 p-6 md:p-10 rounded-[15px]">
        <form className="space-y-6">
          <div>
            <label className="block mb-1 text-sm">Full Name</label>
            <input
              type="text"
              placeholder="Your name"
              className="w-full bg-[#1a1a1a] text-white px-4 py-2 rounded outline-none border border-[#C49E5B]/20 focus:border-yellow-400"
            />
          </div>
          <div>
            <label className="block mb-1 text-sm">Contact Number</label>
            <input
              type="tel"
              placeholder="Your contact"
              className="w-full bg-[#1a1a1a] text-white px-4 py-2 rounded outline-none border border-[#C49E5B]/20 focus:border-yellow-400"
            />
          </div>
          <div>
            <label className="block mb-1 text-sm">Experience & Certifications</label>
            <textarea
              rows="4"
              placeholder="Your experience or skills"
              className="w-full bg-[#1a1a1a] text-white px-4 py-2 rounded outline-none border border-[#C49E5B]/20 focus:border-yellow-400 resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 font-medium rounded text-black 
              bg-gradient-to-r from-[#f5e18c] via-[#e0a528] to-[#a66c00]
              hover:from-yellow-300 hover:to-yellow-500 transition"
          >
            Submit Application
          </button>
        </form>
      </div> */}
    </div>
  );
};

export default ApplyForm;
