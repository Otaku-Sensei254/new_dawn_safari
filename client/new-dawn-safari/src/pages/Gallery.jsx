import { useState } from 'react';
import { X, ChevronLeft, ChevronRight, MapPin } from 'lucide-react';

// Import all local images from the images folder
import img1 from '../images/WhatsApp Image 2026-04-23 at 21.05.23.jpeg';
import img2 from '../images/WhatsApp Image 2026-04-23 at 21.05.24.jpeg';
import img3 from '../images/WhatsApp Image 2026-04-23 at 21.05.25.jpeg';
import img4 from '../images/WhatsApp Image 2026-04-23 at 21.05.26 (1).jpeg';
import img5 from '../images/WhatsApp Image 2026-04-23 at 21.05.26.jpeg';
import img6 from '../images/WhatsApp Image 2026-04-23 at 21.05.27 (1).jpeg';
import img7 from '../images/WhatsApp Image 2026-04-23 at 21.05.27.jpeg';
import img8 from '../images/WhatsApp Image 2026-04-23 at 21.05.33.jpeg';
import img9 from '../images/WhatsApp Image 2026-04-23 at 21.05.34 (1).jpeg';
import img10 from '../images/WhatsApp Image 2026-04-23 at 21.05.34.jpeg';
import img11 from '../images/WhatsApp Image 2026-04-23 at 21.05.35 (1).jpeg';
import img12 from '../images/WhatsApp Image 2026-04-23 at 21.05.35.jpeg';
import img13 from '../images/WhatsApp Image 2026-04-23 at 21.05.36 (1).jpeg';
import img14 from '../images/WhatsApp Image 2026-04-23 at 21.05.36.jpeg';
import img15 from '../images/WhatsApp Image 2026-04-23 at 21.05.37.jpeg';
import img16 from '../images/WhatsApp Image 2026-04-23 at 21.05.38.jpeg';
import img17 from '../images/WhatsApp Image 2026-04-23 at 21.05.39 (1).jpeg';
import img18 from '../images/WhatsApp Image 2026-04-23 at 21.05.39.jpeg';
import img19 from '../images/WhatsApp Image 2026-04-23 at 21.05.40.jpeg';
import img20 from '../images/WhatsApp Image 2026-04-23 at 21.49.24.jpeg';
import img21 from '../images/WhatsApp Image 2026-04-24 at 06.33.01 (1).jpeg';
import img22 from '../images/WhatsApp Image 2026-04-24 at 06.33.01 (2).jpeg';
import img23 from '../images/WhatsApp Image 2026-04-24 at 06.33.01.jpeg';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Gallery images combining local images with some Unsplash ones
  const galleryImages = [
    // Local Images from src/images folder
    { src: img1, title: "Safari Adventure", category: "Wildlife", location: "Masai Mara", description: "The beauty of African wildlife" },
    { src: img2, title: "Beach Paradise", category: "Coastal", location: "Kenyan Coast", description: "Crystal clear waters and white sands" },
    { src: img3, title: "Sunset Safari", category: "Landscapes", location: "Amboseli", description: "Golden hour in the savanna" },
    { src: img4, title: "Big Five", category: "Wildlife", location: "Tsavo", description: "Majestic wildlife encounters" },
    { src: img5, title: "Coastal Resort", category: "Coastal", location: "Diani", description: "Luxury beach accommodation" },
    { src: img6, title: "Game Drive", category: "Wildlife", location: "Masai Mara", description: "Exploring the African wilderness" },
    { src: img7, title: "Ocean View", category: "Coastal", location: "Mombasa", description: "Stunning Indian Ocean vistas" },
    { src: img8, title: "Savanna Landscape", category: "Landscapes", location: "Serengeti", description: "Endless plains of Africa" },
    { src: img9, title: "Wildlife Encounter", category: "Wildlife", location: "Nairobi NP", description: "Close encounters with nature" },
    { src: img10, title: "Tented Camp", category: "Accommodation", location: "Amboseli", description: "Luxury in the wild" },
    { src: img11, title: "Marine Life", category: "Coastal", location: "Watamu", description: "Underwater wonders" },
    { src: img12, title: "Bush Dinner", category: "Experiences", location: "Masai Mara", description: "Dining under African stars" },
    { src: img13, title: "Elephant Herd", category: "Wildlife", location: "Amboseli", description: "Gentle giants of Africa" },
    { src: img14, title: "Safari Lodge", category: "Accommodation", location: "Tsavo", description: "Comfort in the wilderness" },
    { src: img15, title: "Sunrise View", category: "Landscapes", location: "Samburu", description: "New dawn over Africa" },
    { src: img16, title: "Cultural Visit", category: "Experiences", location: "Masai Village", description: "Authentic Maasai culture" },
    { src: img17, title: "Bird Watching", category: "Wildlife", location: "Lake Nakuru", description: "Flamingos and exotic birds" },
    { src: img18, title: "Hot Air Balloon", category: "Experiences", location: "Masai Mara", description: "Aerial view of the savanna" },
    { src: img19, title: "River Crossing", category: "Wildlife", location: "Mara River", description: "Dramatic wildebeest crossing" },
    { src: img20, title: "Beach Sunset", category: "Coastal", location: "Malindi", description: "Indian Ocean sunset" },
    { src: img21, title: "Mountain View", category: "Landscapes", location: "Kilimanjaro", description: "Snow-capped peak views" },
    { src: img22, title: "Safari Vehicle", category: "Experiences", location: "All Parks", description: "4x4 game drives" },
    { src: img23, title: "Conservation", category: "Experiences", location: "Ol Pejeta", description: "Protecting endangered species" },
    // Additional Unsplash images for variety
    {
      src: "https://images.unsplash.com/photo-1535591273668-578e31182c4f?w=800&q=80",
      title: "Leopard",
      category: "Wildlife",
      location: "Samburu",
      description: "Elusive leopards resting on tree branches"
    },
    {
      src: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80",
      title: "Diani Beach",
      category: "Coastal",
      location: "South Coast",
      description: "Pristine white sandy beaches and turquoise waters"
    }
  ];

  const categories = ['All', ...new Set(galleryImages.map(img => img.category))];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredImages = activeCategory === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setSelectedImage(filteredImages[index]);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const goToPrevious = () => {
    const newIndex = currentIndex === 0 ? filteredImages.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    setSelectedImage(filteredImages[newIndex]);
  };

  const goToNext = () => {
    const newIndex = currentIndex === filteredImages.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    setSelectedImage(filteredImages[newIndex]);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-800 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 font-serif">
            Safari <span className="text-primary-200">Gallery</span>
          </h1>
          <p className="text-primary-100 text-lg max-w-2xl mx-auto">
            Explore the breathtaking beauty of Africa through our curated collection of wildlife, landscapes, and coastal destinations.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === category
                  ? 'bg-primary-500 text-white'
                  : 'bg-white text-gray-600 hover:bg-primary-100'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredImages.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl cursor-pointer bg-white shadow-md hover:shadow-xl transition-all duration-300"
              onClick={() => openLightbox(index)}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <p className="font-semibold">{image.title}</p>
                  <p className="text-sm text-gray-200 flex items-center">
                    <MapPin className="h-3 w-3 mr-1" />
                    {image.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredImages.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No images found in this category.</p>
          </div>
        )}
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:text-primary-400 transition-colors z-10"
          >
            <X className="h-8 w-8" />
          </button>

          {/* Navigation */}
          <button
            onClick={(e) => { e.stopPropagation(); goToPrevious(); }}
            className="absolute left-4 text-white hover:text-primary-400 transition-colors z-10"
          >
            <ChevronLeft className="h-10 w-10" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); goToNext(); }}
            className="absolute right-4 text-white hover:text-primary-400 transition-colors z-10"
          >
            <ChevronRight className="h-10 w-10" />
          </button>

          {/* Image Container */}
          <div 
            className="max-w-5xl max-h-[85vh] w-full flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.src}
              alt={selectedImage.title}
              className="max-h-[70vh] w-auto object-contain rounded-lg"
            />
            <div className="mt-4 text-center text-white">
              <h3 className="text-xl font-semibold">{selectedImage.title}</h3>
              <p className="text-gray-300 flex items-center justify-center mt-1">
                <MapPin className="h-4 w-4 mr-1" />
                {selectedImage.location}
              </p>
              <p className="text-gray-400 text-sm mt-2 max-w-lg">{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
