import React, { useState } from 'react';

interface QuestionGroupProps {
  question: string;
  type: 'dropdown' | 'radio' | 'checkbox' | 'textarea';
  options?: string[] | { value: string; label: string }[];
  value: string | string[];
  onChange: (value: string | string[]) => void;
  hasOtherOption?: boolean;
  maxLength?: number;
  rows?: number;
  layout?: 'vertical' | 'horizontal' | 'grid';
  isAnswered: boolean;
}

export function QuestionGroup({
  question,
  type,
  options = [],
  value,
  onChange,
  hasOtherOption = false,
  maxLength,
  rows = 3,
  layout = 'vertical',
  isAnswered,
}: QuestionGroupProps) {
  const [otherValue, setOtherValue] = useState('');
  const [showOtherInput, setShowOtherInput] = useState(false);

  const handleCheckboxChange = (optionValue: string, checked: boolean) => {
    const currentValues = Array.isArray(value) ? value : [];
    if (checked) {
      onChange([...currentValues, optionValue]);
    } else {
      onChange(currentValues.filter(v => v !== optionValue));
    }
  };

  const handleOtherOptionChange = (checked: boolean) => {
    setShowOtherInput(checked);
    if (!checked) {
      setOtherValue('');
      if (type === 'checkbox') {
        const currentValues = Array.isArray(value) ? value : [];
        onChange(currentValues.filter(v => !v.startsWith('Other:')));
      }
    }
  };

  const handleOtherValueChange = (newValue: string) => {
    setOtherValue(newValue);
    if (type === 'checkbox') {
      const currentValues = Array.isArray(value) ? value : [];
      const filteredValues = currentValues.filter(v => !v.startsWith('Other:'));
      if (newValue.trim()) {
        onChange([...filteredValues, `Other: ${newValue}`]);
      } else {
        onChange(filteredValues);
      }
    } else {
      onChange(newValue);
    }
  };

  const getLayoutClasses = () => {
    switch (layout) {
      case 'horizontal':
        return 'flex flex-wrap gap-6';
      case 'grid':
        return 'grid grid-cols-1 md:grid-cols-2 gap-4';
      default:
        return 'space-y-3';
    }
  };

  const renderOptions = () => {
    return options.map((option) => {
      const optionValue = typeof option === 'string' ? option : option.value;
      const optionLabel = typeof option === 'string' ? option : option.label;
      
      if (type === 'radio') {
        return (
          <label key={optionValue} className="flex items-center cursor-pointer">
            <input
              type="radio"
              name={question}
              value={optionValue}
              checked={value === optionValue}
              onChange={(e) => onChange(e.target.value)}
              className="mr-3 text-green-600 focus:ring-green-500"
            />
            <span className="text-gray-700">{optionLabel}</span>
          </label>
        );
      }
      
      if (type === 'checkbox') {
        const isChecked = Array.isArray(value) && value.includes(optionValue);
        return (
          <label key={optionValue} className="flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={isChecked}
              onChange={(e) => handleCheckboxChange(optionValue, e.target.checked)}
              className="mr-3 text-green-600 focus:ring-green-500 rounded"
            />
            <span className="text-gray-700">{optionLabel}</span>
          </label>
        );
      }
      
      return null;
    });
  };

  return (
    <div className="mb-8">
      <div className="flex items-start justify-between mb-4">
        <h3 className="text-lg font-medium text-gray-900 leading-relaxed">
          {question}
        </h3>
        {isAnswered && (
          <div className="ml-4 flex-shrink-0">
            <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </div>
        )}
      </div>

      {type === 'dropdown' && (
        <select
          value={value as string}
          onChange={(e) => onChange(e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-gray-900"
        >
          <option value="">Select an option...</option>
          {options.map((option) => {
            const optionValue = typeof option === 'string' ? option : option.value;
            const optionLabel = typeof option === 'string' ? option : option.label;
            return (
              <option key={optionValue} value={optionValue}>
                {optionLabel}
              </option>
            );
          })}
        </select>
      )}

      {(type === 'radio' || type === 'checkbox') && (
        <div className={getLayoutClasses()}>
          {renderOptions()}
          
          {hasOtherOption && (
            <div className="space-y-2">
              <label className="flex items-center cursor-pointer">
                <input
                  type={type}
                  checked={showOtherInput}
                  onChange={(e) => handleOtherOptionChange(e.target.checked)}
                  className="mr-3 text-green-600 focus:ring-green-500 rounded"
                />
                <span className="text-gray-700">Other:</span>
              </label>
              
              {showOtherInput && (
                <input
                  type="text"
                  value={otherValue}
                  onChange={(e) => handleOtherValueChange(e.target.value)}
                  placeholder="Please specify..."
                  className="ml-6 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-gray-900 w-full max-w-md"
                />
              )}
            </div>
          )}
        </div>
      )}

      {type === 'textarea' && (
        <div>
          <textarea
            value={value as string}
            onChange={(e) => onChange(e.target.value)}
            rows={rows}
            maxLength={maxLength}
            placeholder="Your response..."
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-gray-900 resize-none"
          />
          {maxLength && (
            <div className="mt-2 text-right text-sm text-gray-500">
              {(value as string).length}/{maxLength} characters
            </div>
          )}
        </div>
      )}
    </div>
  );
}