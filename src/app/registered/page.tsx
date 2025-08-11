"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { exchangeCodeForToken } from "../actions/facebook-auth";

export default function RegisteredPage() {
  const [status, setStatus] = useState<"loading" | "success" | "error">("loading");
  const [message, setMessage] = useState("");
  const searchParams = useSearchParams();

  useEffect(() => {
    const handleFacebookCallback = async () => {
      const code = searchParams.get("code");
      const error = searchParams.get("error");

      if (error) {
        setStatus("error");
        setMessage(`Facebook login error: ${error}`);
        return;
      }

      if (!code) {
        setStatus("error");
        setMessage("No authorization code received from Facebook");
        return;
      }

      try {
        const result = await exchangeCodeForToken(code);
        
        if (result.success) {
          setStatus("success");
          setMessage("Successfully registered! Check console for user data.");
        } else {
          setStatus("error");
          setMessage(result.error || "Unknown error occurred");
        }
      } catch (error) {
        setStatus("error");
        setMessage(`Error: ${error}`);
      }
    };

    handleFacebookCallback();
  }, [searchParams]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-blue-50 flex items-center justify-center">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-8">
        <div className="text-center">
          {status === "loading" && (
            <>
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto mb-4"></div>
              <h1 className="text-2xl font-bold text-gray-900 mb-4">
                Processing...
              </h1>
              <p className="text-gray-600">
                Please wait while we process your Facebook login.
              </p>
            </>
          )}

          {status === "success" && (
            <>
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h1 className="text-2xl font-bold text-gray-900 mb-4">
                Welcome to COMMON JAPAN!
              </h1>
              <p className="text-gray-600 mb-6">
                {message}
              </p>
              <a
                href="/"
                className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
              >
                Back to Home
              </a>
            </>
          )}

          {status === "error" && (
            <>
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <h1 className="text-2xl font-bold text-gray-900 mb-4">
                Registration Failed
              </h1>
              <p className="text-gray-600 mb-6">
                {message}
              </p>
              <a
                href="/"
                className="inline-block bg-gray-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-700 transition-colors"
              >
                Try Again
              </a>
            </>
          )}
        </div>
      </div>
    </div>
  );
}