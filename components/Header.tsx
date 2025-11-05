import React from 'react';
import { OtterIcon } from './common/Icons';

const Header: React.FC = () => {
  return (
    <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <OtterIcon className="h-8 w-auto text-indigo-600" />
            <span className="ml-2 text-2xl font-bold text-gray-800">
              Quote<span className="text-indigo-600">Otter</span>
            </span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors">Auto</a>
            <a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors">Home</a>
            <a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors">Resources</a>
            <a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;