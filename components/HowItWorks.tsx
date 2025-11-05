import React from 'react';
import { Card } from 'primereact/card';

const Step: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => {
  const header = (
    <div className="flex items-center justify-center w-20 h-20 mx-auto mt-6 mb-2 bg-indigo-100 text-indigo-600 rounded-full">
      {icon}
    </div>
  );

  return (
    <Card header={header} className="text-center shadow-md hover:shadow-xl transition-shadow duration-300">
      <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
      <p className="m-0 text-gray-600">{description}</p>
    </Card>
  );
};

const HowItWorks: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">How It Works</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">Getting a quote is as easy as 1-2-3.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <Step
            icon={<span className="text-4xl font-bold">1</span>}
            title="Fill Out Our Form"
            description="Provide some basic information about your needs. It's fast, secure, and hassle-free."
          />
          <Step
            icon={<span className="text-4xl font-bold">2</span>}
            title="Compare Quotes"
            description="We instantly match you with top insurance providers, showing you side-by-side quotes."
          />
          <Step
            icon={<span className="text-4xl font-bold">3</span>}
            title="Choose & Save"
            description="Select the best plan for you and start saving. We'll connect you to seal the deal."
          />
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;