import React from "react";

const timelineEvents = [
  {
    year: "2014",
    text: "After Vishal Garg’s first attempt to purchase his own dream home, he realized the homebuying process is unnecessarily broken. This inspired him to found a tech-first company to digitize and automate home finance.",
  },
  {
    year: "2015",
    text: "Better Mortgage funds its first mortgage loan entirely online (without a single phone call!).",
  },
  {
    year: "2016",
    text: "Better scales its online mortgage services across more U.S. states with a faster approval system.",
  },
  {
    year: "2017",
    text: "Better expands into the real estate market with Better Real Estate.",
  },
  {
    year: "2018",
    text: "Better Mortgage partners with Ally Bank to build Ally powered by Better.",
  },
  {
    year: "2019",
    text: "Better Mortgage launches its pilot partnership with American Express to deliver a seamless homebuying experience to AMEX customers.",
  },
  {
    year: "2021",
    text: "Better acquires Trussle — The UK’s most innovative online mortgage broker.",
  },
  {
    year: "2022",
    text: "Better Mortgage becomes the first fintech to fund $100B home loans entirely online.",
  },
  {
    year: "2023",
    text: `Better Mortgage launches One Day Mortgage¹: The first offering to customers to go from application to full mortgage Commitment Letter within 24 hours vs. typical industry process of 30+ days.

Better Mortgage launches the fully digital 3-day HELOC².

Better Mortgage launches One Day Verified Approval Letter.`,
  },
  {
    year: "Today",
    text: "You become part of the story by joining tens of thousands of happy Better Mortgage borrowers.",
  },
];

const TimelineSection = () => {
  return (
    <section className="bg-[#fefcf9] py-16 px-4">
      <h2 className="text-3xl md:text-4xl font-semibold text-center mb-16 text-gray-800">
        Company timeline
      </h2>

      <div className="relative max-w-5xl mx-auto">
        {/* Vertical center line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-300 z-0" />

        <div className="flex flex-col gap-20 relative z-10">
          {timelineEvents.map((event, index) => {
            const isLeft = index % 2 === 0;
            return (
              <div
                key={index}
                className={`flex flex-col md:flex-row items-center md:items-start justify-between w-full ${
                  isLeft ? "" : "md:flex-row-reverse"
                }`}
              >
                <div className="md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left px-4">
                  {/* Year above card */}
                  <div className="bg-[#007a4d] text-white font-semibold px-4 py-1 rounded-md mb-2">
                    {event.year}
                  </div>
                  {/* Card */}
                  <div className="bg-gray-100 text-gray-800 p-6 rounded shadow-md max-w-md w-full">
                    <p className="text-base leading-relaxed">{event.text}</p>
                  </div>
                </div>
                {/* Spacer for alignment */}
                <div className="hidden md:block md:w-1/2"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
