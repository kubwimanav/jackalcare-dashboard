import React, { useState } from "react";
import profile from "../assets/profile.jpg";
import { TbDentalBroken } from "react-icons/tb";
import {
  Stethoscope,
  Star,
  ChevronLeft,
  ChevronRight,
  Clock,
  Check,
  X,
} from "lucide-react";
import { BsFillHeartPulseFill } from "react-icons/bs";
import { Link } from "react-router-dom";

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
      icon: <Stethoscope size={20} />,
    },
    {
      id: 1,
      title: "Dental Care",
      description: "Complete dental examination and cleaning",
      price: 120,
      icon: <TbDentalBroken size={20} />,
    },
    {
      id: 2,
      title: "Cardiology",
      description: "Heart health assessment and consultation",
      price: 50,
      icon: <BsFillHeartPulseFill size={20} />,
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

  // Calendar helpers - simplified for minimized calendar
  const getDaysOfWeek = () => {
    const today = new Date();
    const days = [];

    for (let i = 0; i < 7; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      days.push({
        date: date,
        dayName: date.toLocaleDateString("en-US", { weekday: "short" }),
        dayNumber: date.getDate(),
      });
    }

    return days;
  };

  const daysOfWeek = getDaysOfWeek();

  return (
    <div className="bg-gray-100 min-h-screen p-4 sm:p-6">
      <div className="max-w-6xl mx-auto">
        {/* First Section: Service Types */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6 sm:mb-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`bg-white rounded-lg p-4 shadow hover:shadow-md transition-shadow cursor-pointer ${
                selectedService === index ? "ring-2 ring-blue-500" : ""
              }`}
              onClick={() => setSelectedService(index)}
            >
              <div className="flex flex-col items-start mb-2">
                <div className="text-blue-500 mb-1">{service.icon}</div>
                <h3 className="text-sm font-semibold">{service.title}</h3>
                <p className="text-gray-600 text-xs sm:text-sm mt-1">
                  {service.description}
                </p>
              </div>
              <div className="flex justify-between items-center mt-2">
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
        <h2 className="text-xs sm:text-sm font-semibold my-4 sm:my-5 text-gray-800">
          Select Doctor
        </h2>
        <div className="mb-6 sm:mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
            {doctors.map((doctor, index) => (
              <div
                key={doctor.id}
                className={`flex bg-white rounded-lg p-3 sm:p-4 shadow cursor-pointer ${
                  selectedDoctor === index ? "ring-2 ring-blue-500" : ""
                }`}
                onClick={() => setSelectedDoctor(index)}
              >
                <div className="w-8 h-8 sm:w-9 sm:h-9 bg-blue-100 rounded-full mr-3 sm:mr-4 overflow-hidden flex-shrink-0">
                  <img
                    src={profile}
                    alt={doctor.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xs sm:text-sm font-semibold mb-0.5 sm:mb-1">
                    {doctor.name}
                  </h3>
                  <p className="text-gray-600 text-xs mb-0.5 sm:mb-1">
                    {doctor.specialty}
                  </p>
                  <div className="flex items-center gap-1">
                    <Star
                      size={14}
                      className="text-yellow-400 fill-yellow-400"
                    />
                    <span className="text-xs font-medium">{doctor.rating}</span>
                    <span className="text-gray-500 text-xs">
                      ({doctor.reviews} reviews)
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Third Section: Date and Time Selection - Minimized Calendar */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 mb-6 sm:mb-8">
          <div className="bg-white rounded-lg p-4 shadow">
            <h3 className="text-xs sm:text-sm font-semibold mb-3 text-gray-800 flex items-center">
              Select Date
            </h3>

            {/* Minimized Calendar - Just Days of Week */}
            <div className="mb-2">
              <div className="flex justify-between items-center mb-3">
                <button className="p-1 rounded">
                  <ChevronLeft size={16} />
                </button>
                <div className="text-xs sm:text-sm font-medium">This Week</div>
                <button className="p-1 rounded">
                  <ChevronRight size={16} />
                </button>
              </div>

              <div className="flex justify-between overflow-x-auto pb-1">
                {daysOfWeek.map((day, index) => (
                  <div
                    key={index}
                    className={`flex flex-col items-center cursor-pointer p-1 sm:p-2 rounded-lg min-w-10 ${
                      selectedDate.getDate() === day.date.getDate()
                        ? "bg-blue-500 text-white"
                        : ""
                    }`}
                    onClick={() => setSelectedDate(day.date)}
                  >
                    <span className="text-xs font-medium">{day.dayName}</span>
                    <span className="text-xs font-bold">{day.dayNumber}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-4 shadow">
            <h3 className="text-xs sm:text-sm font-semibold mb-3 text-gray-800 flex items-center">
              Select Time
            </h3>
            <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 gap-2">
              {timeSlots.map((time, index) => (
                <div
                  key={index}
                  className={`py-1 px-2 text-center cursor-pointer text-xs sm:text-sm rounded
                    ${
                      selectedTime === index
                        ? "border-2 border-blue-500 font-medium"
                        : "border border-gray-200 hover:border-blue-400"
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
        <h2 className="text-xs sm:text-sm font-semibold my-4 sm:my-5 text-gray-800">
          Appointment Summary
        </h2>
        <div className="bg-white rounded-lg p-4 sm:p-5 shadow mb-6 sm:mb-8">
          <div className="py-2 sm:py-3 flex justify-between border-b border-gray-200">
            <span className="font-normal text-gray-600 text-xs sm:text-sm">
              Service
            </span>
            <span className="text-black text-xs sm:text-sm font-medium">
              {services[selectedService].title}
            </span>
          </div>
          <div className="py-2 sm:py-3 flex justify-between border-b border-gray-200">
            <span className="font-normal text-gray-600 text-xs sm:text-sm">
              Doctor
            </span>
            <span className="text-black text-xs sm:text-sm font-medium">
              {doctors[selectedDoctor].name}
            </span>
          </div>
          <div className="py-2 sm:py-3 flex justify-between border-b border-gray-200">
            <span className="font-normal text-gray-600 text-xs sm:text-sm">
              Date & Time
            </span>
            <span className="text-black text-xs sm:text-sm font-medium">
              {selectedDate.toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}{" "}
              {timeSlots[selectedTime]}
            </span>
          </div>

          <div className="py-2 sm:py-3 flex justify-between">
            <span className="font-normal text-gray-600 text-xs sm:text-sm">
              Price
            </span>
            <span className="text-base sm:text-lg font-semibold text-blue-600">
              ${services[selectedService].price}
            </span>
          </div>
        </div>

        {/* Button Container */}
        <div className="flex justify-end gap-3 sm:gap-4 mt-4 sm:mt-6">
          <button className="px-3 sm:px-5 py-2 bg-gray-200 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-300 transition-colors">
            Back
          </button>
          <button className="px-3 sm:px-5 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors">
            <Link to={"/patient/portal"}>Confirm Booking</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AppointmentPage;
