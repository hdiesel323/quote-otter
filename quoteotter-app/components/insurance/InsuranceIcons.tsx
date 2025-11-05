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

export const OtterIcon: React.FC<{ className?: string }> = ({ className = "w-8 h-8" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 5C8.68629 5 6 7.68629 6 11C6 14.3137 8.68629 17 12 17C15.3137 17 18 14.3137 18 11C18 7.68629 15.3137 5 12 5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 17V20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M9 20H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M9 8.5C9.27614 8.5 9.5 8.27614 9.5 8C9.5 7.72386 9.27614 7.5 9 7.5C8.72386 7.5 8.5 7.72386 8.5 8C8.5 8.27614 8.72386 8.5 9 8.5Z" fill="currentColor"/>
    <path d="M15 8.5C15.2761 8.5 15.5 8.27614 15.5 8C15.5 7.72386 15.2761 7.5 15 7.5C14.7239 7.5 14.5 7.72386 14.5 8C14.5 8.27614 14.7239 8.5 15 8.5Z" fill="currentColor"/>
    <path d="M12 13C12.8284 13 13.5 12.3284 13.5 11.5C13.5 10.6716 12.8284 10 12 10C11.1716 10 10.5 10.6716 10.5 11.5C10.5 12.3284 11.1716 13 12 13Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M10 14.5C10.6667 15 11.3333 15.1667 12 15C12.6667 14.8333 13.3333 14.3333 14 13.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
