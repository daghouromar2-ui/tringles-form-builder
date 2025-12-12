import logo from "@/assets/logo.jpg";
const Header = () => {
  return <header className="w-full py-6 px-4">
      <div className="max-w-2xl mx-auto text-center">
        {/* Logo */}
        <div className="flex flex-col items-center justify-center mb-4">
          <img src={logo} alt="Tringles Accessoires Logo" className="h-20 md:h-24 w-auto rounded-full border-8 object-fill" />
        </div>
        
        {/* Subtitle */}
        <p className="text-muted-foreground text-sm md:text-base">
          Spécialiste des accessoires de rideaux et tringles
        </p>
      </div>
    </header>;
};
export default Header;