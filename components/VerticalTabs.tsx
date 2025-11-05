"use client";

import React, { useState } from 'react';
import { VERTICALS, type Vertical, type ServiceCategory } from '@/types/verticals';
import Link from 'next/link';

const VerticalTabs: React.FC = () => {
  const [activeVertical, setActiveVertical] = useState<Vertical>(VERTICALS[0]);

  const verticalColors: Record<string, string> = {
    home: 'from-blue-500 to-cyan-500',
    insurance: 'from-purple-500 to-pink-500',
    moving: 'from-orange-500 to-red-500',
    legal: 'from-indigo-500 to-purple-500',
    financial: 'from-green-500 to-emerald-500',
    auto: 'from-red-500 to-rose-500',
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Browse by Category
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose your service type and find the perfect professional
          </p>
        </div>

        {/* Vertical Tabs */}
        <div className="max-w-6xl mx-auto mb-12">
          {/* Tab buttons */}
          <div className="flex overflow-x-auto gap-2 mb-8 pb-2 border-b-2 border-gray-200 scrollbar-hide">
            {VERTICALS.map((vertical) => {
              const isActive = activeVertical.id === vertical.id;
              return (
                <button
                  key={vertical.id}
                  onClick={() => setActiveVertical(vertical)}
                  className={`
                    flex items-center gap-3 px-6 py-4 rounded-t-xl font-bold text-lg whitespace-nowrap transition-all
                    ${isActive 
                      ? 'bg-white text-indigo-600 border-b-4 border-indigo-600 shadow-lg -mb-[2px]' 
                      : 'bg-gray-50 text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                    }
                  `}
                >
                  <i className={`pi ${vertical.icon} text-2xl`} />
                  <span>{vertical.name}</span>
                </button>
              );
            })}
          </div>

          {/* Tab content */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-100">
            {/* Vertical description */}
            <div className="mb-8 text-center">
              <h3 className="text-3xl font-bold text-gray-900 mb-3">
                {activeVertical.name} Services
              </h3>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                {activeVertical.description}
              </p>
            </div>

            {/* Service cards */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {activeVertical.categories.map((category: ServiceCategory) => (
                <Link
                  key={category.id}
                  href={`/quotes/${category.slug}`}
                  className="group relative bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl border-2 border-gray-200 hover:border-indigo-400 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  {/* Icon */}
                  <div className="mb-4 flex justify-center">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${verticalColors[activeVertical.id] || 'from-indigo-500 to-purple-500'} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <i className={`pi ${category.icon} text-3xl text-white`} />
                    </div>
                  </div>

                  {/* Title */}
                  <h4 className="font-bold text-gray-900 text-center mb-2 group-hover:text-indigo-600 transition-colors">
                    {category.name}
                  </h4>

                  {/* Arrow icon */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <i className="pi pi-arrow-right text-indigo-600" />
                  </div>
                </Link>
              ))}
            </div>

            {/* View all link */}
            <div className="mt-8 text-center">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-700 font-semibold text-lg group"
              >
                View all {activeVertical.name} services
                <i className="pi pi-arrow-right transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VerticalTabs;
