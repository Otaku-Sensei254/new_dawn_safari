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
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-serif tracking-tight">
            NEW DAWN AFRICA <span className="text-primary-400">SAFARIS</span>
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

      {/* Services Section */}
      <section className="py-20 bg-white px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-serif">
              Our <span className="text-primary-600">Services</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive travel solutions for your perfect African adventure
            </p>
            <div className="w-24 h-1 bg-primary-500 mx-auto rounded-full mt-4"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center mb-4">
                <svg className="h-7 w-7 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Flight Bookings</h3>
              <p className="text-gray-600">
                Domestic and international flight reservations with competitive rates to all safari destinations.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center mb-4">
                <svg className="h-7 w-7 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">SGR Train Tickets</h3>
              <p className="text-gray-600">
                Madaraka Express bookings between Nairobi and Mombasa with convenient connections to coastal resorts.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center mb-4">
                <svg className="h-7 w-7 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Hotel Reservations</h3>
              <p className="text-gray-600">
                Accommodation booking at luxury safari lodges, tented camps, and beach resorts across Kenya.
              </p>
            </div>
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

      {/* Animal Parks Section */}
      <section className="py-20 bg-white px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-serif">
              Kenya's Premier <span className="text-primary-600">National Parks</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore Kenya's most iconic wildlife destinations, home to the Big Five and breathtaking landscapes
            </p>
            <div className="w-24 h-1 bg-primary-500 mx-auto rounded-full mt-4"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Masai Mara",
                image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=600&q=80",
                highlights: "Great Migration, Big Five, Wildebeest",
                bestTime: "July - October",
                description: "World-famous for the Great Migration and exceptional big cat sightings"
              },
              {
                name: "Amboseli National Park",
                image: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=600&q=80",
                highlights: "Mount Kilimanjaro, Elephants, 400+ bird species",
                bestTime: "June - October",
                description: "Stunning elephant herds with Africa's highest peak as backdrop"
              },
              {
                name: "Tsavo National Parks",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScaXneyw20gjSvA2pw31ugQauQgRR-WZlFOw&s",
                highlights: "Red Elephants, Yatta Plateau, Lava flows",
                bestTime: "May - October",
                description: "Kenya's largest park divided into East and Tsavo West"
              },
              {
                name: "Samburu Reserve",
                image: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=600&q=80",
                highlights: "Samburu Special Five, Ewaso Ng'iro River",
                bestTime: "June - October",
                description: "Rare species like Grevy's zebra, reticulated giraffe, and oryx"
              },
              {
                name: "Lake Nakuru National Park",
                image: "data:image/jpeg;base64,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",
                highlights: "Flamingos, Rhinos, Rift Valley views",
                bestTime: "Year-round",
                description: "Famous for pink flamingos and rhino sanctuary"
              },
              {
                name: "Nairobi National Park",
                image: "https://images.unsplash.com/photo-1575550959106-5a7defe28b56?w=600&q=80",
                highlights: "City skyline, Lions, Giraffes, Ivory Burning Site",
                bestTime: "Year-round",
                description: "The world's only wildlife capital with city skyline views"
              }
            ].map((park, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={park.image} 
                    alt={park.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{park.name}</h3>
                  <p className="text-gray-600 text-sm mb-3">{park.description}</p>
                  <div className="space-y-2 text-sm">
                    <p className="text-primary-600 font-medium">{park.highlights}</p>
                    <p className="text-gray-500">Best time: {park.bestTime}</p>
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
