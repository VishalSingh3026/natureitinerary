import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Camera, MapPin, Star, Users, Utensils, AlertTriangle, Upload, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

const banarasData = {
  name: "Banaras-Kashi",
  description: "Banaras, also known as Varanasi, is a city located on the banks of the Ganges River in the northern Indian state of Uttar Pradesh. It is one of the oldest continually inhabited cities in the world and is considered a holy city in Hinduism, Jainism, and Buddhism. Banaras is known for its numerous temples, ghats (steps leading down to the river), and vibrant cultural and religious traditions.",
  longDescription: "It has been a center of learning and culture for centuries, with many famous scholars and philosophers, including Adi Shankara and Kabir, calling it home.",
  mainImage: "/lovable-uploads/WhatsApp Image 2024-02-04 at 2.04.07 AM.jpeg",
  rating: 4.8,
  price: "$$",
  category: "Cultural",
  crowdLevel: "medium",
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
    "/lovable-uploads/12e835f9-0cb8-4e60-9ba0-b2db94e85c95.png",
    "/lovable-uploads/979480cf-f8cc-42f6-a0f7-757779e79be8.png",
    "/lovable-uploads/bnsimg/pexels-ashish-kumar-pandey-2861280.jpg"
  ],
  tripPlans: [
    {
      title: "2 Days/1 Night Plan",
      image: "/lovable-uploads/12e835f9-0cb8-4e60-9ba0-b2db94e85c95.png"
    },
    {
      title: "3 Days/2 Nights Plan",
      image: "/lovable-uploads/979480cf-f8cc-42f6-a0f7-757779e79be8.png"
    },
    {
      title: "5 Days/4 Nights Plan",
      image: "/lovable-uploads/bnsimg/pexels-ashish-kumar-pandey-2861280.jpg"
    }
  ],
  explorations: [
    {
      title: "Ratneshwar Mahadev temple",
      image: "/lovable-uploads/bnsimg/pexels-a-p-14676831.jpg",
      author: "Keshav",
      date: "Jan 18, 2024",
      content: "The temple in Manikarnika Ghat is located in front to the Tarkeshwar Mahadev Mandir built in 1795 by Ahilyabai Holkar, where Lord Shiva is said to recite the Taraka Mantra (salvation mantra)."
    },
    {
      title: "Manikarnika Ghat",
      image: "/lovable-uploads/bnsimg/pexels-stijn-dijkstra-16745037.jpg",
      author: "Dhey",
      date: "Jan 19, 2024",
      content: "Manikarnika Ghat is one of the oldest ghats in Varanasi and has been accorded the highest position among other ghats by the holy scriptures in Hinduism. It is believed that if a person is cremated here, he immediately attains moksha (salvation). It is bound on both sides by the Scindia Ghat and Dashashwamedh Ghat."
    }
  ]
};

const mockReviews = [
  {
    id: 1,
    name: "Jorge Smith",
    avatar: "/placeholder.svg",
    rating: 5,
    date: "Feb 10, 2024",
    comment: "Our guided tour with Krishna Jhunjunwala was the highlight of our trip to Varanasi. His deep knowledge of the city's history and culture, coupled with his friendly demeanor, made for an unforgettable experience.",
    images: ["/lovable-uploads/bnsimg/pexels-a-p-14676831.jpg"]
  },
  {
    id: 2,
    name: "Ben Crawford",
    avatar: "/placeholder.svg",
    rating: 4,
    date: "Feb 5, 2024",
    comment: "I highly recommend Harshit Srivastav to anyone visiting Varanasi. His passion for the city is infectious, and he went above and beyond to ensure we had a memorable and enriching experience.",
    images: []
  },
  {
    id: 3,
    name: "Emma Johnson",
    avatar: "/placeholder.svg",
    rating: 5,
    date: "Jan 28, 2024",
    comment: "The sunrise boat ride along the Ganges was magical. Watching the city come to life as the sun rose was an experience I'll never forget. The ghats were beautiful and our guide was very knowledgeable.",
    images: ["/lovable-uploads/bnsimg/pexels-stijn-dijkstra-16745037.jpg"]
  },
  {
    id: 4,
    name: "Sophia Chen",
    avatar: "/placeholder.svg",
    rating: 4,
    date: "Jan 15, 2024",
    comment: "Varanasi is unlike any place I've ever visited. The spiritual energy is palpable. The evening Ganga Aarti ceremony at Dashashwamedh Ghat was breathtaking and moving. A must-see!",
    images: []
  }
];

