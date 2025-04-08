import React, { useState } from 'react';
import profile from '../assets/profile.jpg';
const AppointmentPage = () => {
  // State for selections
  const [selectedService, setSelectedService] = useState(0);
  const [selectedDoctor, setSelectedDoctor] = useState(0);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState(2); // Index of selected time

  // Sample data with real icons
  const services = [
    { 
      id: 0, 
      title: "General Checkup", 
      description: "Regular health examination and consultation", 
      price: 75, 
      icon: <fa-stethoscope/> 
    },
    { 
      id: 1, 
      title: "Regular Health Examination", 
      description: "Comprehensive health screening and tests", 
      price: 120, 
      icon: "fa-heart-pulse" 
    },
    { 
      id: 2, 
      title: "Consultation", 
      description: "Medical advice and prescription if needed", 
      price: 50, 
      icon: "fa-comment-medical" 
    }
  ];

  const doctors = [
    { id: 0, name: "Dr. Sarah Johnson", specialty: "Cardiologist", rating: 4.8, reviews: 120 },
    { id: 1, name: "Dr. Michael Chen", specialty: "Cardiologist", rating: 4.7, reviews: 98 }
  ];

  const timeSlots = [
    "09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", 
    "02:00 PM", "03:00 PM", "04:00 PM", "05:00 PM"
  ];

  // Calendar helpers
  const daysInMonth = (month, year) => new Date(year, month + 1, 0).getDate();
  const firstDayOfMonth = (month, year) => new Date(year, month, 1).getDay();
  
  const renderCalendar = () => {
    const month = selectedDate.getMonth();
    const year = selectedDate.getFullYear();
    const daysInCurrentMonth = daysInMonth(month, year);
    const firstDay = firstDayOfMonth(month, year);
    
    const monthNames = ["January", "February", "March", "April", "May", "June",
                         "July", "August", "September", "October", "November", "December"];
    
    // Create empty cells for days before the first day of month
    const blanks = [];
    for (let i = 0; i < firstDay; i++) {
      blanks.push(<div key={`blank-${i}`} className="h-8 w-8"></div>);
    }
    
    // Create cells for days of the month
    const days = [];
    for (let d = 1; d <= daysInCurrentMonth; d++) {
      const currentDate = new Date(year, month, d);
      const isSelected = d === selectedDate.getDate();
      const isToday = new Date().setHours(0,0,0,0) === currentDate.setHours(0,0,0,0);
      
      days.push(
        <div 
          key={`day-${d}`}
          className={`h-8 w-8 rounded-full flex items-center justify-center cursor-pointer
            ${isSelected ? 'bg-blue-500 text-white' : isToday ? 'border border-blue-500' : 'hover:bg-blue-100'}`}
          onClick={() => setSelectedDate(new Date(year, month, d))}
        >
          {d}
        </div>
      );
    }
    
    // Combine blanks and days
    const totalSlots = [...blanks, ...days];
    
    return (
      <div>
        <div className="flex justify-between items-center mb-4">
          <button 
            className="p-1 rounded hover:bg-gray-200"
            onClick={() => setSelectedDate(new Date(year, month - 1, 1))}
          >
            <i className="fa-solid fa-chevron-left"></i>
          </button>
          <div className="text-lg font-medium">{monthNames[month]} {year}</div>
          <button 
            className="p-1 rounded hover:bg-gray-200"
            onClick={() => setSelectedDate(new Date(year, month + 1, 1))}
          >
            <i className="fa-solid fa-chevron-right"></i>
          </button>
        </div>
        
        <div className="grid grid-cols-7 gap-1 text-center mb-2">
          {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(day => (
            <div key={day} className="font-medium text-gray-500">{day}</div>
          ))}
        </div>
        
        <div className="grid grid-cols-7 gap-1">
          {totalSlots}
        </div>
      </div>
    );
  };

  return (
    <div className="bg-gray-100 min-h-screen p-4">
      <div className="max-w-6xl mx-auto">
        {/* First Section: Service Types */}
        <h2 className="text-2xl font-semibold my-6 text-gray-800">Select Service Type</h2>
        <div className="flex flex-wrap gap-5 mb-8">
          {services.map((service, index) => (
            <div 
              key={service.id}
              className={`bg-white rounded-lg p-1 flex-1 min-w-64 shadow cursor-pointer transition-all hover:shadow-lg hover:-translate-y-1 ${selectedService === index ? 'border-2 border-blue-500' : ''}`}
              onClick={() => setSelectedService(index)}
            >
              {/* Real icons using Font Awesome */}
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <i className={`fa-solid ${service.icon} text-2xl text-blue-500`}></i>
              </div>
              <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm mb-3">{service.description}</p>
              <p className="text-blue-500 font-semibold">${service.price}</p>
            </div>
          ))}
        </div>

        {/* Second Section: Doctor Selection */}
        <h2 className="text-2xl font-semibold my-6 text-gray-800">Select Doctor</h2>
        <div className="mb-8">
          <div className="flex flex-wrap gap-5">
            {doctors.map((doctor, index) => (
              <div 
                key={doctor.id}
                className={`flex bg-white rounded-lg p-4 w-full md:w-[calc(50%-10px)] shadow cursor-pointer transition-all hover:shadow-lg ${selectedDoctor === index ? 'border-2 border-blue-500' : ''}`}
                onClick={() => setSelectedDoctor(index)}
              >
                <div className="w-20 h-20 bg-blue-100 rounded-full mr-4 overflow-hidden">
                  <img src={profile} alt={doctor.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">{doctor.name}</h3>
                  <p className="text-gray-600 text-sm mb-1">{doctor.specialty}</p>
                  <div className="flex items-center gap-1">
                    <i className="fa-solid fa-star text-yellow-400"></i>
                    <span>{doctor.rating}</span>
                    <span className="text-gray-600 text-sm">({doctor.reviews} reviews)</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Third Section: Date and Time Selection */}
        <div className="flex flex-wrap gap-5 mb-8">
          <div className="flex-1 min-w-72 bg-white rounded-lg p-2 shadow">
            <h3 className="text-lg font-semibold mb-4 text-gray-800">Select Date</h3>
            {renderCalendar()}
          </div>
          <div className="flex-1 min-w-72 bg-white rounded-lg p-2 shadow">
            <h3 className="text-lg font-semibold mb-4 text-gray-800">Select Time</h3>
            <div className="flex flex-wrap gap-2">
              {timeSlots.map((time, index) => (
                <div 
                  key={index}
                  className={`py-2 px-4 rounded cursor-pointer transition-all ${selectedTime === index ? 'bg-blue-500 text-white' : 'bg-gray-100 hover:bg-blue-100'}`}
                  onClick={() => setSelectedTime(index)}
                >
                  {time}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Fourth Section: Appointment Summary */}
        <h2 className="text-2xl font-semibold my-6 text-gray-800">Appointment Summary</h2>
        <div className="bg-white rounded-lg p-6 shadow mb-8">
          <div className="py-3 flex justify-between border-b border-gray-200">
            <span className="font-semibold text-gray-600">Service</span>
            <span className="text-gray-800">{services[selectedService].title}</span>
          </div>
          <div className="py-3 flex justify-between border-b border-gray-200">
            <span className="font-semibold text-gray-600">Doctor</span>
            <span className="text-gray-800">{doctors[selectedDoctor].name} ({doctors[selectedDoctor].specialty})</span>
          </div>
          <div className="py-3 flex justify-between border-b border-gray-200">
            <span className="font-semibold text-gray-600">Date & Time</span>
            <span className="text-gray-800">
              {selectedDate.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })} at {timeSlots[selectedTime]}
            </span>
          </div>
          <div className="py-3 flex justify-between border-b border-gray-200">
            <span className="font-semibold text-gray-600">Duration</span>
            <span className="text-gray-800">45 minutes</span>
          </div>
          <div className="py-3 flex justify-between">
            <span className="font-semibold text-gray-600">Price</span>
            <span className="text-lg font-semibold text-blue-500">${services[selectedService].price}</span>
          </div>
        </div>

        {/* Button Container - on right side */}
        <div className="flex justify-end gap-4 mt-6">
          <button className="px-6 py-3 bg-gray-100 text-gray-600 font-semibold rounded border border-gray-300 hover:bg-gray-200 transition-all">
            Back
          </button>
          <button className="px-4 py-2 rounded-2xl bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 transition-all">
            Confirm Booking
          </button>
        </div>
      </div>
    </div>
  );
};

export default AppointmentPage;