// Quote Flow Template System
// This defines the structure for dynamic quote request forms

export type QuestionType = 
  | 'text' 
  | 'select' 
  | 'multiselect' 
  | 'number' 
  | 'date' 
  | 'file' 
  | 'address' 
  | 'scale'
  | 'textarea'
  | 'boolean';

export interface QuestionOption {
  value: string;
  label: string;
  description?: string;
}

export interface QuestionValidation {
  min?: number;
  max?: number;
  pattern?: string;
  message?: string;
  minLength?: number;
  maxLength?: number;
}

export interface Question {
  id: string;
  type: QuestionType;
  label: string;
  placeholder?: string;
  required: boolean;
  options?: QuestionOption[]; // for select/multiselect
  validation?: QuestionValidation;
  helpText?: string;
  
  // Conditional display
  dependsOn?: {
    questionId: string;
    value: any;
    operator?: 'equals' | 'notEquals' | 'includes';
  };
}

export interface QuoteStep {
  id: string;
  title: string;
  description?: string;
  questions: Question[];
  
  // Skip this step if condition is met
  skipIf?: (answers: Record<string, any>) => boolean;
}

export interface QuoteTemplate {
  serviceId: string;
  serviceName: string;
  serviceSlug: string;
  vertical: 'home' | 'insurance' | 'moving' | 'legal' | 'financial' | 'auto';
  
  // The flow steps
  steps: QuoteStep[];
  
  // Optional: custom routing logic
  conditionalRouting?: (
    currentStepId: string, 
    answers: Record<string, any>
  ) => string | null; // return next step ID or null for default
  
  // Metadata
  estimatedTime?: string; // "2 minutes"
  icon?: string; // PrimeReact icon class
}

export interface QuoteFormData {
  // Initial data from hero form
  serviceId: string;
  serviceName: string;
  zipCode: string;
  location?: {
    city: string;
    state: string;
  };
  
  // Answers collected during flow
  answers: Record<string, any>;
  
  // Contact info (collected in final step)
  contact?: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
  };
  
  // Metadata
  startedAt: Date;
  completedAt?: Date;
  currentStepId?: string;
}

export interface QuoteSubmission extends QuoteFormData {
  id: string;
  status: 'pending' | 'matched' | 'completed' | 'expired';
  matchedProviders?: Provider[];
  createdAt: Date;
}

export interface Provider {
  id: string;
  name: string;
  rating: number;
  reviewCount: number;
  description: string;
  servicedZipCodes: string[];
  services: string[]; // service IDs
  responseTime: string; // "Within 24 hours"
  verified: boolean;
  yearsInBusiness?: number;
  licenses?: string[];
  insurance?: boolean;
}
