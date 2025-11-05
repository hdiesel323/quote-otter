'use client';

import { useState, useEffect } from 'react';
import { Phone, Clock, Users, CheckCircle, AlertCircle } from 'lucide-react';
import type { CallNowConfig } from '@/types/quote-templates';

interface CallNowStepProps {
  config: CallNowConfig;
  serviceName: string;
  onSkip?: () => void;
  onComplete?: () => void;
}

export default function CallNowStep({ 
  config, 
  serviceName,
  onSkip,
  onComplete 
}: CallNowStepProps) {
  const [timeRemaining, setTimeRemaining] = useState(config.timerMinutes || 180); // Default 3 hours
  const [agentsAvailable, setAgentsAvailable] = useState(2); // Simulated
  const [callClicked, setCallClicked] = useState(false);

  // Countdown timer
  useEffect(() => {
    if (!config.showTimer) return;

    const interval = setInterval(() => {
      setTimeRemaining(prev => {
        if (prev <= 0) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 60000); // Update every minute

    return () => clearInterval(interval);
  }, [config.showTimer]);

  // Simulate agent availability changes
  useEffect(() => {
    const interval = setInterval(() => {
      setAgentsAvailable(Math.floor(Math.random() * 3) + 1); // 1-3 agents
    }, 30000); // Update every 30 seconds

    return () => clearInterval(interval);
  }, []);

  const formatTime = (minutes: number) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    
    if (hours > 0) {
      return `${hours}h ${mins}m`;
    }
    return `${mins} minutes`;
  };

  const handleCall = () => {
    setCallClicked(true);
    
    // Track call click
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'call_now_clicked', {
        service: serviceName,
        phone: config.phoneNumber
      });
    }

    // Open phone dialer
    window.location.href = `tel:${config.phoneNumber}`;
    
    // Mark as complete after short delay
    setTimeout(() => {
      onComplete?.();
    }, 2000);
  };

  const handleSkip = () => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'call_now_skipped', {
        service: serviceName
      });
    }
    onSkip?.();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        {/* Success Checkmark */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-green-500 rounded-full mb-4 animate-bounce">
            <CheckCircle className="w-12 h-12 text-white" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Congrats, You Pre-Qualify! 🎉
          </h1>
          <p className="text-lg text-gray-600">
            Your {serviceName} quote request has been submitted
          </p>
        </div>

        {/* Main Call Now Card */}
        <div className="bg-white rounded-2xl shadow-2xl p-8 border-4 border-green-500">
          {/* Urgency Banner */}
          {config.showTimer && timeRemaining > 0 && (
            <div className="bg-red-500 text-white rounded-xl p-4 mb-6 flex items-center justify-between animate-pulse">
              <div className="flex items-center gap-3">
                <AlertCircle className="w-6 h-6" />
                <div>
                  <p className="font-bold text-lg">{config.urgencyMessage}</p>
                  <p className="text-sm opacity-90">Time remaining: {formatTime(timeRemaining)}</p>
                </div>
              </div>
              <Clock className="w-8 h-8" />
            </div>
          )}

          {/* Main Message */}
          <div className="text-center mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              Last Step: Call Now to Complete!
            </h2>
            <p className="text-lg text-gray-700 mb-2">
              {config.agentMessage || `We have ${agentsAvailable} agents available right now to take your call.`}
            </p>
            <p className="text-gray-600">
              Call immediately to expedite your service and secure your spot.
            </p>
          </div>

          {/* Agent Availability Indicator */}
          <div className="bg-gradient-to-r from-green-100 to-emerald-100 rounded-xl p-4 mb-6 border-2 border-green-300">
            <div className="flex items-center justify-center gap-3">
              <div className="relative">
                <Users className="w-6 h-6 text-green-600" />
                <span className="absolute -top-1 -right-1 flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
              </div>
              <div>
                <p className="font-bold text-green-800">
                  {agentsAvailable} {agentsAvailable === 1 ? 'Agent' : 'Agents'} Available Now
                </p>
                <p className="text-sm text-green-700">Average wait time: Less than 30 seconds</p>
              </div>
            </div>
          </div>

          {/* Call Now Button */}
          <button
            onClick={handleCall}
            disabled={callClicked}
            className={`w-full py-6 rounded-xl font-bold text-xl flex items-center justify-center gap-3 transition-all transform mb-4
              ${callClicked 
                ? 'bg-gray-400 cursor-not-allowed' 
                : 'bg-green-600 hover:bg-green-700 hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl'
              } text-white`}
          >
            <Phone className="w-6 h-6" />
            {callClicked ? 'Opening Dialer...' : (config.buttonText || 'CALL NOW')}
          </button>

          {/* Phone Number Display */}
          <a
            href={`tel:${config.phoneNumber}`}
            className="block text-center text-3xl font-bold text-green-600 hover:text-green-700 mb-6 tracking-wider"
          >
            {config.phoneNumber}
          </a>

          {/* Benefits List */}
          <div className="bg-blue-50 rounded-xl p-4 mb-6">
            <p className="font-bold text-gray-900 mb-3">Why call now?</p>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span><strong>Instant confirmation</strong> - Get immediate verification of your request</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span><strong>Answer questions</strong> - Clarify any details about your needs</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span><strong>Expedite matching</strong> - Get connected with providers faster</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span><strong>Exclusive offers</strong> - Phone callers get priority service</span>
              </li>
            </ul>
          </div>

          {/* Social Proof */}
          <div className="text-center mb-6">
            <p className="text-sm text-gray-600 italic">
              &ldquo;I called immediately and had 3 quotes within 24 hours!&rdquo; - Sarah M.
            </p>
            <div className="flex justify-center gap-1 mt-2">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-yellow-400 text-xl">★</span>
              ))}
            </div>
          </div>

          {/* Skip Option (Less Prominent) */}
          {onSkip && (
            <button
              onClick={handleSkip}
              className="w-full py-3 text-gray-500 hover:text-gray-700 text-sm font-medium transition-colors"
            >
              {config.skipButtonText || "I'll call later"}
            </button>
          )}
        </div>

        {/* Trust Indicators */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600 flex items-center justify-center gap-2">
            <span className="flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            Secure line • Your privacy protected • No obligation
          </p>
        </div>
      </div>
    </div>
  );
}
