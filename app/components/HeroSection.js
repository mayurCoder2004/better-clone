export default function HeroSection() {
  return (
    <section className="bg-[#00463f] text-white py-20 px-4 text-center relative">
      
      <h1 className="text-4xl md:text-6xl font-bold leading-tight">
        The first <br />
        <span className="bg-gradient-to-r from-green-400 via-blue-400 to-pink-500 text-transparent bg-clip-text">
          AI-powered
        </span>{" "}
        Mortgage
      </h1>

      <p className="mt-4 text-lg max-w-2xl mx-auto text-white/80">
        Our tech unlocks lower rates, higher chances of approval, <br />
        and a lightning-fast process from approval to closing. Over $100 billion funded.
      </p>

      <button className="mt-8 bg-green-400 hover:bg-green-500 text-black font-semibold py-3 px-6 rounded-full transition">
        Start my pre-approval
      </button>

      <div className="mt-2 flex items-center justify-center text-sm text-white/60">
        <span>⏱️ 3 min &nbsp;|&nbsp; No hard credit check</span>
      </div>

    </section>
  );
}
