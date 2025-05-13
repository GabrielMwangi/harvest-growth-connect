
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
          backgroundImage: "url('https://images.unsplash.com/photo-1629721671030-a83edbb11211?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')", 
          backgroundSize: 'cover', 
          backgroundPosition: 'center' 
        }}
      ></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative z-10 py-24 md:py-36 lg:py-48">
          <div className="sm:max-w-lg lg:max-w-2xl">
            <span className="block text-agro-green-light text-lg font-semibold mb-3">Kenya's Leading Agricultural Consultancy</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-agro-green-dark tracking-tight">
              Expert Agricultural Consulting for 
              <span className="text-agro-green-light block mt-2">Sustainable Growth</span>
            </h1>
            <p className="mt-6 text-xl text-gray-700 max-w-3xl">
              Providing professional agricultural management and consulting services to optimize your farming operations, 
              maximize yields, and implement sustainable practices across Kenya.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Button 
                className="bg-agro-green-dark hover:bg-agro-green-light text-white text-lg px-8 py-6 group" 
                asChild
              >
                <Link to="/book-consultation">
                  Book a Consultation
                  <span className="ml-2 transform transition-transform group-hover:translate-x-1">→</span>
                </Link>
              </Button>
              <Button 
                variant="outline" 
                className="border-agro-green-dark text-agro-green-dark hover:bg-agro-green-dark hover:text-white text-lg px-8 py-6"
                asChild
              >
                <Link to="/services" className="flex items-center">
                  Explore Our Services <ArrowRight className="ml-2" size={16} />
                </Link>
              </Button>
            </div>
          </div>
          
          {/* Feature Highlights */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-lg">
              <div className="w-12 h-12 bg-agro-green-light rounded-full flex items-center justify-center text-white mb-4">
                <span className="text-xl">🌱</span>
              </div>
              <h3 className="text-xl font-bold text-agro-green-dark mb-2">Local Expertise</h3>
              <p className="text-gray-700">Deep understanding of Kenyan agricultural conditions and challenges.</p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-lg">
              <div className="w-12 h-12 bg-agro-green-light rounded-full flex items-center justify-center text-white mb-4">
                <span className="text-xl">🧪</span>
              </div>
              <h3 className="text-xl font-bold text-agro-green-dark mb-2">Modern Techniques</h3>
              <p className="text-gray-700">Implementing the latest agricultural innovations and sustainable practices.</p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-lg">
              <div className="w-12 h-12 bg-agro-green-light rounded-full flex items-center justify-center text-white mb-4">
                <span className="text-xl">📈</span>
              </div>
              <h3 className="text-xl font-bold text-agro-green-dark mb-2">Proven Results</h3>
              <p className="text-gray-700">Track record of increasing yields and profitability for Kenyan farmers.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
