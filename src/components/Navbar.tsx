
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logo from '@/logo.png'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-3 glass-card'
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link 
          to="/" 
          className="flex items-center space-x-2 transition-all duration-300 hover:text-travel-gold"
        >
          {/* <div className="w-10 h-10 rounded-full bg-travel-gold flex items-center justify-center overflow-hidden"> */}
            <img 
              src={logo} 
              alt="TravelHowl Logo" 
              className="text-2xl w-40 h-25 object-contain"
            />
          {/* </div> */}
        </Link>

        {/* Desktop navigation links */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className={`nav-link ${isActive('/') ? 'text-travel-gold' : ''}`}>
            Home
          </Link>
          <Link to="/destination" className={`nav-link ${isActive('/destination') ? 'text-travel-gold' : ''}`}>
            Destinations
          </Link>
          <Link to="/support" className={`nav-link ${isActive('/support') ? 'text-travel-gold' : ''}`}>
            Support
          </Link>
          <Link to="/signin" className={`nav-link ${isActive('/signin') ? 'text-travel-gold' : ''}`}>
            Sign In
          </Link>

          <div className="relative">
            <input
              type="text"
              placeholder="Search destinations..."
              className="pl-10 pr-4 py-2 rounded-full text-sm border border-white/20 focus:outline-none focus:ring-2 focus:ring-travel-gold focus:border-transparent transition-all duration-300 w-48 bg-black/30 backdrop-blur-sm text-white"
            />
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
          </div>
        </div>

        {/* Mobile menu button */}
        <button 
          className="md:hidden rounded-full p-2 text-foreground hover:bg-gray-800 transition-all duration-200"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass-card animate-slide-down">
          <div className="flex flex-col space-y-4 px-6 py-8">
            <Link 
              to="/" 
              className={`text-lg font-medium ${isActive('/') ? 'text-travel-gold' : ''}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/destination" 
              className={`text-lg font-medium ${isActive('/destination') ? 'text-travel-gold' : ''}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Destinations
            </Link>
            <Link 
              to="/support" 
              className={`text-lg font-medium ${isActive('/support') ? 'text-travel-gold' : ''}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Support
            </Link>
            <Link 
              to="/signin" 
              className={`text-lg font-medium ${isActive('/signin') ? 'text-travel-gold' : ''}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Sign In
            </Link>
            
            <div className="relative mt-4">
              <input
                type="text"
                placeholder="Search destinations..."
                className="w-full pl-10 pr-4 py-2 rounded-full text-sm border border-white/20 focus:outline-none focus:ring-2 focus:ring-travel-gold focus:border-transparent bg-black/30 text-white"
              />
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
