"use client";
import { useState } from "react";

export default function ProductsFaqSection() {
  const [activeTab, setActiveTab] = useState("Our products");

  const tabs = ["Our products", "Calculators", "Guides & FAQs"];

  return (
    <section className="bg-[#f9f8f4] py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl font-bold mb-2">Got questions?</h2>
        <h2 className="text-3xl font-bold mb-8">We've got answers</h2>

        {/* Tabs */}
        <div className="flex flex-wrap gap-4 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded-full border font-medium transition ${
                activeTab === tab
                  ? "border-green-600 text-green-600 font-semibold bg-white"
                  : "border-gray-300 text-gray-600 bg-white hover:border-green-600 hover:text-green-600"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Row 1 Left Card */}
          <div className="bg-[#edf7f1] rounded-lg p-5 flex flex-col justify-between">
            <div>
              <h3 className="font-semibold text-lg mb-4">
                How AI Mortgage Lending is Transforming the Home Loan Process
              </h3>
              <button className="w-10 h-10 rounded-full border border-black flex items-center justify-center mb-4 hover:bg-[#00463f] hover:text-white transition">
                →
              </button>
            </div>
            <div className="bg-gray-300 w-full h-52 rounded-lg flex items-center justify-center text-gray-600">
              Image Placeholder
            </div>
          </div>

          {/* Row 1 Right Card */}
          <div className="bg-[#edf7f1] rounded-lg p-5 flex flex-col justify-between">
            <div>
              <h3 className="font-semibold text-lg mb-4">
                One Day Mortgage<sup>1</sup>
              </h3>
              <p className="text-sm text-gray-700 mb-4">
                Kick your home loan into hyperdrive. Going from locked rate to
                Commitment Letter takes weeks for traditional lenders. We do it in
                a single day.
              </p>
              <button className="w-10 h-10 rounded-full border border-black flex items-center justify-center mb-4 hover:bg-[#00463f] hover:text-white transition">
                →
              </button>
            </div>
            <div className="bg-gray-300 w-full h-52 rounded-lg flex items-center justify-center text-gray-600">
              Image Placeholder
            </div>
          </div>

          {/* Row 2 Left Large Card */}
          <div className="bg-[#edf7f1] rounded-lg p-5 flex flex-col justify-center items-center">
            <div className="bg-gray-300 w-full h-64 rounded-lg flex items-center justify-center text-gray-600">
              Large Image Placeholder
            </div>
          </div>

          {/* Row 2 Right: Two Stacked Cards */}
          <div className="flex flex-col gap-6">
            {/* Top Small Card */}
            <div className="bg-[#edf7f1] rounded-lg p-5 flex flex-col justify-between flex-1">
              <div className="flex items-center">
                <div className="bg-gray-300 w-32 h-20 rounded-lg flex items-center justify-center text-gray-600 mr-4">
                  Img
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Better HELOC</h3>
                  <p className="text-sm text-gray-700 mb-2">
                    Access up to 90% of your home equity as cash in as little as 7
                    days.
                  </p>
                  <button className="w-10 h-10 rounded-full border border-black flex items-center justify-center hover:bg-[#00463f] hover:text-white transition">
                    →
                  </button>
                </div>
              </div>
            </div>

            {/* Bottom Small Card */}
            <div className="bg-[#edf7f1] rounded-lg p-5 flex flex-col justify-between flex-1">
              <div className="flex items-center">
                <div className="bg-gray-300 w-32 h-20 rounded-lg flex items-center justify-center text-gray-600 mr-4">
                  Img
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Insurance</h3>
                  <button className="w-10 h-10 rounded-full border border-black flex items-center justify-center hover:bg-[#00463f] hover:text-white transition">
                    →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Grid */}
      </div>
    </section>
  );
}
