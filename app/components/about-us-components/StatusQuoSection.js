import React from "react";

const StatusQuoSection = () => {
  return (
    <section className="bg-[#fffdf9] py-16 px-6 flex flex-col md:flex-row items-center justify-center gap-10">
      {/* Left Side - Text */}
      <div className="max-w-xl">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          The status quo is broken
        </h2>
        <p className="text-gray-700 text-lg leading-relaxed mb-8">
          The traditional processes around homeownership are opaque and stressful.
          Fees aren’t transparent and some are simply outrageous in size. Traditional
          mortgage lending is rife with unnecessary fees and slow, painful processes.
          It’s a system set up to benefit insiders — not you. Better.com CEO, Vishal Garg,
          set out to change that.
        </p>
        <button className="bg-green-700 hover:bg-green-800 text-white font-semibold py-3 px-6 rounded">
          Read Vishal’s story
        </button>
      </div>

      {/* Right Side - Image with Play Button */}
      <div className="max-w-xl w-full">
        <div className="relative w-full rounded overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            alt="Professional working"
            className="w-full h-auto object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 bg-white bg-opacity-80 rounded-full flex items-center justify-center shadow-lg">
              <svg
                className="w-8 h-8 text-gray-800"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatusQuoSection;
