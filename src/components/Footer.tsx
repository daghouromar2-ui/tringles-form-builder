import { Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full py-6 px-4 mt-8">
      <div className="max-w-2xl mx-auto text-center space-y-4">
        {/* Contact Info */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-muted-foreground">
          <a 
            href="tel:+213000000000" 
            className="flex items-center gap-2 hover:text-foreground transition-colors"
          >
            <Phone className="w-4 h-4" />
            <span>+213 XX XXX XXXX</span>
          </a>
          <span className="hidden sm:block text-border">|</span>
          <a 
            href="mailto:khiatoussama9@gmail.com" 
            className="flex items-center gap-2 hover:text-foreground transition-colors"
          >
            <Mail className="w-4 h-4" />
            <span>khiatoussama9@gmail.com</span>
          </a>
        </div>

        {/* Copyright */}
        <p className="text-xs text-muted-foreground">
          © 2025 Tringles Accessoires. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
