interface ContactInfo {
  fullName: string;
  phone: string;
  address: string;
}

interface StepFourProps {
  value: ContactInfo;
  onChange: (value: ContactInfo) => void;
  errors?: {
    fullName?: string;
    phone?: string;
    address?: string;
  };
}

const StepFour = ({ value, onChange, errors }: StepFourProps) => {
  const handleChange = (field: keyof ContactInfo, fieldValue: string) => {
    onChange({ ...value, [field]: fieldValue });
  };

  return (
    <div className="animate-slide-in">
      <h2 className="font-display text-xl md:text-2xl font-semibold text-foreground mb-2 text-center">
        Vos informations de contact
      </h2>
      <p className="text-muted-foreground text-sm text-center mb-6">
        Ces informations nous permettront de vous contacter
      </p>

      <div className="space-y-4">
        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">
            Nom complet <span className="text-destructive">*</span>
          </label>
          <input
            type="text"
            value={value.fullName}
            onChange={(e) => handleChange("fullName", e.target.value)}
            placeholder="Votre nom complet"
            className={`form-input ${errors?.fullName ? "border-destructive" : ""}`}
          />
          {errors?.fullName && (
            <p className="text-destructive text-sm">{errors.fullName}</p>
          )}
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">
            Numéro de téléphone <span className="text-destructive">*</span>
          </label>
          <input
            type="tel"
            value={value.phone}
            onChange={(e) => handleChange("phone", e.target.value)}
            placeholder="0X XX XX XX XX"
            className={`form-input ${errors?.phone ? "border-destructive" : ""}`}
          />
          {errors?.phone && (
            <p className="text-destructive text-sm">{errors.phone}</p>
          )}
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">
            Adresse exacte <span className="text-destructive">*</span>
          </label>
          <textarea
            value={value.address}
            onChange={(e) => handleChange("address", e.target.value)}
            placeholder="Votre adresse complète"
            rows={3}
            className={`form-input resize-none ${errors?.address ? "border-destructive" : ""}`}
          />
          {errors?.address && (
            <p className="text-destructive text-sm">{errors.address}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default StepFour;
