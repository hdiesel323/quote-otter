"use client";

import React, { useState } from 'react';
import { SelectButton, SelectButtonChangeEvent } from 'primereact/selectbutton';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import type { InsuranceType } from '@/types/insurance';
import { InsuranceCategory } from '@/types/insurance';
import { INSURANCE_TYPES, ICONS_MAP } from '@/lib/insurance-constants';

const HeroGenesisStyle: React.FC = () => {
  const [selectedType, setSelectedType] = useState<InsuranceCategory>(InsuranceCategory.Auto);
  const [zipCode, setZipCode] = useState<string>('');
  const [error, setError] = useState<string>('');

  const handleZipChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '');
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
      alert(`Finding ${selectedType} quotes for ZIP code ${zipCode}...`);
    }
  };

  const insuranceOptionTemplate = (option: InsuranceType) => {
    const IconComponent = ICONS_MAP[option.iconId];
    if (!IconComponent) return null;

    return (
        <div className="flex flex-col items-center p-3 w-24 transition-all hover:scale-110" role="presentation">
            <IconComponent className="w-10 h-10 mb-2" />
            <span className="font-semibold text-sm">{option.label}</span>
        </div>
    );
  };

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full mix-blend-overlay filter blur-3xl animate-[float_8s_ease-in-out_infinite]"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-200 rounded-full mix-blend-overlay filter blur-3xl animate-[float_10s_ease-in-out_infinite_2s]"></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-purple-200 rounded-full mix-blend-overlay filter blur-3xl animate-[float_12s_ease-in-out_infinite_4s]"></div>
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12 animate-[fadeInUp_0.8s_ease-out]">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight">
            Find Your Perfect
            <br />
            <span className="bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-300 bg-clip-text text-transparent">
              Insurance Match
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
            Compare quotes from top providers. Save up to 40% on your insurance in minutes.
          </p>
        </div>

        {/* Quote Form Card */}
        <div className="max-w-4xl mx-auto animate-[scaleIn_0.5s_ease-out_0.3s] opacity-0 [animation-fill-mode:forwards]">
          <div className="bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl p-8 md:p-12">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">Select Insurance Type</h3>
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
                  className="insurance-select-modern"
                />
              </div>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-white mb-4 text-center">Enter Your ZIP Code</h3>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <div className="w-full sm:w-auto">
                    <span className="p-input-icon-left block">
                      <i className="pi pi-map-marker text-gray-400" />
                      <InputText
                        value={zipCode}
                        onChange={handleZipChange}
                        placeholder="ZIP Code"
                        keyfilter="int"
                        maxLength={5}
                        className={`w-full sm:w-64 !bg-white/90 !border-white/30 !text-gray-900 text-lg px-12 py-4 rounded-xl ${error ? 'p-invalid' : ''}`}
                      />
                    </span>
                    {error && <p className="text-red-200 text-sm mt-2">{error}</p>}
                  </div>
                  <Button
                    type="submit"
                    label="Get Free Quotes"
                    className="!bg-gradient-to-r !from-yellow-400 !to-orange-500 !border-0 hover:!from-yellow-500 hover:!to-orange-600 !text-gray-900 !font-bold !text-lg !px-8 !py-4 !rounded-xl !shadow-xl hover:!shadow-2xl transition-all w-full sm:w-auto"
                    icon="pi pi-arrow-right"
                    iconPos="right"
                  />
                </div>
              </div>
            </form>

            {/* Trust badges */}
            <div className="mt-8 pt-8 border-t border-white/20">
              <div className="flex flex-wrap justify-center items-center gap-8 text-white/80 text-sm">
                <div className="flex items-center gap-2">
                  <i className="pi pi-shield text-green-300 text-xl" />
                  <span>Secure & Private</span>
                </div>
                <div className="flex items-center gap-2">
                  <i className="pi pi-check-circle text-green-300 text-xl" />
                  <span>100% Free</span>
                </div>
                <div className="flex items-center gap-2">
                  <i className="pi pi-clock text-green-300 text-xl" />
                  <span>2 Min Process</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroGenesisStyle;