const localGuides = [
  {
    id: 1,
    name: "Krishna Jhunjunwala",
    image: "/lovable-uploads/bnsguide/WhatsApp Image 2024-02-08 at 12.33.54 AM (1).jpeg",
    bio: "I am a passionate and knowledgeable tour guide based in the spiritual city of Varanasi, where every corner tells a story of ancient traditions, spirituality, and cultural richness. With years of experience in guiding visitors through the maze-like lanes and along the sacred ghats of Varanasi, I am dedicated to providing an immersive and insightful experience that captures the essence of this timeless city.",
    postedBy: "travelhowl",
    postedDate: "Jan 10, 2024"
  },
  {
    id: 2,
    name: "Harshit Srivastav",
    image: "/lovable-uploads/bnsguide/WhatsApp Image 2024-02-08 at 12.35.10 AM.jpeg",
    bio: "Born and raised in Varanasi, I have a deep connection with the city's culture and traditions. I specialize in spiritual tours that help visitors understand the philosophical aspects of Hinduism and Buddhism that originated in this ancient city.",
    postedBy: "travelhowl",
    postedDate: "Jan 12, 2024"
  },
  {
    id: 3,
    name: "Vedang Tiwari",
    image: "/lovable-uploads/bnsguide/WhatsApp Image 2024-02-08 at 12.29.05 AM.jpeg",
    bio: "With expertise in the history and architecture of Varanasi, I provide comprehensive tours that highlight the city's remarkable buildings and structures. I'm fluent in English, Hindi, and French, making it easy for international visitors to communicate and learn.",
    postedBy: "travelhowl",
    postedDate: "Jan 15, 2024"
  }
];

const getCrowdAlertColor = (level) => {
  switch(level) {
    case "low":
      return "text-green-500";
    case "medium":
      return "text-yellow-500";
    case "high":
      return "text-orange-500";
    case "very high":
      return "text-red-500";
    default:
      return "text-green-500";
  }
};

