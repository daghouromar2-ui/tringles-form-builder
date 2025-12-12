interface StepTwoProps {
  value: string;
  onChange: (value: string) => void;
  error?: string;
}

const StepTwo = ({ value, onChange, error }: StepTwoProps) => {
  return (
    <div className="animate-slide-in">
      <h2 className="font-display text-xl md:text-2xl font-semibold text-foreground mb-2 text-center">
        Combien de fenêtres souhaitez-vous équiper ?
      </h2>
      <p className="text-muted-foreground text-sm text-center mb-6">
        Indiquez le nombre de fenêtres à équiper
      </p>

      <div className="space-y-2">
        <input
          type="number"
          min="1"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Minimum 1"
          className={`form-input text-center text-lg ${error ? "border-destructive" : ""}`}
        />
        {error && <p className="text-destructive text-sm text-center">{error}</p>}
      </div>
    </div>
  );
};

export default StepTwo;
