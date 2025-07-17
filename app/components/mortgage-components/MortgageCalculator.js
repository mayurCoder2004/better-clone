import React, { useState, useEffect } from "react";

const MortgageCalculator = () => {
  const [homePrice, setHomePrice] = useState(300000);
  const [downPaymentPercent, setDownPaymentPercent] = useState(20);
  const [interestRate, setInterestRate] = useState(6.5);
  const [loanLength, setLoanLength] = useState(30);
  const [zipCode, setZipCode] = useState("400019");
  const [monthlyPayment, setMonthlyPayment] = useState(0);

  const downPayment = (homePrice * downPaymentPercent) / 100;
  const loanAmount = homePrice - downPayment;

  useEffect(() => {
    const calculateMortgage = () => {
      const principal = loanAmount;
      const monthlyRate = interestRate / 100 / 12;
      const numberOfPayments = loanLength * 12;

      const monthly =
        (principal * monthlyRate) /
        (1 - Math.pow(1 + monthlyRate, -numberOfPayments));

      setMonthlyPayment(monthly.toFixed(0));
    };

    calculateMortgage();
  }, [homePrice, downPaymentPercent, interestRate, loanLength]);

  return (
    <div className="bg-[#f4faf5] min-h-screen px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-[#1e1e1e] mb-4">
          Mortgage Calculator
        </h1>
        <p className="text-gray-700 mb-8 max-w-xl">
          Free mortgage calculator to estimate your monthly mortgage payments
          with annual amortization. Discover how all factors can affect your
          payment.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start mb-8">
          {/* Home Price */}
          <div className="bg-white p-6 rounded-md border">
            <label className="block text-gray-700 text-sm font-semibold mb-2">
              Home price
            </label>
            <input
              type="number"
              value={homePrice}
              onChange={(e) => setHomePrice(Number(e.target.value))}
              className="text-3xl font-bold w-full border-none focus:ring-0"
            />
          </div>

          {/* Monthly Payment */}
          <div className="text-center">
            <p className="text-gray-600 text-sm mb-2">Monthly payment</p>
            <p className="text-4xl font-bold text-[#1e1e1e]">
              ${monthlyPayment}/mo
            </p>
          </div>

          {/* Get Approved */}
          <div className="flex justify-center md:justify-end">
            <button className="bg-[#007a4d] text-white px-6 py-3 rounded-md font-semibold">
              Get pre-approved
            </button>
          </div>
        </div>

        {/* Slider */}
        <input
          type="range"
          min="50000"
          max="1000000"
          step="1000"
          value={homePrice}
          onChange={(e) => setHomePrice(Number(e.target.value))}
          className="w-full mb-8"
        />

        {/* Bottom Form */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {/* ZIP */}
          <div>
            <label className="text-gray-600 text-sm mb-1 block">ZIP code</label>
            <input
              type="text"
              value={zipCode}
              onChange={(e) => setZipCode(e.target.value)}
              className="w-full border rounded-md px-4 py-2"
            />
          </div>

          {/* Down Payment */}
          <div className="col-span-2 flex">
            <div className="w-2/3 mr-2">
              <label className="text-gray-600 text-sm mb-1 block">
                Down payment
              </label>
              <input
                type="text"
                value={`$ ${downPayment.toLocaleString()}`}
                readOnly
                className="w-full border rounded-md px-4 py-2 bg-gray-100"
              />
            </div>
            <div className="w-1/3">
              <label className="text-gray-600 text-sm mb-1 block invisible">
                %
              </label>
              <input
                type="number"
                value={downPaymentPercent}
                onChange={(e) => setDownPaymentPercent(Number(e.target.value))}
                className="w-full border rounded-md px-4 py-2"
              />
            </div>
          </div>

          {/* Interest Rate */}
          <div>
            <label className="text-gray-600 text-sm mb-1 block">
              Interest rate
            </label>
            <div className="flex items-center">
              <input
                type="number"
                value={interestRate}
                onChange={(e) => setInterestRate(Number(e.target.value))}
                className="w-full border rounded-md px-4 py-2"
              />
              <span className="ml-1">%</span>
            </div>
          </div>

          {/* Loan Length */}
          <div>
            <label className="text-gray-600 text-sm mb-1 block">
              Length of loan
            </label>
            <select
              value={loanLength}
              onChange={(e) => setLoanLength(Number(e.target.value))}
              className="w-full border rounded-md px-4 py-2"
            >
              <option value={15}>15 years</option>
              <option value={20}>20 years</option>
              <option value={30}>30 years</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MortgageCalculator;
