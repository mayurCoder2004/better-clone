"use client";
import { useState } from "react";

export default function WhyBetterSection() {
  const [activeTab, setActiveTab] = useState("Paul");

  return (
    <section className="bg-[#f9f8f4] py-16 px-4">
      <div className="flex flex-col md:flex-row items-center justify-center max-w-7xl mx-auto gap-12">

        {/* Video Card */}
        <div className="max-w-sm w-full bg-black rounded-2xl relative overflow-hidden shadow-xl">
          <img
            src="/video-thumbnail.jpg" // Replace with your actual image
            alt="Video Testimonial"
            className="object-cover w-full h-96"
          />
          {/* Play Button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <button className="bg-white p-4 rounded-full shadow-md hover:scale-110 transition">
              <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>
          </div>
          {/* Testimonial Text Overlay */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent px-4 py-6 text-white text-sm text-left">
            <p className="leading-snug">
              I used Better three years ago for my primary residence and just now for my vacation home. Very simple process. Each time it took about two weeks to close.
            </p>
            <p className="mt-2 text-xs opacity-70">Paul – Better Mortgage customer</p>
          </div>
        </div>

        {/* Right Side Content */}
        <div className="text-left max-w-md">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#1f1f1f] leading-tight mb-6">
            Find out why we’re better.
          </h2>
          <button className="bg-[#00463f] text-white font-semibold py-3 px-8 rounded-full hover:bg-[#00372f] transition">
            See all our stories
          </button>

          {/* Trustpilot Section */}
          <div className="mt-4 flex items-center space-x-2 text-sm">
            <span className="text-green-700 font-semibold">★ Trustpilot</span>
            <span className="text-gray-700 font-medium">Excellent</span>
            <span className="text-gray-500">4.4 out of 5</span>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="mt-10 flex justify-center gap-4">
        {["Paul", "Amanda", "Tiara"].map((name) => (
          <button
            key={name}
            onClick={() => setActiveTab(name)}
            className={`px-5 py-2 rounded-full border font-medium ${
              activeTab === name
                ? "bg-white border-green-600 text-green-600"
                : "bg-white border-gray-300 text-gray-600"
            }`}
          >
            {name}
          </button>
        ))}
      </div>
    </section>
  );
}
