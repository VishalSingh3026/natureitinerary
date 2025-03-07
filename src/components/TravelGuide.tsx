
import { motion } from 'framer-motion';
import { MapPin, Utensils, Clock, Calendar } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

const TravelGuide = () => {
  const features = [
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Travel Guide",
      description: "Comprehensive guides with insider tips and recommendations for each destination.",
      color: "bg-travel-primary"
    },
    {
      icon: <Utensils className="h-6 w-6" />,
      title: "Culture and Food",
      description: "Handpicked itineraries designed to provide unique and authentic travel experiences.",
      color: "bg-travel-secondary"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Local Experiences",
      description: "Discover hidden gems and authentic experiences recommended by locals.",
      color: "bg-travel-accent"
    },
    {
      icon: <Calendar className="h-6 w-6" />,
      title: "Trip Planning",
      description: "Plan your perfect trip with customizable itineraries and budgeting tools.",
      color: "bg-travel-gold"
    }
  ];

  return (
    <section className="py-16 md:py-24" id="travel-guide">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Your Complete Travel Companion
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            TravelHowl makes trip planning easy by suggesting where to go and how much it might cost, with insider tips from fellow travelers.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full glass-card border-none transition-all duration-300 hover:shadow-xl">
                <CardHeader>
                  <div className={`w-12 h-12 rounded-full ${feature.color} flex items-center justify-center text-white mb-4`}>
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl font-semibold">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-foreground/80">
                    {feature.description}
                  </CardDescription>
                </CardContent>
                <CardFooter>
                  <button className="text-travel-primary hover:underline transition-all flex items-center text-sm font-medium">
                    Learn more
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 ml-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TravelGuide;
