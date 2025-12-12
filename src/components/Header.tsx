const Header = () => {
  return (
    <header className="w-full py-6 px-4">
      <div className="max-w-2xl mx-auto text-center">
        {/* Logo Placeholder */}
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
            <span className="text-primary-foreground font-display text-xl font-bold">TA</span>
          </div>
          <h1 className="font-display text-2xl md:text-3xl font-semibold text-foreground">
            Tringles Accessoires
          </h1>
        </div>
        
        {/* Subtitle */}
        <p className="text-muted-foreground text-sm md:text-base">
          Spécialiste des accessoires de rideaux et tringles
        </p>
      </div>
    </header>
  );
};

export default Header;
