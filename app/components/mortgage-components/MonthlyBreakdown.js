import React from "react";

const MonthlyBreakdown = ({ breakdown }) => {
  const {
    total,
    principalInterest,
    propertyTax,
    insurance,
    hoaFees,
    utilities,
  } = breakdown;

  return (
    <section className="py-16 px-6 bg-[#fdfbf9]">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left side */}
        <div>
          <h3 className="text-lg mb-2 text-gray-700">Monthly payment breakdown</h3>
          <h2 className="text-4xl font-bold text-[#1e1e1e] mb-6">${total}/mo</h2>

          {/* Bar visualization */}
          <div className="flex h-16 rounded-full overflow-hidden w-full mb-6">
            <div className="bg-green-700" style={{ width: `${(principalInterest / total) * 100}%` }} />
            <div className="bg-purple-600" style={{ width: `${(propertyTax / total) * 100}%` }} />
            <div className="bg-indigo-400" style={{ width: `${(insurance / total) * 100}%` }} />
            <div className="bg-yellow-400" style={{ width: `${(hoaFees / total) * 100}%` }} />
            <div className="bg-red-400" style={{ width: `${(utilities / total) * 100}%` }} />
          </div>
        </div>

        {/* Right side */}
        <div className="space-y-4">
          <BreakdownItem label="Principal & interest" color="bg-green-700" value={principalInterest} />
          <BreakdownItem label="Property taxes" color="bg-purple-600" value={propertyTax} />
          <BreakdownItem label="Homeowners insurance" color="bg-indigo-400" value={insurance} />
          <BreakdownItem label="HOA fees" color="bg-yellow-400" value={hoaFees} />
          <BreakdownItem label="Utilities" color="bg-red-400" value={utilities} />

          <button className="mt-6 px-6 py-3 rounded-md bg-gray-100 hover:bg-gray-200 font-medium text-gray-800">
            Copy estimate link
          </button>
        </div>
      </div>
    </section>
  );
};

const BreakdownItem = ({ label, color, value }) => (
  <div className="flex items-center justify-between">
    <div className="flex items-center gap-2">
      <div className={`w-2 h-2 rounded-sm ${color}`} />
      <span className="text-gray-700">{label}</span>
    </div>
    <span className="text-gray-900 font-medium">${value}</span>
  </div>
);

export default MonthlyBreakdown;
