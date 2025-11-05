'use client';

import { InputNumber } from 'primereact/inputnumber';
import type { Question } from '@/types/quote-templates';

interface NumberQuestionProps {
  question: Question;
  value: number | null;
  onChange: (value: number | null) => void;
  error?: string;
}

export default function NumberQuestion({ question, value, onChange, error }: NumberQuestionProps) {
  return (
    <div className="mb-6">
      <label htmlFor={question.id} className="block text-lg font-medium text-gray-900 mb-2">
        {question.label}
        {question.required && <span className="text-red-500 ml-1">*</span>}
      </label>
      
      {question.helpText && (
        <p className="text-sm text-gray-600 mb-2">{question.helpText}</p>
      )}

      <InputNumber
        id={question.id}
        value={value}
        onValueChange={(e) => onChange(e.value)}
        placeholder={question.placeholder}
        min={question.validation?.min}
        max={question.validation?.max}
        className={`w-full ${error ? 'p-invalid' : ''}`}
        useGrouping={false}
      />

      {(question.validation?.min !== undefined || question.validation?.max !== undefined) && (
        <p className="text-xs text-gray-500 mt-1">
          {question.validation?.min !== undefined && question.validation?.max !== undefined
            ? `Range: ${question.validation.min} - ${question.validation.max}`
            : question.validation?.min !== undefined
            ? `Minimum: ${question.validation.min}`
            : `Maximum: ${question.validation.max}`}
        </p>
      )}

      {error && (
        <small className="text-red-500 mt-1 block">{error}</small>
      )}
    </div>
  );
}
