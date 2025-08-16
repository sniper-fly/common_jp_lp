"use client";

import React, { useState, useRef } from "react";
import { SurveyIntro } from "./SurveyIntro";
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
      <SurveyIntro onStartSurvey={handleStartSurvey} />

      {showForm && (
        <div ref={formRef} className="mt-8">
          <SurveyForm
            formData={formData}
            onFormDataChange={handleFormDataChange}
            onSubmit={handleSubmit}
            isSubmitted={isSubmitted}
          />
        </div>
      )}
    </div>
  );
}
