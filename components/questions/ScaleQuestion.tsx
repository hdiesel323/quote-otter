'use client';

import { Slider } from 'primereact/slider';
import type { Question } from '@/types/quote-templates';

interface ScaleQuestionProps {
  question: Question;
  value: number;
  onChange: (value: number) => void;
  error?: string;
}

export default function ScaleQuestion({ question, value, onChange, error }: ScaleQuestionProps) {
  const min = question.validation?.min || 1;
  const max = question.validation?.max || 10;

  return (
    <div className="mb-6">
      <label htmlFor={question.id} className="block text-lg font-medium text-gray-900 mb-2">
        {question.label}
        {question.required && <span className="text-red-500 ml-1">*</span>}
      </label>
      
      {question.helpText && (
        <p className="text-sm text-gray-600 mb-3">{question.helpText}</p>
      )}

      <div className="px-2">
        <Slider
          id={question.id}
          value={value || min}
          onChange={(e) => onChange(e.value as number)}
          min={min}
          max={max}
          step={1}
          className="w-full"
        />
        
        <div className="flex justify-between mt-2 text-sm text-gray-600">
          <span>{min}</span>
          <span className="text-2xl font-bold text-indigo-600">{value || min}</span>
          <span>{max}</span>
        </div>
      </div>

      {error && (
        <small className="text-red-500 mt-1 block">{error}</small>
      )}
    </div>
  );
}
