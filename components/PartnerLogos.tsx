import React from 'react';

const PartnerLogos: React.FC = () => {
  // These are placeholder text logos - in production you'd use actual images
  const partners = [
    { name: "HomeAdvisor", category: "Home Services" },
    { name: "Angie's List", category: "Reviews" },
    { name: "State Farm", category: "Insurance" },
    { name: "Progressive", category: "Insurance" },
    { name: "ServiceMaster", category: "Services" },
    { name: "Allied Van Lines", category: "Moving" },
    { name: "Allstate", category: "Insurance" },
    { name: "Penske", category: "Moving" }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">
            Trusted Network
          </p>
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
            Partnering with Industry Leaders
          </h3>
        </div>

        {/* Logo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto items-center">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-6 bg-white rounded-lg border-2 border-gray-100 hover:border-indigo-200 hover:shadow-md transition-all duration-300 group"
            >
              <div className="text-center">
                {/* Placeholder - replace with actual logo images */}
                <div className="text-2xl font-bold text-gray-400 group-hover:text-indigo-600 transition-colors">
                  {partner.name}
                </div>
                <div className="text-xs text-gray-400 mt-1">
                  {partner.category}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-green-50 rounded-full border-2 border-green-100">
            <i className="pi pi-check-circle text-green-600 text-xl" />
            <span className="text-green-800 font-semibold">
              All providers are pre-screened and verified
            </span>
          </div>
        </div>

        {/* Additional trust copy */}
        <div className="mt-8 text-center max-w-2xl mx-auto">
          <p className="text-gray-600">
            We work with established, reputable companies across every service category. 
            Each provider meets our strict standards for quality, reliability, and customer satisfaction.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PartnerLogos;
