import React from "react";
const HeroSection = () => {
  return (
    <div className="relative w-full h-screen md:h-[600px] lg:h-[700px]">
      <img
        src="/Doc.jpg"
        alt="Hero"
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default HeroSection;