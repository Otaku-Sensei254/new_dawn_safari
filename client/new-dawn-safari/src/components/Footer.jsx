import { Phone, Mail, MapPin, Sun } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-primary-500 p-2 rounded-full">
                <Sun className="h-5 w-5 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg">NEW DAWN</span>
                <span className="text-primary-400 text-xs tracking-widest">SAFARIS</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Creating unforgettable journeys that connect people to nature, culture, and conservation across Africa.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-primary-400">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="text-gray-400 hover:text-primary-400 transition-colors">Home</a></li>
              <li><a href="/#packages" className="text-gray-400 hover:text-primary-400 transition-colors">Safari Packages</a></li>
              <li><a href="/booking" className="text-gray-400 hover:text-primary-400 transition-colors">Book a Tour</a></li>
              <li><a href="/contact" className="text-gray-400 hover:text-primary-400 transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-primary-400">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-primary-400 flex-shrink-0" />
                <span className="text-gray-400">Nairobi, Kenya</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-primary-400 flex-shrink-0" />
                <div className="text-gray-400">
                  <p>Drusilah: 0712695186</p>
                  <p>Milka: 0712981009</p>
                  <p>Maingi: 0708400078</p>
                </div>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-primary-400 flex-shrink-0" />
                <span className="text-gray-400">info@newdawnsafaris.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            © {currentYear} New Dawn Safaris. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
