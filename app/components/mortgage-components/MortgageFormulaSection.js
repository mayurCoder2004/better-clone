import React from "react";

const MortgageFormulaSection = () => {
  return (
    <section className="bg-white border-t border-gray-200 py-16 px-4">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Main Heading */}
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
            How to calculate monthly mortgage payments?
          </h2>
          <p className="text-gray-600 mt-4 text-base md:text-lg">
            Your monthly mortgage payment includes loan principal and interest, property taxes,
            homeowners insurance, and mortgage insurance (PMI), if applicable. While not typically
            included in your mortgage payment, homeowners also pay monthly utilities and sometimes
            pay homeowners association (HOA) fees, so it’s a good idea to factor these into your monthly
            budget. This mortgage calculator factors in all these typical monthly costs so you can
            really crunch the numbers.
          </p>
        </div>

        {/* Sub Heading */}
        <div>
          <h3 className="text-xl font-semibold text-gray-900">
            Formula for calculating monthly mortgage payments
          </h3>
          <p className="text-gray-600 mt-2 text-base">
            The easiest way to calculate your mortgage payment is to use a calculator, but for the
            curious or mathematically inclined, here’s the formula for calculating principal and
            interest yourself:
          </p>
        </div>

        {/* Formula Box */}
        <div className="bg-gray-100 border border-gray-300 rounded-md px-6 py-5">
          <p className="text-center font-medium text-gray-800 text-lg">
            <span className="font-semibold">Monthly mortgage payments (M)</span> = P × {" "}
            <span className="inline-block">
              <sup>r(1 + r)<sup>n</sup></sup> / <sub>(1 + r)<sup>n</sup> - 1</sub>
            </span>
          </p>
        </div>

        {/* Where Explanation */}
        <div className="text-gray-700 text-sm space-y-3 leading-relaxed">
          <p><strong>Where:</strong></p>
          <ul className="list-disc ml-5 space-y-2">
            <li><strong>M</strong> is monthly mortgage payments</li>
            <li><strong>P</strong> is the principal loan amount (the amount you borrow)</li>
            <li>
              <strong>r</strong> is the monthly interest rate<br />
              (annual interest rate divided by 12 and expressed as a decimal)<br />
              For example: if the annual interest rate is 5%, the monthly rate = 0.05/12 = 0.00417
            </li>
            <li>
              <strong>n</strong> is the total number of payments in months<br />
              For example: for a 30-year loan, n = 30 × 12 = 360 months
            </li>
          </ul>
        </div>

        {/* Example Box */}
        <div className="bg-gray-100 border border-gray-300 rounded-md px-6 py-5 space-y-3 text-sm text-gray-800">
          <p><strong>Example:</strong></p>
          <p><strong>P</strong> = $200,000<br />
            <strong>r</strong> = 0.05 / 12 = 0.00417<br />
            <strong>n</strong> = 30 × 12 = 360
          </p>
          <p><strong>M</strong> = 200,000 × {" "}
            <span className="inline-block align-middle">
              <sup>0.00417(1 + 0.00417)<sup>360</sup></sup> / <sub>(1 + 0.00417)<sup>360</sup> - 1</sub>
            </span>
          </p>
          <p><strong>M</strong> = <span className="text-green-600 font-semibold">$1,074 per month</span></p>
          <p className="text-xs text-gray-500">The above scenario is for illustrative purposes only. Your actual monthly payment will differ.</p>
        </div>

        {/* Bottom Note */}
        <p className="text-sm text-gray-600">
          This formula assumes a fixed-rate mortgage, where the interest rate remains constant throughout
          the loan term. And remember, you'll still need to add on taxes, insurance, utilities, and HOA fees if applicable.
        </p>
      </div>
    </section>
  );
};

export default MortgageFormulaSection;
