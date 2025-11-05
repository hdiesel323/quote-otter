'use client';

import type { Question } from '@/types/quote-templates';
import TextQuestion from '@/components/questions/TextQuestion';
import SelectQuestion from '@/components/questions/SelectQuestion';
import MultiSelectQuestion from '@/components/questions/MultiSelectQuestion';
import NumberQuestion from '@/components/questions/NumberQuestion';
import BooleanQuestion from '@/components/questions/BooleanQuestion';
import DateQuestion from '@/components/questions/DateQuestion';
import ScaleQuestion from '@/components/questions/ScaleQuestion';

interface QuestionRendererProps {
  question: Question;
  value: any;
  onChange: (value: any) => void;
  error?: string;
}

export default function QuestionRenderer({ question, value, onChange, error }: QuestionRendererProps) {
  // Check conditional display
  if (question.dependsOn) {
    // This will be handled by parent component
    return null;
  }

  switch (question.type) {
    case 'text':
    case 'textarea':
      return <TextQuestion question={question} value={value} onChange={onChange} error={error} />;
    
    case 'select':
      return <SelectQuestion question={question} value={value} onChange={onChange} error={error} />;
    
    case 'multiselect':
      return <MultiSelectQuestion question={question} value={value} onChange={onChange} error={error} />;
    
    case 'number':
      return <NumberQuestion question={question} value={value} onChange={onChange} error={error} />;
    
    case 'boolean':
      return <BooleanQuestion question={question} value={value} onChange={onChange} error={error} />;
    
    case 'date':
      return <DateQuestion question={question} value={value} onChange={onChange} error={error} />;
    
    case 'scale':
      return <ScaleQuestion question={question} value={value} onChange={onChange} error={error} />;
    
    // TODO: Add file upload and address autocomplete
    case 'file':
      return (
        <div className="mb-6">
          <label className="block text-lg font-medium text-gray-900 mb-2">
            {question.label} {question.required && <span className="text-red-500">*</span>}
          </label>
          <p className="text-sm text-gray-600">File upload coming soon</p>
        </div>
      );
    
    case 'address':
      return (
        <div className="mb-6">
          <label className="block text-lg font-medium text-gray-900 mb-2">
            {question.label} {question.required && <span className="text-red-500">*</span>}
          </label>
          <p className="text-sm text-gray-600">Address autocomplete coming soon</p>
        </div>
      );
    
    default:
      return <div>Unknown question type: {question.type}</div>;
  }
}
