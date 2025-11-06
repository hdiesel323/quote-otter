import React from 'react';
import HeaderQuoteOtter from "@/components/HeaderQuoteOtter";
import FooterQuoteOtter from "@/components/FooterQuoteOtter";
import ServiceZipForm from "@/components/ServiceZipForm";
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Final Expense Insurance Quotes - Compare Rates | QuoteOtter',
  description: 'Get affordable final expense insurance quotes. No medical exam required for ages 45-85. Coverage from $5,000-$25,000. Compare rates and apply in minutes.',
};

export default function FinalExpensePage() {
  return (
    <>
      <HeaderQuoteOtter />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-indigo-700 via-purple-700 to-pink-600 text-white py-20">
        {/* Background pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2YzAgMi4yMTItMS43ODggNC00IDRzLTQtMS43ODgtNC00IDEuNzg4LTQgNC00IDQgMS43ODggNCA0eiIvPjwvZz48L2c+PC9zdmc+')] opacity-20"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
              Protect Your Family with Final Expense Insurance
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Affordable coverage to help your loved ones with funeral and burial costs.
              No medical exam • Ages 45-85 • Coverage up to $25,000
            </p>
            
            {/* Trust indicators */}
            <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm">
              <div className="flex items-center gap-2">
                <i className="pi pi-check-circle text-green-300 text-xl" />
                <span>No Medical Exam Required</span>
              </div>
              <div className="flex items-center gap-2">
                <i className="pi pi-shield text-green-300 text-xl" />
                <span>Guaranteed Acceptance</span>
              </div>
              <div className="flex items-center gap-2">
                <i className="pi pi-lock text-green-300 text-xl" />
                <span>Fixed Premiums</span>
              </div>
            </div>

            <ServiceZipForm 
              serviceSlug="final-expense"
              buttonText="Get Your Free Quote"
              buttonColor="bg-white text-indigo-600 hover:bg-gray-100"
            />
          </div>
        </div>
      </section>

      {/* Why Final Expense Insurance */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
              Why Final Expense Insurance?
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-blue-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Average Funeral Costs</h3>
                <div className="space-y-3 text-gray-700">
                  <div className="flex justify-between">
                    <span>Basic service fees</span>
                    <span className="font-semibold">$2,300</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Casket</span>
                    <span className="font-semibold">$2,500</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Embalming & preparation</span>
                    <span className="font-semibold">$1,500</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Facility & staff</span>
                    <span className="font-semibold">$2,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Transportation</span>
                    <span className="font-semibold">$800</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Burial plot & headstone</span>
                    <span className="font-semibold">$3,000</span>
                  </div>
                  <div className="border-t-2 border-blue-200 pt-3 flex justify-between text-xl font-bold text-indigo-600">
                    <span>Total Average Cost</span>
                    <span>$12,100</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-center space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
                    <i className="pi pi-heart text-indigo-600 text-xl" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Protect Your Loved Ones</h4>
                    <p className="text-gray-600">Don&apos;t leave your family with unexpected expenses during an already difficult time.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <i className="pi pi-check-circle text-green-600 text-xl" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Easy Approval</h4>
                    <p className="text-gray-600">Most policies require no medical exam. Guaranteed acceptance available for ages 45-85.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <i className="pi pi-money-bill text-purple-600 text-xl" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Affordable Coverage</h4>
                    <p className="text-gray-600">Premiums start as low as $30-50/month for $10,000 coverage. Fixed rates that never increase.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <Link
                href="/quotes/final-expense/request"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold text-lg rounded-xl transition-all shadow-lg hover:shadow-xl"
              >
                Get Free Quotes Now
                <i className="pi pi-arrow-right" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Coverage Options */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
              Choose Your Coverage Amount
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-center">
                  <div className="text-4xl font-bold text-indigo-600 mb-2">$5,000</div>
                  <div className="text-gray-500 mb-4">Basic Coverage</div>
                  <div className="mb-6">
                    <span className="text-2xl font-bold text-gray-900">$30-40</span>
                    <span className="text-gray-600">/month</span>
                  </div>
                  <ul className="text-left space-y-3 mb-6">
                    <li className="flex items-start gap-2">
                      <i className="pi pi-check text-green-600 mt-1" />
                      <span className="text-gray-700">Covers basic funeral expenses</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <i className="pi pi-check text-green-600 mt-1" />
                      <span className="text-gray-700">Most affordable option</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <i className="pi pi-check text-green-600 mt-1" />
                      <span className="text-gray-700">Quick approval</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-br from-indigo-600 to-purple-600 text-white rounded-2xl p-8 shadow-xl transform scale-105 relative">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <span className="bg-yellow-400 text-gray-900 px-4 py-1 rounded-full text-sm font-bold">
                    Most Popular
                  </span>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">$10,000</div>
                  <div className="text-blue-100 mb-4">Standard Coverage</div>
                  <div className="mb-6">
                    <span className="text-2xl font-bold">$50-70</span>
                    <span className="text-blue-100">/month</span>
                  </div>
                  <ul className="text-left space-y-3 mb-6">
                    <li className="flex items-start gap-2">
                      <i className="pi pi-check mt-1" />
                      <span>Covers average funeral costs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <i className="pi pi-check mt-1" />
                      <span>Helps with burial expenses</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <i className="pi pi-check mt-1" />
                      <span>Peace of mind for family</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-center">
                  <div className="text-4xl font-bold text-indigo-600 mb-2">$25,000</div>
                  <div className="text-gray-500 mb-4">Premium Coverage</div>
                  <div className="mb-6">
                    <span className="text-2xl font-bold text-gray-900">$100-150</span>
                    <span className="text-gray-600">/month</span>
                  </div>
                  <ul className="text-left space-y-3 mb-6">
                    <li className="flex items-start gap-2">
                      <i className="pi pi-check text-green-600 mt-1" />
                      <span className="text-gray-700">Maximum coverage</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <i className="pi pi-check text-green-600 mt-1" />
                      <span className="text-gray-700">Covers all expenses plus extras</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <i className="pi pi-check text-green-600 mt-1" />
                      <span className="text-gray-700">Leave inheritance for family</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center bg-white rounded-xl p-6 shadow-md">
              <p className="text-gray-700 mb-4">
                <strong>Note:</strong> Rates shown are estimates for healthy non-smokers. Your actual rate depends on age, health, and coverage amount.
              </p>
              <Link
                href="/quotes/final-expense/request"
                className="text-indigo-600 hover:text-indigo-700 font-semibold"
              >
                Get your personalized quote →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
              Get Covered in 3 Simple Steps
            </h2>

            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-indigo-600 text-white rounded-full flex items-center justify-center text-2xl font-bold">
                  1
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Answer a Few Questions</h3>
                  <p className="text-gray-600 text-lg">
                    Tell us about yourself and your coverage needs. Takes less than 2 minutes - no lengthy forms or medical exams.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-indigo-600 text-white rounded-full flex items-center justify-center text-2xl font-bold">
                  2
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Compare Quotes</h3>
                  <p className="text-gray-600 text-lg">
                    We&apos;ll instantly match you with top-rated insurers. See rates side-by-side and choose the best option for your budget.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-indigo-600 text-white rounded-full flex items-center justify-center text-2xl font-bold">
                  3
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Get Covered</h3>
                  <p className="text-gray-600 text-lg">
                    Speak with a licensed agent to finalize your policy. Most applications are approved immediately and coverage starts right away.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <Link
                href="/quotes/final-expense/request"
                className="inline-flex items-center gap-2 px-10 py-5 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold text-xl rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-105"
              >
                Start Your Free Quote
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
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">What is final expense insurance?</h3>
                <p className="text-gray-700">
                  Final expense insurance (also called burial insurance) is a small whole life policy designed to cover funeral and burial costs. It provides a death benefit of $5,000-$25,000 to help your family with end-of-life expenses.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Who is eligible?</h3>
                <p className="text-gray-700">
                  Most final expense policies are available for ages 45-85. Many policies offer guaranteed acceptance with no medical exam required. Even if you have health conditions, you can typically qualify.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">How much does it cost?</h3>
                <p className="text-gray-700">
                  Premiums typically range from $30-150/month depending on your age, coverage amount, and health. Rates are fixed and will never increase. The younger you apply, the lower your premium.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Do I need a medical exam?</h3>
                <p className="text-gray-700">
                  Most final expense policies do NOT require a medical exam. You&apos;ll answer a few health questions, but there are no blood tests, physicals, or doctor visits needed.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">When does coverage start?</h3>
                <p className="text-gray-700">
                  Coverage typically begins immediately upon approval. Some guaranteed acceptance policies have a 2-year waiting period for natural causes, but accidental death is covered from day one.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-br from-indigo-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Protect Your Loved Ones?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Get your free quote in 2 minutes and see how affordable peace of mind can be.
            </p>
            <Link
              href="/quotes/final-expense/request"
              className="inline-flex items-center gap-2 px-10 py-5 bg-white text-indigo-600 font-bold text-xl rounded-xl hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl hover:scale-105"
            >
              Get Your Free Quote Now
              <i className="pi pi-arrow-right" />
            </Link>
            <p className="mt-6 text-sm text-blue-200">
              Over 50,000 families trust QuoteOtter • 4.9★ rating • 100% free service
            </p>
          </div>
        </div>
      </section>

      <FooterQuoteOtter />
    </>
  );
}
