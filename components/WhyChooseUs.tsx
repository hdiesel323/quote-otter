import React from 'react';

const Feature: React.FC<{ icon: string; title: string; description: string }> = ({ icon, title, description }) => (
  <div className="flex items-start space-x-4 p-4">
    <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 bg-indigo-100 text-indigo-600 rounded-lg">
      <i className={`pi ${icon} text-2xl`}></i>
    </div>
    <div>
      <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      <p className="mt-1 text-gray-600">{description}</p>
    </div>
  </div>
);

const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
          <div className="mb-12 lg:mb-0">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
              The Smartest Way to Shop for Insurance
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              QuoteOtter simplifies the insurance shopping experience. We do the heavy lifting so you can make confident decisions without the hassle.
            </p>
          </div>
          <div className="space-y-8">
            <Feature
              icon="pi-bolt"
              title="Fast & Easy"
              description="Our streamlined process gets you personalized quotes in under 5 minutes. No lengthy phone calls, no waiting."
            />
            <Feature
              icon="pi-tag"
              title="Completely Free"
              description="Comparing quotes on QuoteOtter is always 100% free. No hidden fees, no obligations."
            />
            <Feature
              icon="pi-shield"
              title="Trusted & Secure"
              description="We partner with the nation's leading insurance carriers and protect your data with top-tier security."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;