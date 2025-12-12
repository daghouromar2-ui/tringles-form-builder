import { Shield, Calendar } from "lucide-react";

const TrustBadges = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-8 pt-6 border-t border-border">
      <div className="trust-badge">
        <Shield className="w-5 h-5 text-accent" />
        <span>Données 100% sécurisées</span>
      </div>
      <div className="trust-badge">
        <Calendar className="w-5 h-5 text-accent" />
        <span>Rendez-vous sans engagement</span>
      </div>
    </div>
  );
};

export default TrustBadges;
