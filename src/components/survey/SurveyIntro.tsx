import React from "react";

interface SurveyIntroProps {
  onStartSurvey: () => void;
}

export function SurveyIntro({ onStartSurvey }: SurveyIntroProps) {
  return (
    <div className="rounded-lg p-8 text-center">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">
        Help us build a better platform for you
      </h2>

      <p className="text-gray-600 mb-6 max-w-2xl mx-auto leading-relaxed">
        Your feedback could directly influence the development of COMMON JAPAN
        and help us better serve your needs. This survey takes about 2-3 minutes
        to complete and all questions are optional.
      </p>

      <button
        onClick={onStartSurvey}
        className="bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-700 transition-colors focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
        aria-label="Start the survey"
      >
        Start Survey
      </button>
    </div>
  );
}
