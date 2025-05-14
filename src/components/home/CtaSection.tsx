
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const CtaSection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background image */}
      <div 
        className="absolute inset-0 z-0" 
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')", 
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.3) grayscale(20%)'
        }}
      ></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <h5 className="text-luxury-gold text-base font-medium uppercase tracking-wider mb-2">Experience Excellence</h5>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
            Elevate Your Protocol Experience
          </h2>
          <p className="text-xl text-gray-200 mb-10">
            Contact our team to discuss your VVIP protocol and concierge requirements in complete confidence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-luxury-gold hover:bg-luxury-gold/90 text-luxury-dark px-8" 
              asChild
            >
              <Link to="/book-consultation">
                Request Service
              </Link>
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white/10 px-8"
              asChild
            >
              <Link to="/contact">
                Contact Us
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
