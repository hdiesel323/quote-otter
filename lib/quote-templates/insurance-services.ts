import { QuoteTemplate } from '@/types/quote-templates';

// Auto Insurance Template
export const autoInsuranceTemplate: QuoteTemplate = {
  serviceId: 'auto-insurance',
  serviceName: 'Auto Insurance',
  serviceSlug: 'auto-insurance',
  vertical: 'insurance',
  estimatedTime: '3 minutes',
  icon: 'pi-car',
  
  steps: [
    {
      id: 'vehicle-info',
      title: 'Tell us about your vehicle',
      questions: [
        {
          id: 'year',
          type: 'number',
          label: 'Vehicle year',
          required: true,
          validation: {
            min: 1980,
            max: 2025,
            message: 'Please enter a valid vehicle year'
          }
        },
        {
          id: 'make',
          type: 'select',
          label: 'Vehicle make',
          required: true,
          options: [
            { value: 'toyota', label: 'Toyota' },
            { value: 'honda', label: 'Honda' },
            { value: 'ford', label: 'Ford' },
            { value: 'chevrolet', label: 'Chevrolet' },
            { value: 'nissan', label: 'Nissan' },
            { value: 'jeep', label: 'Jeep' },
            { value: 'ram', label: 'Ram' },
            { value: 'gmc', label: 'GMC' },
            { value: 'hyundai', label: 'Hyundai' },
            { value: 'subaru', label: 'Subaru' },
            { value: 'kia', label: 'Kia' },
            { value: 'mazda', label: 'Mazda' },
            { value: 'volkswagen', label: 'Volkswagen' },
            { value: 'bmw', label: 'BMW' },
            { value: 'mercedes', label: 'Mercedes-Benz' },
            { value: 'audi', label: 'Audi' },
            { value: 'lexus', label: 'Lexus' },
            { value: 'other', label: 'Other' }
          ]
        },
        {
          id: 'model',
          type: 'text',
          label: 'Vehicle model',
          placeholder: 'e.g., Camry, Civic, F-150',
          required: true,
          validation: {
            minLength: 2,
            maxLength: 50
          }
        },
        {
          id: 'ownership',
          type: 'select',
          label: 'Do you own or lease this vehicle?',
          required: true,
          options: [
            { value: 'own', label: 'Own' },
            { value: 'lease', label: 'Lease' },
            { value: 'finance', label: 'Financed' }
          ]
        }
      ]
    },
    {
      id: 'driver-info',
      title: 'Driver information',
      questions: [
        {
          id: 'birth-year',
          type: 'number',
          label: 'Your birth year',
          required: true,
          validation: {
            min: 1920,
            max: 2008,
            message: 'Driver must be at least 16 years old'
          }
        },
        {
          id: 'gender',
          type: 'select',
          label: 'Gender',
          required: true,
          helpText: 'Used for rate calculation',
          options: [
            { value: 'male', label: 'Male' },
            { value: 'female', label: 'Female' },
            { value: 'other', label: 'Other' }
          ]
        },
        {
          id: 'marital-status',
          type: 'select',
          label: 'Marital status',
          required: true,
          options: [
            { value: 'single', label: 'Single' },
            { value: 'married', label: 'Married' },
            { value: 'divorced', label: 'Divorced' },
            { value: 'widowed', label: 'Widowed' }
          ]
        },
        {
          id: 'experience',
          type: 'select',
          label: 'Years of driving experience',
          required: true,
          options: [
            { value: 'new', label: 'Less than 1 year' },
            { value: '1-3', label: '1-3 years' },
            { value: '4-6', label: '4-6 years' },
            { value: '7-9', label: '7-9 years' },
            { value: '10+', label: '10+ years' }
          ]
        }
      ]
    },
    {
      id: 'coverage-history',
      title: 'Coverage and driving history',
      questions: [
        {
          id: 'currently-insured',
          type: 'boolean',
          label: 'Are you currently insured?',
          required: true
        },
        {
          id: 'accidents',
          type: 'select',
          label: 'Accidents or claims in the past 3 years',
          required: true,
          options: [
            { value: '0', label: 'None' },
            { value: '1', label: '1 incident' },
            { value: '2', label: '2 incidents' },
            { value: '3+', label: '3 or more incidents' }
          ]
        },
        {
          id: 'violations',
          type: 'select',
          label: 'Traffic violations in the past 3 years',
          required: true,
          options: [
            { value: '0', label: 'None' },
            { value: '1', label: '1 violation' },
            { value: '2+', label: '2 or more violations' }
          ]
        },
        {
          id: 'credit',
          type: 'select',
          label: 'Credit rating',
          required: true,
          helpText: 'This affects your rate in most states',
          options: [
            { value: 'excellent', label: 'Excellent (720+)' },
            { value: 'good', label: 'Good (660-719)' },
            { value: 'fair', label: 'Fair (600-659)' },
            { value: 'poor', label: 'Poor (below 600)' }
          ]
        }
      ]
    }
  ]
};

