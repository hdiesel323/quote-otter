'use client';

import { Button } from 'primereact/button';

interface StepNavigationProps {
  canGoBack: boolean;
  canGoNext: boolean;
  isLastStep: boolean;
  isSubmitting: boolean;
  onBack: () => void;
  onNext: () => void;
  onSubmit: () => void;
}

export default function StepNavigation({
  canGoBack,
  canGoNext,
  isLastStep,
  isSubmitting,
  onBack,
  onNext,
  onSubmit
}: StepNavigationProps) {
  return (
    <div className="flex justify-between items-center mt-8 pt-6 border-t border-gray-200">
      {/* Back Button */}
      <Button
        label="Back"
        icon="pi pi-arrow-left"
        onClick={onBack}
        disabled={!canGoBack || isSubmitting}
        className="p-button-text p-button-lg"
        severity="secondary"
      />

      {/* Next/Submit Button */}
      {isLastStep ? (
        <Button
          label={isSubmitting ? 'Submitting...' : 'Submit Request'}
          icon={isSubmitting ? 'pi pi-spin pi-spinner' : 'pi pi-check'}
          onClick={onSubmit}
          disabled={!canGoNext || isSubmitting}
          className="p-button-lg"
          severity="success"
        />
      ) : (
        <Button
          label="Next"
          icon="pi pi-arrow-right"
          iconPos="right"
          onClick={onNext}
          disabled={!canGoNext || isSubmitting}
          className="p-button-lg"
        />
      )}
    </div>
  );
}
