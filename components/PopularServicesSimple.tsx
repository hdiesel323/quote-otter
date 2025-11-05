"use client";

import React from 'react';
import Link from 'next/link';
import { getPopularCategories } from '@/types/verticals';

const PopularServicesSimple: React.FC = () => {
  // Only show top 6 most popular
  const topServices = getPopularCategories().slice(0, 6);

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Most Requested Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get instant quotes for our most popular services
          </p>
        </div>

        {/* Service Grid - 2 rows of 3 */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
          {topServices.map((service) => (
            <Link
              key={service.id}
              href={`/quotes/${service.slug}`}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-indigo-500"
            >
              {/* Icon */}
              <div className="mb-6 flex justify-center">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center group-hover:from-indigo-600 group-hover:to-purple-600 transition-all duration-300">
                  <i className={`pi ${service.icon} text-4xl text-indigo-600 group-hover:text-white transition-colors`} />
                </div>
              </div>

              {/* Content */}
              <div className="text-center space-y-3">
                <h3 className="text-2xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">
                  {service.name}
                </h3>
                <p className="text-gray-600 leading-relaxed line-clamp-2">
                  {service.description}
                </p>
              </div>

              {/* CTA Arrow */}
              <div className="mt-6 flex items-center justify-center">
                <span className="inline-flex items-center gap-2 text-indigo-600 font-semibold group-hover:gap-3 transition-all">
                  Get Free Quotes
                  <i className="pi pi-arrow-right" />
                </span>
              </div>

              {/* Popular badge */}
              <div className="absolute top-4 right-4">
                <span className="px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-400 text-white text-xs font-bold rounded-full shadow-md">
                  Popular
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA to browse all */}
        <div className="text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-105"
          >
            Browse All 46+ Services
            <i className="pi pi-arrow-right" />
          </Link>
        </div>

        {/* Trust indicators */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center">
          <div>
            <div className="text-4xl font-extrabold text-indigo-600 mb-2">2M+</div>
            <div className="text-sm text-gray-600 font-medium">Happy Customers</div>
          </div>
          <div>
            <div className="text-4xl font-extrabold text-indigo-600 mb-2">5</div>
            <div className="text-sm text-gray-600 font-medium">Quotes in Minutes</div>
          </div>
          <div>
            <div className="text-4xl font-extrabold text-indigo-600 mb-2">40%</div>
            <div className="text-sm text-gray-600 font-medium">Average Savings</div>
          </div>
          <div>
            <div className="text-4xl font-extrabold text-indigo-600 mb-2">4.8★</div>
            <div className="text-sm text-gray-600 font-medium">Customer Rating</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularServicesSimple;
