
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Mail, MessageSquare, Phone, Clock, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';

const Support = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
      duration: 3000,
    });
    setName('');
    setEmail('');
    setSubject('');
    setMessage('');
  };

  const supportCards = [
    {
      icon: <Mail className="h-8 w-8" />,
      title: "Email Support",
      description: "Get answers within 24 hours",
      contact: "support@travelhowl.com",
      color: "bg-travel-primary"
    },
    {
      icon: <MessageSquare className="h-8 w-8" />,
      title: "Live Chat",
      description: "Chat with our travel experts",
      contact: "Available 24/7",
      color: "bg-travel-secondary"
    },
    {
      icon: <Phone className="h-8 w-8" />,
      title: "Phone Support",
      description: "Talk to a customer representative",
      contact: "+1 (123) 456-7890",
      color: "bg-travel-dark"
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Support Hours",
      description: "When we're available to help",
      contact: "Mon-Fri: 9AM-6PM EST",
      color: "bg-travel-gold"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="pt-24 md:pt-32 pb-16 md:pb-24">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-5xl font-bold mb-6"
            >
              How Can We Help You?
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-muted-foreground"
            >
              Our travel experts are here to assist you with any questions or concerns you may have. We're committed to making your travel experience seamless and enjoyable.
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {supportCards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className={`${card.color} w-16 h-16 rounded-full flex items-center justify-center text-white mx-auto mb-4`}>
                  {card.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
                <p className="text-muted-foreground mb-4">{card.description}</p>
                <p className="font-medium text-travel-primary">{card.contact}</p>
              </motion.div>
            ))}
          </div>
          
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="glass-card rounded-xl p-8 md:p-10 shadow-xl border border-gray-200 dark:border-gray-800"
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Get in Touch</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Your Name</Label>
                    <Input
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="John Doe"
                      required
                      className="w-full rounded-md"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Your Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@example.com"
                      required
                      className="w-full rounded-md"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="How can we help you?"
                    required
                    className="w-full rounded-md"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Please provide as much detail as possible..."
                    required
                    className="w-full min-h-[150px] rounded-md resize-y"
                  />
                </div>
                
                <Button
                  type="submit"
                  className="w-full bg-travel-primary hover:bg-travel-primary/90 text-white py-2 rounded-md transition-all duration-300 flex items-center justify-center"
                >
                  <span>Send Message</span>
                  <Send size={16} className="ml-2" />
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
      
      <div className="bg-travel-light/30 py-16">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Frequently Asked Questions</h2>
            <p className="text-muted-foreground mb-12">
              Find quick answers to common questions about our services and travel recommendations.
            </p>
            
            <div className="space-y-6">
              {[
                {
                  question: "How do I plan a trip using TravelHowl?",
                  answer: "TravelHowl makes trip planning easy with our intuitive interface. Simply search for your desired destination, browse our comprehensive guides, and use our planning tools to create a personalized itinerary."
                },
                {
                  question: "Are the travel recommendations personalized?",
                  answer: "Yes, our recommendations are personalized based on your preferences, travel history, and interests. The more you use TravelHowl, the more tailored our suggestions become."
                },
                {
                  question: "How often is the travel information updated?",
                  answer: "We update our travel information regularly to ensure you have access to the most current details. Our local experts and community of travelers contribute to keeping our content fresh and accurate."
                },
                {
                  question: "Can I contribute my own travel experiences?",
                  answer: "Absolutely! We encourage our users to share their travel experiences, tips, and recommendations. Your contributions help fellow travelers discover authentic experiences and hidden gems."
                }
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="glass-card rounded-lg p-6 text-left shadow-lg"
                >
                  <h3 className="text-xl font-semibold mb-3">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Support;
