import { useEffect, useState } from "react";
import { CheckCircle, MapPin, Grid3X3, Clock, User, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

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

interface StepFiveProps {
  formData: FormData;
}

const StepFive = ({ formData }: StepFiveProps) => {
  const [isSubmitting, setIsSubmitting] = useState(true);
  const [isSubmitted, setIsSubmitted] = useState(false);



  useEffect(() => {
  const submitBooking = async () => {
    try {
      const res = await fetch("http://localhost:4000/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: formData.contactInfo.fullName,
          phone: formData.contactInfo.phone,
          wilaya: formData.wilaya,
          windowCount: formData.windowCount,
          installationTime: formData.installationTime,
          address: formData.contactInfo.address,
        }),
      });

      if (!res.ok) {
        const errorData = await res.json().catch(() => null);
        throw new Error(errorData?.error || "Request failed");
      }

      setIsSubmitted(true);
      toast.success("Votre demande a été envoyée avec succès !");
    } catch (err) {
      console.error("Error submitting booking:", err);
      toast.error("Une erreur s'est produite. Veuillez réessayer.");
    } finally {
      setIsSubmitting(false);
    }
  };

  submitBooking();
}, [formData]);

  if (isSubmitting) {
    return (
      <div className="animate-slide-in text-center py-12">
        <Loader2 className="w-12 h-12 text-primary animate-spin mx-auto mb-4" />
        <p className="text-muted-foreground">Envoi de votre demande...</p>
      </div>
    );
  }

  return (
    <div className="animate-slide-in text-center">
      {/* Success Icon */}
      <div className="flex justify-center mb-6">
        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
          <CheckCircle className="w-12 h-12 text-primary" />
        </div>
      </div>

      {/* Thank You Message */}
      <h2 className="font-display text-xl md:text-2xl font-semibold text-foreground mb-3">
        Merci pour votre demande !
      </h2>
      <p className="text-muted-foreground mb-8">
        Notre équipe <span className="font-semibold text-foreground">Tringles Accessoires</span> vous contactera sous 48h pour confirmer le rendez-vous.
      </p>

      {/* Summary */}
      <div className="bg-secondary/50 rounded-xl p-6 text-left space-y-4">
        <h3 className="font-display text-lg font-semibold text-foreground mb-4 text-center">
          Récapitulatif de votre demande
        </h3>

        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <MapPin className="w-5 h-5 text-accent mt-0.5 shrink-0" />
            <div>
              <p className="text-sm text-muted-foreground">Wilaya</p>
              <p className="font-medium text-foreground">{formData.wilaya}</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Grid3X3 className="w-5 h-5 text-accent mt-0.5 shrink-0" />
            <div>
              <p className="text-sm text-muted-foreground">Nombre de fenêtres</p>
              <p className="font-medium text-foreground">{formData.windowCount}</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Clock className="w-5 h-5 text-accent mt-0.5 shrink-0" />
            <div>
              <p className="text-sm text-muted-foreground">Délai d'installation</p>
              <p className="font-medium text-foreground">{formData.installationTime}</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <User className="w-5 h-5 text-accent mt-0.5 shrink-0" />
            <div>
              <p className="text-sm text-muted-foreground">Contact</p>
              <p className="font-medium text-foreground">{formData.contactInfo.fullName}</p>
              <p className="text-sm text-muted-foreground">{formData.contactInfo.phone}</p>
              <p className="text-sm text-muted-foreground">{formData.contactInfo.address}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepFive;
