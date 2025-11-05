import React from 'react';

export const CarIcon: React.FC<{ className?: string }> = ({ className = "w-8 h-8" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9L18 10l-2-4H8l-2 4-2.5 1.1C2.7 11.3 2 12.1 2 13v3c0 .6.4 1 1 1h2" />
    <circle cx="7" cy="17" r="2" />
    <path d="M9 17h6" />
    <circle cx="17" cy="17" r="2" />
  </svg>
);

export const HomeIcon: React.FC<{ className?: string }> = ({ className = "w-8 h-8" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" />
  </svg>
);

export const LifeIcon: React.FC<{ className?: string }> = ({ className = "w-8 h-8" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" /><path d="M12 18a6 6 0 0 0 6-6c0-1.5-.5-2.9-1.4-4" /><path d="M12 6a6 6 0 0 0-6 6c0 1.5.5 2.9 1.4 4" /><path d="m14 10-2 2-2-2" /><path d="m10 14 2-2 2 2" />
  </svg>
);

export const RentersIcon: React.FC<{ className?: string }> = ({ className = "w-8 h-8" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m12.48 3.5-4 2A2 2 0 0 0 7.5 7.25V19a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1V7.25a2 2 0 0 0-.98-1.75l-4-2a2 2 0 0 0-2.04 0Z" /><path d="m2.5 10.5 4.18 2.09a2 2 0 0 0 1.82 0L12.5 10.5" /><path d="M12 20v-4.5" /><path d="M7.5 12.25v5.25" /><path d="M21.5 12.25v5.25" />
  </svg>
);
