import { useState } from "react";
import {
  Calendar,
  CreditCard,
  Smartphone,
  Shield,
  Building2,
  Download,
  AlertCircle,
  CheckCircle,
  Check,
} from "lucide-react";

export default function PaymentPortal() {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const paymentMethods = [
    {
      id: "card",
      name: "Credit/Debit Card",
      icon: <CreditCard className="w-5 h-5 text-blue-600" />,
    },
    {
      id: "mobile",
      name: "Mobile Money",
      icon: <Smartphone className="w-5 h-5 text-blue-600" />,
    },
    {
      id: "insurance",
      name: "Insurance",
      icon: <Shield className="w-5 h-5 text-blue-600" />,
    },
    {
      id: "bank",
      name: "Bank Transfer",
      icon: <Building2 className="w-5 h-5 text-blue-600" />,
    },
  ];

  const transactions = [
    {
      date: "Feb 15, 2025",
      description: "Consultation Fee",
      amount: "$750.00",
      method: "Credit Card",
      status: "Successful",
    },
    {
      date: "Jan 30, 2025",
      description: "Lab Tests",
      amount: "$500.00",
      method: "Insurance",
      status: "Pending",
    },
  ];

  const handleConfirmBooking = () => {
    setShowConfirmation(true);
  };

  const closeConfirmation = () => {
    setShowConfirmation(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-3">
      <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-sm p-4">
        <h1 className="text-lg md:text-xl font-bold text-gray-900">
          Payment Portal
        </h1>
        <p className="text-xs text-gray-600 mt-0">
          Securely manage and process your healthcare payments
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          {/* Total Due Card */}
          <div className="bg-gray-50 p-3 rounded-lg border border-gray-100">
            <div className="flex justify-between items-center">
              <span className="text-gray-600 text-xs font-medium">
                Total Due
              </span>
              <span className="text-blue-600">
                <Calendar className="w-4 h-4" />
              </span>
            </div>
            <div className="mt-1">
              <p className="text-base font-bold text-gray-900">$1,250.00</p>
              <p className="text-xs text-gray-500">Due by Mar 15, 2025</p>
            </div>
          </div>

          {/* Previous Payment Card */}
          <div className="bg-gray-50 p-3 rounded-lg border border-gray-100">
            <div className="flex justify-between items-center">
              <span className="text-gray-600 text-xs font-medium">
                Previous Payment
              </span>
              <span className="text-green-500">
                <CheckCircle className="w-4 h-4" />
              </span>
            </div>
            <div className="mt-1">
              <p className="text-base font-bold text-gray-900">$750.00</p>
              <p className="text-xs text-gray-500">Paid on Feb 15, 2025</p>
            </div>
          </div>

          {/* Upcoming Bills Card */}
          <div className="bg-gray-50 p-3 rounded-lg border border-gray-100">
            <div className="flex justify-between items-center">
              <span className="text-gray-600 text-xs font-medium">
                Upcoming Bills
              </span>
              <span className="text-orange-500">
                <AlertCircle className="w-4 h-4" />
              </span>
            </div>
            <div className="mt-1">
              <p className="text-base font-bold text-gray-900">2</p>
              <p className="text-xs text-gray-500">Next due in 15 days</p>
            </div>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="mt-6">
          <h2 className="text-sm font-semibold text-gray-900 mb-2">
            Select Payment Method
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {paymentMethods.map((method) => (
              <div
                key={method.id}
                className={`border rounded-lg p-3 flex flex-col items-center justify-center cursor-pointer transition-all ${
                  selectedPaymentMethod === method.id
                    ? "border-blue-500 bg-blue-50"
                    : "border-gray-200 hover:border-blue-300"
                }`}
                onClick={() => setSelectedPaymentMethod(method.id)}
              >
                {method.icon}
                <p className="mt-1 text-xs text-gray-800 font-medium">
                  {method.name}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Transaction History */}
        <div className="mt-6">
          <h2 className="text-sm font-semibold text-gray-900 mb-2">
            Transaction History
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th className="px-3 py-2 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-3 py-2 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Description
                  </th>
                  <th className="px-3 py-2 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Amount
                  </th>
                  <th className="px-3 py-2 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Method
                  </th>
                  <th className="px-3 py-2 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-3 py-2 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {transactions.map((transaction, index) => (
                  <tr key={index}>
                    <td className="px-3 py-2 whitespace-nowrap text-xs text-gray-500">
                      {transaction.date}
                    </td>
                    <td className="px-3 py-2 whitespace-nowrap text-xs font-medium text-gray-900">
                      {transaction.description}
                    </td>
                    <td className="px-3 py-2 whitespace-nowrap text-xs text-gray-900">
                      {transaction.amount}
                    </td>
                    <td className="px-3 py-2 whitespace-nowrap text-xs text-gray-500">
                      {transaction.method}
                    </td>
                    <td className="px-3 py-2 whitespace-nowrap">
                      <span
                        className={`px-2 py-0.5 text-xs font-medium rounded-full ${
                          transaction.status === "Successful"
                            ? "bg-green-100 text-green-800"
                            : "bg-yellow-100 text-yellow-800"
                        }`}
                      >
                        {transaction.status}
                      </span>
                    </td>
                    <td className="px-3 py-2 whitespace-nowrap text-xs text-gray-500">
                      <button className="text-blue-600 hover:text-blue-800">
                        <Download className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Payment Action */}
        <div className="mt-6 border-t pt-4 flex flex-col md:flex-row items-start md:items-center justify-between">
          <div>
            <h2 className="text-sm font-semibold text-gray-900">
              Ready to complete your payment?
            </h2>
            <p className="text-xs text-gray-600">
              Your information is encrypted and secure
            </p>
          </div>
          <button
            className="mt-2 md:mt-0 px-4 py-2 bg-blue-600 text-white text-xs font-medium rounded-lg hover:bg-blue-700 transition-colors"
            onClick={handleConfirmBooking}
          >
            Proceed to Payment
          </button>
        </div>
      </div>
      {showConfirmation && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-4 max-w-sm w-full flex flex-col items-center">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-3">
              <Check size={24} className="text-green-500" />
            </div>
            <h3 className="text-base font-bold mb-1">Booking Confirmed!</h3>
            <p className="text-xs text-gray-600 text-center mb-4">
              Your appointment has been successfully scheduled. A confirmation
              has been sent to your email.
            </p>
            <button
              className="px-4 py-2 bg-blue-600 text-white text-xs font-medium rounded-lg hover:bg-blue-700 transition-colors"
              onClick={closeConfirmation}
            >
              Done
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
