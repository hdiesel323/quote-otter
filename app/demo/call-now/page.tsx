'use client';

import { useState } from 'react';
import CallNowStep from '@/components/quote-flow/CallNowStep';
import CallNowStepSimple from '@/components/quote-flow/CallNowStepSimple';
import type { CallNowConfig } from '@/types/quote-templates';

export default function CallNowDemoPage() {
  const [activeDemo, setActiveDemo] = useState<'full' | 'simple'>('full');
  const [currentExample, setCurrentExample] = useState(0);

  const examples: Array<{ name: string; service: string; config: CallNowConfig }> = [
    {
      name: 'Insurance (High Urgency)',
      service: 'Final Expense Insurance',
      config: {
        enabled: true,
        phoneNumber: '(888) 555-0123',
        urgencyMessage: 'Special offer expires in 3 hours - Call now to lock in your rate!',
        agentMessage: 'We have 2 licensed insurance agents available right now to take your call.',
        showTimer: true,
        timerMinutes: 180,
        buttonText: 'CALL NOW TO LOCK IN RATE',
        skipButtonText: "I'll call later"
      }
    },
    {
      name: 'Home Services (Moderate Urgency)',
      service: 'Roofing',
      config: {
        enabled: true,
        phoneNumber: '(888) 555-ROOF',
        urgencyMessage: 'Limited contractor availability - Call in the next 2 hours for priority scheduling!',
        agentMessage: '3 certified roofing specialists are standing by.',
        showTimer: true,
        timerMinutes: 120,
        buttonText: 'CALL NOW FOR PRIORITY SERVICE'
      }
    },
    {
      name: 'Emergency (Maximum Urgency)',
      service: 'Emergency Plumbing',
      config: {
        enabled: true,
        phoneNumber: '(888) EMERGENCY',
        urgencyMessage: 'Emergency response available - Call NOW for immediate dispatch!',
        agentMessage: 'Emergency operators standing by 24/7.',
        showTimer: false,
        buttonText: '🚨 CALL EMERGENCY LINE NOW'
      }
    },
    {
      name: 'Consultation (Low Pressure)',
      service: 'Legal Consultation',
      config: {
        enabled: true,
        phoneNumber: '(888) 555-1234',
        urgencyMessage: 'Speak with an expert today to get personalized recommendations',
        agentMessage: 'Our legal team is ready to help you.',
        showTimer: false,
        buttonText: 'Call to Speak with Expert',
        skipButtonText: 'View quotes online instead'
      }
    }
  ];

  const currentConfig = examples[currentExample];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Demo Controls */}
      <div className="bg-white border-b shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            📞 Call Now Step - Live Demo
          </h1>
          
          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
            {/* Component Type Toggle */}
            <div className="flex gap-2">
              <button
                onClick={() => setActiveDemo('full')}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  activeDemo === 'full'
                    ? 'bg-indigo-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                Full Version
              </button>
              <button
                onClick={() => setActiveDemo('simple')}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  activeDemo === 'simple'
                    ? 'bg-indigo-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                Simple Version
              </button>
            </div>

            {/* Example Selector */}
            <div className="flex flex-wrap gap-2">
              {examples.map((example, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentExample(index)}
                  className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
                    currentExample === index
                      ? 'bg-green-600 text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  {example.name}
                </button>
              ))}
            </div>
          </div>

          {/* Current Config Display */}
          <div className="mt-4 p-4 bg-gray-50 rounded-lg">
            <p className="text-sm font-semibold text-gray-700 mb-2">
              Current Configuration:
            </p>
            <pre className="text-xs bg-gray-900 text-green-400 p-3 rounded overflow-x-auto">
{`callNow: {
  enabled: true,
  phoneNumber: '${currentConfig.config.phoneNumber}',
  urgencyMessage: '${currentConfig.config.urgencyMessage}',
  agentMessage: '${currentConfig.config.agentMessage || 'undefined'}',
  showTimer: ${currentConfig.config.showTimer},
  timerMinutes: ${currentConfig.config.timerMinutes || 'undefined'},
  buttonText: '${currentConfig.config.buttonText}',
  skipButtonText: '${currentConfig.config.skipButtonText || 'undefined'}'
}`}
            </pre>
          </div>
        </div>
      </div>

      {/* Demo Display */}
      <div className="container mx-auto p-4">
        {activeDemo === 'full' ? (
          <CallNowStep
            key={`full-${currentExample}`}
            config={currentConfig.config}
            serviceName={currentConfig.service}
            onSkip={() => alert('User skipped call')}
            onComplete={() => alert('User initiated call!')}
          />
        ) : (
          <div className="max-w-2xl mx-auto mt-8">
            <CallNowStepSimple
              key={`simple-${currentExample}`}
              config={currentConfig.config}
              serviceName={currentConfig.service}
              onComplete={() => alert('User initiated call!')}
            />
          </div>
        )}
      </div>

      {/* Documentation Link */}
      <div className="fixed bottom-4 right-4">
        <a
          href="/docs/CALL_NOW_IMPLEMENTATION.md"
          target="_blank"
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg shadow-lg font-medium flex items-center gap-2"
        >
          📄 View Documentation
        </a>
      </div>
    </div>
  );
}
