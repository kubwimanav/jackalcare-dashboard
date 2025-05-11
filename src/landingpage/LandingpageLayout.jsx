import React from "react";
import Navigation from "./Navbar/Navbar";
import ContactForm from "./Contact/Contact";
import Footer from "./Footer/Footer";
import PatientTestimonial from "./PatientTestimonial/PatientTestimonial";
import Services from "./Services/Services";
import HeroSection from "./HeroSection/HeroSection";

function LandingpageLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <HeroSection />
      <Services />
      <PatientTestimonial />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default LandingpageLayout;
