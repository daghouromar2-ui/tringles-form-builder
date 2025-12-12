interface StepThreeProps {
  value: string;
  onChange: (value: string) => void;
  error?: string;
}

const installationOptions = [
  { value: "1-2-semaines", label: "1 à 2 semaines" },
  { value: "3-4-semaines", label: "3 à 4 semaines" },
  { value: "deux-mois", label: "Sous deux mois" },
  { value: "pas-defini", label: "Je n'ai pas encore de besoin défini" },
];

const StepThree = ({ value, onChange, error }: StepThreeProps) => {
  return (
    <div className="animate-slide-in">
      <h2 className="font-display text-xl md:text-2xl font-semibold text-foreground mb-2 text-center">
        Quand souhaitez-vous installer vos rideaux ?
      </h2>
      <p className="text-muted-foreground text-sm text-center mb-6">
        Choisissez votre délai d'installation préféré
      </p>

      <div className="space-y-3">
        {installationOptions.map((option) => (
          <label
            key={option.value}
            className={`flex items-center p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
              value === option.label
                ? "border-primary bg-primary/5"
                : "border-border hover:border-primary/50 bg-card"
            }`}
          >
            <input
              type="radio"
              name="installation"
              value={option.label}
              checked={value === option.label}
              onChange={(e) => onChange(e.target.value)}
              className="sr-only"
            />
            <div
              className={`w-5 h-5 rounded-full border-2 mr-4 flex items-center justify-center transition-all ${
                value === option.label ? "border-primary" : "border-border"
              }`}
            >
              {value === option.label && (
                <div className="w-2.5 h-2.5 rounded-full bg-primary" />
              )}
            </div>
            <span className="text-foreground">{option.label}</span>
          </label>
        ))}
        {error && <p className="text-destructive text-sm text-center">{error}</p>}
      </div>
    </div>
  );
};

export default StepThree;
