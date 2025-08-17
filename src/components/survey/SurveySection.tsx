"use client";

import React, { useState, useRef } from "react";
import { SurveyForm } from "./SurveyForm";
import { SurveyFormData, initialFormData } from "./types";

export function SurveySection() {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState<SurveyFormData>(initialFormData);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);

  const handleStartSurvey = () => {
    setShowForm(true);
    // スムーズスクロール実装
    setTimeout(() => {
      if (formRef.current) {
        formRef.current.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 100);
  };

  const handleFormDataChange = (newData: Partial<SurveyFormData>) => {
    setFormData((prev) => ({ ...prev, ...newData }));
  };

  const handleSubmit = async (finalData: SurveyFormData) => {
    try {
      // フロントエンドのみ実装（実際のAPI送信はPhase 2）
      console.log("Survey submitted:", finalData);
      setIsSubmitted(true);

      // 送信完了後のスクロール
      setTimeout(() => {
        if (formRef.current) {
          const submitSuccessElement = formRef.current.querySelector(
            "[data-submit-success]"
          );
          if (submitSuccessElement) {
            submitSuccessElement.scrollIntoView({
              behavior: "smooth",
              block: "center",
            });
          }
        }
      }, 100);
    } catch (error) {
      console.error("Survey submission error:", error);
    }
  };

  return (
    <div className="w-full">
      {/* {!isSubmitted && <SurveyIntro onStartSurvey={handleStartSurvey} />} */}

      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Help us build a better platform for you
        </h2>

        <p className="text-gray-600 mb-6 max-w-2xl mx-auto leading-relaxed">
          Your feedback could directly influence the development of COMMON JAPAN
          and help us better serve your needs. This survey takes about 2-3
          minutes to complete and all questions are optional.
        </p>
      </div>

      <div ref={formRef} className="mt-8">
        <SurveyForm
          formData={formData}
          onFormDataChange={handleFormDataChange}
          onSubmit={handleSubmit}
          isSubmitted={isSubmitted}
        />
      </div>
    </div>
  );
}
