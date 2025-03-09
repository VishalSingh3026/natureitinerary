
import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import DestinationCard from '@/components/DestinationCard';
import { motion } from 'framer-motion';
import { Filter, MapPin, Search } from 'lucide-react';

const destinations = [
  {
    id: 1,
    name: "Banaras",
    image: "/lovable-uploads/bnsimg/pexels-narin-chauhan-16496146.jpg",
    category: "Cultural",
    rating: 4.8,
    price: "$$"
  },
  {
    id: 2,
    name: "New York",
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80&w=1000",
    category: "Urban",
    rating: 4.7,
    price: "$$$"
  },
  {
    id: 3,
    name: "Paris",
    image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?auto=format&fit=crop&q=80&w=1000",
    category: "Romantic",
    rating: 4.9,
    price: "$$$"
  },
  {
    id: 4,
    name: "New Delhi",
    image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&q=80&w=1000",
    category: "Cultural",
    rating: 4.5,
    price: "$$"
  },
  {
    id: 5,
    name: "Tokyo",
    image: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1000",
    category: "Urban",
    rating: 4.8,
    price: "$$$"
  },
  {
    id: 6,
    name: "Bali",
    image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&q=80&w=1000",
    category: "Beach",
    rating: 4.7,
    price: "$$"
  },
  {
    id: 7,
    name: "Santorini",
    image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&q=80&w=1000",
    category: "Beach",
    rating: 4.9,
    price: "$$$"
  },
  {
    id: 8,
    name: "Kyoto",
    image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&q=80&w=1000",
    category: "Cultural",
    rating: 4.8,
    price: "$$"
  }
];

const categories = ["All", "Beach", "Cultural", "Urban", "Romantic", "Adventure"];

const Destination = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredDestinations, setFilteredDestinations] = useState(destinations);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    let filtered = [...destinations];
    
    if (selectedCategory !== "All") {
      filtered = filtered.filter(dest => dest.category === selectedCategory);
    }
    
    if (searchQuery) {
      filtered = filtered.filter(dest => 
        dest.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    setFilteredDestinations(filtered);
  }, [selectedCategory, searchQuery]);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="pt-24 md:pt-32 pb-16 md:pb-24 bg-city-pattern bg-cover bg-center">
        <div className="container mx-auto px-6">
          <div className="bg-white/80 dark:bg-black/70 backdrop-blur-md p-8 md:p-12 rounded-xl max-w-3xl mx-auto shadow-xl">
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-5xl font-bold text-center mb-6"
            >
              Explore Destinations
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-center mb-10 text-muted-foreground"
            >
              Discover amazing places around the world and plan your next adventure.
            </motion.p>
            
            <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Search destinations..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 py-3 rounded-full w-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-travel-primary focus:border-transparent transition-all duration-300"
                />
                <Search className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
              </div>
              
              <button className="bg-travel-primary hover:bg-travel-dark text-white px-6 py-3 rounded-full transition-all duration-300 flex items-center space-x-2">
                <Filter size={18} />
                <span>Filters</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-6 py-16">
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {categories.map((category, index) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-travel-primary text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredDestinations.length > 0 ? (
            filteredDestinations.map((destination, index) => (
              <DestinationCard
                key={destination.id}
                image={destination.image}
                name={destination.name}
                description={`${destination.category} • ${destination.rating} ★ • ${destination.price}`}
                delay={index * 0.1}
              />
            ))
          ) : (
            <div className="col-span-full text-center py-16">
              <div className="text-5xl mb-4">🌍</div>
              <h3 className="text-2xl font-semibold mb-2">No destinations found</h3>
              <p className="text-muted-foreground">
                Try adjusting your search or filter criteria.
              </p>
            </div>
          )}
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Destination;
