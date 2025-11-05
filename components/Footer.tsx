import React from 'react';
import { OtterIcon } from './common/Icons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-gray-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-6 md:mb-0">
            <OtterIcon className="h-8 w-auto text-indigo-500" />
            <span className="ml-2 text-2xl font-bold">
              Quote<span className="text-indigo-500">Otter</span>
            </span>
          </div>
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            <a href="#" className="hover:text-white transition-colors">About Us</a>
            <a href="#" className="hover:text-white transition-colors">Careers</a>
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </nav>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} QuoteOtter. All Rights Reserved.</p>
          <p className="mt-2">
            QuoteOtter is an insurance comparison shopping website. We are not an insurance agency and do not provide insurance.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;