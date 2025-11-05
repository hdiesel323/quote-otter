'use client';

import type { CallNowConfig } from '@/types/quote-templates';

interface CallNowStepSimpleProps {
  config: CallNowConfig;
  serviceName: string;
  onComplete?: () => void;
}

/**
 * Simplified Call Now component for minimal design preference
 * Can be embedded in thank-you page or as final form step
 */
export default function CallNowStepSimple({ 
  config, 
  serviceName,
  onComplete 
}: CallNowStepSimpleProps) {
  const handleCall = () => {
    
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'call_now_clicked', {
        service: serviceName,
        phone: config.phoneNumber
      });
    }

    window.location.href = `tel:${config.phoneNumber}`;
    
    setTimeout(() => {
      onComplete?.();
    }, 2000);
  };

  return (
    <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-8 text-white text-center shadow-2xl">
      <div className="mb-4">
        <div className="inline-block bg-white text-green-600 rounded-full p-3 mb-3">
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold mb-2">
          ✅ You&apos;re Next in Line!
        </h3>
        <p className="text-green-100 text-lg mb-1">
          {config.agentMessage || "We have 2 agents available right now to take your call."}
        </p>
        {config.urgencyMessage && (
          <p className="text-yellow-300 font-bold text-sm">
            ⚡ {config.urgencyMessage}
          </p>
        )}
      </div>

      <a
        href={`tel:${config.phoneNumber}`}
        onClick={handleCall}
        className="block w-full bg-white text-green-600 hover:bg-green-50 font-bold text-xl py-4 px-6 rounded-xl transition-all transform hover:scale-105 shadow-lg mb-3"
      >
        📞 {config.buttonText || 'CALL NOW'}: {config.phoneNumber}
      </a>

      <p className="text-green-100 text-sm">
        Call now to expedite your service and secure your {serviceName} quote
      </p>
    </div>
  );
}
