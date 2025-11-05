'use client';

import type { QuoteStep } from '@/types/quote-templates';
import QuestionRenderer from './QuestionRenderer';

interface StepRendererProps {
  step: QuoteStep;
  answers: Record<string, any>;
  errors: Record<string, string>;
  onAnswerChange: (questionId: string, value: any) => void;
}

export default function StepRenderer({ step, answers, errors, onAnswerChange }: StepRendererProps) {
  // Filter questions based on dependencies
  const visibleQuestions = step.questions.filter(question => {
    if (!question.dependsOn) return true;
    
    const { questionId, value: requiredValue, operator = 'equals' } = question.dependsOn;
    const actualValue = answers[questionId];
    
    switch (operator) {
      case 'equals':
        return actualValue === requiredValue;
      case 'notEquals':
        return actualValue !== requiredValue;
      case 'includes':
        return Array.isArray(actualValue) && actualValue.includes(requiredValue);
      default:
        return true;
    }
  });

  return (
    <div className="space-y-6">
      {/* Step Header */}
      <div className="mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
          {step.title}
        </h2>
        {step.description && (
          <p className="text-gray-600">{step.description}</p>
        )}
      </div>

      {/* Questions */}
      <div className="space-y-4">
        {visibleQuestions.map(question => (
          <QuestionRenderer
            key={question.id}
            question={question}
            value={answers[question.id]}
            onChange={(value) => onAnswerChange(question.id, value)}
            error={errors[question.id]}
          />
        ))}
      </div>
    </div>
  );
}