// Home Insurance Template
export const homeInsuranceTemplate: QuoteTemplate = {
  serviceId: 'home-insurance',
  serviceName: 'Home Insurance',
  serviceSlug: 'home-insurance',
  vertical: 'insurance',
  estimatedTime: '3 minutes',
  icon: 'pi-home',
  
  steps: [
    {
      id: 'property-info',
      title: 'About your property',
      questions: [
        {
          id: 'property-type',
          type: 'select',
          label: 'Property type',
          required: true,
          options: [
            { value: 'single-family', label: 'Single-family home' },
            { value: 'condo', label: 'Condo' },
            { value: 'townhouse', label: 'Townhouse' },
            { value: 'multi-family', label: 'Multi-family (2-4 units)' },
            { value: 'mobile', label: 'Mobile/manufactured home' }
          ]
        },
        {
          id: 'year-built',
          type: 'number',
          label: 'Year home was built',
          required: true,
          validation: {
            min: 1800,
            max: 2025,
            message: 'Please enter a valid year'
          }
        },
        {
          id: 'square-feet',
          type: 'number',
          label: 'Square footage',
          required: true,
          helpText: 'Approximate is fine',
          validation: {
            min: 400,
            max: 20000,
            message: 'Please enter a valid square footage'
          }
        },
        {
          id: 'stories',
          type: 'select',
          label: 'Number of stories',
          required: true,
          options: [
            { value: '1', label: '1 story' },
            { value: '1.5', label: '1.5 stories' },
            { value: '2', label: '2 stories' },
            { value: '3+', label: '3+ stories' }
          ]
        },
        {
          id: 'bedrooms',
          type: 'number',
          label: 'Number of bedrooms',
          required: true,
          validation: {
            min: 0,
            max: 20
          }
        },
        {
          id: 'bathrooms',
          type: 'number',
          label: 'Number of bathrooms',
          required: true,
          validation: {
            min: 1,
            max: 15
          }
        }
      ]
    },
    {
      id: 'features',
      title: 'Property features',
      questions: [
        {
          id: 'roof-type',
          type: 'select',
          label: 'Roof type',
          required: true,
          options: [
            { value: 'asphalt', label: 'Asphalt shingles' },
            { value: 'metal', label: 'Metal' },
            { value: 'tile', label: 'Tile' },
            { value: 'wood', label: 'Wood shake' },
            { value: 'other', label: 'Other' },
            { value: 'unknown', label: 'Not sure' }
          ]
        },
        {
          id: 'roof-age',
          type: 'select',
          label: 'Roof age',
          required: true,
          options: [
            { value: '0-5', label: '0-5 years' },
            { value: '6-10', label: '6-10 years' },
            { value: '11-15', label: '11-15 years' },
            { value: '16-20', label: '16-20 years' },
            { value: '20+', label: 'Over 20 years' },
            { value: 'unknown', label: 'Not sure' }
          ]
        },
        {
          id: 'security-features',
          type: 'multiselect',
          label: 'Security features',
          required: false,
          helpText: 'Select all that apply - may qualify for discounts',
          options: [
            { value: 'alarm', label: 'Security alarm' },
            { value: 'cameras', label: 'Security cameras' },
            { value: 'deadbolts', label: 'Deadbolt locks' },
            { value: 'smoke', label: 'Smoke detectors' },
            { value: 'fire', label: 'Fire alarm/sprinklers' },
            { value: 'gated', label: 'Gated community' }
          ]
        }
      ]
    }
  ]
};

