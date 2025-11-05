import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import WhyChooseUs from './components/WhyChooseUs';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen text-gray-800 font-sans">
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <WhyChooseUs />
      </main>
      <Footer />
    </div>
  );
};

export default App;