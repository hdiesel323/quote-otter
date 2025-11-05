# Quote Flow Engine - Architecture

## Overview
Dynamic, template-driven quote request system that handles different service types with custom questions and flows.

## Core Concept
```
Service Category → Template → Dynamic Questions → Contact Info → Results
```

## Architecture

### 1. Service Templates
Each service vertical has a template defining:
- Question types and order
- Validation rules
- Conditional logic
- Required vs optional fields
- Next step routing

### 2. Question Types
Reusable question components:
- Multiple choice
- Text input
- Number input
- Date picker
- File upload (photos)
- Address input
- Scale/slider
- Checkbox list

### 3. Flow Engine
Stateful form manager that:
- Loads appropriate template
- Renders questions dynamically
- Validates responses
- Saves progress
- Routes between steps
- Submits to backend

## Template Structure

```typescript
interface QuoteTemplate {
  serviceId: string;
  serviceName: string;
  vertical: 'home' | 'insurance' | 'moving' | 'legal' | 'financial' | 'auto';
  
  steps: QuoteStep[];
  
  // Optional: conditional logic
  conditionalRouting?: (answers: Record<string, any>) => string; // next step ID
}

interface QuoteStep {
  id: string;
  title: string;
  description?: string;
  questions: Question[];
  skipIf?: (answers: Record<string, any>) => boolean;
}

interface Question {
  id: string;
  type: 'text' | 'select' | 'multiselect' | 'number' | 'date' | 'file' | 'address' | 'scale';
  label: string;
  placeholder?: string;
  required: boolean;
  options?: Array<{value: string; label: string}>; // for select/multiselect
  validation?: {
    min?: number;
    max?: number;
    pattern?: string;
    message?: string;
  };
  helpText?: string;
  dependsOn?: {
    questionId: string;
    value: any;
  };
}
```

## Example Templates

### Home Services Template (Roofing)
```typescript
{
  serviceId: 'roofing',
  serviceName: 'Roofing',
  vertical: 'home',
  steps: [
    {
      id: 'project-details',
      title: 'Tell us about your roofing project',
      questions: [
        {
          id: 'work-type',
          type: 'select',
          label: 'What type of work do you need?',
          required: true,
          options: [
            { value: 'repair', label: 'Repair' },
            { value: 'replacement', label: 'Full replacement' },
            { value: 'inspection', label: 'Inspection' },
            { value: 'maintenance', label: 'Maintenance' }
          ]
        },
        {
          id: 'roof-size',
          type: 'select',
          label: 'Approximate square footage?',
          required: true,
          options: [
            { value: 'small', label: 'Under 1,500 sq ft' },
            { value: 'medium', label: '1,500-3,000 sq ft' },
            { value: 'large', label: 'Over 3,000 sq ft' },
            { value: 'unknown', label: 'Not sure' }
          ]
        },
        {
          id: 'timeline',
          type: 'select',
          label: 'When do you need the work done?',
          required: true,
          options: [
            { value: 'emergency', label: 'Emergency (ASAP)' },
            { value: 'week', label: 'Within a week' },
            { value: 'month', label: 'Within a month' },
            { value: 'flexible', label: 'Flexible' }
          ]
        },
        {
          id: 'description',
          type: 'text',
          label: 'Describe the work needed',
          placeholder: 'Any additional details...',
          required: false
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
          label: 'Property type',
          required: true,
          options: [
            { value: 'single-family', label: 'Single-family home' },
            { value: 'multi-family', label: 'Multi-family home' },
            { value: 'commercial', label: 'Commercial building' }
          ]
        },
        {
          id: 'home-owner',
          type: 'select',
          label: 'Are you the property owner?',
          required: true,
          options: [
            { value: 'yes', label: 'Yes' },
            { value: 'no', label: 'No, I\'m a renter/manager' }
          ]
        }
      ]
    }
  ]
}
```

### Insurance Template (Auto)
```typescript
{
  serviceId: 'auto-insurance',
  serviceName: 'Auto Insurance',
  vertical: 'insurance',
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
          validation: { min: 1980, max: 2025 }
        },
        {
          id: 'make',
          type: 'select',
          label: 'Make',
          required: true,
          options: [
            { value: 'toyota', label: 'Toyota' },
            { value: 'honda', label: 'Honda' },
            { value: 'ford', label: 'Ford' },
            // ... more
          ]
        },
        {
          id: 'model',
          type: 'text',
          label: 'Model',
          required: true
        }
      ]
    },
    {
      id: 'driver-info',
      title: 'Driver information',
      questions: [
        {
          id: 'age',
          type: 'number',
          label: 'Your age',
          required: true,
          validation: { min: 16, max: 100 }
        },
        {
          id: 'experience',
          type: 'select',
          label: 'Years of driving experience',
          required: true,
          options: [
            { value: 'new', label: 'Less than 1 year' },
            { value: '1-3', label: '1-3 years' },
            { value: '4-9', label: '4-9 years' },
            { value: '10+', label: '10+ years' }
          ]
        },
        {
          id: 'accidents',
          type: 'select',
          label: 'Accidents in past 3 years?',
          required: true,
          options: [
            { value: '0', label: 'None' },
            { value: '1', label: '1' },
            { value: '2+', label: '2 or more' }
          ]
        }
      ]
    }
  ]
}
```

