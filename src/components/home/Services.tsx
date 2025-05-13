
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const serviceItems = [
  {
    title: 'Farm Management',
    description: 'Comprehensive management solutions to optimize your farm operations, resource allocation, and decision-making processes.',
    icon: '🌱',
    link: '/services#farm-management'
  },
  {
    title: 'Crop Consulting',
    description: 'Expert advice on crop selection, rotation strategies, pest management, and maximizing yield while maintaining sustainability.',
    icon: '🌾',
    link: '/services#crop-consulting'
  },
  {
    title: 'Agricultural Planning',
    description: 'Strategic planning services for farm development, expansion, diversification, and long-term sustainability goals.',
    icon: '📈',
    link: '/services#agricultural-planning'
  },
  {
    title: 'Soil Health Management',
    description: 'Soil analysis, fertility recommendations, and management practices to improve soil health and productivity.',
    icon: '🧪',
    link: '/services#soil-health'
  },
];

const HomeServices = () => {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-agro-green-dark mb-4">Our Consulting Services</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We provide specialized consulting services to help agricultural businesses thrive in today's competitive landscape.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {serviceItems.map((service, index) => (
            <Card key={index} className="card-hover-effect border border-gray-200">
              <CardHeader>
                <div className="text-4xl mb-4">{service.icon}</div>
                <CardTitle className="text-xl font-bold text-agro-green-dark">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 min-h-[100px]">
                  {service.description}
                </CardDescription>
              </CardContent>
              <CardFooter>
                <Button 
                  variant="ghost" 
                  className="text-agro-green-dark hover:text-agro-green-light hover:bg-transparent p-0"
                  asChild
                >
                  <Link to={service.link} className="flex items-center">
                    Learn More <ArrowRight className="ml-2" size={16} />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button 
            variant="outline"
            className="border-agro-green-dark text-agro-green-dark hover:bg-agro-green-dark hover:text-white px-8"
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
