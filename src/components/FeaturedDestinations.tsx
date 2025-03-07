
import { motion } from 'framer-motion';
import DestinationCard from './DestinationCard';

const DESTINATIONS = [
  {
    name: "Banaras",
    image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&q=80&w=1000",
    description: "Explore the spiritual heart of India on the banks of the Ganges."
  },
  {
    name: "New York",
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80&w=1000",
    description: "Experience the vibrant energy of the city that never sleeps."
  },
  {
    name: "Paris",
    image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?auto=format&fit=crop&q=80&w=1000",
    description: "Discover the romance and elegance of the City of Light."
  },
  {
    name: "New Delhi",
    image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&q=80&w=1000",
    description: "Immerse yourself in the rich culture and history of India's capital."
  }
];

const FeaturedDestinations = () => {
  return (
    <section className="py-16 md:py-24 bg-travel-light/30" id="content-section">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Trending Places
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Discover the most popular destinations loved by travelers worldwide.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {DESTINATIONS.map((destination, index) => (
            <DestinationCard
              key={destination.name}
              image={destination.image}
              name={destination.name}
              description={destination.description}
              delay={index * 0.1}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="px-8 py-3 bg-travel-primary text-white rounded-full font-medium hover:bg-travel-dark transition-all duration-300 shadow-md hover:shadow-lg"
          >
            View All Destinations
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedDestinations;
