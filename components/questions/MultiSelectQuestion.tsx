'use client';

import { Checkbox } from 'primereact/checkbox';
import type { Question } from '@/types/quote-templates';

interface MultiSelectQuestionProps {
  question: Question;
  value: string[];
  onChange: (value: string[]) => void;
  error?: string;
}

export default function MultiSelectQuestion({ question, value, onChange, error }: MultiSelectQuestionProps) {
  const selectedValues = value || [];

  const handleChange = (optionValue: string, checked: boolean) => {
    if (checked) {
      onChange([...selectedValues, optionValue]);
    } else {
      onChange(selectedValues.filter(v => v !== optionValue));
    }
  };

  return (
    <div className="mb-6">
      <label className="block text-lg font-medium text-gray-900 mb-2">
        {question.label}
        {question.required && <span className="text-red-500 ml-1">*</span>}
      </label>
      
      {question.helpText && (
        <p className="text-sm text-gray-600 mb-3">{question.helpText}</p>
      )}

      <div className="space-y-3">
        {question.options?.map((option) => (
          <div key={option.value} className="flex items-start gap-3">
            <Checkbox
              inputId={`${question.id}-${option.value}`}
              checked={selectedValues.includes(option.value)}
              onChange={(e) => handleChange(option.value, e.checked || false)}
            />
            <label
              htmlFor={`${question.id}-${option.value}`}
              className="cursor-pointer flex-1"
            >
              <div className="font-medium text-gray-900">{option.label}</div>
              {option.description && (
                <div className="text-sm text-gray-600">{option.description}</div>
              )}
            </label>
          </div>
        ))}
      </div>

      {error && (
        <small className="text-red-500 mt-1 block">{error}</small>
      )}
    </div>
  );
}
