
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ChevronRight, ShieldCheck } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center luxury-pattern overflow-hidden">
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-luxury-dark/60 z-0"></div>
      
      {/* Background image */}
      <div 
        className="absolute inset-0 z-0 opacity-40" 
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')", 
          backgroundSize: 'cover', 
          backgroundPosition: 'center',
          filter: 'grayscale(20%)' 
        }}
      ></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h5 className="text-luxury-gold text-lg font-semibold mb-3 tracking-wider">DISCREET • PROFESSIONAL • PRECISE</h5>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white tracking-tight leading-tight">
              Exceptional Protocol <br />
              <span className="text-luxury-gold">For Exceptional People</span>
            </h1>
            <p className="mt-6 text-xl text-gray-100 max-w-xl">
              Seamless, discreet VVIP protocol and concierge services tailored for dignitaries, executives, and high-profile individuals worldwide.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Button 
                className="bg-luxury-gold hover:bg-luxury-gold/90 text-luxury-dark text-lg px-8 py-6 group" 
                asChild
              >
                <Link to="/book-consultation">
                  Request Service
                  <ChevronRight className="ml-2 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button 
                variant="outline" 
                className="border-white text-white hover:bg-white/10 hover:text-white text-lg px-8 py-6"
                asChild
              >
                <Link to="/services" className="flex items-center">
                  Explore Services
                </Link>
              </Button>
            </div>
            
            <div className="mt-12 flex items-center text-white">
              <ShieldCheck className="text-luxury-gold mr-2" size={20} />
              <span className="text-sm">Trusted by governments, corporations and high-profile individuals</span>
            </div>
          </div>
          
          <div className="hidden md:flex justify-end">
            <div className="relative">
              <div className="absolute -top-20 -left-20 w-64 h-64 bg-luxury-gold/10 rounded-full filter blur-xl"></div>
              <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-luxury-gold/10 rounded-full filter blur-xl"></div>
              <div className="relative z-10 bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20 shadow-2xl">
                <h3 className="text-xl font-serif text-luxury-gold mb-4">Exclusive Services</h3>
                <ul className="space-y-4 text-white">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-luxury-gold/20 rounded-full flex items-center justify-center text-luxury-gold mr-3">
                      ✓
                    </div>
                    <p>VVIP Airport Protocol</p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-luxury-gold/20 rounded-full flex items-center justify-center text-luxury-gold mr-3">
                      ✓
                    </div>
                    <p>Executive Transportation</p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-luxury-gold/20 rounded-full flex items-center justify-center text-luxury-gold mr-3">
                      ✓
                    </div>
                    <p>Private Concierge</p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-luxury-gold/20 rounded-full flex items-center justify-center text-luxury-gold mr-3">
                      ✓
                    </div>
                    <p>Red Carpet & Event Protocol</p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-luxury-gold/20 rounded-full flex items-center justify-center text-luxury-gold mr-3">
                      ✓
                    </div>
                    <p>Charter Coordination</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
