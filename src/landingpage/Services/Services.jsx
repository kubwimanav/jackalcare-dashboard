import React from 'react';

const Services = () => {
  const services = [
    {
      icon: '💙', // You can replace with actual icons or image paths
      title: 'Primary Care',
      description: 'Comprehensive health services for individuals and families.',
    },
    {
      icon: '🩺', // You can replace with actual icons or image paths
      title: 'Specialized Medicine',
      description: 'Expert care in various medical specialties.',
    },
    {
      icon: '🏠', // You can replace with actual icons or image paths
      title: 'Home Care',
      description: 'Professional medical care in the comfort of your home.',
    },
  ];

  return (
    <div className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-8">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-sm text-gray">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;