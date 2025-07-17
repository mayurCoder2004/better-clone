import React from "react";

const DebtToIncomeSection = () => {
  return (
    <section className="bg-white py-16 px-6 border-t border-b border-gray-300">
      <div className="max-w-5xl mx-auto space-y-10">
        {/* Title */}
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-4">
            How much monthly mortgage payment can I afford?
          </h2>
          <p className="text-gray-600 mb-4">
            Lenders determine how much you can afford on a monthly housing payment by calculating your{" "}
            <a href="#" className="text-green-700 underline">debt-to-income ratio (DTI)</a>. The maximum DTI you can have
            in order to qualify for most mortgage loans is often between 45–50%, with your anticipated housing costs included.
          </p>
          <p className="text-gray-600">
            Your DTI is the balance between your income and your debt. It helps lenders understand how safe or risky it is for them to approve
            your loan. A DTI ratio represents how much of your gross monthly income is spoken for by creditors, and how much of it is left
            over to you as disposable income.
          </p>
        </div>

        {/* Formula */}
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 text-center">
          <p className="text-gray-700 mb-4 font-medium">Formula for calculating your debt-to-income (DTI) ratio:</p>
          <div className="text-2xl md:text-3xl font-semibold text-gray-900">
            <span className="inline-block border-b border-gray-400 pb-1">Monthly Debt Payments</span><br />
            <span className="inline-block mt-1">Monthly Gross Income</span> &nbsp;&nbsp;× 100 = <span className="text-green-700">Debt-to-Income Ratio</span>
          </div>
        </div>

        {/* Example */}
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
          <p className="text-gray-700 font-medium mb-4">
            Here’s an example of what calculating your DTI might look like:
          </p>
          <div className="grid md:grid-cols-2 gap-8 text-gray-800 text-[15px]">
            {/* Debts */}
            <div>
              <h4 className="font-semibold mb-2 text-lg">Debts</h4>
              <ul className="space-y-1 text-gray-700">
                <li>Auto loan &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; $350/month</li>
                <li>Student loans &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; $220/month</li>
                <li>Credit cards &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; $130/month</li>
                <li>Expected housing costs &nbsp;&nbsp;&nbsp; $1,800/month</li>
              </ul>
              <div className="mt-4 font-semibold text-green-800 text-lg">
                $2,500 monthly debt obligation
              </div>
            </div>

            {/* Income */}
            <div>
              <h4 className="font-semibold mb-2 text-lg">Income</h4>
              <ul className="space-y-1 text-gray-700">
                <li>Monthly salary $60,000/12 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; $5,000/month</li>
                <li>Monthly side-gig income &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; $1,500/month</li>
              </ul>
              <div className="mt-4 font-semibold text-green-800 text-lg">
                $6,500 monthly income
              </div>
            </div>
          </div>

          {/* DTI Calculation */}
          <div className="mt-8 text-center text-xl md:text-2xl font-semibold text-gray-900">
            <div className="flex flex-col md:flex-row justify-center items-center gap-2">
              <span className="border-b border-gray-400 pb-1">$2,500</span>
              <span>/</span>
              <span>$6,500</span>
              <span>× 100 =</span>
              <span className="text-green-700 text-2xl md:text-3xl font-bold">38% DTI</span>
            </div>
          </div>
        </div>

        <p className="text-sm text-gray-500 text-center">
          The above scenario is for illustrative purposes only.
        </p>
      </div>
    </section>
  );
};

export default DebtToIncomeSection;
