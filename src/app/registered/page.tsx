import React from "react";
import Link from "next/link";
import { SurveySection } from "../../components/survey/SurveySection";

export default function RegisteredPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-blue-50">
      {/* 既存の登録完了メッセージ部分 */}
      <div className="flex items-center justify-center px-4 py-16">
        <div className="max-w-md w-full text-center">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
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
            
            <h1 className="text-2xl font-bold text-gray-900 mb-4">
              Thank You for Joining!
            </h1>
            
            <p className="text-gray-600 mb-6">
              You have successfully joined our waiting list. We&apos;ll notify you as soon as COMMON JAPAN launches.
            </p>
            
            <p className="text-sm text-gray-500 mb-8">
              Keep an eye on your inbox for updates on opportunities in Japan&apos;s primary industries.
            </p>
          </div>
        </div>
      </div>

      {/* アンケートセクション */}
      <div className="px-4 pb-16">
        <div className="max-w-4xl mx-auto">
          <SurveySection />
        </div>
      </div>

      {/* Back to Homeボタン */}
      <div className="text-center pb-16">
        <Link
          href="/"
          className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}