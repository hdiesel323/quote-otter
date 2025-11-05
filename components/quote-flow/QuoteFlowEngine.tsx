'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import type { QuoteTemplate, QuoteFormData } from '@/types/quote-templates';
import ProgressBar from './ProgressBar';
import StepRenderer from './StepRenderer';
import ContactInfoStep from './ContactInfoStep';
import StepNavigation from './StepNavigation';
import CallNowStep from './CallNowStep';

interface QuoteFlowEngineProps {
  template: QuoteTemplate;
  initialData: {
    serviceId: string;
    serviceName: string;
    zipCode: string;
    location?: { city: string; state: string };
  };
}

type FlowPhase = 'questions' | 'contact' | 'submitting' | 'call-now' | 'complete';

export default function QuoteFlowEngine({ template, initialData }: QuoteFlowEngineProps) {
  const router = useRouter();
  const [phase, setPhase] = useState<FlowPhase>('questions');
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, any>>({});
  const [contactInfo, setContactInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Get visible steps (filter out skipped steps)
  const visibleSteps = template.steps.filter(step => {
    if (!step.skipIf) return true;
    return !step.skipIf(answers);
  });

  const currentStep = visibleSteps[currentStepIndex];
  const totalSteps = visibleSteps.length + 1; // +1 for contact info
  const isLastQuestionStep = currentStepIndex === visibleSteps.length - 1;

  // Save progress to localStorage
  useEffect(() => {
    const formData: QuoteFormData = {
      serviceId: initialData.serviceId,
      serviceName: initialData.serviceName,
      zipCode: initialData.zipCode,
      location: initialData.location,
      answers,
      contact: contactInfo,
      startedAt: new Date(),
      currentStepId: currentStep?.id
    };
    
    localStorage.setItem(`quote-flow-${initialData.serviceId}`, JSON.stringify(formData));
  }, [answers, contactInfo, currentStepIndex]);

  // Validate current step
  const validateStep = (): boolean => {
    if (phase === 'contact') {
      return validateContactInfo();
    }

    const newErrors: Record<string, string> = {};
    
    currentStep.questions.forEach(question => {
      // Check if question is visible based on dependencies
      if (question.dependsOn) {
        const { questionId, value: requiredValue, operator = 'equals' } = question.dependsOn;
        const actualValue = answers[questionId];
        
        let isVisible = false;
        switch (operator) {
          case 'equals':
            isVisible = actualValue === requiredValue;
            break;
          case 'notEquals':
            isVisible = actualValue !== requiredValue;
            break;
          case 'includes':
            isVisible = Array.isArray(actualValue) && actualValue.includes(requiredValue);
            break;
        }
        
        if (!isVisible) return; // Skip validation for hidden questions
      }

      const value = answers[question.id];
      
      // Required field check
      if (question.required) {
        if (value === undefined || value === null || value === '' || 
            (Array.isArray(value) && value.length === 0)) {
          newErrors[question.id] = 'This field is required';
          return;
        }
      }

      // Type-specific validation
      if (question.validation) {
        const { min, max, pattern, minLength, maxLength, message } = question.validation;
        
        if (question.type === 'number' && typeof value === 'number') {
          if (min !== undefined && value < min) {
            newErrors[question.id] = message || `Minimum value is ${min}`;
          }
          if (max !== undefined && value > max) {
            newErrors[question.id] = message || `Maximum value is ${max}`;
          }
        }
        
        if (question.type === 'text' || question.type === 'textarea') {
          if (minLength !== undefined && value.length < minLength) {
            newErrors[question.id] = message || `Minimum length is ${minLength} characters`;
          }
          if (maxLength !== undefined && value.length > maxLength) {
            newErrors[question.id] = message || `Maximum length is ${maxLength} characters`;
          }
          if (pattern && !new RegExp(pattern).test(value)) {
            newErrors[question.id] = message || 'Invalid format';
          }
        }
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateContactInfo = (): boolean => {
    const newErrors: Record<string, string> = {};
    
    if (!contactInfo.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }
    
    if (!contactInfo.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }
    
    if (!contactInfo.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contactInfo.email)) {
      newErrors.email = 'Invalid email format';
    }
    
    if (!contactInfo.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\(\d{3}\) \d{3}-\d{4}$/.test(contactInfo.phone)) {
      newErrors.phone = 'Invalid phone format';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleAnswerChange = (questionId: string, value: any) => {
    setAnswers(prev => ({ ...prev, [questionId]: value }));
    // Clear error for this question
    if (errors[questionId]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[questionId];
        return newErrors;
      });
    }
  };

  const handleBack = () => {
    if (phase === 'contact') {
      setPhase('questions');
      setCurrentStepIndex(visibleSteps.length - 1);
    } else if (currentStepIndex > 0) {
      setCurrentStepIndex(prev => prev - 1);
    }
  };

  const handleNext = () => {
    if (!validateStep()) {
      // Scroll to first error
      const firstError = document.querySelector('.p-invalid');
      firstError?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }

    if (phase === 'contact') {
      // Contact info validated, ready to submit
      return;
    }

    if (isLastQuestionStep) {
      setPhase('contact');
    } else {
      setCurrentStepIndex(prev => prev + 1);
    }
  };

  const handleSubmit = async () => {
    if (!validateContactInfo()) {
      return;
    }

    setIsSubmitting(true);
    setPhase('submitting');

    const submissionData: QuoteFormData = {
      serviceId: initialData.serviceId,
      serviceName: initialData.serviceName,
      zipCode: initialData.zipCode,
      location: initialData.location,
      answers,
      contact: contactInfo,
      startedAt: new Date(),
      completedAt: new Date()
    };

    try {
      const response = await fetch('/api/quotes/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(submissionData)
      });

      if (!response.ok) {
        throw new Error('Submission failed');
      }

      const result = await response.json();

      // Clear saved progress
      localStorage.removeItem(`quote-flow-${initialData.serviceId}`);

      // Check if Call Now step should be shown
      if (template.callNow?.enabled) {
        setPhase('call-now');
      } else {
        setPhase('complete');
        // Redirect to thank you page
        router.push(`/quotes/thank-you?service=${initialData.serviceName}&id=${result.quoteId}`);
      }
    } catch (error) {
      console.error('Quote submission error:', error);
      alert('Sorry, there was an error submitting your request. Please try again.');
      setPhase('contact');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCallNowComplete = () => {
    setPhase('complete');
    router.push(`/quotes/thank-you?service=${initialData.serviceName}&called=true`);
  };

  const handleCallNowSkip = () => {
    setPhase('complete');
    router.push(`/quotes/thank-you?service=${initialData.serviceName}`);
  };

  // Show Call Now step
  if (phase === 'call-now' && template.callNow) {
    return (
      <CallNowStep
        config={template.callNow}
        serviceName={template.serviceName}
        onComplete={handleCallNowComplete}
        onSkip={handleCallNowSkip}
      />
    );
  }

  // Show submitting state
  if (phase === 'submitting') {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-16 w-16 border-b-2 border-indigo-600 mb-4"></div>
          <h2 className="text-2xl font-bold text-gray-900">Submitting Your Request...</h2>
          <p className="text-gray-600 mt-2">This will only take a moment</p>
        </div>
      </div>
    );
  }

  const currentStepNumber = phase === 'contact' ? totalSteps : currentStepIndex + 1;
  const stepTitles = [...visibleSteps.map(s => s.title), 'Contact Info'];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 max-w-3xl">
        {/* Service Header */}
        <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-xl font-bold text-gray-900">{template.serviceName} Quote</h1>
              <p className="text-sm text-gray-600">
                {initialData.location 
                  ? `${initialData.location.city}, ${initialData.location.state} ${initialData.zipCode}`
                  : `ZIP: ${initialData.zipCode}`}
              </p>
            </div>
            {template.estimatedTime && (
              <div className="text-right">
                <p className="text-sm text-gray-600">Estimated time</p>
                <p className="text-lg font-semibold text-indigo-600">{template.estimatedTime}</p>
              </div>
            )}
          </div>
        </div>

        {/* Main Form Card */}
        <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
          {/* Progress Bar */}
          <ProgressBar
            currentStep={currentStepNumber - 1}
            totalSteps={totalSteps}
            stepTitles={stepTitles}
          />

          {/* Step Content */}
          {phase === 'contact' ? (
            <ContactInfoStep
              value={contactInfo}
              onChange={setContactInfo}
              errors={errors}
            />
          ) : (
            <StepRenderer
              step={currentStep}
              answers={answers}
              errors={errors}
              onAnswerChange={handleAnswerChange}
            />
          )}

          {/* Navigation */}
          <StepNavigation
            canGoBack={currentStepIndex > 0 || phase === 'contact'}
            canGoNext={true}
            isLastStep={phase === 'contact'}
            isSubmitting={isSubmitting}
            onBack={handleBack}
            onNext={handleNext}
            onSubmit={handleSubmit}
          />
        </div>

        {/* Trust Signals */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600 flex items-center justify-center gap-2">
            🔒 Your information is secure and will only be shared with verified providers
          </p>
        </div>
      </div>
    </div>
  );
}
