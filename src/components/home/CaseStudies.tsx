
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight } from 'lucide-react';

const caseStudies = [
  {
    title: 'Yield Optimization for Grain Farm',
    description: 'Helped a 500-acre grain farm increase yields by 35% through improved soil management and precision agriculture techniques.',
    image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    category: 'Crop Management',
    result: '35% Yield Increase'
  },
  {
    title: 'Water Conservation Project',
    description: 'Implemented water-saving irrigation systems for a large orchard, reducing water usage by 40% while maintaining crop quality.',
    image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    category: 'Sustainability',
    result: '40% Water Saved'
  },
  {
    title: 'Organic Transition Strategy',
    description: 'Guided a traditional farm through a successful 3-year transition to certified organic production, increasing profitability.',
    image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    category: 'Organic Farming',
    result: '45% Revenue Increase'
  }
];

const HomeCaseStudies = () => {
  return (
    <section className="section-padding bg-agro-beige">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-agro-green-dark mb-4">Case Studies</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover how we've helped our clients achieve remarkable results through strategic agricultural consulting.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <Card key={index} className="overflow-hidden card-hover-effect border-0 shadow">
              <div className="h-48 overflow-hidden">
                <img 
                  src={study.image} 
                  alt={study.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <Badge variant="outline" className="bg-agro-green-light/10 text-agro-green-dark border-agro-green-light">
                    {study.category}
                  </Badge>
                  <Badge variant="secondary" className="bg-agro-green-dark text-white">
                    {study.result}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-bold mt-2 text-agro-green-dark">{study.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  {study.description}
                </CardDescription>
              </CardContent>
              <CardFooter>
                <Button 
                  variant="ghost" 
                  className="text-agro-green-dark hover:text-agro-green-light hover:bg-transparent p-0"
                  asChild
                >
                  <Link to="/case-studies" className="flex items-center">
                    Read Full Case Study <ArrowRight className="ml-2" size={16} />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button 
            className="bg-agro-green-dark hover:bg-agro-green-light text-white px-8"
            asChild
          >
            <Link to="/case-studies">View All Case Studies</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HomeCaseStudies;
