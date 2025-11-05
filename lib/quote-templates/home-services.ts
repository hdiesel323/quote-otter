import { QuoteTemplate } from '@/types/quote-templates';

// Roofing Template
export const roofingTemplate: QuoteTemplate = {
  serviceId: 'roofing',
  serviceName: 'Roofing',
  serviceSlug: 'roofing',
  vertical: 'home',
  estimatedTime: '2 minutes',
  icon: 'pi-home',
  
  // Call Now configuration
  callNow: {
    enabled: true,
    phoneNumber: '(888) 555-ROOF',
    urgencyMessage: 'Limited contractor availability - Call in the next 2 hours for priority scheduling!',
    agentMessage: '3 certified roofing specialists are standing by.',
    showTimer: true,
    timerMinutes: 120, // 2 hours
    buttonText: 'CALL NOW FOR PRIORITY SERVICE'
  },
  
  steps: [
    {
      id: 'project-details',
      title: 'Tell us about your roofing project',
      description: 'Help us understand your needs so we can match you with the right professionals',
      questions: [
        {
          id: 'work-type',
          type: 'select',
          label: 'What type of roofing work do you need?',
          required: true,
          options: [
            { value: 'repair', label: 'Repair existing roof', description: 'Fix leaks, replace damaged shingles' },
            { value: 'replacement', label: 'Full roof replacement', description: 'Replace entire roof system' },
            { value: 'inspection', label: 'Inspection only', description: 'Assess condition and provide estimate' },
            { value: 'maintenance', label: 'Maintenance', description: 'Cleaning, minor repairs' },
            { value: 'new-construction', label: 'New construction', description: 'Roof for new building' }
          ]
        },
        {
          id: 'roof-size',
          type: 'select',
          label: 'What is the approximate square footage of your roof?',
          required: true,
          helpText: 'Typical homes are 1,500-3,000 sq ft',
          options: [
            { value: 'small', label: 'Under 1,500 sq ft', description: 'Small home or garage' },
            { value: 'medium', label: '1,500-3,000 sq ft', description: 'Average home' },
            { value: 'large', label: '3,000-5,000 sq ft', description: 'Large home' },
            { value: 'xlarge', label: 'Over 5,000 sq ft', description: 'Very large or commercial' },
            { value: 'unknown', label: 'Not sure', description: 'Contractor can measure' }
          ]
        },
        {
          id: 'timeline',
          type: 'select',
          label: 'When do you need the work completed?',
          required: true,
          options: [
            { value: 'emergency', label: 'Emergency (ASAP)', description: 'Active leak or damage' },
            { value: 'week', label: 'Within a week' },
            { value: 'month', label: 'Within a month' },
            { value: '3-months', label: 'Within 3 months' },
            { value: 'flexible', label: 'Flexible timing', description: 'Planning ahead' }
          ]
        },
        {
          id: 'description',
          type: 'textarea',
          label: 'Additional details (optional)',
          placeholder: 'Describe any specific issues, concerns, or requirements...',
          required: false,
          validation: {
            maxLength: 500
          }
        }
      ]
    },
    {
      id: 'property-details',
      title: 'Property information',
      questions: [
        {
          id: 'property-type',
          type: 'select',
          label: 'What type of property is this?',
          required: true,
          options: [
            { value: 'single-family', label: 'Single-family home' },
            { value: 'multi-family', label: 'Multi-family home (duplex, triplex)' },
            { value: 'condo', label: 'Condo or townhouse' },
            { value: 'commercial', label: 'Commercial building' },
            { value: 'other', label: 'Other' }
          ]
        },
        {
          id: 'home-owner',
          type: 'boolean',
          label: 'Are you the property owner?',
          required: true,
          helpText: 'We need to know if you can authorize the work'
        }
      ]
    }
  ]
};

