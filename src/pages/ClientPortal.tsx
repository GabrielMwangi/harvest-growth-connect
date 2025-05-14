
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Lock } from 'lucide-react';

const ClientPortal = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        <section className="py-16 md:py-24 bg-luxury-cream">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6 bg-luxury-dark text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-luxury-gold/20 flex items-center justify-center">
                    <Lock className="text-luxury-gold" size={24} />
                  </div>
                </div>
                <h1 className="text-2xl font-serif font-bold text-white">Client Portal</h1>
                <p className="text-gray-300 mt-2">Secure access for verified clients</p>
              </div>
              
              <div className="p-6">
                <form className="space-y-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-luxury-charcoal mb-1">
                      Email Address
                    </label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="Enter your email" 
                      className="w-full border-luxury-charcoal/30 focus:border-luxury-gold focus:ring-luxury-gold"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="password" className="block text-sm font-medium text-luxury-charcoal mb-1">
                      Password
                    </label>
                    <Input 
                      id="password" 
                      type="password" 
                      placeholder="Enter your password" 
                      className="w-full border-luxury-charcoal/30 focus:border-luxury-gold focus:ring-luxury-gold"
                    />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <label className="flex items-center">
                      <input type="checkbox" className="rounded border-luxury-charcoal/30 text-luxury-gold focus:ring-luxury-gold" />
                      <span className="ml-2 text-sm text-luxury-charcoal">Remember me</span>
                    </label>
                    <a href="#" className="text-sm text-luxury-gold hover:text-luxury-dark">
                      Forgot password?
                    </a>
                  </div>
                  
                  <div>
                    <Button className="w-full bg-luxury-dark hover:bg-luxury-navy text-white">
                      Sign In
                    </Button>
                  </div>
                </form>
                
                <div className="mt-6 text-center">
                  <p className="text-sm text-luxury-charcoal">
                    Don't have access? <a href="/contact" className="text-luxury-gold hover:text-luxury-dark font-medium">Request access</a>
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <p className="text-sm text-luxury-charcoal">
                For security concerns, please contact <a href="mailto:security@olevvip.com" className="text-luxury-dark hover:text-luxury-gold">security@olevvip.com</a>
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ClientPortal;
