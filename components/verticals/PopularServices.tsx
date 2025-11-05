import React from 'react';
import Link from 'next/link';
import { getPopularCategories } from '@/types/verticals';

const PopularServices: React.FC = () => {
  const popularCategories = getPopularCategories();

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-[fadeInUp_0.8s_ease-out]">
          <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Popular Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get free quotes from top-rated professionals in your area
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {popularCategories.map((category) => (
            <Link
              key={category.id}
              href={`/quotes/${category.slug}`}
              className="group relative p-6 rounded-xl border-2 border-gray-200 bg-white hover:border-indigo-500 hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <div className="flex flex-col items-center space-y-3 text-center">
                <div className="w-16 h-16 rounded-full bg-indigo-100 flex items-center justify-center group-hover:bg-indigo-600 transition-colors">
                  <i className={`pi ${category.icon} text-2xl text-indigo-600 group-hover:text-white`} />
                </div>
                <h3 className="font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">
                  {category.name}
                </h3>
                <p className="text-sm text-gray-600">
                  {category.description}
                </p>
              </div>
              <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                <i className="pi pi-arrow-right text-indigo-600" />
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold rounded-xl hover:from-indigo-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl"
          >
            View All Services
            <i className="pi pi-arrow-right" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PopularServices;
