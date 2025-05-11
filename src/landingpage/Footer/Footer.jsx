import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* JackalCare Section */}
        <div className="space-y-2">
          <h3 className="font-semibold text-lg">JackalCare</h3>
          <p className="text-sm">Providing quality healthcare services since 2020.</p>
        </div>

        {/* Quick Links Section */}
        <div className="space-y-2">
          <h3 className="font-semibold text-lg">Quick Links</h3>
          <ul className="space-y-1">
            <li><a href="#" className="text-sm hover:underline">About Us</a></li>
            <li><a href="#" className="text-sm hover:underline">Services</a></li>
            <li><a href="#" className="text-sm hover:underline">Doctors</a></li>
            <li><a href="#" className="text-sm hover:underline">Contact</a></li>
          </ul>
        </div>

        {/* Services Section */}
        <div className="space-y-2">
          <h3 className="font-semibold text-lg">Services</h3>
          <ul className="space-y-1">
            <li><a href="#" className="text-sm hover:underline">Primary Care</a></li>
            <li><a href="#" className="text-sm hover:underline">Specialized Medicine</a></li>
            <li><a href="#" className="text-sm hover:underline">Home Care</a></li>
            <li><a href="#" className="text-sm hover:underline">Emergency Services</a></li>
          </ul>
        </div>

        {/* Newsletter Section */}
        <div className="space-y-2">
          <h3 className="font-semibold text-lg">Newsletter</h3>
          <p className="text-sm">Subscribe to our newsletter for updates.</p>
          <div className="flex">
            <input type="email" placeholder="Your email" className="bg-gray-700 text-white px-4 py-2 rounded-l-md focus:outline-none flex-grow" />
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-r-md">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-2.293 2.293a1 1 0 101.414 1.414l3-3A1 1 0 0013.707 9.3z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="text-center mt-8 border-t border-gray-700 pt-4">
        <p className="text-sm">&copy; 2025 JackalCare. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;