"use client";

import React, { useState, useEffect, useRef } from "react";
import { ProgressBar } from "./ProgressBar";
import { QuestionGroup } from "./QuestionGroup";
import {
  SurveyFormData,
  LOCATION_OPTIONS,
  EXPERIENCE_OPTIONS,
  REGION_OPTIONS,
  INTEREST_OPTIONS,
  SECTOR_OPTIONS,
  EMPLOYMENT_TYPE_OPTIONS,
} from "./types";

interface SurveyFormProps {
  formData: SurveyFormData;
  onFormDataChange: (data: Partial<SurveyFormData>) => void;
  onSubmit: (data: SurveyFormData) => void;
  isSubmitted: boolean;
}

export function SurveyForm({
  formData,
  onFormDataChange,
  onSubmit,
  isSubmitted,
}: SurveyFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const firstInputRef = useRef<HTMLSelectElement>(null);

  // 入力完了数をカウント
  const getAnsweredCount = () => {
    let count = 0;
    if (formData.location) count++;
    if (formData.experience) count++;
    if (formData.regions.length > 0) count++;
    if (formData.interests.length > 0 || formData.interestsOther) count++;
    if (formData.sector) count++;
    if (formData.employmentType) count++;
    if (formData.features.trim()) count++;
    if (formData.skills.trim()) count++;
    return count;
  };

  const answeredCount = getAnsweredCount();
  const isFormComplete = answeredCount === 8;

  // フォーカスを最初の入力フィールドに移動
  useEffect(() => {
    const timer = setTimeout(() => {
      if (firstInputRef.current) {
        firstInputRef.current.focus();
      }
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await onSubmit(formData);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInterestsChange = (value: string | string[]) => {
    if (Array.isArray(value)) {
      const otherItems = value.filter((v) => v.startsWith("Other:"));
      const regularItems = value.filter((v) => !v.startsWith("Other:"));

      onFormDataChange({
        interests: regularItems,
        interestsOther:
          otherItems.length > 0 ? otherItems[0].replace("Other: ", "") : "",
      });
    }
  };

  if (isSubmitted) {
    return (
      <div
        className="bg-white rounded-lg shadow-lg p-8 text-center"
        data-submit-success
      >
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

        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          Thank you for your feedback!
        </h3>

        <p className="text-gray-600 mb-6">
          Your responses will help us build a better platform for connecting
          talent with opportunities in Japan&apos;s primary industries.
        </p>

        <div className="text-sm text-gray-500">
          Your feedback is valuable and will be used to improve COMMON JAPAN.
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <ProgressBar answeredCount={answeredCount} totalQuestions={8} />

      <form
        onSubmit={handleSubmit}
        onKeyDown={(e) => {
          if (e.key === "Enter") e.preventDefault();
        }}
        className="p-8"
      >
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Question 1: Current Location */}
          <QuestionGroup
            question="Where are you currently located?"
            type="dropdown"
            options={LOCATION_OPTIONS}
            value={formData.location}
            onChange={(value) =>
              onFormDataChange({ location: value as string })
            }
            isAnswered={!!formData.location}
          />

          {/* Question 2: Experience */}
          <QuestionGroup
            question="How many years of experience do you have in primary industries?"
            type="radio"
            options={EXPERIENCE_OPTIONS}
            value={formData.experience}
            onChange={(value) =>
              onFormDataChange({ experience: value as string })
            }
            layout="vertical"
            isAnswered={!!formData.experience}
          />

          {/* Question 3: Location Preference */}
          <QuestionGroup
            question="Which regions in Japan interest you for work? (Select all that apply)"
            type="checkbox"
            options={REGION_OPTIONS}
            value={formData.regions}
            onChange={(value) =>
              onFormDataChange({ regions: value as string[] })
            }
            layout="grid"
            isAnswered={formData.regions.length > 0}
          />

          {/* Question 4: Interests */}
          <QuestionGroup
            question="What interests you most about working in Japan's primary industries? (Select all that apply)"
            type="checkbox"
            options={INTEREST_OPTIONS}
            value={[
              ...formData.interests,
              ...(formData.interestsOther
                ? [`Other: ${formData.interestsOther}`]
                : []),
            ]}
            onChange={handleInterestsChange}
            hasOtherOption={true}
            layout="vertical"
            isAnswered={
              formData.interests.length > 0 || !!formData.interestsOther
            }
          />

          {/* Question 5: Industry Sector */}
          <QuestionGroup
            question="Which industry sector interests you most?"
            type="radio"
            options={SECTOR_OPTIONS}
            value={formData.sector}
            onChange={(value) => onFormDataChange({ sector: value as string })}
            layout="horizontal"
            isAnswered={!!formData.sector}
          />

          {/* Question 6: Employment Type */}
          <QuestionGroup
            question="What type of employment are you looking for?"
            type="radio"
            options={EMPLOYMENT_TYPE_OPTIONS}
            value={formData.employmentType}
            onChange={(value) =>
              onFormDataChange({ employmentType: value as string })
            }
            layout="grid"
            isAnswered={!!formData.employmentType}
          />

          {/* Question 7: Platform Features */}
          <QuestionGroup
            question="What features would you like to see in COMMON JAPAN to help you find opportunities?"
            type="textarea"
            value={formData.features}
            onChange={(value) =>
              onFormDataChange({ features: value as string })
            }
            maxLength={200}
            rows={3}
            isAnswered={!!formData.features.trim()}
          />

          {/* Question 8: Skills & Certifications */}
          <QuestionGroup
            question="Any specific skills or certifications you'd like to highlight?"
            type="textarea"
            value={formData.skills}
            onChange={(value) => onFormDataChange({ skills: value as string })}
            maxLength={200}
            rows={3}
            isAnswered={!!formData.skills.trim()}
          />

          {/* Submit Button */}
          <div className="pt-8">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-4 px-8 rounded-lg text-lg font-semibold transition-colors bg-green-600 text-white hover:bg-green-700 focus:ring-2 focus:ring-green-500
              ${isSubmitting ? "opacity-50 cursor-not-allowed" : ""}`}
            >
              {isSubmitting ? "Submitting..." : "Submit Survey"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
