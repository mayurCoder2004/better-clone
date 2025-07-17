import React from "react";
import { FaClipboardList, FaChartLine, FaCalculator } from "react-icons/fa";

const HomeAffordability = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10 text-black space-y-12">
      <hr className="border-gray-300" />

      {/* How much home can I afford? */}
      <section className="space-y-6">
        <h2 className="text-3xl font-semibold text-slate-900">
          How much home can I afford?
        </h2>
        <p>
          Once again, the easiest way to do this is with a calculator! To know if
          a home is in your budget, try out our{" "}
          <a href="#" className="text-slate-700 underline">
            home affordability calculator
          </a>
          . This calculator will take a few inputs from you, like income and
          savings, and let you know the maximum amount of home you can afford.
        </p>
      </section>

      <hr className="border-gray-300" />

      {/* Next steps */}
      <section className="space-y-6">
        <h2 className="text-3xl font-semibold text-slate-900">
          Next steps to buying a house
        </h2>

        <p>
          There are{" "}
          <a href="#" className="text-slate-700 underline">
            8 steps to buying a house
          </a>{" "}
          and by using this calculator you’ve completed step 2 (calculating your
          home affordability) and maybe even step 1 (getting your finances in
          order).
        </p>

        <p>
          The next step is getting <strong>pre‑approved</strong>. A mortgage
          pre‑approval with Better Mortgage takes as little as 3 minutes and
          doesn’t impact your credit score. It’s a free, no‑commitment way to
          see how much home you can buy, the mortgages you qualify for, and the
          range of interest rates you’ll be offered.
        </p>

        <p>
          If you’re ready to buy a home now, our{" "}
          <a href="#" className="text-slate-700 underline">
            definitive home‑buying checklist
          </a>{" "}
          can walk you through everything you need to know to get the home you
          want. With your Better Mortgage pre‑approval letter in hand, you’ll be
          able to show sellers and real‑estate agents that you mean
          business—giving you an edge over homebuyers that don’t have this kind
          of proof that they’re financially ready to purchase. And by working
          with an agent from Better Real Estate and funding with Better
          Mortgage, you’ll save $2,000 on closing costs, and save up to $8,200
          on average over the life of your loan.<sup>* *</sup>
        </p>
      </section>

      <hr className="border-gray-300" />

      {/* More resources */}
      <section className="space-y-8">
        <h2 className="text-3xl font-semibold text-slate-900">
          More resources
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          {/* Card 1 */}
          <div className="border border-gray-200 rounded-lg p-6 space-y-4 hover:shadow-md transition">
            <FaClipboardList className="text-3xl" />
            <h3 className="text-lg font-semibold">
              Get pre‑approved to see how much you can borrow
            </h3>
            <a href="#" className="text-slate-700 underline inline-flex items-center">
              Get started <span className="ml-1">→</span>
            </a>
            <p className="text-sm">Won’t impact your credit</p>
          </div>

          {/* Card 2 */}
          <div className="border border-gray-200 rounded-lg p-6 space-y-4 hover:shadow-md transition">
            <FaChartLine className="text-3xl" />
            <h3 className="text-lg font-semibold">
              See today’s rates in your area
            </h3>
            <a href="#" className="text-slate-700 underline inline-flex items-center">
              See rates <span className="ml-1">→</span>
            </a>
          </div>

          {/* Card 3 */}
          <div className="border border-gray-200 rounded-lg p-6 space-y-4 hover:shadow-md transition">
            <FaCalculator className="text-3xl" />
            <h3 className="text-lg font-semibold">
              Find out your max home‑buying budget
            </h3>
            <a href="#" className="text-slate-700 underline inline-flex items-center">
              Try our mortgage calculator <span className="ml-1">→</span>
            </a>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="space-y-1 text-xs">
          <p>
            *See{" "}
            <a href="#" className="text-slate-700 underline">
              Better Real Estate discount terms and conditions
            </a>
            .
          </p>
          <p>
            **The average lifetime savings estimate is based on a comparison of
            the Freddie Mac Primary Mortgage Market Survey’s (PMMS) 30‑year
            fixed‑rate mortgage product with Better Mortgage’s own offered rate
            for a comparable mortgage product between Jan 20 – Dec 20…
          </p>
        </div>
      </section>
    </div>
  );
};

export default HomeAffordability;
