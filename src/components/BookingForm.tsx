import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ProgressBar from "./ProgressBar";
import TrustBadges from "./TrustBadges";
import StepOne from "./steps/StepOne";
import StepTwo from "./steps/StepTwo";
import StepThree from "./steps/StepThree";
import StepFour from "./steps/StepFour";
import StepFive from "./steps/StepFive";

interface FormData {
  wilaya: string;
  windowCount: string;
  installationTime: string;
  contactInfo: {
    fullName: string;
    phone: string;
    address: string;
  };
}

interface Errors {
  wilaya?: string;
  windowCount?: string;
  installationTime?: string;
  contactInfo?: {
    fullName?: string;
    phone?: string;
    address?: string;
  };
}

const BookingForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    wilaya: "",
    windowCount: "",
    installationTime: "",
    contactInfo: {
      fullName: "",
      phone: "",
      address: "",
    },
  });
  const [errors, setErrors] = useState<Errors>({});
  const [isAnimating, setIsAnimating] = useState(false);

  const totalSteps = 5;

  const validateStep = (step: number): boolean => {
    const newErrors: Errors = {};

    switch (step) {
      case 1:
        if (!formData.wilaya) {
          newErrors.wilaya = "Veuillez sélectionner une wilaya";
        }
        break;
      case 2:
        if (!formData.windowCount || parseInt(formData.windowCount) < 1) {
          newErrors.windowCount = "Veuillez entrer un nombre valide (minimum 1)";
        }
        break;
      case 3:
        if (!formData.installationTime) {
          newErrors.installationTime = "Veuillez sélectionner une option";
        }
        break;
      case 4:
        const contactErrors: Errors["contactInfo"] = {};
        if (!formData.contactInfo.fullName.trim()) {
          contactErrors.fullName = "Le nom complet est requis";
        }
        if (!formData.contactInfo.phone.trim()) {
          contactErrors.phone = "Le numéro de téléphone est requis";
        } else if (!/^[0-9\s+()-]{8,}$/.test(formData.contactInfo.phone)) {
          contactErrors.phone = "Numéro de téléphone invalide";
        }
        if (!formData.contactInfo.address.trim()) {
          contactErrors.address = "L'adresse est requise";
        }
        if (Object.keys(contactErrors).length > 0) {
          newErrors.contactInfo = contactErrors;
        }
        break;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (currentStep < totalSteps && validateStep(currentStep)) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentStep((prev) => prev + 1);
        setIsAnimating(false);
      }, 150);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentStep((prev) => prev - 1);
        setErrors({});
        setIsAnimating(false);
      }, 150);
    }
  };

  const renderStep = () => {
    if (isAnimating) return null;

    switch (currentStep) {
      case 1:
        return (
          <StepOne
            value={formData.wilaya}
            onChange={(value) => setFormData({ ...formData, wilaya: value })}
            error={errors.wilaya}
          />
        );
      case 2:
        return (
          <StepTwo
            value={formData.windowCount}
            onChange={(value) => setFormData({ ...formData, windowCount: value })}
            error={errors.windowCount}
          />
        );
      case 3:
        return (
          <StepThree
            value={formData.installationTime}
            onChange={(value) => setFormData({ ...formData, installationTime: value })}
            error={errors.installationTime}
          />
        );
      case 4:
        return (
          <StepFour
            value={formData.contactInfo}
            onChange={(value) => setFormData({ ...formData, contactInfo: value })}
            errors={errors.contactInfo}
          />
        );
      case 5:
        return <StepFive formData={formData} />;
      default:
        return null;
    }
  };

  return (
    <div className="form-container max-w-xl mx-auto p-6 md:p-8">
      {/* Quote Badge */}
      <div className="text-center mb-6">
        <span className="inline-block bg-gradient-to-r from-primary/10 to-accent/10 text-primary px-4 py-2 rounded-full text-sm font-medium border border-primary/20">
          📋 Feuille de devis personnalisé
        </span>
      </div>

      {/* Progress Bar */}
      <ProgressBar currentStep={currentStep} totalSteps={totalSteps} />

      {/* Step Content */}
      <div className="min-h-[300px] flex flex-col justify-center">
        {renderStep()}
      </div>

      {/* Navigation Buttons */}
      {currentStep < totalSteps && (
        <div className="flex justify-between gap-4 mt-8">
          <button
            onClick={handlePrevious}
            disabled={currentStep === 1}
            className={`form-button form-button-secondary flex items-center gap-2 ${
              currentStep === 1 ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            <ChevronLeft className="w-4 h-4" />
            Précédent
          </button>
          <button
            onClick={handleNext}
            className="form-button form-button-primary flex items-center gap-2"
          >
            Suivant
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Trust Badges */}
      <TrustBadges />
    </div>
  );
};

export default BookingForm;
