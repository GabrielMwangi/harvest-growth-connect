
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative bg-agro-beige overflow-hidden">
      <div 
        className="absolute inset-0 z-0 opacity-20" 
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')", 
          backgroundSize: 'cover', 
          backgroundPosition: 'center' 
        }}
      ></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative z-10 py-20 md:py-32 lg:py-40">
          <div className="sm:max-w-lg lg:max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-agro-green-dark tracking-tight">
              Expert Agricultural Consulting for 
              <span className="text-agro-green-light block mt-2">Sustainable Growth</span>
            </h1>
            <p className="mt-6 text-xl text-gray-600 max-w-3xl">
              Providing professional agricultural management and consulting services to optimize your farming operations, 
              maximize yields, and implement sustainable practices.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Button 
                className="bg-agro-green-dark hover:bg-agro-green-light text-white text-lg px-8 py-6" 
                asChild
              >
                <Link to="/services">Our Services</Link>
              </Button>
              <Button 
                variant="outline" 
                className="border-agro-green-dark text-agro-green-dark hover:bg-agro-green-dark hover:text-white text-lg px-8 py-6"
                asChild
              >
                <Link to="/contact" className="flex items-center">
                  Get in Touch <ArrowRight className="ml-2" size={16} />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