// Final Expense Insurance Template
export const finalExpenseTemplate: QuoteTemplate = {
  serviceId: 'final-expense',
  serviceName: 'Final Expense Insurance',
  serviceSlug: 'final-expense',
  vertical: 'insurance',
  estimatedTime: '2 minutes',
  icon: 'pi-heart',
  
  // Call Now configuration - shown after form completion
  callNow: {
    enabled: true,
    phoneNumber: '(888) 555-0123',
    urgencyMessage: 'Special offer expires in 3 hours - Call now to lock in your rate!',
    agentMessage: 'We have 2 licensed insurance agents available right now to take your call.',
    showTimer: true,
    timerMinutes: 180, // 3 hours
    buttonText: 'CALL NOW TO COMPLETE',
    skipButtonText: "I'll call later"
  },
  
  steps: [
    {
      id: 'applicant-info',
      title: 'Tell us about yourself',
      description: 'This information helps us find the best coverage options for you',
      questions: [
        {
          id: 'age',
          type: 'number',
          label: 'Your age',
          required: true,
          helpText: 'Final expense insurance is typically for ages 45-85',
          validation: {
            min: 45,
            max: 85,
            message: 'Age must be between 45 and 85'
          }
        },
        {
          id: 'gender',
          type: 'select',
          label: 'Gender',
          required: true,
          options: [
            { value: 'male', label: 'Male' },
            { value: 'female', label: 'Female' }
          ]
        },
        {
          id: 'tobacco-use',
          type: 'boolean',
          label: 'Do you currently use tobacco products?',
          required: true,
          helpText: 'This affects your premium but you can still get coverage'
        },
        {
          id: 'height-feet',
          type: 'number',
          label: 'Height (feet)',
          required: true,
          validation: {
            min: 3,
            max: 8
          }
        },
        {
          id: 'height-inches',
          type: 'number',
          label: 'Height (inches)',
          required: true,
          validation: {
            min: 0,
            max: 11
          }
        },
        {
          id: 'weight',
          type: 'number',
          label: 'Weight (lbs)',
          required: true,
          validation: {
            min: 80,
            max: 500,
            message: 'Please enter your weight in pounds'
          }
        }
      ]
    },
    {
      id: 'health-info',
      title: 'Health information',
      description: 'Quick questions to determine eligibility - most conditions are covered',
      questions: [
        {
          id: 'health-conditions',
          type: 'multiselect',
          label: 'Do you have any of these conditions? (Select all that apply)',
          required: false,
          helpText: 'Having conditions doesn\'t automatically disqualify you',
          options: [
            { value: 'diabetes', label: 'Diabetes' },
            { value: 'heart', label: 'Heart disease or heart attack' },
            { value: 'cancer', label: 'Cancer (past 2 years)' },
            { value: 'copd', label: 'COPD or emphysema' },
            { value: 'stroke', label: 'Stroke' },
            { value: 'kidney', label: 'Kidney disease' },
            { value: 'none', label: 'None of the above' }
          ]
        },
        {
          id: 'medications',
          type: 'select',
          label: 'How many prescription medications do you take regularly?',
          required: true,
          options: [
            { value: '0', label: 'None' },
            { value: '1-2', label: '1-2 medications' },
            { value: '3-5', label: '3-5 medications' },
            { value: '6+', label: '6 or more medications' }
          ]
        },
        {
          id: 'hospitalized',
          type: 'boolean',
          label: 'Have you been hospitalized in the past 12 months?',
          required: true
        }
      ]
    },
    {
      id: 'coverage-details',
      title: 'Coverage preferences',
      questions: [
        {
          id: 'coverage-amount',
          type: 'select',
          label: 'How much coverage do you need?',
          required: true,
          helpText: 'Average funeral costs range from $7,000-$12,000',
          options: [
            { value: '5000', label: '$5,000', description: 'Basic coverage' },
            { value: '10000', label: '$10,000', description: 'Most popular - covers average funeral' },
            { value: '15000', label: '$15,000', description: 'Comprehensive coverage' },
            { value: '20000', label: '$20,000', description: 'Maximum coverage with extras' },
            { value: '25000', label: '$25,000+', description: 'Premium coverage' }
          ]
        },
        {
          id: 'purpose',
          type: 'select',
          label: 'Primary purpose for this coverage',
          required: true,
          options: [
            { value: 'funeral', label: 'Cover funeral and burial costs' },
            { value: 'debts', label: 'Pay off remaining debts' },
            { value: 'family', label: 'Leave money for family' },
            { value: 'all', label: 'All of the above' }
          ]
        },
        {
          id: 'timeline',
          type: 'select',
          label: 'When would you like coverage to start?',
          required: true,
          options: [
            { value: 'asap', label: 'As soon as possible' },
            { value: 'month', label: 'Within 30 days' },
            { value: 'research', label: 'Just researching options' }
          ]
        }
      ]
    }
  ]
};

// Export all insurance templates
export const insuranceServiceTemplates = {
  'auto-insurance': autoInsuranceTemplate,
  'home-insurance': homeInsuranceTemplate,
  'final-expense': finalExpenseTemplate,
};
