import React from "react";
import { FaHome, FaRedoAlt, FaMoneyBillWave, FaCheckCircle, FaTags, FaUserCircle } from "react-icons/fa";
import { BsTelephone } from "react-icons/bs";

export default function BetterHomePage() {
  return (
    <div className="bg-[#fefcf9] min-h-screen text-slate-700 font-sans flex flex-col items-center">
      {/* Header */}
      <header className="w-full flex justify-between px-6 py-4 border-b border-gray-200">
        <div className="font-bold text-sm text-slate-900">Better<br />Mortgage</div>
        <div className="text-sm flex items-center space-x-2">
          <BsTelephone className="text-green-600" />
          <span>Need help? Call 415-523-8837</span>
        </div>
      </header>

      {/* Welcome Section */}
      <section className="text-center mt-12">
        <div className="w-12 h-12 rounded-full bg-green-500 mx-auto mb-4 animate-ping" />
        <h1 className="text-3xl font-bold">Hi, I'm Betsy!</h1>
        <h2 className="text-xl mt-2 font-medium">What can I help you with?</h2>

        <div className="mt-6 space-y-4">
          <button className="w-[300px] flex items-center justify-start px-4 py-2 border rounded text-left hover:bg-gray-100">
            <FaHome className="mr-3 text-green-600" /> Buying a home
          </button>
          <button className="w-[300px] flex items-center justify-start px-4 py-2 border rounded text-left hover:bg-gray-100">
            <FaRedoAlt className="mr-3 text-green-600" /> Refinancing my mortgage
          </button>
          <button className="w-[300px] flex items-center justify-start px-4 py-2 border rounded text-left hover:bg-gray-100">
            <FaMoneyBillWave className="mr-3 text-green-600" /> Get cash from my home
          </button>
        </div>

        <div className="flex justify-center space-x-16 mt-8">
          <div>
            <p className="text-2xl font-bold">$100B</p>
            <p className="text-sm">home loans funded entirely online</p>
          </div>
          <div>
            <p className="text-2xl font-bold">400K</p>
            <p className="text-sm">Customers who chose a Better Mortgage</p>
          </div>
        </div>

        <div className="mt-6 w-[300px] bg-green-50 text-left text-sm p-4 rounded-md mx-auto">
          <p className="font-medium mb-2">After a few questions, you’ll unlock:</p>
          <ul className="space-y-1">
            <li className="flex items-center"><FaCheckCircle className="text-green-600 mr-2" /> Custom mortgage rates</li>
            <li className="flex items-center"><FaTags className="text-green-600 mr-2" /> Exclusive offers</li>
            <li className="flex items-center"><FaUserCircle className="text-green-600 mr-2" /> A personalized dashboard</li>
          </ul>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full mt-20 text-sm text-slate-600 border-t border-gray-300 px-10 py-6">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <strong>Better</strong>
            <p className="mt-2">Better Mortgage Corporation is a direct lender dedicated to providing a fast, transparent digital mortgage experience backed by superior customer support.</p>
          </div>

          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <strong>Contact Us</strong>
            <ul className="mt-2 space-y-1">
              <li>Schedule a conversation</li>
              <li>hello@better.com</li>
              <li>415-523-8837</li>
              <li>FAQ</li>
              <li>Resources</li>
            </ul>
          </div>

          <div className="w-full md:w-1/3">
            <strong>Legal</strong>
            <ul className="mt-2 space-y-1">
              <li>NMLS Consumer Access</li>
              <li>Privacy Policy</li>
              <li>Terms of Use</li>
              <li>Disclosures & Licensing</li>
              <li>Affiliated Business</li>
            </ul>
          </div>
        </div>

        <div className="text-xs mt-8">
          © 2025 Better Mortgage Corporation and/or its affiliates. Better is a family of companies. Mortgage loans offered by Better Mortgage Corporation. Loans made or arranged pursuant to California Finance Lenders Law License. Equal Housing Lender. NMLS Consumer Access.
        </div>
      </footer>
    </div>
  );
}
