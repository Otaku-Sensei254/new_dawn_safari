import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Phone } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Safari Packages', path: '/#packages' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Book a Tour', path: '/booking' },
    { name: 'Contact Us', path: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-gradient-to-r from-primary-600 to-primary-800 sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-white/20 p-2 rounded-full">
              <Sun className="h-6 w-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-white font-bold text-lg tracking-wide">NEW DAWN AFRICA</span>
              <span className="text-primary-200 text-xs tracking-widest">SAFARIS</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                  isActive(link.path)
                    ? 'bg-white text-primary-700'
                    : 'text-white hover:bg-white/20 hover:text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Quick Contact */}
          <div className="hidden md:flex items-center space-x-2 text-white">
            <Phone className="h-4 w-4" />
            <span className="text-sm font-medium">0712695186</span>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:bg-white/20 p-2 rounded-md transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-primary-800">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive(link.path)
                    ? 'bg-white text-primary-700'
                    : 'text-white hover:bg-white/20'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="flex items-center space-x-2 text-white px-3 py-2">
              <Phone className="h-4 w-4" />
              <span className="text-sm">0712695186</span>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
