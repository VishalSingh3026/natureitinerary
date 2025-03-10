
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import logo from "@/logo.png"
const Footer = () => {
  return (
    <footer className="bg-travel-dark text-white">
      <div className="container mx-auto px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-6">
                <img src={logo} alt="TravelHowl Logo" className="text-2xl w-40 h-25" />
            </Link>
            <p className="text-white/80 mb-6">
              Your comprehensive online travel guide providing reliable information, personalized recommendations, and insider tips.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/70 hover:text-travel-gold transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white/70 hover:text-travel-gold transition-colors">
                <Twitter size={20} />
              </a>
              <a href="https://www.instagram.com/travelhowl_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="text-white/70 hover:text-travel-gold transition-colors">
                <Instagram size={20} />
              </a>
              <a href="www.linkedin.com/in/vishal-singh-chauhan-4a0273239" className="text-white/70 hover:text-travel-gold transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6 border-b border-white/10 pb-2">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-white/70 hover:text-travel-gold transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/destination" className="text-white/70 hover:text-travel-gold transition-colors">Destinations</Link>
              </li>
              <li>
                <Link to="/support" className="text-white/70 hover:text-travel-gold transition-colors">Support</Link>
              </li>
              <li>
                <Link to="/signin" className="text-white/70 hover:text-travel-gold transition-colors">Sign In</Link>
              </li>
              <li>
                <Link to="/" className="text-white/70 hover:text-travel-gold transition-colors">Travel Guide</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6 border-b border-white/10 pb-2">Popular Destinations</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-white/70 hover:text-travel-gold transition-colors">Banaras</a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-travel-gold transition-colors">New York</a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-travel-gold transition-colors">Paris</a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-travel-gold transition-colors">New Delhi</a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-travel-gold transition-colors">Tokyo</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6 border-b border-white/10 pb-2">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={20} className="mr-2 text-travel-gold shrink-0 mt-0.5" />
                <span className="text-white/70">Friends Colony,Etawah-206001</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-2 text-travel-gold" />
                <span className="text-white/70">+91 9412******</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-2 text-travel-gold" />
                <span className="text-white/70">admin@travelhowl.live</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} TravelHowl. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-white/60 hover:text-travel-gold text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-white/60 hover:text-travel-gold text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-white/60 hover:text-travel-gold text-sm transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
