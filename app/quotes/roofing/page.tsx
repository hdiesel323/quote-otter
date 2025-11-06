import React from 'react';
import HeaderQuoteOtter from "@/components/HeaderQuoteOtter";
import FooterQuoteOtter from "@/components/FooterQuoteOtter";
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Roofing Services Quotes - Compare Local Contractors | QuoteOtter',
  description: 'Get free roofing quotes from top-rated contractors. Roof repair, replacement, inspection & maintenance. Compare 3-5 estimates and save up to 30%. Licensed & insured pros.',
};

export default function RoofingPage() {
  return (
    <>
      <HeaderQuoteOtter />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 text-white py-20">
        {/* Background pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2YzAgMi4yMTItMS43ODggNC00IDRzLTQtMS43ODgtNC00IDEuNzg4LTQgNC00IDQgMS43ODggNCA0eiIvPjwvZz48L2c+PC9zdmc+')] opacity-20"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
              Get Free Roofing Quotes from Top Local Contractors
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-slate-200">
              Compare estimates for roof repair, replacement, or maintenance.
              Licensed pros • Free quotes • No obligation • Save up to 30%
            </p>
            
            {/* Trust indicators */}
            <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm">
              <div className="flex items-center gap-2">
                <i className="pi pi-check-circle text-green-400 text-xl" />
                <span>Licensed & Insured</span>
              </div>
              <div className="flex items-center gap-2">
                <i className="pi pi-star-fill text-yellow-400 text-xl" />
                <span>Top-Rated Contractors</span>
              </div>
              <div className="flex items-center gap-2">
                <i className="pi pi-shield text-green-400 text-xl" />
                <span>Background Checked</span>
              </div>
            </div>

            <Link
              href="/?service=roofing#quote-form"
              className="inline-flex items-center gap-2 px-10 py-5 bg-orange-500 hover:bg-orange-600 text-white font-bold text-lg rounded-xl transition-all shadow-lg hover:shadow-xl hover:scale-105"
            >
              Get Your Free Quotes
              <i className="pi pi-arrow-right" />
            </Link>
            
            <p className="mt-4 text-sm text-slate-300">
              Takes 2 minutes • Compare 3-5 contractors • 100% free service
            </p>
          </div>
        </div>
      </section>

      {/* Average Roofing Costs */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
              How Much Does Roofing Cost?
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-slate-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Average Roofing Costs</h3>
                <div className="space-y-3 text-gray-700">
                  <div className="flex justify-between">
                    <span>Asphalt shingle roof</span>
                    <span className="font-semibold">$5,500 - $11,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Metal roof installation</span>
                    <span className="font-semibold">$8,000 - $24,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tile roof replacement</span>
                    <span className="font-semibold">$12,000 - $25,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Roof repair (leak)</span>
                    <span className="font-semibold">$300 - $1,500</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Roof inspection</span>
                    <span className="font-semibold">$100 - $300</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Gutter installation</span>
                    <span className="font-semibold">$800 - $2,500</span>
                  </div>
                  <div className="border-t-2 border-slate-200 pt-3 flex justify-between text-xl font-bold text-orange-600">
                    <span>Full Replacement (avg)</span>
                    <span>$8,000 - $16,000</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-center space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                    <i className="pi pi-dollar text-orange-600 text-xl" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Save Up to 30%</h4>
                    <p className="text-gray-600">Comparing quotes can save you thousands. Get multiple competitive bids and choose the best value.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <i className="pi pi-check-circle text-green-600 text-xl" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Quality Guaranteed</h4>
                    <p className="text-gray-600">All contractors are licensed, insured, and background-checked. Read reviews from real customers.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <i className="pi pi-clock text-blue-600 text-xl" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Fast & Easy</h4>
                    <p className="text-gray-600">Fill out one simple form and receive 3-5 quotes within 24 hours. No phone tag or hassle.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <Link
                href="/?service=roofing#quote-form"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-bold text-lg rounded-xl transition-all shadow-lg hover:shadow-xl"
              >
                Compare Roofing Quotes Now
                <i className="pi pi-arrow-right" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Types of Roofing Services */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
              Roofing Services We Cover
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <i className="pi pi-home text-orange-600 text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Roof Replacement</h3>
                <p className="text-gray-600 mb-4">Complete tear-off and replacement with new shingles, metal, tile, or other materials.</p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <i className="pi pi-check text-green-600 mt-1" />
                    <span>Asphalt shingles</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <i className="pi pi-check text-green-600 mt-1" />
                    <span>Metal roofing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <i className="pi pi-check text-green-600 mt-1" />
                    <span>Tile or slate</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <i className="pi pi-wrench text-blue-600 text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Roof Repair</h3>
                <p className="text-gray-600 mb-4">Fix leaks, damaged shingles, flashing issues, and other roofing problems.</p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <i className="pi pi-check text-green-600 mt-1" />
                    <span>Leak repair</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <i className="pi pi-check text-green-600 mt-1" />
                    <span>Shingle replacement</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <i className="pi pi-check text-green-600 mt-1" />
                    <span>Storm damage</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <i className="pi pi-eye text-purple-600 text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Roof Inspection</h3>
                <p className="text-gray-600 mb-4">Professional assessment of your roof&apos;s condition and lifespan.</p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <i className="pi pi-check text-green-600 mt-1" />
                    <span>Full inspection report</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <i className="pi pi-check text-green-600 mt-1" />
                    <span>Damage assessment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <i className="pi pi-check text-green-600 mt-1" />
                    <span>Cost estimates</span>
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
              How It Works
            </h2>

            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-orange-500 text-white rounded-full flex items-center justify-center text-2xl font-bold">
                  1
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Tell Us About Your Project</h3>
                  <p className="text-gray-600 text-lg">
                    Answer a few quick questions about your roofing needs. What type of work? When do you need it? What&apos;s your timeline?
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-orange-500 text-white rounded-full flex items-center justify-center text-2xl font-bold">
                  2
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Get Matched with Top Contractors</h3>
                  <p className="text-gray-600 text-lg">
                    We connect you with 3-5 licensed, insured, and highly-rated roofing contractors in your area who specialize in your type of project.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-orange-500 text-white rounded-full flex items-center justify-center text-2xl font-bold">
                  3
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Compare & Choose</h3>
                  <p className="text-gray-600 text-lg">
                    Review detailed quotes, read reviews, check credentials, and hire the contractor that best fits your needs and budget.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <Link
                href="/?service=roofing#quote-form"
                className="inline-flex items-center gap-2 px-10 py-5 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold text-xl rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-105"
              >
                Get Free Roofing Quotes
                <i className="pi pi-arrow-right" />
              </Link>
              <p className="mt-4 text-gray-600">
                🔒 Your information is secure • No obligation • Free service
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
              Common Roofing Questions
            </h2>

            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">How long does a roof replacement take?</h3>
                <p className="text-gray-700">
                  Most residential roof replacements take 1-3 days, depending on the size of your home, complexity of the roof, and weather conditions. Simple tear-off and reshingle jobs can often be completed in a single day.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">What type of roofing material should I choose?</h3>
                <p className="text-gray-700">
                  Asphalt shingles are the most popular (affordable, durable, 20-30 year lifespan). Metal roofing lasts 40-70 years but costs more upfront. Tile and slate are premium options. Your contractor can recommend the best option based on your climate, budget, and home style.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">How do I know if I need a repair or replacement?</h3>
                <p className="text-gray-700">
                  Minor issues like a few missing shingles or small leaks can usually be repaired. If your roof is over 20 years old, has widespread damage, or multiple leaks, replacement is often more cost-effective. A professional inspection can help you decide.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Will my homeowners insurance cover roof damage?</h3>
                <p className="text-gray-700">
                  Most policies cover sudden damage from storms, hail, or fallen trees. Gradual wear and tear or poor maintenance typically aren&apos;t covered. Check your policy and consider filing a claim if you have storm damage.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">How much does QuoteOtter cost?</h3>
                <p className="text-gray-700">
                  QuoteOtter is 100% free for homeowners. We never charge you to connect with contractors or get quotes. Our service is funded by contractors who pay to reach customers like you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-br from-slate-800 to-slate-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Get Your Roofing Project Started?
            </h2>
            <p className="text-xl mb-8 text-slate-200">
              Connect with top-rated contractors and get free quotes in minutes.
            </p>
            <Link
              href="/?service=roofing#quote-form"
              className="inline-flex items-center gap-2 px-10 py-5 bg-orange-500 hover:bg-orange-600 text-white font-bold text-xl rounded-xl transition-all shadow-lg hover:shadow-xl hover:scale-105"
            >
              Get Free Quotes Now
              <i className="pi pi-arrow-right" />
            </Link>
            <p className="mt-6 text-sm text-slate-300">
              Join 50,000+ homeowners who found great contractors through QuoteOtter
            </p>
          </div>
        </div>
      </section>

      <FooterQuoteOtter />
    </>
  );
}
