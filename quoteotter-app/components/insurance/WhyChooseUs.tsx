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
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-200/20 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-200/20 rounded-full filter blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
          <div className="mb-12 lg:mb-0 animate-[fadeInUp_0.8s_ease-out]">
            <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-6">
              The Smartest Way to Shop for Insurance
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              QuoteOtter simplifies the insurance shopping experience. We do the heavy lifting so you can make confident decisions without the hassle.
            </p>
          </div>
          <div className="space-y-6 animate-[fadeInUp_0.8s_ease-out_0.2s] opacity-0 [animation-fill-mode:forwards]">
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
              description="We partner with the nation&apos;s leading insurance carriers and protect your data with top-tier security."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
