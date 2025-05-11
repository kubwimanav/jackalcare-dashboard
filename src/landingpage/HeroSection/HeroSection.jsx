import React from "react";
import doc from "../../assets/doc.jpg"; 
const HeroSection = () => {
  return (
    <div className="relative w-full h-screen md:h-[600px] lg:h-[700px]">
      <img
        src={doc}
        alt="Hero"
        className="w-full h-full object-cover"
      />
      {/* Optional: Add overlay or text content */}
    </div>
  );
};

export default HeroSection;