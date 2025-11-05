import React, { useState } from 'react';
import { Card } from 'primereact/card';
import { SelectButton, SelectButtonChangeEvent } from 'primereact/selectbutton';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import type { InsuranceType } from '../types';
import { InsuranceCategory } from '../types';
import { INSURANCE_TYPES, ICONS_MAP } from '../constants.ts';

const Hero: React.FC = () => {
  const [selectedType, setSelectedType] = useState<InsuranceCategory>(InsuranceCategory.Auto);
  const [zipCode, setZipCode] = useState<string>('');
  const [error, setError] = useState<string>('');

  const handleZipChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, ''); // Allow only digits
    if (value.length <= 5) {
      setZipCode(value);
      if (error) setError('');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (zipCode.length !== 5) {
      setError('Please enter a valid 5-digit ZIP code.');
    } else {
      setError('');
      // In a real app, you would navigate to the next step or submit the data.
      alert(`Finding ${selectedType} quotes for ZIP code ${zipCode}...`);
    }
  };

  const insuranceOptionTemplate = (option: InsuranceType) => {
    const IconComponent = ICONS_MAP[option.iconId];
    if (!IconComponent) return null;

    return (
        <div className="flex flex-col items-center p-3 w-24" role="presentation">
            <IconComponent className="w-10 h-10 mb-2" />
            <span className="font-semibold">{option.label}</span>
        </div>
    );
  };

  return (
    <div className="relative bg-gray-800 text-white pt-24 pb-32">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20" 
        style={{ backgroundImage: "url('https://picsum.photos/1600/900?grayscale&blur=2')" }}>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-800/80 to-gray-800/50"></div>
      
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4">
          Compare Insurance Quotes. <br /> Save Big with QuoteOtter.
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-12">
          Enter your ZIP code to get started. We'll help you find the best rates from top providers in minutes.
        </p>

        <Card className="max-w-4xl mx-auto shadow-2xl" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255, 255, 255, 0.2)' }}>
          <div className="p-1 md:p-4">
            <h3 className="text-xl font-semibold mb-6 text-gray-100" id="insurance-type-label">1. Select Insurance Type</h3>
            <div className="flex justify-center">
              <SelectButton
                value={selectedType}
                onChange={(e: SelectButtonChangeEvent) => {
                  if (e.value !== null) {
                    setSelectedType(e.value);
                  }
                }}
                options={INSURANCE_TYPES}
                optionLabel="label"
                optionValue="id"
                itemTemplate={insuranceOptionTemplate}
                aria-labelledby="insurance-type-label"
              />
            </div>
            
            <h3 className="text-xl font-semibold mt-8 mb-6 text-gray-100">2. Enter Your ZIP Code</h3>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-start sm:items-center justify-center gap-4">
              <div className="w-full sm:w-auto flex-grow sm:flex-grow-0 sm:w-64">
                <span className="p-input-icon-left w-full">
                  <i className="pi pi-map-marker" />
                  <InputText
                    value={zipCode}
                    onChange={handleZipChange}
                    placeholder="Enter ZIP Code"
                    keyfilter="int"
                    maxLength={5}
                    className={`w-full p-inputtext-lg ${error ? 'p-invalid' : ''}`}
                    aria-describedby="zip-error"
                  />
                </span>
                {error && <p id="zip-error" className="text-red-300 text-sm mt-2 text-left">{error}</p>}
              </div>
              <Button
                type="submit"
                label="Get My Quotes"
                className="p-button-lg p-button-warning w-full sm:w-auto"
                icon="pi pi-arrow-right"
                iconPos="right"
              />
            </form>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Hero;