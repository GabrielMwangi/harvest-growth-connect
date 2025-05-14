
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Plane, Car, Briefcase, Calendar, Compass } from 'lucide-react';

const serviceItems = [
  {
    title: 'VVIP Airport Handling',
    description: 'Seamless arrival and departure handling with VIP terminal access, expedited immigration, and personalized assistance.',
    icon: Plane,
    link: '/services#airport-handling'
  },
  {
    title: 'Executive Transportation',
    description: 'Secure, discreet transportation with professional chauffeurs and luxury vehicles worldwide.',
    icon: Car,
    link: '/services#transportation'
  },
  {
    title: 'Private Concierge',
    description: 'Dedicated concierge services for business and leisure needs, available 24/7 with unparalleled attention to detail.',
    icon: Briefcase,
    link: '/services#concierge'
  },
  {
    title: 'Red Carpet & Events',
    description: 'Comprehensive protocol management for high-profile events, galas, and official ceremonies.',
    icon: Calendar,
    link: '/services#events'
  },
  {
    title: 'Charter Coordination',
    description: 'Seamless arrangement of private air, sea, and land charters with complete logistical support.',
    icon: Compass,
    link: '/services#charter'
  },
];

const HomeServices = () => {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h5 className="text-luxury-gold text-base font-medium uppercase tracking-wider mb-2">Our Expertise</h5>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-luxury-dark mb-4">Premium Protocol Services</h2>
          <p className="text-lg text-luxury-charcoal max-w-3xl mx-auto">
            Discreet, personalized services for VVIPs, government officials, executives, and high-profile individuals.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceItems.map((service, index) => (
            <Card key={index} className="card-hover-effect border-luxury-cream overflow-hidden group">
              <div className="absolute top-0 left-0 w-1 h-0 bg-luxury-gold group-hover:h-full transition-all duration-300"></div>
              <CardHeader className="pb-3">
                <div className="w-12 h-12 bg-luxury-cream flex items-center justify-center rounded-md mb-4 text-luxury-dark group-hover:bg-luxury-gold/10 transition-colors">
                  <service.icon size={24} />
                </div>
                <CardTitle className="text-xl font-bold text-luxury-dark">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="pb-3">
                <CardDescription className="text-luxury-charcoal min-h-[80px]">
                  {service.description}
                </CardDescription>
              </CardContent>
              <CardFooter className="pt-0">
                <Button 
                  variant="ghost" 
                  className="text-luxury-dark hover:text-luxury-gold hover:bg-transparent p-0 group/btn"
                  asChild
                >
                  <Link to={service.link} className="flex items-center">
                    Learn More <ArrowRight className="ml-2 group-hover/btn:translate-x-1 transition-transform" size={16} />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button 
            variant="outline"
            className="border-luxury-dark text-luxury-dark hover:bg-luxury-dark hover:text-white px-8"
            asChild
          >
            <Link to="/services">View All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HomeServices;
