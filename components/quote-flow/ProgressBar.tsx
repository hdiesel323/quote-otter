'use client';

interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
  stepTitles?: string[];
}

export default function ProgressBar({ currentStep, totalSteps, stepTitles }: ProgressBarProps) {
  const progress = ((currentStep + 1) / totalSteps) * 100;

  return (
    <div className="mb-8">
      {/* Progress Bar */}
      <div className="relative">
        <div className="overflow-hidden h-2 text-xs flex rounded-full bg-gray-200">
          <div
            style={{ width: `${progress}%` }}
            className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gradient-to-r from-indigo-500 to-purple-600 transition-all duration-500"
          />
        </div>
        
        {/* Step Indicator */}
        <div className="mt-2 flex justify-between items-center">
          <span className="text-sm font-medium text-gray-700">
            Step {currentStep + 1} of {totalSteps}
          </span>
          <span className="text-sm text-gray-600">
            {Math.round(progress)}% Complete
          </span>
        </div>
      </div>

      {/* Step Dots (Optional) */}
      {stepTitles && stepTitles.length <= 5 && (
        <div className="flex justify-between mt-4">
          {stepTitles.map((title, index) => (
            <div
              key={index}
              className="flex flex-col items-center flex-1"
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center font-semibold text-sm transition-colors ${
                  index < currentStep
                    ? 'bg-green-500 text-white'
                    : index === currentStep
                    ? 'bg-indigo-600 text-white'
                    : 'bg-gray-300 text-gray-600'
                }`}
              >
                {index < currentStep ? '✓' : index + 1}
              </div>
              <span className="text-xs text-gray-600 mt-1 text-center hidden md:block max-w-[100px] truncate">
                {title}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
