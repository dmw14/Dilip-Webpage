import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background mt-16">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-2">DILIP</h3>
            <p className="text-sm opacity-70 italic">"Bas! naam hi kaafi hai..."</p>
            <p className="text-sm opacity-60 mt-2">Established 1964</p>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Quick Links</h4>
            <div className="space-y-2 text-sm opacity-70">
              <Link to="/" className="block hover:opacity-100 transition-opacity">Home</Link>
              <Link to="/about" className="block hover:opacity-100 transition-opacity">About Us</Link>
              <Link to="/contact" className="block hover:opacity-100 transition-opacity">Contact</Link>
              <Link to="/gallery" className="block hover:opacity-100 transition-opacity">Gallery</Link>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Contact</h4>
            <div className="space-y-2 text-sm opacity-70">
              <p>ingale.industries@gmail.com</p>
              <p>+91 9764976638</p>
              <p>Jaysingpur, Kolhapur, Maharashtra</p>
            </div>
          </div>
        </div>
        <div className="border-t border-background/20 mt-8 pt-6 text-center text-sm opacity-50">
          © {new Date().getFullYear()} Dilip Industries. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
