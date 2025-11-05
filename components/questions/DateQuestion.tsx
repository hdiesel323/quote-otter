'use client';

import { Calendar } from 'primereact/calendar';
import type { Question } from '@/types/quote-templates';

interface DateQuestionProps {
  question: Question;
  value: Date | null;
  onChange: (value: Date | null) => void;
  error?: string;
}

export default function DateQuestion({ question, value, onChange, error }: DateQuestionProps) {
  return (
    <div className="mb-6">
      <label htmlFor={question.id} className="block text-lg font-medium text-gray-900 mb-2">
        {question.label}
        {question.required && <span className="text-red-500 ml-1">*</span>}
      </label>
      
      {question.helpText && (
        <p className="text-sm text-gray-600 mb-2">{question.helpText}</p>
      )}

      <Calendar
        id={question.id}
        value={value}
        onChange={(e) => onChange(e.value as Date | null)}
        placeholder={question.placeholder || 'Select a date...'}
        dateFormat="mm/dd/yy"
        showIcon
        className={`w-full ${error ? 'p-invalid' : ''}`}
        minDate={new Date()} // Default to today or later
      />

      {error && (
        <small className="text-red-500 mt-1 block">{error}</small>
      )}
    </div>
  );
}
