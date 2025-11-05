import React from 'react';

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