'use client';

import { Dropdown } from 'primereact/dropdown';
import type { Question } from '@/types/quote-templates';

interface SelectQuestionProps {
  question: Question;
  value: string;
  onChange: (value: string) => void;
  error?: string;
}

export default function SelectQuestion({ question, value, onChange, error }: SelectQuestionProps) {
  return (
    <div className="mb-6">
      <label htmlFor={question.id} className="block text-lg font-medium text-gray-900 mb-2">
        {question.label}
        {question.required && <span className="text-red-500 ml-1">*</span>}
      </label>
      
      {question.helpText && (
        <p className="text-sm text-gray-600 mb-2">{question.helpText}</p>
      )}

      <Dropdown
        id={question.id}
        value={value || ''}
        onChange={(e) => onChange(e.value)}
        options={question.options || []}
        optionLabel="label"
        optionValue="value"
        placeholder={question.placeholder || 'Select an option...'}
        className={`w-full ${error ? 'p-invalid' : ''}`}
        itemTemplate={(option) => (
          <div>
            <div className="font-medium">{option.label}</div>
            {option.description && (
              <div className="text-sm text-gray-600">{option.description}</div>
            )}
          </div>
        )}
      />

      {error && (
        <small className="text-red-500 mt-1 block">{error}</small>
      )}
    </div>
  );
}
