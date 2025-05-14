
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Briefcase, Award, UserCheck, Globe } from 'lucide-react';

const CareerSection = () => {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h5 className="text-luxury-gold text-base font-medium uppercase tracking-wider mb-2">Join Our Team</h5>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-luxury-dark mb-4">Career Opportunities</h2>
          <p className="text-lg text-luxury-charcoal max-w-3xl mx-auto">
            We're looking for exceptional professionals to join our elite team of protocol officers and concierge specialists.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 relative">
            <div className="absolute -left-8 -top-8 w-64 h-64 bg-luxury-gold/5 rounded-full"></div>
            <div className="relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                alt="Professional team member" 
                className="rounded-lg shadow-xl h-[500px] w-full object-cover object-center"
              />
              
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg border border-luxury-gold/20">
                <div className="flex items-center">
                  <Award className="text-luxury-gold mr-2" size={24} />
                  <div>
                    <p className="text-luxury-dark font-bold">Excellence in Service</p>
                    <p className="text-sm text-luxury-charcoal">Join our award-winning team</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2">
            <h3 className="text-2xl font-serif font-bold text-luxury-dark mb-6">Become Part of an Elite Team</h3>
            <p className="text-luxury-charcoal mb-8">
              OleVVIPProtocol selects only the most qualified professionals who demonstrate exceptional attention to detail, discretion, and a commitment to excellence. If you're passionate about delivering world-class service, we invite you to explore career opportunities with us.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-luxury-gold/10 rounded-full flex items-center justify-center text-luxury-gold mr-4">
                  <UserCheck size={20} />
                </div>
                <div>
                  <h4 className="text-luxury-dark font-medium">Rigorous Selection</h4>
                  <p className="text-luxury-charcoal">We seek professionals with impeccable backgrounds</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-luxury-gold/10 rounded-full flex items-center justify-center text-luxury-gold mr-4">
                  <Briefcase size={20} />
                </div>
                <div>
                  <h4 className="text-luxury-dark font-medium">Prestigious Opportunities</h4>
                  <p className="text-luxury-charcoal">Work with high-profile clients in exciting environments</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-luxury-gold/10 rounded-full flex items-center justify-center text-luxury-gold mr-4">
                  <Globe size={20} />
                </div>
                <div>
                  <h4 className="text-luxury-dark font-medium">Global Postings</h4>
                  <p className="text-luxury-charcoal">Opportunities throughout Africa and beyond</p>
                </div>
              </div>
            </div>
            
            <Button 
              className="bg-luxury-dark hover:bg-luxury-navy text-white" 
              asChild
            >
              <Link to="/careers">
                <Briefcase size={18} className="mr-2" />
                View Open Positions
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerSection;
