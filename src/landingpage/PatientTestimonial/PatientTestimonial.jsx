import React from 'react';

const PatientTestimonial = () => {
  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-6">
          What Our Patients Say
        </h2>
        <div className="bg-white rounded-lg p-8">
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            "JackalCare has transformed my healthcare experience. Their team is professional, caring, and always available when needed."
          </p>
          <div className="mt-6">
            <p className="text-sm font-semibold text-gray-900">
              Sarah Johnson
            </p>
            <p className="text-sm text-gray-500">
              Patient since 2023
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientTestimonial;