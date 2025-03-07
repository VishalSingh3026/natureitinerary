
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, MapPin, Star, Users, Utensils } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Mock data for the Banaras destination
const banarasData = {
  name: "Banaras-Kashi",
  description: "Banaras, also known as Varanasi, is a city located on the banks of the Ganges River in the northern Indian state of Uttar Pradesh. It is one of the oldest continually inhabited cities in the world and is considered a holy city in Hinduism, Jainism, and Buddhism. Banaras is known for its numerous temples, ghats (steps leading down to the river), and vibrant cultural and religious traditions.",
  longDescription: "It has been a center of learning and culture for centuries, with many famous scholars and philosophers, including Adi Shankara and Kabir, calling it home.",
  mainImage: "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&q=80&w=1000",
  rating: 4.8,
  price: "$$",
  category: "Cultural",
  mustVisit: [
    "KASHI VISHWANATH TEMPLE",
    "MAA ANNAPURNA TEMPLE",
    "DURGA KUND",
    "KAAL BHAIRAV MANDIR",
    "PRACHIN HANUMAN MANDIR",
    "BHU BANARAS HINDU UNIVERSITY",
    "ASSI GHAT",
    "DASHASHWAMEDH GHAT",
    "MANIKARNIKA GHAT"
  ],
  images: [
    "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&q=80&w=1000",
    "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&q=80&w=1000",
    "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&q=80&w=1000"
  ],
  tripPlans: [
    {
      title: "2 Days/1 Night Plan",
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&q=80&w=1000"
    },
    {
      title: "3 Days/2 Nights Plan",
      image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&q=80&w=1000"
    },
    {
      title: "5 Days/4 Nights Plan",
      image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&q=80&w=1000"
    }
  ],
  explorations: [
    {
      title: "Ratneshwar Mahadev temple",
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&q=80&w=1000",
      author: "Keshav",
      date: "Jan 18, 2024",
      content: "The temple in Manikarnika Ghat is located in front to the Tarkeshwar Mahadev Mandir built in 1795 by Ahilyabai Holkar, where Lord Shiva is said to recite the Taraka Mantra (salvation mantra)."
    },
    {
      title: "Manikarnika Ghat",
      image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&q=80&w=1000",
      author: "Dhey",
      date: "Jan 19, 2024",
      content: "Manikarnika Ghat is one of the oldest ghats in Varanasi and has been accorded the highest position among other ghats by the holy scriptures in Hinduism. It is believed that if a person is cremated here, he immediately attains moksha (salvation). It is bound on both sides by the Scindia Ghat and Dashashwamedh Ghat."
    }
  ]
};

// Mock reviews
const mockReviews = [
  {
    id: 1,
    name: "Jorge Smith",
    avatar: "/placeholder.svg",
    rating: 5,
    date: "Feb 10, 2024",
    comment: "Our guided tour with Krishna Jhunjunwala was the highlight of our trip to Varanasi. His deep knowledge of the city's history and culture, coupled with his friendly demeanor, made for an unforgettable experience."
  },
  {
    id: 2,
    name: "Ben Crawford",
    avatar: "/placeholder.svg",
    rating: 4,
    date: "Feb 5, 2024",
    comment: "I highly recommend Harshit Srivastav to anyone visiting Varanasi. His passion for the city is infectious, and he went above and beyond to ensure we had a memorable and enriching experience."
  },
  {
    id: 3,
    name: "Emma Johnson",
    avatar: "/placeholder.svg",
    rating: 5,
    date: "Jan 28, 2024",
    comment: "The sunrise boat ride along the Ganges was magical. Watching the city come to life as the sun rose was an experience I'll never forget. The ghats were beautiful and our guide was very knowledgeable."
  },
  {
    id: 4,
    name: "Sophia Chen",
    avatar: "/placeholder.svg",
    rating: 4,
    date: "Jan 15, 2024",
    comment: "Varanasi is unlike any place I've ever visited. The spiritual energy is palpable. The evening Ganga Aarti ceremony at Dashashwamedh Ghat was breathtaking and moving. A must-see!"
  }
];

// Mock local guides
const localGuides = [
  {
    id: 1,
    name: "Krishna Jhunjunwala",
    image: "/placeholder.svg",
    bio: "I am a passionate and knowledgeable tour guide based in the spiritual city of Varanasi, where every corner tells a story of ancient traditions, spirituality, and cultural richness. With years of experience in guiding visitors through the maze-like lanes and along the sacred ghats of Varanasi, I am dedicated to providing an immersive and insightful experience that captures the essence of this timeless city."
  },
  {
    id: 2,
    name: "Harshit Srivastav",
    image: "/placeholder.svg",
    bio: "Born and raised in Varanasi, I have a deep connection with the city's culture and traditions. I specialize in spiritual tours that help visitors understand the philosophical aspects of Hinduism and Buddhism that originated in this ancient city."
  },
  {
    id: 3,
    name: "Vedang Tiwari",
    image: "/placeholder.svg",
    bio: "With expertise in the history and architecture of Varanasi, I provide comprehensive tours that highlight the city's remarkable buildings and structures. I'm fluent in English, Hindi, and French, making it easy for international visitors to communicate and learn."
  }
];

const BanarasDetail = () => {
  const [newReview, setNewReview] = useState({
    name: "",
    rating: 5,
    comment: ""
  });
  
  const [reviews, setReviews] = useState(mockReviews);
  const [showReviewForm, setShowReviewForm] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newReviewItem = {
      id: reviews.length + 1,
      name: newReview.name || "Anonymous",
      avatar: "/placeholder.svg",
      rating: newReview.rating,
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      comment: newReview.comment
    };
    
    setReviews([newReviewItem, ...reviews]);
    setNewReview({ name: "", rating: 5, comment: "" });
    setShowReviewForm(false);
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="pt-24 md:pt-32 pb-16 md:pb-24 bg-city-pattern bg-cover bg-center">
        <div className="container mx-auto px-6">
          <div className="bg-white/80 dark:bg-black/70 backdrop-blur-md p-8 md:p-12 rounded-xl mx-auto shadow-xl">
            <Link to="/destination" className="inline-flex items-center text-travel-primary hover:text-travel-dark mb-6 transition-colors">
              <ArrowLeft size={18} className="mr-2" />
              Back to Destinations
            </Link>
            
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-2/3">
                <motion.h1 
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-3xl md:text-5xl font-bold mb-4"
                >
                  {banarasData.name}
                </motion.h1>
                
                <div className="flex items-center mb-4">
                  <div className="flex items-center mr-4">
                    <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                    <span className="ml-1 font-medium">{banarasData.rating}</span>
                  </div>
                  <div className="flex items-center mr-4">
                    <MapPin className="h-5 w-5 text-travel-primary" />
                    <span className="ml-1">Uttar Pradesh, India</span>
                  </div>
                  <div className="flex items-center">
                    <span className="font-medium">{banarasData.price}</span>
                    <span className="ml-1 text-muted-foreground">Price Range</span>
                  </div>
                </div>
                
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-lg mb-6"
                >
                  {banarasData.description}
                </motion.p>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="mb-6"
                >
                  {banarasData.longDescription}
                </motion.p>
              </div>
              
              <div className="md:w-1/3">
                <div className="rounded-xl overflow-hidden shadow-lg">
                  <img 
                    src={banarasData.mainImage} 
                    alt={banarasData.name} 
                    className="w-full h-64 object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-6 py-16">
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="trip-plans">Trip Plans</TabsTrigger>
            <TabsTrigger value="guides">Local Guides</TabsTrigger>
            <TabsTrigger value="explorations">Explorations</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {banarasData.images.map((image, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="rounded-xl overflow-hidden shadow-md"
                >
                  <img 
                    src={image} 
                    alt={`${banarasData.name} - Image ${index + 1}`} 
                    className="w-full h-48 object-cover"
                  />
                </motion.div>
              ))}
            </div>
            
            <div className="bg-travel-light/30 rounded-xl p-6 md:p-8 shadow-md">
              <h2 className="text-2xl font-bold mb-6">Must Visit Places</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {banarasData.mustVisit.map((place, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-travel-primary rounded-full mr-2"></div>
                    <span>{place}</span>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="trip-plans" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {banarasData.tripPlans.map((plan, index) => (
                <Card key={index} className="overflow-hidden">
                  <img 
                    src={plan.image} 
                    alt={plan.title} 
                    className="w-full h-48 object-cover"
                  />
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-semibold">{plan.title}</h3>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1 text-travel-primary" />
                        <span className="text-sm text-muted-foreground">Trip Plan</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4 mr-1" />
                        <span>Banaras, India</span>
                      </div>
                      <Button size="sm" variant="outline" className="text-travel-primary border-travel-primary hover:bg-travel-primary hover:text-white">
                        View Plan
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="guides" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {localGuides.map((guide, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <Avatar className="h-12 w-12 mr-4">
                        <AvatarImage src={guide.image} alt={guide.name} />
                        <AvatarFallback>{guide.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-semibold">{guide.name}</h3>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <MapPin className="h-3 w-3 mr-1" />
                          <span>Local Guide</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">{guide.bio}</p>
                    <Button size="sm" className="w-full bg-travel-primary hover:bg-travel-dark">
                      Contact Guide
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="explorations" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {banarasData.explorations.map((item, index) => (
                <Card key={index}>
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/3">
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        className="w-full h-full object-cover rounded-l-lg"
                      />
                    </div>
                    <CardContent className="p-6 md:w-2/3">
                      <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                      <div className="flex items-center text-sm text-muted-foreground mb-4">
                        <span>Posted by {item.author}</span>
                        <span className="mx-2">•</span>
                        <span>{item.date}</span>
                      </div>
                      <p className="text-sm text-muted-foreground">{item.content}</p>
                    </CardContent>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
      
      <div className="container mx-auto px-6 py-8 mb-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold">Recent Reviews</h2>
          <Button 
            onClick={() => setShowReviewForm(!showReviewForm)}
            className="bg-travel-primary hover:bg-travel-dark"
          >
            {showReviewForm ? 'Cancel' : 'Write a Review'}
          </Button>
        </div>
        
        {showReviewForm && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mb-8 bg-travel-light/30 rounded-xl p-6"
          >
            <h3 className="text-xl font-semibold mb-4">Share Your Experience</h3>
            <form onSubmit={handleReviewSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    value={newReview.name}
                    onChange={(e) => setNewReview({...newReview, name: e.target.value})}
                    className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-travel-primary"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label htmlFor="rating" className="block text-sm font-medium mb-2">Rating</label>
                  <div className="flex space-x-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setNewReview({...newReview, rating: star})}
                        className="focus:outline-none"
                      >
                        <Star 
                          className={`h-6 w-6 ${
                            star <= newReview.rating 
                              ? 'text-yellow-400 fill-yellow-400' 
                              : 'text-gray-300'
                          }`} 
                        />
                      </button>
                    ))}
                  </div>
                </div>
              </div>
              <div className="mb-6">
                <label htmlFor="comment" className="block text-sm font-medium mb-2">Your Review</label>
                <textarea
                  id="comment"
                  value={newReview.comment}
                  onChange={(e) => setNewReview({...newReview, comment: e.target.value})}
                  rows={4}
                  className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-travel-primary"
                  placeholder="Share your experience..."
                  required
                ></textarea>
              </div>
              <div className="flex justify-end">
                <Button type="submit" className="bg-travel-primary hover:bg-travel-dark">
                  Submit Review
                </Button>
              </div>
            </form>
          </motion.div>
        )}
        
        <div className="space-y-6">
          {reviews.map((review) => (
            <motion.div 
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md"
            >
              <div className="flex items-start">
                <Avatar className="h-10 w-10 mr-4">
                  <AvatarImage src={review.avatar} alt={review.name} />
                  <AvatarFallback>{review.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-semibold">{review.name}</h3>
                    <span className="text-sm text-muted-foreground">{review.date}</span>
                  </div>
                  <div className="flex items-center mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`h-4 w-4 ${
                          i < review.rating 
                            ? 'text-yellow-400 fill-yellow-400' 
                            : 'text-gray-300'
                        }`} 
                      />
                    ))}
                  </div>
                  <p className="text-muted-foreground">{review.comment}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default BanarasDetail;
