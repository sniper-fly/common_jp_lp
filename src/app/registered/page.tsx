import React from "react";

export default function RegisteredPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
        <div className="mb-6">
          <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
            <svg
              className="w-8 h-8 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            Registration Complete!
          </h1>
          <p className="text-gray-600">
            You've been added to the COMMON JAPAN waiting list
          </p>
        </div>

        <div className="space-y-4 text-left">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h2 className="font-semibold text-blue-900 mb-2">What's Next</h2>
            <ul className="text-sm text-blue-800 space-y-1">
              <li>• We'll email you when the service launches</li>
              <li>• Profile setup instructions will be sent to you</li>
              <li>• Get ready for job matching opportunities</li>
            </ul>
          </div>

          <div className="bg-green-50 p-4 rounded-lg">
            <h2 className="font-semibold text-green-900 mb-2">
              About COMMON JAPAN
            </h2>
            <p className="text-sm text-green-800">
              A matching platform connecting foreign residents who want to work 
              in Japan's primary industries with businesses facing labor shortages 
              in agriculture, forestry, and fisheries.
            </p>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-gray-200">
          <p className="text-xs text-gray-500">
            If you have any questions or need support,
            <br />
            please feel free to contact our support team.
          </p>
        </div>
      </div>
    </div>
  );
}