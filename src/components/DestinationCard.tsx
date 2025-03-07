
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface DestinationCardProps {
  image: string;
  name: string;
  description?: string;
  delay?: number;
  id?: number;
}

const DestinationCard = ({ image, name, description, delay = 0, id = 1 }: DestinationCardProps) => {
  // Special handling for Banaras card
  const isBanaras = name === "Banaras";
  const linkTo = isBanaras ? "/banaras-detail" : `/destination/${id}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="destination-card group"
    >
      <Link to={linkTo} className="block">
        <div className="relative h-64 md:h-80 overflow-hidden rounded-xl">
          <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-cover transition-all duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent p-6 flex flex-col justify-end">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{name}</h3>
            {description && (
              <p className="text-white/80 text-sm md:text-base hidden group-hover:block transition-all duration-300">
                {description}
              </p>
            )}
            <div className="transform translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 mt-4">
              <button className="px-4 py-2 bg-travel-primary text-white rounded-full text-sm font-medium hover:bg-travel-primary/90 transition-all">
                Explore
              </button>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default DestinationCard;
