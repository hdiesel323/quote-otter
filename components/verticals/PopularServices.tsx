import React from 'react';
import Link from 'next/link';
import { getPopularCategories } from '@/types/verticals';

const PopularServices: React.FC = () => {
  const popularCategories = getPopularCategories();

  // Split into featured (first 3) and others
  const featuredCategories = popularCategories.slice(0, 3);
  const regularCategories = popularCategories.slice(3);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Compare Quotes for Any Service
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join over 2 million Americans who save time and money with QuoteOtter
          </p>
        </div>

        {/* Featured services - Large cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-8 max-w-5xl mx-auto">
          {featuredCategories.map((category) => (
            <Link
              key={category.id}
              href={`/quotes/${category.slug}`}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              {/* Gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative p-8 flex flex-col items-center text-center space-y-4">
                {/* Icon */}
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                  <i className={`pi ${category.icon} text-4xl text-indigo-600 group-hover:text-white transition-colors`} />
                </div>
                
                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-900 group-hover:text-white transition-colors">
                  {category.name}
                </h3>
                
                {/* Description */}
                <p className="text-gray-600 group-hover:text-white/90 transition-colors line-clamp-2">
                  {category.description}
                </p>

                {/* CTA */}
                <div className="pt-4">
                  <span className="inline-flex items-center gap-2 text-indigo-600 font-semibold group-hover:text-white">
                    Get Quotes
                    <i className="pi pi-arrow-right transform group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>

              {/* Badge */}
              <div className="absolute top-4 right-4">
                <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full group-hover:bg-white/20 group-hover:text-white transition-colors">
                  Popular
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Regular services - Compact cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
          {regularCategories.map((category) => (
            <Link
              key={category.id}
              href={`/quotes/${category.slug}`}
              className="group bg-white rounded-xl p-5 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex flex-col items-center text-center space-y-3">
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center group-hover:from-indigo-600 group-hover:to-purple-600 transition-colors">
                  <i className={`pi ${category.icon} text-2xl text-indigo-600 group-hover:text-white transition-colors`} />
                </div>
                
                {/* Title */}
                <h3 className="font-bold text-gray-900 group-hover:text-indigo-600 transition-colors text-sm leading-tight">
                  {category.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-10 shadow-xl max-w-4xl mx-auto">
          <div className="text-white mb-6">
            <h3 className="text-3xl font-bold mb-3">Need something else?</h3>
            <p className="text-lg text-indigo-100">
              Browse all 46+ services and find the perfect professional for your needs
            </p>
          </div>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-indigo-600 font-bold text-lg rounded-xl hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl hover:scale-105"
          >
            View All Services
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
            <div className="text-4xl font-extrabold text-indigo-600 mb-2">46+</div>
            <div className="text-sm text-gray-600 font-medium">Service Categories</div>
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

export default PopularServices;
