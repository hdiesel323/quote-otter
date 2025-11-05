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
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-[fadeInUp_0.8s_ease-out]">
          <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4">
            How It Works
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">Getting a quote is as easy as 1-2-3.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Step
            icon={<span className="text-4xl font-bold">1</span>}
            title="Fill Out Our Form"
            description="Provide some basic information about your needs. It&apos;s fast, secure, and hassle-free."
          />
          <Step
            icon={<span className="text-4xl font-bold">2</span>}
            title="Compare Quotes"
            description="We instantly match you with top insurance providers, showing you side-by-side quotes."
          />
          <Step
            icon={<span className="text-4xl font-bold">3</span>}
            title="Choose & Save"
            description="Select the best plan for you and start saving. We&apos;ll connect you to seal the deal."
          />
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
