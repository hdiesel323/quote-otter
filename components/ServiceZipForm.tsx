'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

interface ServiceZipFormProps {
  serviceSlug: string;
  buttonText?: string;
  buttonColor?: string;
}

export default function ServiceZipForm({ 
  serviceSlug, 
  buttonText = 'Get Your Free Quotes',
  buttonColor = 'bg-orange-500 hover:bg-orange-600'
}: ServiceZipFormProps) {
  const router = useRouter();
  const [zipCode, setZipCode] = useState('');
  const [error, setError] = useState('');
  const [isValidating, setIsValidating] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!zipCode || zipCode.length !== 5) {
      setError('Please enter a valid 5-digit ZIP code');
      return;
    }

    setIsValidating(true);
    setError('');
    
    // Validate ZIP code
    try {
      const response = await fetch(`https://api.zippopotam.us/us/${zipCode}`);
      if (response.ok) {
        const data = await response.json();
        const place = data.places[0];
        router.push(`/quotes/${serviceSlug}/request?zip=${zipCode}&city=${encodeURIComponent(place['place name'])}&state=${place['state abbreviation']}`);
      } else {
        setError('Invalid ZIP code');
        setIsValidating(false);
      }
    } catch (err) {
      setError('Invalid ZIP code');
      setIsValidating(false);
    }
  };

  const handleZipChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '');
    if (value.length <= 5) {
      setZipCode(value);
      setError('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto">
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="flex-1">
          <InputText
            value={zipCode}
            onChange={handleZipChange}
            placeholder="Enter your ZIP code"
            className="w-full px-6 py-4 text-lg rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none"
            maxLength={5}
            disabled={isValidating}
          />
        </div>
        <Button
          type="submit"
          label={isValidating ? 'Validating...' : buttonText}
          loading={isValidating}
          disabled={isValidating || zipCode.length !== 5}
          className={`${buttonColor} text-white font-bold px-8 py-4 rounded-xl text-lg transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap`}
          icon={isValidating ? undefined : 'pi pi-arrow-right'}
          iconPos="right"
        />
      </div>
      {error && (
        <p className="mt-2 text-red-200 text-sm">{error}</p>
      )}
      <p className="mt-3 text-sm opacity-80 text-center">
        Takes 2 minutes • Compare 3-5 quotes • 100% free
      </p>
    </form>
  );
}
