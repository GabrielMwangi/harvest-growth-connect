
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const CtaSection = () => {
  return (
    <section className="py-16 bg-agro-green-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Optimize Your Agricultural Business?</h2>
            <p className="text-lg text-gray-200 mb-6">
              Contact our team today to discuss how our consulting services can help you increase productivity, sustainability, and profitability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className="bg-white text-agro-green-dark hover:bg-agro-beige px-8 py-6 text-lg"
                asChild
              >
                <Link to="/contact">Contact Us Today</Link>
              </Button>
              <Button 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-agro-green-dark px-8 py-6 text-lg"
                asChild
              >
                <Link to="/services">Explore Services</Link>
              </Button>
            </div>
          </div>
          <div className="hidden md:block relative">
            <div className="absolute -top-16 -right-16 w-32 h-32 bg-agro-green-light rounded-full opacity-20"></div>
            <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-agro-green-light rounded-full opacity-20"></div>
            <div className="relative z-10 bg-white p-8 rounded-lg shadow-xl">
              <h3 className="text-agro-green-dark text-2xl font-bold mb-4">Our Impact</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-agro-beige rounded-lg">
                  <p className="text-3xl font-bold text-agro-green-dark">500+</p>
                  <p className="text-gray-700">Clients Served</p>
                </div>
                <div className="text-center p-4 bg-agro-beige rounded-lg">
                  <p className="text-3xl font-bold text-agro-green-dark">30%</p>
                  <p className="text-gray-700">Avg. Yield Increase</p>
                </div>
                <div className="text-center p-4 bg-agro-beige rounded-lg">
                  <p className="text-3xl font-bold text-agro-green-dark">25%</p>
                  <p className="text-gray-700">Cost Reduction</p>
                </div>
                <div className="text-center p-4 bg-agro-beige rounded-lg">
                  <p className="text-3xl font-bold text-agro-green-dark">15+</p>
                  <p className="text-gray-700">Years Experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
