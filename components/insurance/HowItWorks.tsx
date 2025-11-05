import React from 'react';

const Step: React.FC<{ 
  number: number; 
  title: string; 
  description: string;
  icon: string;
}> = ({ number, title, description, icon }) => {
  return (
    <div className="relative">
      {/* Connector line - hidden on mobile, shown on desktop */}
      {number < 3 && (
        <div className="hidden md:block absolute top-12 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-indigo-300 to-transparent"></div>
      )}
      
      <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
        {/* Step number badge */}
        <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-indigo-600 to-purple-600 text-white font-bold text-xl rounded-full flex items-center justify-center shadow-lg">
          {number}
        </div>

        {/* Icon */}
        <div className="mb-6 flex justify-center">
          <div className="w-24 h-24 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-2xl flex items-center justify-center">
            <i className={`pi ${icon} text-5xl text-indigo-600`} />
          </div>
        </div>

        {/* Content */}
        <div className="text-center space-y-3">
          <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
          <p className="text-gray-600 leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
};

const HowItWorks: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            How QuoteOtter Works
          </h2>
          <p className="text-xl text-gray-600">
            Compare quotes from top professionals in three simple steps
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 max-w-6xl mx-auto mb-12">
          <Step
            number={1}
            icon="pi-file-edit"
            title="Tell Us What You Need"
            description="Fill out our quick form with details about your service needs. It takes less than 2 minutes."
          />
          <Step
            number={2}
            icon="pi-users"
            title="Get Matched with Pros"
            description="We connect you with up to 5 verified professionals who compete for your business."
          />
          <Step
            number={3}
            icon="pi-check-circle"
            title="Compare & Choose"
            description="Review quotes, read ratings, and select the best professional. Save up to 40%!"
          />
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <button className="px-10 py-5 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-105">
            Get Started - It&apos;s Free
            <i className="pi pi-arrow-right ml-2" />
          </button>
          <p className="mt-4 text-sm text-gray-500">
            No credit card required • 100% free service • Takes 2 minutes
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
