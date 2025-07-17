import Link from "next/link";
import { Phone } from "lucide-react";

export default function Navbar({ theme = "dark" }) {
  const isDark = theme === "dark";

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 px-8 py-4 flex items-center justify-between shadow-md ${
        isDark ? "bg-[#00463f] text-white" : "bg-white text-[#212121] shadow-sm"
      }`}
    >
      {/* Left Section: Logo and Menu */}
      <div className="flex items-center space-x-6">
        <Link href="/">
          <span className="text-2xl font-bold tracking-tight">Better</span>
        </Link>
        <Link href="/about-us" className="hover:underline">About Us</Link>
        <Link href="/mortgage-calculator" className="hover:underline">Mortgage Calculator</Link>
        <Link href="/start" className="hover:underline">Start</Link>
      </div>

      {/* Right Section: Phone Icon + Sign In */}
      <div className="flex items-center space-x-4">
        <button
          className={`p-2 rounded-full border transition ${
            isDark
              ? "border-white hover:bg-white hover:text-[#00463f]"
              : "border-[#212121] hover:bg-[#212121] hover:text-white"
          }`}
        >
          <Phone size={16} />
        </button>
        <Link href="#" className="hover:underline">Sign in</Link>
      </div>
    </nav>
  );
}
