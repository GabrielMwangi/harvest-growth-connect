
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Youtube, Mail, Phone, MapPin, Shield, Lock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-luxury-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-serif font-bold mb-4">Ole<span className="text-luxury-gold">VVIP</span></h3>
            <p className="mb-6 text-gray-300">
              Exceptionally discreet protocol services for VVIPs, dignitaries, and executives. Professional, precise, and personalized service worldwide.
            </p>
            <div className="flex items-center space-x-2 mb-4">
              <Shield size={18} className="text-luxury-gold" />
              <span className="text-sm text-gray-300">Discretion Guaranteed</span>
            </div>
            <div className="flex items-center space-x-2">
              <Lock size={18} className="text-luxury-gold" />
              <span className="text-sm text-gray-300">Secure Communications</span>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-medium mb-4 border-b border-luxury-gold/30 pb-2">Navigation</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-luxury-gold">Home</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-luxury-gold">About Us</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-luxury-gold">Our Services</Link></li>
              <li><Link to="/case-studies" className="text-gray-300 hover:text-luxury-gold">Case Studies</Link></li>
              <li><Link to="/careers" className="text-gray-300 hover:text-luxury-gold">Careers</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-luxury-gold">Contact</Link></li>
              <li><Link to="/client-portal" className="text-gray-300 hover:text-luxury-gold">Client Portal</Link></li>
            </ul>
          </div>
          
          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-medium mb-4 border-b border-luxury-gold/30 pb-2">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 flex-shrink-0 text-luxury-gold" />
                <span>Karen Office Park, Nairobi, Kenya</span>
              </div>
              <div className="flex items-center">
                <Phone size={18} className="mr-2 flex-shrink-0 text-luxury-gold" />
                <span>+254 722 123 456</span>
              </div>
              <div className="flex items-center">
                <Mail size={18} className="mr-2 flex-shrink-0 text-luxury-gold" />
                <span>info@olevvip.com</span>
              </div>
              <div className="mt-5 flex space-x-4">
                <a href="https://facebook.com" className="text-gray-400 hover:text-luxury-gold">
                  <Facebook size={20} />
                </a>
                <a href="https://twitter.com" className="text-gray-400 hover:text-luxury-gold">
                  <Twitter size={20} />
                </a>
                <a href="https://linkedin.com" className="text-gray-400 hover:text-luxury-gold">
                  <Linkedin size={20} />
                </a>
                <a href="https://youtube.com" className="text-gray-400 hover:text-luxury-gold">
                  <Youtube size={20} />
                </a>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div>
            <h3 className="text-lg font-medium mb-4 border-b border-luxury-gold/30 pb-2">Request Information</h3>
            <p className="mb-4 text-gray-300">
              Contact us for discreet information about our services.
            </p>
            <form className="space-y-3">
              <Input
                type="email"
                placeholder="Your email"
                className="bg-luxury-charcoal/30 border-luxury-gold/30 placeholder-gray-400"
              />
              <Input
                type="text"
                placeholder="Subject"
                className="bg-luxury-charcoal/30 border-luxury-gold/30 placeholder-gray-400"
              />
              <Button className="w-full bg-luxury-gold hover:bg-luxury-gold/90 text-luxury-dark font-medium">
                Send Request
              </Button>
            </form>
          </div>
        </div>
        
        {/* Bottom Footer */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">© {year} OleVVIPProtocol. All rights reserved.</p>
          <div className="mt-4 md:mt-0">
            <Link to="/privacy-policy" className="text-sm text-gray-400 hover:text-luxury-gold mr-4">Privacy Policy</Link>
            <Link to="/terms-of-service" className="text-sm text-gray-400 hover:text-luxury-gold">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
