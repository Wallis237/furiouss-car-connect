
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, ChevronRight } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Footer = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // In a real implementation, you would send this to your backend service
      console.log('Subscribing email:', email);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 800));
      
      toast({
        title: "Subscription Successful!",
        description: "Thank you for subscribing to our newsletter",
      });
      
      setEmail('');
    } catch (error) {
      toast({
        title: "Subscription Failed",
        description: "There was an error subscribing to the newsletter. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="bg-furious-black text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-bold text-furious-red mb-6">Furious</h3>
            <p className="text-gray-400 mb-6">
              Your ultimate destination for luxury cars. Browse, buy, and experience automotive excellence.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors flex items-center">
                  <ChevronRight className="h-4 w-4 mr-2" /> Home
                </Link>
              </li>
              <li>
                <Link to="/cars" className="text-gray-400 hover:text-white transition-colors flex items-center">
                  <ChevronRight className="h-4 w-4 mr-2" /> Cars
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors flex items-center">
                  <ChevronRight className="h-4 w-4 mr-2" /> About Us
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-400 hover:text-white transition-colors flex items-center">
                  <ChevronRight className="h-4 w-4 mr-2" /> Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors flex items-center">
                  <ChevronRight className="h-4 w-4 mr-2" /> Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start">
                <span className="font-medium text-white w-20">Phone:</span>
                <span>+237 680602509</span>
              </li>
              <li className="flex items-start">
                <span className="font-medium text-white w-20">Phone:</span>
                <span>+237 680155386</span>
              </li>
              <li className="flex items-start">
                <span className="font-medium text-white w-20">Email:</span>
                <span>tarshiwilliams476@gmail.com</span>
              </li>
              <li className="flex items-start">
                <span className="font-medium text-white w-20">Email:</span>
                <span>marcelenyong0@gmail.com</span>
              </li>
              <li className="flex items-start">
                <span className="font-medium text-white w-20">Address:</span>
                <span>Bonaberi, Douala, Cameroon</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Newsletter</h4>
            <p className="text-gray-400 mb-4">Subscribe to our newsletter for the latest updates and offers.</p>
            <form className="flex flex-col space-y-3" onSubmit={handleSubscribe}>
              <input 
                type="email" 
                placeholder="Your Email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-furious-darkgray text-white px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-furious-red transition-all"
                required
              />
              <button 
                type="submit" 
                className="btn-primary flex justify-center items-center"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <span>Subscribing...</span>
                    <svg className="animate-spin ml-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                  </>
                ) : (
                  "Subscribe"
                )}
              </button>
            </form>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Furious. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
