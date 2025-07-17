import React from "react";

const taxData = [
  { state: "AL", medianRate: "0.41%", meanRate: "0.40%", homeValue: "$157,100", taxesPaid: "$646" },
  { state: "AK", medianRate: "1.23%", meanRate: "1.04%", homeValue: "$282,800", taxesPaid: "$3,464" },
  { state: "AZ", medianRate: "0.62%", meanRate: "0.63%", homeValue: "$265,600", taxesPaid: "$1,648" },
  { state: "AR", medianRate: "0.62%", meanRate: "0.64%", homeValue: "$142,100", taxesPaid: "$878" },
  // Add more rows as needed
];

const PropertyTaxInfo = () => {
  return (
    <section className="bg-white border-t border-gray-200 px-4 py-16">
      <div className="max-w-5xl mx-auto space-y-10">
        {/* Section Title */}
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
            How to use this mortgage calculator?
          </h2>
          <p className="text-gray-700 text-base leading-relaxed">
            Play around with different home prices, locations,{" "}
            <a href="#" className="text-green-700 underline">down payments</a>, interest rates, and mortgage lengths to see how they impact your monthly mortgage payments.
          </p>
          <p className="text-gray-700 mt-3 text-base leading-relaxed">
            Increasing your down payment and decreasing your interest rate and mortgage term length will make your monthly payment go down. Taxes, insurance, and HOA fees will vary by location. If you enter a down payment amount that’s less than 20% of the home price,{" "}
            <a href="#" className="text-green-700 underline">private mortgage insurance (PMI)</a> costs will be added to your monthly mortgage payment. As the costs of utilities can vary from county to county, we’ve included a utilities estimate that you can break down by service. If you’re thinking about buying a condo or into a community with a Homeowners Association (HOA), you can add HOA fees.
          </p>
          <p className="text-gray-700 mt-3 text-base leading-relaxed">
            The only amounts we haven’t included are the money you’ll need to save for annual home maintenance/repairs or the costs of home improvements. To see how much home you can afford including these costs, take a look at the{" "}
            <a href="#" className="text-green-700 underline">Better home affordability calculator</a>.
          </p>
          <p className="text-gray-700 mt-3 text-base leading-relaxed">
            Fun fact:{" "}
            <a href="#" className="text-green-700 underline">Property tax rates</a> are extremely localized, so two homes of roughly the same size and quality on either side of a municipal border could have very different tax rates. Buying in an area with a lower property tax rate may make it easier for you to afford a higher-priced home.
          </p>
        </div>

        {/* Tax Rate Heading */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-900 mb-2">
            Do you know your property tax rate?
          </h3>
          <p className="text-gray-700 text-base">
            While exact property tax rates vary by county, it can be helpful to look at taxes on the state level to get an idea for taxes in your state. Here’s a helpful chart from{" "}
            <a href="#" className="text-green-700 underline">Forbes</a> breaking down the Census Bureau’s 2021 American Community Survey 5-year estimate:
          </p>
        </div>

        {/* Tax Table */}
        <div className="overflow-x-auto border border-gray-300 rounded-md">
          <table className="min-w-full text-sm text-left text-gray-700">
            <thead className="bg-green-900 text-white text-sm">
              <tr>
                <th className="px-4 py-3">State</th>
                <th className="px-4 py-3">Median Effective Property Tax Rate</th>
                <th className="px-4 py-3">Mean Effective Property Tax Rate</th>
                <th className="px-4 py-3">Median Home Value</th>
                <th className="px-4 py-3">Median Property Taxes Paid</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {taxData.map((row, index) => (
                <tr key={index} className={index % 2 === 0 ? "bg-green-50" : "bg-white"}>
                  <td className="px-4 py-3 font-medium">{row.state}</td>
                  <td className="px-4 py-3">{row.medianRate}</td>
                  <td className="px-4 py-3">{row.meanRate}</td>
                  <td className="px-4 py-3">{row.homeValue}</td>
                  <td className="px-4 py-3">{row.taxesPaid}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default PropertyTaxInfo;