// Plumbing Template
export const plumbingTemplate: QuoteTemplate = {
  serviceId: 'plumbing',
  serviceName: 'Plumbing',
  serviceSlug: 'plumbing',
  vertical: 'home',
  estimatedTime: '2 minutes',
  icon: 'pi-wrench',
  
  steps: [
    {
      id: 'issue-details',
      title: 'What plumbing service do you need?',
      questions: [
        {
          id: 'service-type',
          type: 'select',
          label: 'Type of plumbing work',
          required: true,
          options: [
            { value: 'repair', label: 'Repair', description: 'Fix leaks, clogs, or broken fixtures' },
            { value: 'installation', label: 'Installation', description: 'Install new fixtures or appliances' },
            { value: 'inspection', label: 'Inspection', description: 'Camera inspection or assessment' },
            { value: 'maintenance', label: 'Maintenance', description: 'Routine service or cleaning' },
            { value: 'emergency', label: 'Emergency', description: 'Urgent issue needing immediate help' }
          ]
        },
        {
          id: 'issue-location',
          type: 'multiselect',
          label: 'Where is the issue located?',
          required: true,
          helpText: 'Select all that apply',
          options: [
            { value: 'kitchen', label: 'Kitchen' },
            { value: 'bathroom', label: 'Bathroom' },
            { value: 'basement', label: 'Basement' },
            { value: 'outside', label: 'Outside/Exterior' },
            { value: 'utility', label: 'Utility room' },
            { value: 'multiple', label: 'Multiple locations' },
            { value: 'unknown', label: 'Not sure' }
          ]
        },
        {
          id: 'urgency',
          type: 'select',
          label: 'How urgent is this?',
          required: true,
          options: [
            { value: 'emergency', label: 'Emergency - Water damage happening now' },
            { value: 'urgent', label: 'Urgent - Need help within 24 hours' },
            { value: 'soon', label: 'Soon - Within a few days' },
            { value: 'flexible', label: 'Flexible - Can schedule in advance' }
          ]
        },
        {
          id: 'description',
          type: 'textarea',
          label: 'Describe the issue',
          placeholder: 'What is happening? When did it start? Any other details...',
          required: true,
          validation: {
            minLength: 20,
            maxLength: 500,
            message: 'Please provide at least 20 characters describing the issue'
          }
        }
      ]
    }
  ]
};

// HVAC Template
export const hvacTemplate: QuoteTemplate = {
  serviceId: 'hvac',
  serviceName: 'HVAC',
  serviceSlug: 'hvac',
  vertical: 'home',
  estimatedTime: '2 minutes',
  icon: 'pi-sun',
  
  steps: [
    {
      id: 'service-needed',
      title: 'What HVAC service do you need?',
      questions: [
        {
          id: 'service-type',
          type: 'select',
          label: 'Type of service',
          required: true,
          options: [
            { value: 'repair', label: 'Repair existing system' },
            { value: 'install', label: 'Install new system' },
            { value: 'replacement', label: 'Replace existing system' },
            { value: 'maintenance', label: 'Maintenance/tune-up' },
            { value: 'inspection', label: 'Inspection or estimate' }
          ]
        },
        {
          id: 'system-type',
          type: 'multiselect',
          label: 'Which systems need service?',
          required: true,
          helpText: 'Select all that apply',
          options: [
            { value: 'ac', label: 'Air conditioning' },
            { value: 'heating', label: 'Heating' },
            { value: 'both', label: 'Both AC and heating' },
            { value: 'ductwork', label: 'Ductwork' },
            { value: 'thermostat', label: 'Thermostat' },
            { value: 'ventilation', label: 'Ventilation' }
          ]
        },
        {
          id: 'timeline',
          type: 'select',
          label: 'When do you need service?',
          required: true,
          options: [
            { value: 'emergency', label: 'Emergency - System not working' },
            { value: 'asap', label: 'ASAP - Within 24-48 hours' },
            { value: 'week', label: 'Within a week' },
            { value: 'month', label: 'Within a month' },
            { value: 'flexible', label: 'Flexible - Planning ahead' }
          ]
        },
        {
          id: 'home-size',
          type: 'select',
          label: 'Home size',
          required: true,
          helpText: 'This helps estimate system requirements',
          options: [
            { value: 'small', label: 'Under 1,500 sq ft' },
            { value: 'medium', label: '1,500-2,500 sq ft' },
            { value: 'large', label: '2,500-4,000 sq ft' },
            { value: 'xlarge', label: 'Over 4,000 sq ft' }
          ]
        },
        {
          id: 'description',
          type: 'textarea',
          label: 'Additional details',
          placeholder: 'Describe the problem, system age, or any other relevant information...',
          required: false,
          validation: {
            maxLength: 500
          }
        }
      ]
    }
  ]
};

// Export all home service templates
export const homeServiceTemplates = {
  roofing: roofingTemplate,
  plumbing: plumbingTemplate,
  hvac: hvacTemplate,
};
