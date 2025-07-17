import React from "react";

const ChangingThingsSection = () => {
  return (
    <section className="bg-[#007a4d] text-white py-20 px-6 flex justify-center">
      <div className="max-w-5xl w-full text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8">
          How we’re changing things
        </h2>
        <div className="max-w-4xl mx-auto text-left">
          <p className="text-lg md:text-xl leading-relaxed mb-6">
            Homeownership is a huge part of our economy. Housing overall is a $33 trillion
            business, and mortgages account for $15 trillion. Yet home finance operates in
            the same way it has for decades — through opaque systems and expensive
            intermediaries whose interests are misaligned with consumers’.
          </p>
          <p className="text-lg md:text-xl leading-relaxed">
            That’s why Better.com is redefining the homeownership process from the ground up.
            We’re using technology to make it faster and more efficient, and humans to help
            make it friendly and enjoyable.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ChangingThingsSection;
