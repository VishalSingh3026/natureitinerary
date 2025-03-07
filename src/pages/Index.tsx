
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import FeaturedDestinations from '@/components/FeaturedDestinations';
import TravelGuide from '@/components/TravelGuide';
import Footer from '@/components/Footer';
import { motion, useScroll, useTransform } from 'framer-motion';

const Index = () => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen overflow-hidden">
      <Navbar />
      
      <motion.div style={{ opacity }}>
        <Hero />
      </motion.div>
      
      <FeaturedDestinations />
      
      <div className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-destination-pattern bg-cover bg-center opacity-10" />
        <TravelGuide />
      </div>
      
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold mb-6"
            >
              Plan Your Dream Trip Today
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg mb-10 text-muted-foreground"
            >
              TravelHowl makes trip planning easy by suggesting where to go and how much it might cost. Discover amazing destinations, get personalized recommendations, and plan your next adventure with confidence.
            </motion.p>
            <motion.button 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="px-8 py-3 bg-travel-primary text-white rounded-full font-medium hover:bg-travel-dark transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Start Planning
            </motion.button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
