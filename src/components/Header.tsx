const Header = () => {
  return (
    <header className="relative bg-gradient-to-r from-business-primary/10 via-background to-business-primary/10 shadow-elegant border-b border-border">
      <div className="max-w-5xl mx-auto px-6 py-10 text-center relative z-10">
        
        {/* Brand Name */}
        <h1 className="text-5xl font-extrabold tracking-wide text-blue-700 drop-shadow-md">
          दिलीप
        </h1>

        {/* Since year with decorative lines */}
        <div className="flex items-center justify-center gap-3 mt-2">
          <span className="w-12 h-[1px] bg-orange-500/70"></span>
          <span className="text-sm font-semibold text-orange-500 tracking-[0.2em] uppercase">
            Since 1964
          </span>
          <span className="w-12 h-[1px] bg-orange-500/70"></span>
        </div>

        {/* Decorative underline */}
        {/*<div className="w-24 h-1 bg-gradient-to-r from-blue-700 via-orange-500 to-blue-700 mx-auto mt-4 rounded-full"></div>*/}

        {/* Tagline */}
        <p className="mt-4 text-xl font-semibold text-orange-500 tracking-wide">
          Quality Traditional Products
        </p>

        {/* Sub tagline */}
        <p className="mt-2 text-muted-foreground text-base italic">
          "Bas naam hi kaafi hai..."
        </p>
      </div>
    </header>
  );
};

export default Header;
