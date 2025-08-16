import React from 'react';

interface ProgressBarProps {
  answeredCount: number;
  totalQuestions: number;
}

export function ProgressBar({ answeredCount, totalQuestions }: ProgressBarProps) {
  const progressPercentage = (answeredCount / totalQuestions) * 100;
  
  return (
    <div className="sticky top-0 bg-white border-b border-gray-200 p-4 z-10">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-gray-700">
            Progress: {answeredCount} of {totalQuestions} questions completed
          </span>
          <span className="text-sm text-gray-500">
            {Math.round(progressPercentage)}%
          </span>
        </div>
        
        <div className="w-full bg-gray-200 rounded-full h-3">
          <div 
            className="bg-green-600 h-3 rounded-full transition-all duration-300 ease-out"
            style={{ width: `${progressPercentage}%` }}
            role="progressbar"
            aria-valuenow={answeredCount}
            aria-valuemin={0}
            aria-valuemax={totalQuestions}
            aria-label={`Survey progress: ${answeredCount} of ${totalQuestions} questions completed`}
          />
        </div>
        
        {answeredCount === totalQuestions && (
          <div className="mt-2 text-center">
            <span className="inline-flex items-center text-green-600 text-sm font-medium">
              <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              All questions completed!
            </span>
          </div>
        )}
      </div>
    </div>
  );
}