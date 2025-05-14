
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Briefcase, MapPin, Calendar } from 'lucide-react';

const openPositions = [
  {
    title: 'Senior Protocol Officer',
    location: 'Nairobi, Kenya',
    type: 'Full-time',
    description: 'Lead VVIP protocol services for high-profile clients, coordinating complex logistics and providing exceptional service.',
    requirements: ['5+ years in protocol or diplomatic service', 'Fluent in English & Swahili', 'Excellent communication skills'],
    date: 'Posted 2 days ago'
  },
  {
    title: 'Executive Concierge Specialist',
    location: 'Nairobi, Kenya',
    type: 'Full-time',
    description: 'Manage personalized concierge services for elite clientele, ensuring all requests are fulfilled with discretion and excellence.',
    requirements: ['3+ years in luxury concierge services', 'Strong network of contacts', 'Problem-solving abilities'],
    date: 'Posted 1 week ago'
  },
  {
    title: 'Airport Handling Coordinator',
    location: 'Mombasa, Kenya',
    type: 'Full-time',
    description: 'Oversee VVIP airport arrival and departure services, coordinating with airport authorities and ensuring smooth processes.',
    requirements: ['Aviation background preferred', 'Understanding of immigration procedures', 'Attention to detail'],
    date: 'Posted 2 weeks ago'
  }
];

const Careers = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="relative py-24">
          <div className="absolute inset-0 z-0 bg-luxury-dark/10">
            <div 
              className="absolute inset-0" 
              style={{ 
                backgroundImage: "url('https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')", 
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                opacity: 0.3
              }}
            ></div>
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h5 className="text-luxury-gold text-base font-medium uppercase tracking-wider mb-2">Join Our Team</h5>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-luxury-dark mb-6">
              Career Opportunities
            </h1>
            <p className="text-xl text-luxury-charcoal max-w-3xl mx-auto mb-10">
              We're seeking exceptional professionals who demonstrate discretion, attention to detail, and a passion for providing world-class service.
            </p>
          </div>
        </section>
        
        {/* Why Join Us Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-serif font-bold text-luxury-dark text-center mb-12">Why Join OleVVIPProtocol</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-luxury-cream p-8 rounded-lg">
                <div className="w-12 h-12 bg-luxury-gold/10 rounded-lg flex items-center justify-center text-luxury-gold mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="8" r="6" />
                    <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-luxury-dark mb-3">Prestigious Opportunities</h3>
                <p className="text-luxury-charcoal">Work with high-profile clients and global organizations. Build a career supporting distinguished individuals and events.</p>
              </div>
              
              <div className="bg-luxury-cream p-8 rounded-lg">
                <div className="w-12 h-12 bg-luxury-gold/10 rounded-lg flex items-center justify-center text-luxury-gold mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-luxury-dark mb-3">Professional Development</h3>
                <p className="text-luxury-charcoal">Ongoing training in protocol, etiquette, and luxury service. Opportunities for career advancement in specialized fields.</p>
              </div>
              
              <div className="bg-luxury-cream p-8 rounded-lg">
                <div className="w-12 h-12 bg-luxury-gold/10 rounded-lg flex items-center justify-center text-luxury-gold mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-luxury-dark mb-3">Exceptional Team</h3>
                <p className="text-luxury-charcoal">Join a select group of professionals who excel in their fields. Work in a culture that values excellence and discretion.</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Open Positions */}
        <section className="py-16 bg-luxury-cream">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-serif font-bold text-luxury-dark text-center mb-12">Current Openings</h2>
            
            <div className="grid md:grid-cols-1 gap-8">
              {openPositions.map((position, index) => (
                <Card key={index} className="border border-luxury-gold/20 hover:shadow-lg transition-shadow bg-white">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-luxury-dark text-xl">{position.title}</CardTitle>
                        <div className="flex items-center mt-2 space-x-4">
                          <div className="flex items-center text-luxury-charcoal text-sm">
                            <MapPin size={16} className="mr-1 text-luxury-gold" />
                            {position.location}
                          </div>
                          <div className="flex items-center text-luxury-charcoal text-sm">
                            <Briefcase size={16} className="mr-1 text-luxury-gold" />
                            {position.type}
                          </div>
                        </div>
                      </div>
                      <span className="text-xs text-luxury-charcoal flex items-center">
                        <Calendar size={14} className="mr-1" />
                        {position.date}
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-luxury-charcoal mb-4">
                      {position.description}
                    </CardDescription>
                    <div className="mt-4">
                      <h4 className="font-medium text-luxury-dark mb-2">Requirements:</h4>
                      <ul className="list-disc list-inside text-sm text-luxury-charcoal">
                        {position.requirements.map((req, i) => (
                          <li key={i}>{req}</li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="bg-luxury-dark hover:bg-luxury-navy text-white">
                      Apply Now
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <p className="text-luxury-charcoal mb-6">
                Don't see a position that matches your skills? We're always looking for exceptional talent.
              </p>
              <Button variant="outline" className="border-luxury-dark text-luxury-dark hover:bg-luxury-dark hover:text-white">
                Submit an Open Application
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Careers;
