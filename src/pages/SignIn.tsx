
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Eye, EyeOff, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: isLogin ? "Welcome back!" : "Account created!",
      description: isLogin 
        ? "You have successfully logged in." 
        : "Your account has been created successfully.",
      duration: 3000,
    });
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="pt-24 md:pt-32 pb-16 md:pb-24">
        <div className="container mx-auto px-6">
          <div className="max-w-md mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="glass-card border border-gray-200 dark:border-gray-800 rounded-xl p-8 md:p-10 shadow-xl"
            >
              <div className="text-center mb-8">
                <h1 className="text-2xl md:text-3xl font-bold mb-2">
                  {isLogin ? "Welcome Back" : "Create Account"}
                </h1>
                <p className="text-muted-foreground">
                  {isLogin 
                    ? "Sign in to access your travel plans and recommendations." 
                    : "Join TravelHowl to discover amazing destinations and plan your trips."}
                </p>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full rounded-md"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <div className="relative">
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="••••••••"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full rounded-md pr-10"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-500"
                    >
                      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                </div>
                
                {isLogin && (
                  <div className="text-right">
                    <Link to="#" className="text-sm text-travel-primary hover:underline">
                      Forgot password?
                    </Link>
                  </div>
                )}
                
                <Button
                  type="submit"
                  className="w-full bg-travel-primary hover:bg-travel-primary/90 text-white py-2 rounded-md transition-all duration-300"
                >
                  {isLogin ? "Sign In" : "Create Account"}
                  <ArrowRight size={16} className="ml-2" />
                </Button>
              </form>
              
              <div className="mt-8 text-center">
                <p className="text-sm text-muted-foreground">
                  {isLogin ? "Don't have an account?" : "Already have an account?"}
                  <button
                    onClick={() => setIsLogin(!isLogin)}
                    className="ml-2 text-travel-primary hover:underline font-medium"
                  >
                    {isLogin ? "Sign Up" : "Sign In"}
                  </button>
                </p>
              </div>
              
              <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-800">
                <p className="text-xs text-center text-muted-foreground">
                  By continuing, you agree to TravelHowl's{" "}
                  <Link to="#" className="text-travel-primary hover:underline">
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link to="#" className="text-travel-primary hover:underline">
                    Privacy Policy
                  </Link>
                  .
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default SignIn;
