import React from "react";

const MortgageHelpSection = () => {
  return (
    <section className="border-y border-gray-200 bg-white px-4 py-16">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
          How does a mortgage calculator help me?
        </h2>
        <p className="text-gray-600 text-base md:text-lg">
          When deciding how much house you can afford, one of the most important pieces to determine is
          whether a home will fit into your monthly budget. A mortgage calculator helps you understand
          the monthly cost of a home. And ours will allow you to enter different down payments and interest
          rates to help determine what is affordable for you.
        </p>
      </div>
    </section>
  );
};

export default MortgageHelpSection;
