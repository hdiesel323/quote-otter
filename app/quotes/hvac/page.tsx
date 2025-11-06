import React from 'react';
import HeaderQuoteOtter from "@/components/HeaderQuoteOtter";
import FooterQuoteOtter from "@/components/FooterQuoteOtter";
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'HVAC Services Quotes - Heating & Cooling Repair | QuoteOtter',
  description: 'Get free HVAC quotes for AC repair, furnace installation, heat pump service & more. Compare 3-5 local HVAC contractors. Licensed technicians. Save up to 30%.',
};

export default function HVACPage() {
  return (
    <>
      <HeaderQuoteOtter />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-700 via-cyan-600 to-teal-600 text-white py-20">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2YzAgMi4yMTItMS43ODggNC00IDRzLTQtMS43ODgtNC00IDEuNzg4LTQgNC00IDQgMS43ODggNCA0eiIvPjwvZz48L2c+PC9zdmc+')] opacity-20"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
              Get Free HVAC Quotes from Licensed Technicians
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-cyan-100">
              AC repair, furnace installation, heat pump service & more.
              Same-day service available • Licensed & insured • Upfront pricing
            </p>
            
            {/* Trust indicators */}
            <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm">
              <div className="flex items-center gap-2">
                <i className="pi pi-check-circle text-green-300 text-xl" />
                <span>24/7 Emergency Service</span>
              </div>
              <div className="flex items-center gap-2">
                <i className="pi pi-star-fill text-yellow-300 text-xl" />
                <span>Top-Rated Technicians</span>
              </div>
              <div className="flex items-center gap-2">
                <i className="pi pi-shield text-green-300 text-xl" />
                <span>Licensed & Insured</span>
              </div>
            </div>

            <Link
              href="/?service=hvac#quote-form"
              className="inline-flex items-center gap-2 px-10 py-5 bg-white text-blue-600 font-bold text-lg rounded-xl hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl hover:scale-105"
            >
              Get Your Free Quote
              <i className="pi pi-arrow-right" />
            </Link>
            
            <p className="mt-4 text-sm text-cyan-200">
              Takes 2 minutes • Compare 3-5 contractors • No obligation
            </p>
          </div>
        </div>
      </section>

      {/* Average HVAC Costs */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
              Average HVAC Service Costs
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-blue-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Typical HVAC Pricing</h3>
                <div className="space-y-3 text-gray-700">
                  <div className="flex justify-between">
                    <span>AC repair (avg)</span>
                    <span className="font-semibold">$300 - $800</span>
                  </div>
                  <div className="flex justify-between">
                    <span>New AC unit installed</span>
                    <span className="font-semibold">$3,500 - $7,500</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Furnace repair</span>
                    <span className="font-semibold">$200 - $600</span>
                  </div>
                  <div className="flex justify-between">
                    <span>New furnace installed</span>
                    <span className="font-semibold">$2,800 - $6,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Heat pump installation</span>
                    <span className="font-semibold">$4,000 - $8,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Duct cleaning</span>
                    <span className="font-semibold">$300 - $500</span>
                  </div>
                  <div className="border-t-2 border-blue-200 pt-3 flex justify-between text-xl font-bold text-blue-600">
                    <span>Full System Replacement</span>
                    <span>$5,000 - $12,000</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-center space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <i className="pi pi-dollar text-blue-600 text-xl" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Save on Energy Bills</h4>
                    <p className="text-gray-600">New energy-efficient systems can cut your heating and cooling costs by 20-40% annually.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <i className="pi pi-clock text-green-600 text-xl" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Fast Response Time</h4>
                    <p className="text-gray-600">Many HVAC contractors offer same-day service for emergencies. Get your system running again quickly.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <i className="pi pi-star-fill text-purple-600 text-xl" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Expert Technicians</h4>
                    <p className="text-gray-600">All contractors are EPA-certified, licensed, and experienced with all major HVAC brands.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <Link
                href="/?service=hvac#quote-form"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-bold text-lg rounded-xl transition-all shadow-lg hover:shadow-xl"
              >
                Compare HVAC Quotes Now
                <i className="pi pi-arrow-right" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* HVAC Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
              HVAC Services We Cover
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl p-6 shadow-md">
                <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-4">
                  <i className="pi pi-sun text-cyan-600 text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Air Conditioning</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <i className="pi pi-check text-green-600 mt-1" />
                    <span>AC repair & maintenance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <i className="pi pi-check text-green-600 mt-1" />
                    <span>Central AC installation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <i className="pi pi-check text-green-600 mt-1" />
                    <span>Ductless mini-splits</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <i className="pi pi-check text-green-600 mt-1" />
                    <span>AC tune-ups & inspections</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-md">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <i className="pi pi-bolt text-orange-600 text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Heating Systems</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <i className="pi pi-check text-green-600 mt-1" />
                    <span>Furnace repair & replacement</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <i className="pi pi-check text-green-600 mt-1" />
                    <span>Heat pump installation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <i className="pi pi-check text-green-600 mt-1" />
                    <span>Boiler service</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <i className="pi pi-check text-green-600 mt-1" />
                    <span>Heating system tune-ups</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-md">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <i className="pi pi-cog text-purple-600 text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Maintenance & Repair</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <i className="pi pi-check text-green-600 mt-1" />
                    <span>Annual HVAC maintenance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <i className="pi pi-check text-green-600 mt-1" />
                    <span>Emergency repairs 24/7</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <i className="pi pi-check text-green-600 mt-1" />
                    <span>Filter replacement</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <i className="pi pi-check text-green-600 mt-1" />
                    <span>System diagnostics</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-md">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <i className="pi pi-wrench text-green-600 text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Ductwork & Air Quality</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <i className="pi pi-check text-green-600 mt-1" />
                    <span>Duct cleaning & sealing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <i className="pi pi-check text-green-600 mt-1" />
                    <span>Air purifier installation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <i className="pi pi-check text-green-600 mt-1" />
                    <span>Humidifier/dehumidifier</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <i className="pi pi-check text-green-600 mt-1" />
                    <span>Ventilation improvements</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
              Get HVAC Service in 3 Simple Steps
            </h2>

            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold">
                  1
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Describe Your HVAC Need</h3>
                  <p className="text-gray-600 text-lg">
                    Tell us what you need: AC not cooling? Furnace making noise? Time for a new system? Takes just 2 minutes.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold">
                  2
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Get Matched with Local Pros</h3>
                  <p className="text-gray-600 text-lg">
                    We connect you with 3-5 licensed HVAC contractors in your area. All are EPA-certified and background-checked.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold">
                  3
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Compare & Book Service</h3>
                  <p className="text-gray-600 text-lg">
                    Review quotes, check ratings, and schedule service with your preferred contractor. Many offer same-day appointments!
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <Link
                href="/?service=hvac#quote-form"
                className="inline-flex items-center gap-2 px-10 py-5 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold text-xl rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-105"
              >
                Get Free HVAC Quotes
                <i className="pi pi-arrow-right" />
              </Link>
              <p className="mt-4 text-gray-600">
                🔒 Your information is secure • No obligation • 100% free
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
              Common HVAC Questions
            </h2>

            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">How often should I service my HVAC system?</h3>
                <p className="text-gray-700">
                  Have your AC serviced in spring and your heating system in fall. Annual tune-ups prevent breakdowns, improve efficiency, and extend your system&apos;s lifespan. Most contractors offer maintenance plans.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">When should I replace vs. repair my HVAC system?</h3>
                <p className="text-gray-700">
                  If your system is over 15 years old, needs frequent repairs, or costs over 50% of replacement value to fix, replacement is usually smarter. New systems are much more energy-efficient and can save you $50-100/month on utilities.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">What size HVAC system do I need?</h3>
                <p className="text-gray-700">
                  System size depends on your home&apos;s square footage, insulation, windows, and climate. A professional contractor will do a load calculation to determine the right size. Bigger isn&apos;t always better—oversized systems waste energy.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">How long does HVAC installation take?</h3>
                <p className="text-gray-700">
                  Most installations take 1-3 days. A simple AC or furnace swap might be done in a day, while a full system replacement with ductwork modifications can take 2-3 days.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Do you charge for HVAC quotes?</h3>
                <p className="text-gray-700">
                  No! QuoteOtter is completely free for homeowners. The contractors you connect with typically offer free estimates as well. You only pay when you decide to hire someone.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-br from-blue-600 to-cyan-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Fix Your Heating or Cooling System?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Get free quotes from licensed HVAC contractors in your area. Many offer same-day service!
            </p>
            <Link
              href="/?service=hvac#quote-form"
              className="inline-flex items-center gap-2 px-10 py-5 bg-white text-blue-600 font-bold text-xl rounded-xl hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl hover:scale-105"
            >
              Get Free Quotes Now
              <i className="pi pi-arrow-right" />
            </Link>
            <p className="mt-6 text-sm text-blue-200">
              Join 50,000+ homeowners who trust QuoteOtter for HVAC service
            </p>
          </div>
        </div>
      </section>

      <FooterQuoteOtter />
    </>
  );
}
