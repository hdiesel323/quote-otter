'use client';

import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import type { Question } from '@/types/quote-templates';

interface TextQuestionProps {
  question: Question;
  value: string;
  onChange: (value: string) => void;
  error?: string;
}

export default function TextQuestion({ question, value, onChange, error }: TextQuestionProps) {
  const isTextarea = question.type === 'textarea';
  
  const handleChange = (e: any) => {
    onChange(e.target.value);
  };

  return (
    <div className="mb-6">
      <label htmlFor={question.id} className="block text-lg font-medium text-gray-900 mb-2">
        {question.label}
        {question.required && <span className="text-red-500 ml-1">*</span>}
      </label>
      
      {question.helpText && (
        <p className="text-sm text-gray-600 mb-2">{question.helpText}</p>
      )}

      {isTextarea ? (
        <InputTextarea
          id={question.id}
          value={value || ''}
          onChange={handleChange}
          placeholder={question.placeholder}
          rows={4}
          className={`w-full ${error ? 'p-invalid' : ''}`}
          maxLength={question.validation?.maxLength}
        />
      ) : (
        <InputText
          id={question.id}
          value={value || ''}
          onChange={handleChange}
          placeholder={question.placeholder}
          className={`w-full ${error ? 'p-invalid' : ''}`}
          maxLength={question.validation?.maxLength}
        />
      )}

      {question.validation?.maxLength && (
        <p className="text-xs text-gray-500 mt-1">
          {(value || '').length} / {question.validation.maxLength} characters
        </p>
      )}

      {error && (
        <small className="text-red-500 mt-1 block">{error}</small>
      )}
    </div>
  );
}
