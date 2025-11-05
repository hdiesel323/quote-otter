'use client';

import { InputText } from 'primereact/inputtext';
import { InputMask } from 'primereact/inputmask';

interface ContactInfo {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

interface ContactInfoStepProps {
  value: ContactInfo;
  onChange: (value: ContactInfo) => void;
  errors: Record<string, string>;
}

export default function ContactInfoStep({ value, onChange, errors }: ContactInfoStepProps) {
  const handleChange = (field: keyof ContactInfo, newValue: string) => {
    onChange({ ...value, [field]: newValue });
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
          Almost Done! 🎉
        </h2>
        <p className="text-gray-600">
          Enter your contact information so providers can send you quotes
        </p>
      </div>

      {/* First Name */}
      <div>
        <label htmlFor="firstName" className="block text-lg font-medium text-gray-900 mb-2">
          First Name <span className="text-red-500">*</span>
        </label>
        <InputText
          id="firstName"
          value={value.firstName || ''}
          onChange={(e) => handleChange('firstName', e.target.value)}
          placeholder="John"
          className={`w-full ${errors.firstName ? 'p-invalid' : ''}`}
        />
        {errors.firstName && (
          <small className="text-red-500 mt-1 block">{errors.firstName}</small>
        )}
      </div>

      {/* Last Name */}
      <div>
        <label htmlFor="lastName" className="block text-lg font-medium text-gray-900 mb-2">
          Last Name <span className="text-red-500">*</span>
        </label>
        <InputText
          id="lastName"
          value={value.lastName || ''}
          onChange={(e) => handleChange('lastName', e.target.value)}
          placeholder="Smith"
          className={`w-full ${errors.lastName ? 'p-invalid' : ''}`}
        />
        {errors.lastName && (
          <small className="text-red-500 mt-1 block">{errors.lastName}</small>
        )}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-lg font-medium text-gray-900 mb-2">
          Email Address <span className="text-red-500">*</span>
        </label>
        <InputText
          id="email"
          type="email"
          value={value.email || ''}
          onChange={(e) => handleChange('email', e.target.value)}
          placeholder="john.smith@example.com"
          className={`w-full ${errors.email ? 'p-invalid' : ''}`}
        />
        {errors.email && (
          <small className="text-red-500 mt-1 block">{errors.email}</small>
        )}
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="phone" className="block text-lg font-medium text-gray-900 mb-2">
          Phone Number <span className="text-red-500">*</span>
        </label>
        <InputMask
          id="phone"
          mask="(999) 999-9999"
          value={value.phone || ''}
          onChange={(e) => handleChange('phone', e.value || '')}
          placeholder="(555) 123-4567"
          className={`w-full ${errors.phone ? 'p-invalid' : ''}`}
        />
        {errors.phone && (
          <small className="text-red-500 mt-1 block">{errors.phone}</small>
        )}
        <p className="text-sm text-gray-600 mt-1">
          We&apos;ll use this to send you quotes and updates
        </p>
      </div>

      {/* Privacy Notice */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-6">
        <p className="text-sm text-gray-700">
          <strong>Your privacy is protected.</strong> By submitting, you agree to our 
          <a href="/terms" className="text-indigo-600 hover:underline">Terms of Service</a> and{' '}
          <a href="/privacy" className="text-indigo-600 hover:underline">Privacy Policy</a>.
          We&apos;ll share your information with verified providers to generate your quotes.
        </p>
      </div>
    </div>
  );
}
