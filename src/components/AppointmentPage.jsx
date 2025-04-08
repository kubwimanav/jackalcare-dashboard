import React, { useState } from "react";
import profile from "../assets/profile.jpg";
import {
  Stethoscope,
  Heart,
  MessageSquare,
  Star,
  ChevronLeft,
  ChevronRight,
  Clock,
} from "lucide-react";

const AppointmentPage = () => {
  // State for selections
  const [selectedService, setSelectedService] = useState(0);
  const [selectedDoctor, setSelectedDoctor] = useState(0);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState(2);

  // Sample data with improved icons
  const services = [
    {
      id: 0,
      title: "General Checkup",
      description: "Regular health examination and consultation",
      price: 75,
      icon: <Stethoscope size={18} />,
    },
    {
      id: 1,
      title: "Regular Health Examination",
      description: "Comprehensive health screening and tests",
      price: 120,
      icon: <Heart size={18} />,
    },
    {
      id: 2,
      title: "Consultation",
      description: "Medical advice and prescription if needed",
      price: 50,
      icon: <MessageSquare size={18} />,
    },
  ];

  const doctors = [
    {
      id: 0,
      name: "Dr. Sarah Johnson",
      specialty: "Cardiologist",
      rating: 4.8,
      reviews: 120,
    },
    {
      id: 1,
      name: "Dr. Michael Chen",
      specialty: "Cardiologist",
      rating: 4.7,
      reviews: 98,
    },
  ];

  const timeSlots = [
    "09:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "02:00 PM",
    "03:00 PM",
    "04:00 PM",
    "05:00 PM",
  ];

  // Calendar helpers
  const daysInMonth = (month, year) => new Date(year, month + 1, 0).getDate();
  const firstDayOfMonth = (month, year) => new Date(year, month, 1).getDay();

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <div className="bg-gray-100 min-h-screen p-4">
      <div className="max-w-6xl mx-auto">
        {/* First Section: Service Types - Improved Styling */}
        <h2 className="text-xl font-semibold my-5 text-gray-800">
          Select Service Type
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`bg-white rounded-lg p-5 shadow transition-all hover:shadow-md
                ${
                  selectedService === index
                    ? "ring-2 ring-blue-500 ring-offset-2"
                    : "hover:-translate-y-1"
                }`}
              onClick={() => setSelectedService(index)}
            >
              <div className="flex items-center mb-3">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center 
                  ${selectedService === index ? "bg-blue-500" : "bg-blue-100"}`}
                >
                  <div
                    className={
                      selectedService === index ? "text-white" : "text-blue-500"
                    }
                  >
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-lg font-semibold ml-3">{service.title}</h3>
              </div>
              <p className="text-gray-600 text-sm mb-4">
                {service.description}
              </p>
              <div className="flex justify-between items-center">
                <span className="text-blue-600 font-bold">
                  ${service.price}
                </span>
                {selectedService === index && (
                  <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                    Selected
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Second Section: Doctor Selection */}
        <h2 className="text-xl font-semibold my-5 text-gray-800">
          Select Doctor
        </h2>
        <div className="mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {doctors.map((doctor, index) => (
              <div
                key={doctor.id}
                className={`flex bg-white rounded-lg p-4 shadow transition-all hover:shadow-md
                  ${
                    selectedDoctor === index
                      ? "ring-2 ring-blue-500 ring-offset-1"
                      : "hover:-translate-y-1"
                  }`}
                onClick={() => setSelectedDoctor(index)}
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full mr-4 overflow-hidden">
                  <img
                    src={profile}
                    alt={doctor.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">{doctor.name}</h3>
                  <p className="text-gray-600 text-sm mb-1">
                    {doctor.specialty}
                  </p>
                  <div className="flex items-center gap-1">
                    <Star
                      size={14}
                      className="text-yellow-400 fill-yellow-400"
                    />
                    <span className="font-medium">{doctor.rating}</span>
                    <span className="text-gray-500 text-xs">
                      ({doctor.reviews} reviews)
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Third Section: Date and Time Selection - Minimized Calendar Height */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
          <div className="bg-white rounded-lg p-4 shadow">
            <h3 className="text-lg font-semibold mb-3 text-gray-800 flex items-center">
              <Clock size={16} className="mr-2" />
              Select Date
            </h3>

            {/* Calendar - Inline Implementation */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <button
                  className="p-1 rounded hover:bg-gray-200"
                  onClick={() =>
                    setSelectedDate(
                      new Date(
                        selectedDate.getFullYear(),
                        selectedDate.getMonth() - 1,
                        1
                      )
                    )
                  }
                >
                  <ChevronLeft size={16} />
                </button>
                <div className="text-sm font-medium">
                  {monthNames[selectedDate.getMonth()]}{" "}
                  {selectedDate.getFullYear()}
                </div>
                <button
                  className="p-1 rounded hover:bg-gray-200"
                  onClick={() =>
                    setSelectedDate(
                      new Date(
                        selectedDate.getFullYear(),
                        selectedDate.getMonth() + 1,
                        1
                      )
                    )
                  }
                >
                  <ChevronRight size={16} />
                </button>
              </div>

              <div className="grid grid-cols-7 gap-1 text-center mb-1">
                {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((day) => (
                  <div key={day} className="text-xs font-medium text-gray-500">
                    {day}
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-7 gap-1">
                {/* Empty cells for days before the first day of month */}
                {Array.from({
                  length: firstDayOfMonth(
                    selectedDate.getMonth(),
                    selectedDate.getFullYear()
                  ),
                }).map((_, i) => (
                  <div key={`blank-${i}`} className="h-6 w-6"></div>
                ))}

                {/* Days of the month */}
                {Array.from({
                  length: daysInMonth(
                    selectedDate.getMonth(),
                    selectedDate.getFullYear()
                  ),
                }).map((_, i) => {
                  const d = i + 1;
                  const currentDate = new Date(
                    selectedDate.getFullYear(),
                    selectedDate.getMonth(),
                    d
                  );
                  const isSelected = d === selectedDate.getDate();
                  const isToday =
                    new Date().setHours(0, 0, 0, 0) ===
                    currentDate.setHours(0, 0, 0, 0);

                  return (
                    <div
                      key={`day-${d}`}
                      className={`h-6 w-6 rounded-full flex items-center justify-center cursor-pointer text-sm
                        ${
                          isSelected
                            ? "bg-blue-500 text-white font-medium"
                            : isToday
                            ? "border border-blue-500"
                            : "hover:bg-blue-100"
                        }`}
                      onClick={() =>
                        setSelectedDate(
                          new Date(
                            selectedDate.getFullYear(),
                            selectedDate.getMonth(),
                            d
                          )
                        )
                      }
                    >
                      {d}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-4 shadow">
            <h3 className="text-lg font-semibold mb-3 text-gray-800 flex items-center">
              <Clock size={16} className="mr-2" />
              Select Time
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {timeSlots.map((time, index) => (
                <div
                  key={index}
                  className={`py-1 px-2 rounded text-center cursor-pointer text-sm transition-all
                    ${
                      selectedTime === index
                        ? "bg-blue-500 text-white font-medium"
                        : "bg-gray-100 hover:bg-blue-100"
                    }`}
                  onClick={() => setSelectedTime(index)}
                >
                  {time}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Fourth Section: Appointment Summary */}
        <h2 className="text-xl font-semibold my-5 text-gray-800">
          Appointment Summary
        </h2>
        <div className="bg-white rounded-lg p-5 shadow mb-8">
          <div className="py-3 flex justify-between border-b border-gray-200">
            <span className="font-semibold text-gray-600">Service</span>
            <span className="text-gray-800">
              {services[selectedService].title}
            </span>
          </div>
          <div className="py-3 flex justify-between border-b border-gray-200">
            <span className="font-semibold text-gray-600">Doctor</span>
            <span className="text-gray-800">
              {doctors[selectedDoctor].name} (
              {doctors[selectedDoctor].specialty})
            </span>
          </div>
          <div className="py-3 flex justify-between border-b border-gray-200">
            <span className="font-semibold text-gray-600">Date & Time</span>
            <span className="text-gray-800">
              {selectedDate.toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}{" "}
              at {timeSlots[selectedTime]}
            </span>
          </div>
          <div className="py-3 flex justify-between border-b border-gray-200">
            <span className="font-semibold text-gray-600">Duration</span>
            <span className="text-gray-800">45 minutes</span>
          </div>
          <div className="py-3 flex justify-between">
            <span className="font-semibold text-gray-600">Price</span>
            <span className="text-lg font-semibold text-blue-600">
              ${services[selectedService].price}
            </span>
          </div>
        </div>

        {/* Button Container */}
        <div className="flex justify-end gap-4 mt-6">
          <button className="px-5 py-2 bg-gray-200 text-gray-700 font-medium rounded-lg hover:bg-gray-300 transition-colors">
            Back
          </button>
          <button className="px-5 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">
            Confirm Booking
          </button>
        </div>
      </div>
    </div>
  );
};

export default AppointmentPage;
