"use client";

import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';
import { getAllCategories, type ServiceCategory } from '@/types/verticals';

const LeadGenHero: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<ServiceCategory | null>(null);
  const [zipCode, setZipCode] = useState<string>('');
  const [error, setError] = useState<string>('');

  const allCategories = getAllCategories();
  
  const categoryOptions = allCategories.map(cat => ({
    label: cat.name,
    value: cat.id,
    category: cat,
  }));

  const handleZipChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '');
    if (value.length <= 5) {
      setZipCode(value);
      if (error) setError('');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedCategory) {
      setError('Please select a service');
      return;
    }
    if (zipCode.length !== 5) {
      setError('Please enter a valid 5-digit ZIP code');
      return;
    }
    
    setError('');
    alert(`Finding ${selectedCategory.name} professionals in ZIP code ${zipCode}...`);
  };

  return (
    <section className="relative bg-gradient-to-br from-blue-700 via-indigo-700 to-purple-800 min-h-[700px] flex items-center overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2YzAgMi4yMTItMS43ODggNC00IDRzLTQtMS43ODgtNC00IDEuNzg4LTQgNC00IDQgMS43ODggNCA0eiIvPjwvZz48L2c+PC9zdmc+')] opacity-30"></div>
      
      {/* Decorative circles */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-purple-300/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Copy */}
            <div className="text-white space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight">
                  When providers compete,
                  <span className="block text-yellow-300">you win.</span>
                </h1>
                <p className="text-xl text-blue-100 leading-relaxed">
                  Compare quotes from top-rated professionals in your area. One simple form gets you up to 5 competitive quotes in minutes.
                </p>
              </div>

              {/* Trust indicators */}
              <div className="flex flex-wrap gap-6 text-sm text-blue-100">
                <div className="flex items-center gap-2">
                  <i className="pi pi-check-circle text-green-300 text-xl" />
                  <span>100% Free Service</span>
                </div>
                <div className="flex items-center gap-2">
                  <i className="pi pi-shield text-green-300 text-xl" />
                  <span>Verified Professionals</span>
                </div>
                <div className="flex items-center gap-2">
                  <i className="pi pi-clock text-green-300 text-xl" />
                  <span>Save Up to 40%</span>
                </div>
              </div>

              {/* Social proof */}
              <div className="pt-6 border-t border-white/20">
                <p className="text-sm text-blue-200 mb-3">Trusted by over 2 million Americans</p>
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 border-2 border-white flex items-center justify-center text-white font-bold text-sm">
                        {String.fromCharCode(64 + i)}
                      </div>
                    ))}
                    <div className="w-10 h-10 rounded-full bg-blue-900 border-2 border-white flex items-center justify-center text-white font-semibold text-xs">
                      +2M
                    </div>
                  </div>
                  <div className="flex text-yellow-300">
                    {'★★★★★'.split('').map((star, i) => (
                      <span key={i} className="text-lg">{star}</span>
                    ))}
                    <span className="ml-2 text-white text-sm">4.8/5</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Form Card */}
            <div className="relative">
              {/* Card */}
              <div className="bg-white rounded-2xl shadow-2xl p-8 relative z-10">
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    Get Free Quotes Now
                  </h2>
                  <p className="text-gray-600">
                    Compare and save in 2 minutes
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Service Selection */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      What service do you need?
                    </label>
                    <Dropdown
                      value={selectedCategory?.id}
                      onChange={(e) => {
                        const cat = allCategories.find(c => c.id === e.value);
                        setSelectedCategory(cat || null);
                      }}
                      options={categoryOptions}
                      placeholder="Select a service..."
                      filter
                      className="w-full !border-2 !border-gray-300 hover:!border-indigo-500 focus:!border-indigo-600"
                      panelClassName="!shadow-xl"
                    />
                  </div>

                  {/* ZIP Code */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Your ZIP Code
                    </label>
                    <InputText
                      value={zipCode}
                      onChange={handleZipChange}
                      placeholder="Enter ZIP"
                      keyfilter="int"
                      maxLength={5}
                      className={`w-full !text-lg !py-3 !border-2 ${error ? '!border-red-500' : '!border-gray-300 hover:!border-indigo-500 focus:!border-indigo-600'}`}
                    />
                    {error && <p className="text-red-600 text-sm mt-1">{error}</p>}
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    label="Get My Free Quotes"
                    className="w-full !bg-gradient-to-r !from-green-500 !to-emerald-600 hover:!from-green-600 hover:!to-emerald-700 !border-0 !text-white !font-bold !text-lg !py-4 !rounded-xl !shadow-lg hover:!shadow-xl !transition-all"
                    icon="pi pi-arrow-right"
                    iconPos="right"
                  />

                  {/* Privacy note */}
                  <p className="text-xs text-gray-500 text-center pt-2">
                    🔒 Your information is secure and will never be sold
                  </p>
                </form>

                {/* Quick links */}
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">
                    Popular Services
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['Plumbing', 'Auto Insurance', 'Moving', 'Roofing'].map((service) => (
                      <button
                        key={service}
                        type="button"
                        onClick={() => {
                          const cat = allCategories.find(c => c.name.toLowerCase().includes(service.toLowerCase()));
                          if (cat) setSelectedCategory(cat);
                        }}
                        className="px-3 py-1.5 text-xs font-medium text-indigo-600 bg-indigo-50 rounded-full hover:bg-indigo-100 transition-colors"
                      >
                        {service}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Decorative element behind card */}
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-pink-400/20 rounded-2xl blur-2xl transform translate-x-4 translate-y-4 -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadGenHero;
