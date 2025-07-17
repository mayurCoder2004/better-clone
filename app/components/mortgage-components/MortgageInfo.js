import React from 'react';

const MortgageInfo = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10 text-slate-800 space-y-12">
      
      {/* Section 1: How is Better’s mortgage calculator different? */}
      <section>
        <h2 className="text-3xl font-semibold text-slate-900 mb-6">
          How is Better’s mortgage calculator different?
        </h2>

        <div className="space-y-6">
          {/* Taxes and Insurance */}
          <div>
            <h3 className="text-xl font-semibold text-slate-900">
              This mortgage calculator shows your payments with taxes and insurance
            </h3>
            <p className="mt-2 text-slate-700">
              The property taxes you contribute are used to finance the services provided by your local government to the community. These services encompass schools, libraries, roads, parks, water treatment, police, and fire departments. Even after your mortgage has been fully paid, you will still need to pay property taxes. If you neglect your property taxes, you run the risk of losing your home to your local tax authority.
            </p>
            <p className="mt-2 text-slate-700">
              Your lender will usually require you to have the homeowners insurance while you're settling your mortgage. This is a common practice among lenders because they understand that nobody wants to continue paying a mortgage on a home that's been damaged or destroyed.
            </p>
            <p className="mt-2 text-slate-700">
              Here's an interesting fact: Once you fully own your home, the choice to maintain homeowners insurance is entirely up to you. However, to ensure your home is protected against unexpected events like fires, lightning strikes, and natural disasters that are common in your area, it’s highly recommended to keep it. Therefore, always factor in these costs when using a Mortgage Calculator.
            </p>
          </div>

          {/* PMI */}
          <div>
            <h3 className="text-xl font-semibold text-slate-900">
              This mortgage calculator shows your mortgage costs with PMI
            </h3>
            <p className="mt-2 text-slate-700">
              PMI, an abbreviation for private mortgage insurance, aids potential homeowners in qualifying for a mortgage without the necessity of a 20% down payment. By opting for a lower down payment and choosing a mortgage with PMI, you can purchase a home sooner, begin accruing equity, and keep cash available for future needs. This can be calculated using this Mortgage Calculator.
            </p>
            <p className="mt-2 text-slate-700">
              Choosing a mortgage with PMI is a popular option: <a href="#" className="text-slate-700 underline">70% of first-time homebuyers</a> had a down payment of less than 20% in July 2021. In <a href="#" className="text-slate-700 underline">2020, the median down payment for first-time homebuyers was just 7.5%</a>, and <a href="#" className="text-slate-700 underline">that hasn't risen above 10% since 1997</a>.
            </p>
            <p className="mt-2 text-slate-700">
              PMI is automatically removed from conventional mortgages once your home equity reaches 22%. Alternatively, you can request the removal of PMI once you've accumulated at least 20% home equity.
            </p>
          </div>

          {/* HOA Fees */}
          <div>
            <h3 className="text-xl font-semibold text-slate-900">
              This mortgage calculator includes HOA fees
            </h3>
            <p className="mt-2 text-slate-700">
              Homeowners association (HOA) fees are typically charged directly by a homeowners association. But as HOA fees come part and parcel with condos, townhomes, and planned housing developments, they’re an essential factor to consider when calculating your mortgage cost.
            </p>
            <p className="mt-2 text-slate-700">
              Homes that share structural elements, such as roofs and walls, or community amenities like landscaping, pools or BBQ areas, often require homeowners to pay HOA fees for the maintenance of those shared features. It’s important to factor in these costs during your budget planning stage, especially considering that HOA fees typically increase annually. HOA fees may also charge additional fees known as “special assessments” to cover unexpected expenses from time to time.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: How to reduce your monthly mortgage payments? */}
      <section>
        <h2 className="text-3xl font-semibold text-slate-900 mb-6">
          How to reduce your monthly mortgage payments?
        </h2>

        <p className="text-slate-700 mb-6">
          The lower the purchase price of the home, the lower your loan amount will be. But if the seller is less than willing to cut you a deal, you have other options.
        </p>

        <div className="space-y-6">
          {/* Extend term */}
          <div>
            <h3 className="text-xl font-semibold text-slate-900">
              Extend the length of your mortgage
            </h3>
            <p className="mt-2 text-slate-700">
              The more time you have to pay off the mortgage, the less each monthly mortgage payment will be. (In lender-speak, “extending the length of your mortgage” is known as “increasing your loan term.”) This is why people often choose a 30-year fixed rate mortgage over one with a 15- or 20-year term.
            </p>
          </div>

          {/* Increase down payment */}
          <div>
            <h3 className="text-xl font-semibold text-slate-900">
              Increase your down payment
            </h3>
            <p className="mt-2 text-slate-700">
              The smaller the amount of your mortgage, the smaller your monthly mortgage payments will be. Ideally, you’d be able to put at least 20% of the home price toward your <a href="#" className="text-slate-700 underline">down payment</a> just to be able to avoid PMI (private mortgage insurance). Even if you can’t afford a complete 20% down payment, boosting your down payment will help you get PMI removed sooner. In fact, boosting your down payment by 5% can lower your monthly PMI fees.
            </p>
          </div>

          {/* Lower interest rate */}
          <div>
            <h3 className="text-xl font-semibold text-slate-900">
              Get a lower interest rate
            </h3>
            <p className="mt-2 text-slate-700">
              Increasing your down payment can be one way to help you qualify for a lower interest rate. The amount of your down payment compared to the total amount of the loan is called your <a href="#" className="text-slate-700 underline">loan-to-value (LTV)</a>.
            </p>
            <p className="mt-2 text-slate-700">
              Depending on your loan amount, a lower LTV may increase the likelihood of you being offered a low interest rate. If you intend on keeping your home for a while, you could consider buying points to reduce your interest rate. Buying points essentially means you get to pay more upfront costs in exchange for a lower monthly payment.
            </p>
            <p className="mt-2 text-slate-700">
              If buying points isn’t ideal or refinance the home in the first 5–10 years of the mortgage period could decrease interest costs in the long run. A <a href="#" className="text-slate-700 underline">ARM</a> offers a lower fixed interest rate for a set introductory period—typically 3, 5, or 7 years. Once the set introductory period ends, the interest rate adjusts (interest rate may increase after consummation). The introductory interest rate for ARMs is typically lower than the interest rate on a fixed-rate mortgage which you intend to keep for a while. That’s one way to save on interest if you won’t keep the mortgage for long.
            </p>
            <p className="mt-2 text-slate-700">
              If you’re not planning on buying a home for a while, improving your credit score is a tried and true way of increasing your chances of qualifying for a lower interest rate. By reducing your <a href="#" className="text-slate-700 underline">debt-to-income ratio (DTI)</a>, lenders will see that you comfortably afford your mortgage and may be more willing to offer a lower interest rate.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MortgageInfo;
