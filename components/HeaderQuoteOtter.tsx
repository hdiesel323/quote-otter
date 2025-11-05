"use client";

import React from 'react';
import Link from 'next/link';
import { OtterIcon } from './insurance/InsuranceIcons';
import ButtonSignin from './ButtonSignin';

const HeaderQuoteOtter: React.FC = () => {
  return (
    <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center">
            <OtterIcon className="h-8 w-auto text-indigo-600" />
            <span className="ml-2 text-2xl font-bold text-gray-800">
              Quote<span className="text-indigo-600">Otter</span>
            </span>
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/services" className="text-gray-600 hover:text-indigo-600 font-semibold transition-colors">
              Browse Services
            </Link>
            <Link href="/#how-it-works" className="text-gray-600 hover:text-indigo-600 transition-colors">
              How It Works
            </Link>
            <Link href="/#features" className="text-gray-600 hover:text-indigo-600 transition-colors">
              Features
            </Link>
            <Link href="/#faq" className="text-gray-600 hover:text-indigo-600 transition-colors">
              FAQ
            </Link>
            <Link 
              href="/dashboard" 
              className="px-6 py-2.5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all shadow-md hover:shadow-lg"
            >
              Join as Pro
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderQuoteOtter;
