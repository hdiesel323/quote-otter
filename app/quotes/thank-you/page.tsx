import Link from 'next/link';
import { CheckCircle, Phone, Mail, Clock } from 'lucide-react';

interface PageProps {
  searchParams: Promise<{
    service?: string;
    id?: string;
    called?: string;
  }>;
}

export default async function ThankYouPage(props: PageProps) {
  const searchParams = await props.searchParams;
  const { service = 'service', id, called } = searchParams;
  const didCall = called === 'true';

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 py-12">
      <div className="container mx-auto px-4 max-w-3xl">
        {/* Success Card */}
        <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 text-center">
          {/* Success Icon */}
          <div className="inline-flex items-center justify-center w-24 h-24 bg-green-500 rounded-full mb-6">
            <CheckCircle className="w-16 h-16 text-white" />
          </div>

          {/* Heading */}
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {didCall ? 'Thank You for Calling! 🎉' : 'Request Submitted Successfully! 🎉'}
          </h1>
          
          <p className="text-xl text-gray-700 mb-8">
            Your {service} quote request has been received
          </p>

          {id && (
            <div className="bg-gray-100 rounded-lg p-4 mb-8 inline-block">
              <p className="text-sm text-gray-600">Your Quote ID</p>
              <p className="text-2xl font-mono font-bold text-indigo-600">{id}</p>
            </div>
          )}

          {/* What Happens Next */}
          <div className="text-left mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">What Happens Next?</h2>
            
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center">
                    <span className="text-indigo-600 font-bold">1</span>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">We Match You with Providers</h3>
                  <p className="text-gray-600">
                    We&apos;re connecting you with 3-5 qualified {service.toLowerCase()} providers in your area.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center">
                    <span className="text-indigo-600 font-bold">2</span>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Providers Contact You</h3>
                  <p className="text-gray-600">
                    Expect to hear from providers via email, phone, or text within 24 hours.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center">
                    <span className="text-indigo-600 font-bold">3</span>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Compare & Choose</h3>
                  <p className="text-gray-600">
                    Review quotes, ask questions, and select the best provider for your needs.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Info Cards */}
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            <div className="bg-blue-50 rounded-lg p-4">
              <Clock className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <p className="font-semibold text-gray-900">Response Time</p>
              <p className="text-sm text-gray-600">Within 24 hours</p>
            </div>
            <div className="bg-green-50 rounded-lg p-4">
              <Mail className="w-8 h-8 text-green-600 mx-auto mb-2" />
              <p className="font-semibold text-gray-900">Check Your Email</p>
              <p className="text-sm text-gray-600">Confirmation sent</p>
            </div>
            <div className="bg-purple-50 rounded-lg p-4">
              <Phone className="w-8 h-8 text-purple-600 mx-auto mb-2" />
              <p className="font-semibold text-gray-900">Phone Ready</p>
              <p className="text-sm text-gray-600">Providers may call</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              Return to Homepage
            </Link>
            <Link
              href="/services"
              className="bg-white hover:bg-gray-50 text-indigo-600 px-6 py-3 rounded-lg font-semibold border-2 border-indigo-600 transition-colors"
            >
              Get Another Quote
            </Link>
          </div>

          {/* Help Section */}
          <div className="mt-8 pt-8 border-t border-gray-200">
            <p className="text-gray-600">
              Need help or have questions? 
              <a href="/contact" className="text-indigo-600 hover:underline font-semibold">
                Contact our support team
              </a>
            </p>
          </div>
        </div>

        {/* Additional Services Upsell */}
        <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
            Need Quotes for Other Services?
          </h3>
          <p className="text-gray-600 text-center mb-4">
            While you&apos;re here, get quotes for these popular services:
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            <Link
              href="/quotes/roofing"
              className="text-center p-4 rounded-lg border-2 border-gray-200 hover:border-indigo-500 transition-colors"
            >
              <span className="text-2xl mb-2 block">🏠</span>
              <span className="font-semibold">Roofing</span>
            </Link>
            <Link
              href="/quotes/auto-insurance"
              className="text-center p-4 rounded-lg border-2 border-gray-200 hover:border-indigo-500 transition-colors"
            >
              <span className="text-2xl mb-2 block">🚗</span>
              <span className="font-semibold">Auto Insurance</span>
            </Link>
            <Link
              href="/quotes/plumbing"
              className="text-center p-4 rounded-lg border-2 border-gray-200 hover:border-indigo-500 transition-colors"
            >
              <span className="text-2xl mb-2 block">🔧</span>
              <span className="font-semibold">Plumbing</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export const metadata = {
  title: 'Thank You | QuoteOtter',
  description: 'Your quote request has been submitted successfully.',
};