const BanarasDetail = () => {
  const [newReview, setNewReview] = useState({
    name: "",
    rating: 5,
    comment: "",
    images: []
  });
  
  const [reviews, setReviews] = useState(mockReviews);
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [selectedImages, setSelectedImages] = useState<File[]>([]);
  const [previewImages, setPreviewImages] = useState<{file: File, url: string}[]>([]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    
    const imageUrls = previewImages.map(img => img.url);
    
    const newReviewItem = {
      id: reviews.length + 1,
      name: newReview.name || "Anonymous",
      avatar: "/placeholder.svg",
      rating: newReview.rating,
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      comment: newReview.comment,
      images: imageUrls
    };
    
    setReviews([newReviewItem, ...reviews]);
    setNewReview({ name: "", rating: 5, comment: "", images: [] });
    setSelectedImages([]);
    setPreviewImages([]);
    setShowReviewForm(false);
    
    toast.success("Your review has been submitted successfully!");
  };

  const handleImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    
    const files = Array.from(e.target.files);
    
    if (files.length > 3) {
      toast.error("You can only upload up to 3 images");
      return;
    }
    
    setSelectedImages(files);
    
    const newPreviewImages = files.map(file => ({
      file,
      url: URL.createObjectURL(file)
    }));
    
    setPreviewImages(newPreviewImages);
  };

  const removePreviewImage = (index: number) => {
    const updatedPreviewImages = [...previewImages];
    updatedPreviewImages.splice(index, 1);
    setPreviewImages(updatedPreviewImages);
    
    const updatedSelectedImages = [...selectedImages];
    updatedSelectedImages.splice(index, 1);
    setSelectedImages(updatedSelectedImages);
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="pt-24 md:pt-32 pb-16 md:pb-24 bg-city-pattern bg-cover bg-center">
        <div className="container mx-auto px-6">
          <div className="bg-black/80 dark:bg-black/90 backdrop-blur-md p-8 md:p-12 rounded-xl mx-auto shadow-xl">
            <Link to="/destination" className="inline-flex items-center text-travel-primary hover:text-travel-gold mb-6 transition-colors">
              <ArrowLeft size={18} className="mr-2" />
              Back to Destinations
            </Link>
            
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-2/3">
                <motion.h1 
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-3xl md:text-5xl font-bold mb-4 text-white"
                >
                  {banarasData.name}
                </motion.h1>
                
                <div className="flex items-center mb-4 text-white">
                  <div className="flex items-center mr-4">
                    <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                    <span className="ml-1 font-medium">{banarasData.rating}</span>
                  </div>
                  <div className="flex items-center mr-4">
                    <MapPin className="h-5 w-5 text-travel-gold" />
                    <span className="ml-1">Uttar Pradesh, India</span>
                  </div>
                  <div className="flex items-center">
                    <span className="font-medium">{banarasData.price}</span>
                    <span className="ml-1 text-travel-gold">Price Range</span>
                  </div>
                </div>
                
                <div className="mb-6 p-4 rounded-lg bg-white/10 backdrop-blur-sm">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold text-white flex items-center">
                      <AlertTriangle className="mr-2 h-5 w-5 text-travel-gold" />
                      Crowd Alert
                    </h3>
                    <div className={`flex items-center ${getCrowdAlertColor(banarasData.crowdLevel)}`}>
                      <div className="mr-2">
                        <img 
                          src="/lovable-uploads/31d9d173-9b35-4670-b228-2c762bc35925.png" 
                          alt="Crowd Icon" 
                          className="h-10 w-10"
                        />
                      </div>
                      <span className="font-medium capitalize">{banarasData.crowdLevel}</span>
                    </div>
                  </div>
                  <p className="text-sm text-white/80">
                    Current crowd levels at popular attractions. Plan your visit accordingly to avoid peak hours.
                  </p>
                </div>
                
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-lg mb-6 text-white"
                >
                  {banarasData.description}
                </motion.p>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="mb-6 text-white"
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
                    <div className="w-2 h-2 bg-travel-gold rounded-full mr-2"></div>
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
                <Card key={index} className="overflow-hidden">
                  <div className="w-full h-64 overflow-hidden">
                    <img 
                      src={guide.image} 
                      alt={guide.name} 
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{guide.name}</h3>
                    <div className="flex items-center text-sm text-muted-foreground mb-4">
                      <span>Posted by {guide.postedBy}</span>
                      <span className="mx-2">•</span>
                      <span>{guide.postedDate}</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-4">{guide.bio}</p>
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
          <div className="flex space-x-2 items-center">
            <div className="text-sm text-travel-gold bg-travel-dark/80 px-3 py-1 rounded-full">
              ✅ Automatic scrolling
            </div>
            <Button 
              onClick={() => setShowReviewForm(!showReviewForm)}
              className="bg-travel-primary hover:bg-travel-dark"
            >
              {showReviewForm ? 'Cancel' : 'Write a Review'}
            </Button>
          </div>
        </div>
        
        {showReviewForm && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mb-8 bg-travel-dark/80 rounded-xl p-6 text-white"
          >
            <h3 className="text-xl font-semibold mb-4">Share Your Experience</h3>
            <form onSubmit={handleReviewSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <Label htmlFor="name" className="mb-2 text-white">Your Name</Label>
                  <Input
                    id="name"
                    value={newReview.name}
                    onChange={(e) => setNewReview({...newReview, name: e.target.value})}
                    placeholder="Enter your name"
                    className="bg-travel-light/10 border-travel-light/20 text-white placeholder:text-white/50"
                  />
                </div>
                <div>
                  <Label htmlFor="rating" className="mb-2 text-white">Rating</Label>
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
                <Label htmlFor="comment" className="mb-2 text-white">Your Review</Label>
                <Textarea
                  id="comment"
                  value={newReview.comment}
                  onChange={(e) => setNewReview({...newReview, comment: e.target.value})}
                  rows={4}
                  placeholder="Share your experience..."
                  required
                  className="bg-travel-light/10 border-travel-light/20 text-white placeholder:text-white/50"
                />
              </div>
              
              <div className="mb-6">
                <Label htmlFor="images" className="mb-2 text-white">Upload Images (Max 3)</Label>
                <div className="border-2 border-dashed border-gray-500 rounded-lg p-4">
                  <div className="flex items-center justify-center">
                    <label htmlFor="image-upload" className="cursor-pointer flex flex-col items-center">
                      <Camera className="h-10 w-10 text-gray-400" />
                      <span className="mt-2 text-sm text-gray-300">Click to upload</span>
                      <Input
                        id="image-upload"
                        type="file"
                        multiple
                        accept="image/*"
                        className="hidden"
                        onChange={handleImageSelect}
                      />
                    </label>
                  </div>
                  
                  {previewImages.length > 0 && (
                    <div className="mt-4 grid grid-cols-3 gap-4">
                      {previewImages.map((img, index) => (
                        <div key={index} className="relative">
                          <img
                            src={img.url}
                            alt={`Preview ${index + 1}`}
                            className="w-full h-24 object-cover rounded-md"
                          />
                          <button
                            type="button"
                            onClick={() => removePreviewImage(index)}
                            className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1"
                          >
                            <X className="h-4 w-4" />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
              
              <div className="flex justify-end">
                <Button type="submit" className="bg-travel-primary hover:bg-travel-dark">
                  Submit Review
                </Button>
              </div>
            </form>
          </motion.div>
        )}
        
        <div className="py-4 px-2 bg-travel-dark/90 rounded-xl overflow-hidden">
          
          
 <Swiper
  modules={[Autoplay, Pagination]}
  spaceBetween={30}
  slidesPerView={1}
  breakpoints={{
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  }}
  autoplay={{
    delay: 2000,
    disableOnInteraction: false,
  }}
  pagination={{ clickable: true }}
  className="review-swiper"
>
  {reviews.map((review) => (
    <SwiperSlide key={review.id} className="h-full">
      <motion.div 
        className="bg-gray-900 rounded-xl p-6 shadow-md border border-gray-700 h-full flex flex-col"
      >
        <div className="flex items-start flex-grow">
          <Avatar className="h-10 w-10 mr-4">
            <AvatarImage src={review.avatar} alt={review.name} />
            <AvatarFallback>{review.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-semibold text-white">{review.name}</h3>
              <span className="text-sm text-gray-400">{review.date}</span>
            </div>
            <div className="flex items-center mb-3">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  className={`h-4 w-4 ${
                    i < review.rating 
                      ? 'text-yellow-400 fill-yellow-400' 
                      : 'text-gray-600'
                  }`} 
                />
              ))}
            </div>
            <p className="text-gray-300 mb-4">{review.comment}</p>
          </div>
        </div>
        
        {review.images && review.images.length > 0 && (
          <div className="mt-auto">
            <div className="grid grid-cols-1 gap-2">
              {review.images.map((image, index) => (
                <div key={index} className="rounded-md overflow-hidden h-48">
                  <img 
                    src={image} 
                    alt={`Review image ${index + 1}`} 
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </motion.div>
    </SwiperSlide>
  ))}
</Swiper>

        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default BanarasDetail;
