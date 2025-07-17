"use client";

import React, { useEffect } from "react";

import MortgageCalculator from "../components/mortgage-components/MortgageCalculator";
import Navbar from "../components/Navbar";
import MonthlyBreakdown from "../components/mortgage-components/MonthlyBreakdown";
import DebtToIncomeSection from "../components/mortgage-components/DebtToIncomeSection";
import MortgageHelpSection from "../components/mortgage-components/MortgageHelpSection";
import MortgageFormulaSection from "../components/mortgage-components/MortgageFormulaSection";
import PropertyTaxInfo from "../components/mortgage-components/PropertyTaxInfo";
import MortgageInfo from "../components/mortgage-components/MortgageInfo";
import HomeAffordability from "../components/mortgage-components/HomeAffordability";
import Footer from "../components/Footer";

const Page = () => {
  const breakdown = {
    total: 2146,
    principalInterest: 1517,
    propertyTax: 265,
    insurance: 132,
    hoaFees: 132,
    utilities: 100,
  };

  // ✅ Change tab title and favicon using useEffect
  useEffect(() => {
    document.title = "Mortgage Calculator | Better Mortgage";

    const favicon = document.querySelector("link[rel='icon']");
    if (favicon) {
      favicon.href = "/betterdotcom_logo.jpeg";  // Replace with your favicon path
    }
  }, []);

  return (
    <div>
      <Navbar theme="light" />
      <MortgageCalculator />
      <MonthlyBreakdown breakdown={breakdown} />
      <MortgageHelpSection />
      <DebtToIncomeSection />
      <MortgageFormulaSection />
      <PropertyTaxInfo />
      <MortgageInfo />
      <HomeAffordability />
      <Footer />
    </div>
  );
};

export default Page;
