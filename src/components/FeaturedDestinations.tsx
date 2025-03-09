
import { motion } from 'framer-motion';
import DestinationCard from './DestinationCard';

const DESTINATIONS = [
  {
    name: "Banaras",
    image: "/lovable-uploads/12e835f9-0cb8-4e60-9ba0-b2db94e85c95.png",
    description: "Explore the spiritual heart of India on the banks of the Ganges."
  },
  {
    name: "Cappadocia",
    image: "/lovable-uploads/445cfb01-c33e-4ad2-9033-0e9a10516e00.png",
    description: "Experience the magical hot air balloon rides over unique landscapes."
  },
  {
    name: "Kerala",
    image: "/lovable-uploads/f66ff1ec-f193-4dc7-801d-1c80b5680296.png",
    description: "Discover the scenic beauty of Kerala's backwaters and tea plantations."
  },
  {
    name: "Himalayan Trails",
    image: "/lovable-uploads/Photo Collage Himachal Pradesh Travel Vlog YouTube Thumbnail.png",
    description: "Immerse yourself in the majestic mountains and spiritual tranquility."
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
