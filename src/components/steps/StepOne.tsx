import { wilayas } from "@/data/wilayas";

interface StepOneProps {
  value: string;
  onChange: (value: string) => void;
  error?: string;
}

const StepOne = ({ value, onChange, error }: StepOneProps) => {
  return (
    <div className="animate-slide-in">
      <h2 className="font-display text-xl md:text-2xl font-semibold text-foreground mb-2 text-center">
        Dans quelle wilaya se trouve votre logement ?
      </h2>
      <p className="text-muted-foreground text-sm text-center mb-6">
        Sélectionnez votre wilaya pour que nous puissions organiser votre rendez-vous
      </p>

      <div className="space-y-2">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={`form-input cursor-pointer ${error ? "border-destructive" : ""}`}
        >
          <option value="">Sélectionnez une wilaya</option>
          {wilayas.map((wilaya) => (
            <option key={wilaya.code} value={`${wilaya.name} (${wilaya.code})`}>
              {wilaya.name} ({wilaya.code})
            </option>
          ))}
        </select>
        {error && <p className="text-destructive text-sm">{error}</p>}
      </div>
    </div>
  );
};

export default StepOne;
