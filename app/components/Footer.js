export default function Footer() {
  return (
    <footer className="bg-[#f9f8f4] text-[#222] text-sm">
      {/* TOP GRID FOOTER */}
      <div className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Left Column */}
        <div>
          <h2 className="text-2xl font-bold text-green-900 mb-4">Better</h2>
          <p className="mb-4">
            Better is a family of companies serving all your homeownership
            needs.
          </p>

          {[
            {
              title: "Better",
              subtitle: "Mortgage",
              description:
                "We can’t wait to say “Welcome home.” Apply 100% online, with expert customer support.",
            },
            {
              title: "Better",
              subtitle: "Real Estate",
              description:
                "Connect with a local Better Real Estate Partner Agent to find out all the ways you can save.",
            },
            {
              title: "Better",
              subtitle: "Cover",
              description:
                "Shop, bundle, and save on insurance coverage for home, auto, life, and more.",
            },
            {
              title: "Better",
              subtitle: "Inspect",
              description:
                "Get free repair estimates, 24-hour turnarounds on reports, and rest easy with our 100-day inspection guarantee.",
            },
            {
              title: "Better",
              subtitle: "Settlement Services",
              description:
                "Get transparent rates when you shop for title insurance all in one convenient place.",
            },
          ].map((item, idx) => (
            <div key={idx} className="mb-4">
              <p className="font-bold text-green-900 inline">{item.title} </p>
              <span className="font-light text-gray-500">{item.subtitle}</span>
              <p className="mt-1 text-gray-700">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Resources */}
        <div>
          <h3 className="font-bold text-base mb-4">Resources</h3>
          <ul className="space-y-2 text-gray-800">
            {[
              "Home affordability calculator",
              "Mortgage calculator",
              "Free mortgage calculator",
              "Mortgage calculator with taxes",
              "Mortgage calculator with PMI",
              "Rent vs buy calculator",
              "HELOC payment calculator",
              "HELOC vs cash-out refinance calculator",
              "Buy a home",
              "Sell a home",
              "Get home inspection",
            ].map((item, idx) => (
              <li key={idx}>
                <a href="#" className="hover:underline">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="font-bold text-base mb-4">Company</h3>
          <ul className="space-y-2 text-gray-800">
            {[
              "About Us",
              "Careers",
              "Media",
              "Partner With Us",
              "Learning center",
              "FAQs",
              "Investor Relations",
            ].map((item, idx) => (
              <li key={idx}>
                <a href="#" className="hover:underline">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact & Legal */}
        <div>
          <h3 className="font-bold text-base mb-4">Contact Us</h3>
          <ul className="space-y-2 mb-6 text-gray-800">
            <li>
              <a href="mailto:hello@better.com" className="hover:underline">
                hello@better.com
              </a>
            </li>
            <li>
              <a href="tel:4155238837" className="hover:underline">
                415-523-8837
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                FAQ
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Glossary
              </a>
            </li>
          </ul>

          <h3 className="font-bold text-base mb-4">Legal</h3>
          <ul className="space-y-2 text-gray-800">
            {[
              "NMLS Consumer Access",
              "Privacy Policy",
              "Terms of Use",
              "Disclosures & Licensing",
              "Affiliated Business",
              "Browser Disclaimer",
            ].map((item, idx) => (
              <li key={idx}>
                <a href="#" className="hover:underline">
                  {item}
                </a>
              </li>
            ))}
          </ul>

          {/* Icons */}
          <div className="flex space-x-4 mt-6">
            {/* Facebook */}
            <a href="#" aria-label="Facebook">
              <svg
                className="w-5 h-5 text-gray-700 hover:text-black"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M22 12c0-5.5228-4.4772-10-10-10S2 6.4772 2 12c0 4.9919 3.657 9.1282 8.438 9.876v-6.987h-2.54V12h2.54v-1.815c0-2.507 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.242 0-1.63.771-1.63 1.562V12h2.773l-.443 2.889h-2.33v6.987C18.343 21.1282 22 16.9919 22 12z" />
              </svg>
            </a>

            {/* Instagram */}
            <a href="#" aria-label="Instagram">
              <svg
                className="w-5 h-5 text-gray-700 hover:text-black"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm10 2c1.654 0 3 1.346 3 3v10c0 1.654-1.346 3-3 3H7c-1.654 0-3-1.346-3-3V7c0-1.654 1.346-3 3-3h10zM12 7c-2.757 0-5 2.243-5 5s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5zm0 2c1.654 0 3 1.346 3 3s-1.346 3-3 3-3-1.346-3-3 1.346-3 3-3zm4.5-3a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a href="#" aria-label="LinkedIn">
              <svg
                className="w-5 h-5 text-gray-700 hover:text-black"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-3.368-4-3.112-4 0v5.604h-3v-10h3v1.545c1.396-2.586 7-2.777 7 2.476v5.979z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* DISCLAIMER SECTION */}
      <div className="max-w-7xl mx-auto px-4 pb-20 text-xs text-gray-700 space-y-4 leading-relaxed">
        <p>
          © 2025 Better Home & Finance Holding Company and/or its affiliates.
          Better is a family of companies. Better Mortgage Corporation provides
          home loans; Better Real Estate, LLC and Better Real Estate California
          Inc License # 02164055 provides real estate services; Better Cover,
          LLC sells insurance products; and Better Settlement Services provides
          title insurance services; and Better Inspect, LLC provides home
          inspection services. All rights reserved.
        </p>

        <p>
          Better BMC operates under the name Better Mortgage Corporation in New
          York.
        </p>

        <p>
          Home lending products offered by Better Mortgage Corporation. Better
          Mortgage Corporation is a direct lender. NMLS #330511. 1 World Trade
          Center, 80th Floor, New York, NY 10007. Loans made or arranged
          pursuant to a California Finance Lenders Law License. Not available in
          all states. Equal Housing Lender.{" "}
          <a href="#" className="underline hover:text-black">
            NMLS Consumer Access
          </a>
        </p>

        <p>
          Better Real Estate, LLC dba BRE, Better Home Services, BRE Services,
          LLC and Better Real Estate, and operating in the State of California
          through its wholly owned subsidiary Better Real Estate California
          Inc., is a licensed real estate brokerage and maintains its corporate
          headquarters at 325–41 Chestnut Street, Suite 826, Philadelphia, PA
          19106. Here is a full listing of Better Real Estate, LLC’s{" "}
          <a href="#" className="underline hover:text-black">
            license numbers
          </a>
          . Better Real Estate, LLC provides access to real estate brokerage
          services via its nationwide network of partner brokerages and real
          estate agents (“Better Real Estate Partner Agents”). Equal Housing
          Opportunity. All rights reserved.
        </p>

        <p>
          <a href="#" className="underline hover:text-black">
            New York State Housing and Anti-Discrimination Notice
          </a>
        </p>

        <p>
          <a href="#" className="underline hover:text-black">
            New York Standard Operating Procedures
          </a>
        </p>

        <p>
          Texas Real Estate Commission:{" "}
          <a href="#" className="underline hover:text-black">
            Information About Brokerage Services
          </a>{" "}
          |{" "}
          <a href="#" className="underline hover:text-black">
            Consumer Protection Notice
          </a>
        </p>

        <p>
          Better Settlement Services, LLC. 325–41 Chestnut Street, Suite 803,
          Philadelphia, PA 19106.
        </p>

        <p>
          Homeowners insurance policies are offered through Better Cover, LLC, a
          Pennsylvania Resident Producer Agency. License #881593. 325–41
          Chestnut Street, Suite 807, Philadelphia, PA 19106.
        </p>

        <p>
          Insurance quotes and policies are offered through Better Cover, LLC. A
          Pennsylvania Resident Producer Agency. License #881593. Here is a full
          listing of Better Cover, LLC’s{" "}
          <a href="#" className="underline hover:text-black">
            license numbers
          </a>
          .
        </p>

        <p>
          Better Inspect, LLC maintains its corporate headquarters at 325–41
          Chestnut Street, Suite 846, Philadelphia, PA 19106.
        </p>

        <p>
          Better Mortgage Corporation, Better Real Estate, LLC, Better
          Settlement Services, LLC, Better Cover, LLC, Better Connect, and
          Better Inspect, LLC are separate operating subsidiaries of Better Home
          & Finance Holding Company. Each company is a separate legal entity
          operated and managed through its own management and governance
          structure as required by its state of incorporation, and applicable
          and legal and regulatory requirements. Products not available in all
          states.
        </p>

        <p>
          Any unauthorized use of any proprietary or intellectual property is
          strictly prohibited. All trademarks, service marks, trade names,
          logos, icons, and domain names are proprietary to Better Home &
          Finance Holding Company trademarks are federally registered with the
          U.S. Patent and Trademark Office. Better Cover is a registered
          trademark with the U.S. Patent and Trademark Office and is owned by
          Better Cover, LLC.
        </p>

        <p>
          Licensed by the Department of Financial Protection and Innovation
          under the California Residential Mortgage Lending Act.
        </p>
      </div>
    </footer>
  );
}
