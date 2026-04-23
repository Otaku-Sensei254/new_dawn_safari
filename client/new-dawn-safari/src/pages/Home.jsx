import { useEffect } from 'react';
import { 
  Compass, Shield, Heart, Users, 
  MapPin, Calendar, ChevronRight, Star 
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  useEffect(() => {
    // Smooth scroll for anchor links
    const handleAnchorClick = (e) => {
      const href = e.currentTarget.getAttribute('href');
      if (href?.startsWith('/#')) {
        e.preventDefault();
        const targetId = href.replace('/#', '');
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    document.querySelectorAll('a[href^="/#"]').forEach(anchor => {
      anchor.addEventListener('click', handleAnchorClick);
    });

    return () => {
      document.querySelectorAll('a[href^="/#"]').forEach(anchor => {
        anchor.removeEventListener('click', handleAnchorClick);
      });
    };
  }, []);

  const safariPackages = [
    {
      id: 1,
      title: "Masai Mara Adventure",
      subtitle: "3 Days 2 Nights",
      description: "Experience the world-famous Masai Mara with its incredible wildlife and the Big Five.",
      image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&q=80",
      features: ["Full Board Accommodation", "Game Drives in 4x4", "Professional Guide", "Park Entry Fees"],
      priceFrom: "Kes.26,460",
      priceNote: "per person (group of 6, Green Season)",
      seasons: [
        { name: "Green Season", period: "7th April - 30th June 2026", price: "From Kes.26,460" },
        { name: "Peak Season", period: "1st July - 31st October 2026", price: "From Kes.37,260" },
        { name: "Regular Season", period: "1st November - 21st December 2026", price: "From Kes.32,400" }
      ]
    },
    {
      id: 2,
      title: "Coastal Beach Getaway",
      subtitle: "4 Days 3 Nights - All Inclusive",
      description: "Relax on Kenya's pristine beaches with all-inclusive luxury at top coastal resorts.",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80",
      features: ["All Meals (Breakfast, Lunch, Dinner)", "Snacks & Soft Drinks", "SGR Return Tickets", "Hotel Transfers"],
      priceFrom: "Kes.51,300",
      priceNote: "per person sharing (single room)",
      seasons: [
        { name: "North Coast", period: "Valid: 7th April - 30th June 2026", price: "From Kes.51,300" },
        { name: "South Coast", period: "Valid: 7th April - 30th June 2026", price: "From Kes.81,140" }
      ]
    },
    {
      id: 3,
      title: "Big Five Safari Experience",
      subtitle: "5 Days 4 Nights",
      description: "The ultimate African safari tracking Lion, Leopard, Rhino, Elephant, and Buffalo.",
      image: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800&q=80",
      features: ["Multiple Game Reserves", "Luxury Tented Camps", "Bush Dinners", "Cultural Visits"],
      priceFrom: "Kes.75,000",
      priceNote: "per person (group of 4)",
      seasons: [
        { name: "Green Season", period: "April - June 2026", price: "From Kes.75,000" },
        { name: "Peak Season", period: "July - October 2026", price: "From Kes.95,000" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1600&q=80')`
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-primary-500/90 text-white text-sm font-semibold rounded-full tracking-wider uppercase">
              The Visionary Trio
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 font-serif tracking-tight">
            NEW DAWN <span className="text-primary-400">SAFARIS</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Discover the untamed beauty of Africa. Where every sunrise brings a new adventure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/booking" 
              className="inline-flex items-center justify-center px-8 py-4 bg-primary-500 hover:bg-primary-600 text-white font-semibold rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              <Calendar className="h-5 w-5 mr-2" />
              Book Your Safari
            </Link>
            <Link 
              to="/#packages" 
              className="inline-flex items-center justify-center px-8 py-4 bg-white/20 hover:bg-white/30 text-white font-semibold rounded-lg backdrop-blur-sm transition-all duration-200 border border-white/30"
            >
              <Compass className="h-5 w-5 mr-2" />
              Explore Packages
            </Link>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-gray-50 to-transparent"></div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-serif">
              Our <span className="text-primary-600">Vision</span> & <span className="text-primary-600">Mission</span>
            </h2>
            <div className="w-24 h-1 bg-primary-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Vision Card */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border-l-4 border-primary-500">
              <div className="flex items-center mb-6">
                <div className="bg-primary-100 p-3 rounded-full mr-4">
                  <Compass className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Vision</h3>
              </div>
              <p className="text-gray-600 leading-relaxed text-lg">
                To become a leading African safari company, creating unforgettable journeys that connect people to nature, culture, and conservation.
              </p>
            </div>

            {/* Mission Card */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border-l-4 border-savanna-600">
              <div className="flex items-center mb-6">
                <div className="bg-savanna-100 p-3 rounded-full mr-4">
                  <Heart className="h-8 w-8 text-savanna-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Mission</h3>
              </div>
              <p className="text-gray-600 leading-relaxed text-lg">
                Deliver authentic, safe, memorable safaris through personalized service, expert guides, and responsible tourism that supports communities and protects wildlife.
              </p>
            </div>
          </div>

          {/* Values */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            {[
              { icon: Shield, label: "Safety First", desc: "Your security is our priority" },
              { icon: Users, label: "Expert Guides", desc: "Professional local knowledge" },
              { icon: Heart, label: "Conservation", desc: "Protecting wildlife & nature" },
              { icon: MapPin, label: "Authentic", desc: "Real African experiences" }
            ].map((value, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <value.icon className="h-8 w-8 text-primary-600 mx-auto mb-3" />
                <h4 className="font-semibold text-gray-900 mb-1">{value.label}</h4>
                <p className="text-sm text-gray-500">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safari Packages Section */}
      <section id="packages" className="py-20 bg-gray-100 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-primary-600 font-semibold tracking-wider uppercase text-sm">Adventure Awaits</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4 font-serif">
              Safari <span className="text-primary-600">Packages</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose from our carefully curated safari experiences. Each package offers unique adventures across Kenya's most iconic destinations.
            </p>
            <div className="w-24 h-1 bg-primary-500 mx-auto rounded-full mt-4"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {safariPackages.map((pkg) => (
              <div key={pkg.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col">
                {/* Package Image */}
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={pkg.image} 
                    alt={pkg.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-primary-500 text-white text-sm font-semibold rounded-full">
                      {pkg.subtitle}
                    </span>
                  </div>
                </div>

                {/* Package Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{pkg.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 flex-1">{pkg.description}</p>

                  {/* Features */}
                  <div className="mb-4">
                    <ul className="space-y-1">
                      {pkg.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <Star className="h-4 w-4 text-primary-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Seasons & Pricing */}
                  <div className="bg-gray-50 rounded-lg p-3 mb-4">
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Pricing Options</p>
                    {pkg.seasons.map((season, idx) => (
                      <div key={idx} className="flex justify-between items-center text-sm py-1 border-b border-gray-200 last:border-0">
                        <span className="text-gray-600">{season.name}</span>
                        <span className="font-semibold text-primary-600">{season.price}</span>
                      </div>
                    ))}
                  </div>

                  {/* Price & CTA */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <div>
                      <p className="text-xs text-gray-500">Starting from</p>
                      <p className="text-xl font-bold text-primary-600">{pkg.priceFrom}</p>
                      <p className="text-xs text-gray-400">{pkg.priceNote}</p>
                    </div>
                    <Link 
                      to="/booking"
                      className="inline-flex items-center px-4 py-2 bg-primary-500 hover:bg-primary-600 text-white font-medium rounded-lg transition-colors"
                    >
                      Book Now
                      <ChevronRight className="h-4 w-4 ml-1" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-800 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-serif">
            Ready for Your African Adventure?
          </h2>
          <p className="text-primary-100 text-lg mb-8">
            Contact our team today to customize your perfect safari experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-700 font-semibold rounded-lg hover:bg-gray-100 transition-colors shadow-lg"
            >
              <Users className="h-5 w-5 mr-2" />
              Contact Our Team
            </Link>
            <Link 
              to="/booking" 
              className="inline-flex items-center justify-center px-8 py-4 bg-primary-700 text-white font-semibold rounded-lg hover:bg-primary-800 transition-colors border border-primary-500"
            >
              <Calendar className="h-5 w-5 mr-2" />
              Book Online
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
