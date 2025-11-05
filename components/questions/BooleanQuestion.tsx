'use client';

import { SelectButton } from 'primereact/selectbutton';
import type { Question } from '@/types/quote-templates';

interface BooleanQuestionProps {
  question: Question;
  value: boolean | null;
  onChange: (value: boolean) => void;
  error?: string;
}

export default function BooleanQuestion({ question, value, onChange, error }: BooleanQuestionProps) {
  const options = [
    { label: 'Yes', value: true },
    { label: 'No', value: false }
  ];

  return (
    <div className="mb-6">
      <label className="block text-lg font-medium text-gray-900 mb-3">
        {question.label}
        {question.required && <span className="text-red-500 ml-1">*</span>}
      </label>
      
      {question.helpText && (
        <p className="text-sm text-gray-600 mb-3">{question.helpText}</p>
      )}

      <SelectButton
        value={value}
        onChange={(e) => onChange(e.value)}
        options={options}
        className={error ? 'p-invalid' : ''}
      />

      {error && (
        <small className="text-red-500 mt-1 block">{error}</small>
      )}
    </div>
  );
}
