"use client";

import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';
import { VERTICALS, getAllCategories, type ServiceCategory } from '@/types/verticals';

const UniversalHero: React.FC = () => {
  const [service, setService] = useState<string>('');
  const [zipCode, setZipCode] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<ServiceCategory | null>(null);

  const allCategories = getAllCategories();
  
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
      return;
    }
    if (!service && !selectedCategory) {
      setError('Please tell us what service you need.');
      return;
    }
    
    setError('');
    const searchQuery = selectedCategory ? selectedCategory.name : service;
    alert(`Finding ${searchQuery} professionals in ZIP code ${zipCode}...`);
  };

  const categoryOptions = allCategories.map(cat => ({
    label: `${cat.name} - ${cat.description}`,
    value: cat.id,
    category: cat,
  }));

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
            Get Quotes for
            <br />
            <span className="bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-300 bg-clip-text text-transparent">
              Any Service You Need
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
            From home repairs to insurance, legal help to moving services - compare quotes from trusted professionals.
          </p>
        </div>

        {/* Universal Quote Form */}
        <div className="max-w-4xl mx-auto animate-[scaleIn_0.5s_ease-out_0.3s] opacity-0 [animation-fill-mode:forwards]">
          <div className="bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-white mb-4 text-center">What do you need help with?</h3>
                <div className="space-y-4">
                  {/* Service Search/Select */}
                  <div className="relative">
                    <span className="p-input-icon-left block">
                      <i className="pi pi-search text-gray-400" />
                      <InputText
                        value={service}
                        onChange={(e) => {
                          setService(e.target.value);
                          setSelectedCategory(null);
                        }}
                        placeholder="e.g., Plumber, Auto Insurance, Moving Company..."
                        className="w-full !bg-white/90 !border-white/30 !text-gray-900 text-lg px-12 py-4 rounded-xl"
                      />
                    </span>
                  </div>

                  {/* Or use dropdown */}
                  <div className="text-center">
                    <span className="text-white/80 text-sm">or choose from popular services</span>
                  </div>

                  <Dropdown
                    value={selectedCategory?.id}
                    onChange={(e) => {
                      const cat = allCategories.find(c => c.id === e.value);
                      setSelectedCategory(cat || null);
                      setService('');
                    }}
                    options={categoryOptions}
                    optionLabel="label"
                    placeholder="Select a service..."
                    filter
                    className="w-full"
                    panelClassName="!bg-white/95 backdrop-blur-xl"
                  />

                  {/* ZIP Code Input */}
                  <div className="flex flex-col sm:flex-row gap-4 mt-6">
                    <div className="flex-1">
                      <span className="p-input-icon-left block">
                        <i className="pi pi-map-marker text-gray-400" />
                        <InputText
                          value={zipCode}
                          onChange={handleZipChange}
                          placeholder="ZIP Code"
                          keyfilter="int"
                          maxLength={5}
                          className={`w-full !bg-white/90 !border-white/30 !text-gray-900 text-lg px-12 py-4 rounded-xl ${error ? 'p-invalid' : ''}`}
                        />
                      </span>
                    </div>
                    <Button
                      type="submit"
                      label="Get Free Quotes"
                      className="!bg-gradient-to-r !from-yellow-400 !to-orange-500 !border-0 hover:!from-yellow-500 hover:!to-orange-600 !text-gray-900 !font-bold !text-lg !px-8 !py-4 !rounded-xl !shadow-xl hover:!shadow-2xl transition-all"
                      icon="pi pi-arrow-right"
                      iconPos="right"
                    />
                  </div>
                  {error && <p className="text-red-200 text-sm text-center">{error}</p>}
                </div>
              </div>
            </form>

            {/* Service Categories Grid */}
            <div className="mt-8 pt-8 border-t border-white/20">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {VERTICALS.map((vertical) => (
                  <button
                    key={vertical.id}
                    onClick={() => {
                      // Could navigate to vertical page or filter categories
                      window.location.href = `/services/${vertical.id.toLowerCase()}`;
                    }}
                    className="group flex flex-col items-center p-3 rounded-xl bg-white/10 hover:bg-white/20 transition-all hover:scale-105"
                  >
                    <i className={`pi ${vertical.icon} text-3xl text-white mb-2`} />
                    <span className="text-white text-sm font-semibold text-center">{vertical.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Trust badges */}
            <div className="mt-8 pt-8 border-t border-white/20">
              <div className="flex flex-wrap justify-center items-center gap-8 text-white/80 text-sm">
                <div className="flex items-center gap-2">
                  <i className="pi pi-shield text-green-300 text-xl" />
                  <span>Verified Professionals</span>
                </div>
                <div className="flex items-center gap-2">
                  <i className="pi pi-check-circle text-green-300 text-xl" />
                  <span>100% Free</span>
                </div>
                <div className="flex items-center gap-2">
                  <i className="pi pi-clock text-green-300 text-xl" />
                  <span>2 Min Process</span>
                </div>
                <div className="flex items-center gap-2">
                  <i className="pi pi-star text-green-300 text-xl" />
                  <span>Top Rated Pros</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UniversalHero;
