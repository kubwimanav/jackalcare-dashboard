import React from "react";
import profile from "../assets/profile.jpg"; // Adjust the path as necessary

// Sample data for demonstration
const patientData = {
  name: "John Doe",
  patientId: "P-20230615",
  age: "45 years",
  bloodType: "A+",
  lastVisit: "March 22, 2025",
  primaryDoctor: "Dr. Sarah Johnson",
  insurance: "Blue Cross Blue Shield",
  allergies: "Penicillin, Peanuts",
};

const medicalRecords = [
  {
    id: 1,
    date: "Mar 22, 2025",
    type: "Check-up",
    doctor: "Dr. Sarah Johnson",
    diagnosis: "Hypertension, prescribed Lisinopril",
  },
  {
    id: 2,
    date: "Feb 15, 2025",
    type: "Consultation",
    doctor: "Dr. Michael Chen",
    diagnosis: "Seasonal allergies, prescribed Cetirizine",
  },
  {
    id: 3,
    date: "Jan 08, 2025",
    type: "Emergency",
    doctor: "Dr. Robert Wilson",
    diagnosis: "Sprained ankle, recommended RICE therapy",
  },
];

const MedicalHistoryPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-5">
      <div className="max-w-6xl mx-auto flex flex-col gap-5">
        {/* Page Title and Description */}
        <div className="mb-2">
          <h1 className="text-sm font-bold text-gray-800">Medical History</h1>
          <p className="text-gray-600 mt-1 text-sm">
            View and manage your complete medical records, including past
            visits, prescriptions, and test results.
          </p>
        </div>

        {/* First Card: Patient Profile */}
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex flex-col md:flex-row justify-between gap-6">
            {/* Profile Image and Name Section */}
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-gray-200 overflow-hidden">
                <img
                  src={profile}
                  alt="Patient"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h2 className="font-bold text-lg">{patientData.name}</h2>
                <p className="text-gray-500 text-sm">
                  Patient ID: {patientData.patientId}
                </p>
              </div>
            </div>

            {/* Age, Blood Type, Last Visit Section */}
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <p className="text-gray-500 text-xs min-w-20">Age:</p>
                <p className="font-medium text-sm">{patientData.age}</p>
              </div>
              <div className="flex items-center gap-2">
                <p className="text-gray-500 text-xs min-w-20">Blood Type:</p>
                <p className="font-medium text-sm">{patientData.bloodType}</p>
              </div>
              <div className="flex items-center gap-2">
                <p className="text-gray-500 text-xs min-w-20">Last Visit:</p>
                <p className="font-medium text-sm">{patientData.lastVisit}</p>
              </div>
            </div>

            {/* Primary Doctor, Insurance, Allergies Section */}
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <p className="text-gray-500 text-xs min-w-28">
                  Primary Doctor:
                </p>
                <p className="font-medium text-sm">{patientData.primaryDoctor}</p>
              </div>
              <div className="flex items-center gap-2">
                <p className="text-gray-500 text-xs min-w-28">Insurance:</p>
                <p className="font-medium text-sm">{patientData.insurance}</p>
              </div>
              <div className="flex items-center gap-2">
                <p className="text-gray-500 text-xs min-w-28">Allergies:</p>
                <p className="font-medium text-sm">{patientData.allergies}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Second Card: Filters */}
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <input
                type="text"
                placeholder="Search..."
                className="px-4 text-sm py-2 border border-gray-300 rounded-md w-60 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <select className="px-4 text-sm py-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>All Types</option>
                <option>Consultation</option>
                <option>Check-up</option>
                <option>Emergency</option>
                <option>Follow-up</option>
              </select>
            </div>

            <div>
              <input
                type="date"
                className="px-4 text-sm py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <button className="flex text-sm items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
              Export PDF
            </button>

            <button className="flex text-sm items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="6 9 6 2 18 2 18 9"></polyline>
                <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path>
                <rect x="6" y="14" width="12" height="8"></rect>
              </svg>
              Print
            </button>
          </div>
        </div>

        {/* Third Card: Medical History Table */}
        <div className="bg-white rounded-lg shadow p-6">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-sm py-3 px-4 text-left bg-gray-50">
                    Date
                  </th>
                  <th className="text-sm py-3 px-4 text-left bg-gray-50">
                    Type
                  </th>
                  <th className="text-sm py-3 px-4 text-left bg-gray-50">
                    Doctor
                  </th>
                  <th className="text-sm py-3 px-4 text-left bg-gray-50">
                    Diagnosis
                  </th>
                  <th className="text-sm py-3 px-4 text-left bg-gray-50">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {medicalRecords.map((record) => (
                  <tr key={record.id} className="border-b hover:bg-gray-50">
                    <td className="text-sm py-3 px-4">{record.date}</td>
                    <td className="text-sm py-3 px-4">{record.type}</td>
                    <td className="text-sm py-3 px-4">{record.doctor}</td>
                    <td className="text-sm py-3 px-4">{record.diagnosis}</td>
                    <td className="text-sm py-3 px-4">
                      <div className="flex gap-3">
                        <button className="text-blue-600 hover:text-blue-800">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                            <polyline points="7 10 12 15 17 10"></polyline>
                            <line x1="12" y1="15" x2="12" y2="3"></line>
                          </svg>
                        </button>
                        <button className="text-blue-600 hover:text-blue-800">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                            <circle cx="12" cy="12" r="3"></circle>
                          </svg>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MedicalHistoryPage;
