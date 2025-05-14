
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Lock, User, MessageCircle, Calendar } from 'lucide-react';

const ClientPortalSection = () => {
  return (
    <section className="section-padding dark-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h5 className="text-luxury-gold text-base font-medium uppercase tracking-wider mb-2">Exclusive Access</h5>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">Client Portal</h2>
            <p className="text-lg text-gray-300 mb-8">
              Our secure client portal provides verified clients with exclusive access to manage bookings, communicate with dedicated protocol officers, and request services confidentially.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-luxury-gold/20 rounded-full flex items-center justify-center text-luxury-gold mr-4">
                  <Calendar size={20} />
                </div>
                <div>
                  <h4 className="text-white font-medium">Manage Bookings</h4>
                  <p className="text-gray-300">Schedule and oversee all your protocol arrangements</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-luxury-gold/20 rounded-full flex items-center justify-center text-luxury-gold mr-4">
                  <MessageCircle size={20} />
                </div>
                <div>
                  <h4 className="text-white font-medium">Secure Communication</h4>
                  <p className="text-gray-300">End-to-end encrypted messaging with your protocol team</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-luxury-gold/20 rounded-full flex items-center justify-center text-luxury-gold mr-4">
                  <Lock size={20} />
                </div>
                <div>
                  <h4 className="text-white font-medium">Confidential Requests</h4>
                  <p className="text-gray-300">Submit service requests with complete privacy</p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className="bg-luxury-gold hover:bg-luxury-gold/90 text-luxury-dark" 
                asChild
              >
                <Link to="/client-portal">
                  <User size={18} className="mr-2" />
                  Access Portal
                </Link>
              </Button>
              <Button 
                variant="outline" 
                className="border-white text-white hover:bg-white/10"
                asChild
              >
                <Link to="/contact">
                  Request Access
                </Link>
              </Button>
            </div>
          </div>
          
          <div className="relative hidden md:block">
            <div className="absolute -right-16 -top-16 w-32 h-32 bg-luxury-gold/10 rounded-full filter blur-lg"></div>
            <div className="absolute -left-16 -bottom-16 w-32 h-32 bg-luxury-gold/10 rounded-full filter blur-lg"></div>
            <div className="relative z-10 bg-luxury-navy/30 backdrop-blur-sm rounded-lg border border-white/10 shadow-2xl overflow-hidden">
              <div className="p-6 bg-luxury-navy/80 border-b border-white/10">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-luxury-gold/20 flex items-center justify-center text-luxury-gold mr-3">
                    <User size={20} />
                  </div>
                  <h3 className="text-xl font-serif text-white">Client Portal</h3>
                </div>
              </div>
              <div className="p-6">
                <div className="bg-white/5 backdrop-blur-sm rounded p-4 mb-4 border border-white/10">
                  <h4 className="text-luxury-gold font-medium mb-2">Upcoming Service</h4>
                  <p className="text-white font-serif text-sm">VVIP Airport Arrival</p>
                  <p className="text-gray-300 text-xs">May 18, 2025 • 10:30 AM</p>
                  <div className="mt-3 flex justify-between items-center">
                    <span className="text-green-400 text-xs font-medium">Confirmed</span>
                    <button className="text-luxury-gold hover:text-luxury-gold/80 text-xs">View Details</button>
                  </div>
                </div>
                
                <div className="bg-white/5 backdrop-blur-sm rounded p-4 mb-4 border border-white/10">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="text-luxury-gold font-medium">Messages</h4>
                    <span className="bg-luxury-gold text-luxury-dark text-xs font-medium px-2 py-1 rounded-full">2 New</span>
                  </div>
                  <div className="border-b border-white/10 pb-3 mb-3">
                    <p className="text-white text-sm font-medium">Protocol Officer Assigned</p>
                    <p className="text-gray-300 text-xs">2 hours ago</p>
                  </div>
                  <div>
                    <p className="text-white text-sm font-medium">Vehicle Confirmation</p>
                    <p className="text-gray-300 text-xs">Yesterday</p>
                  </div>
                </div>
                
                <button className="w-full text-center mt-2 text-luxury-gold hover:text-luxury-gold/80 text-sm">
                  View All Activity →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientPortalSection;