### Moving Services Template
```typescript
{
  serviceId: 'full-service-movers',
  serviceName: 'Full Service Movers',
  vertical: 'moving',
  steps: [
    {
      id: 'move-details',
      title: 'Moving details',
      questions: [
        {
          id: 'move-type',
          type: 'select',
          label: 'What type of move?',
          required: true,
          options: [
            { value: 'local', label: 'Local (same city)' },
            { value: 'long-distance', label: 'Long distance' },
            { value: 'international', label: 'International' }
          ]
        },
        {
          id: 'from-zip',
          type: 'text',
          label: 'Moving from (ZIP)',
          required: true,
          validation: { pattern: '^\\d{5}$' }
        },
        {
          id: 'to-zip',
          type: 'text',
          label: 'Moving to (ZIP)',
          required: true,
          validation: { pattern: '^\\d{5}$' }
        },
        {
          id: 'move-date',
          type: 'date',
          label: 'Preferred move date',
          required: true
        }
      ]
    },
    {
      id: 'home-size',
      title: 'Home size and items',
      questions: [
        {
          id: 'home-size',
          type: 'select',
          label: 'Current home size',
          required: true,
          options: [
            { value: 'studio', label: 'Studio/1BR' },
            { value: '2br', label: '2 Bedroom' },
            { value: '3br', label: '3 Bedroom' },
            { value: '4br+', label: '4+ Bedroom' }
          ]
        },
        {
          id: 'heavy-items',
          type: 'multiselect',
          label: 'Heavy/special items?',
          required: false,
          options: [
            { value: 'piano', label: 'Piano' },
            { value: 'pool-table', label: 'Pool table' },
            { value: 'safe', label: 'Safe' },
            { value: 'artwork', label: 'Large artwork' }
          ]
        }
      ]
    }
  ]
}
```

## File Structure

```
/types/
  quote-templates.ts          # Template interfaces
  
/lib/
  quote-templates/
    index.ts                   # Template registry
    home-services.ts           # All home service templates
    insurance-services.ts      # All insurance templates
    moving-services.ts         # Moving templates
    legal-services.ts          # Legal templates
    financial-services.ts      # Financial templates
    auto-services.ts           # Auto templates
  
/components/
  quote-flow/
    QuoteFlowEngine.tsx        # Main flow orchestrator
    StepRenderer.tsx           # Renders steps dynamically
    QuestionRenderer.tsx       # Renders questions by type
    ProgressBar.tsx            # Shows progress
    StepNavigation.tsx         # Back/Next buttons
    
  questions/
    TextQuestion.tsx           # Text input
    SelectQuestion.tsx         # Dropdown
    MultiSelectQuestion.tsx    # Checkboxes
    NumberQuestion.tsx         # Number input
    DateQuestion.tsx           # Date picker
    FileQuestion.tsx           # File upload
    AddressQuestion.tsx        # Address autocomplete
    ScaleQuestion.tsx          # 1-10 slider
    
/app/
  quotes/
    [slug]/
      page.tsx                 # Redirects to request
      request/
        page.tsx               # Quote request flow
```

## Benefits

1. **Easy to Add Services**
   - Just create new template config
   - No code changes to flow engine
   - Template = configuration, not code

2. **Consistent UX**
   - Same components across all services
   - Familiar flow for users
   - Easy to maintain

3. **Flexible**
   - Conditional logic per service
   - Skip steps based on answers
   - Different questions per service

4. **Scalable**
   - Add 100 services without code changes
   - Central template registry
   - Easy A/B testing

5. **Maintainable**
   - Templates are data, not JSX
   - Can be stored in DB later
   - Can be edited by non-devs

## Next Steps

1. Create template type definitions
2. Build template registry with initial templates
3. Create QuoteFlowEngine component
4. Build question renderer components
5. Create quote request pages
6. Add provider matching logic
7. Create confirmation/results page
