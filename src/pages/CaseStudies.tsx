
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const caseStudies = [
  {
    id: 'yield-optimization',
    title: 'Yield Optimization for Grain Farm',
    description: 'Helped a 500-acre grain farm increase yields by 35% through improved soil management and precision agriculture techniques.',
    image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    category: 'Crop Management',
    result: '35% Yield Increase',
    location: 'Midwest, USA',
    duration: '18 months',
    challenge: 'A 500-acre grain farm was experiencing declining yields despite increasing inputs. The soil health was degrading, and traditional methods were no longer delivering results.',
    solution: 'We implemented a comprehensive soil health program, including custom crop rotation, targeted amendments based on detailed soil analysis, and precision agriculture techniques for optimized resource application.',
    outcome: 'After 18 months, the farm saw a 35% increase in yields while reducing fertilizer usage by 20%. Soil organic matter increased by 1.5%, indicating improved long-term sustainability. The ROI on our consulting services was realized within the first harvest season.',
    testimonial: {
      quote: "The AgroConsult team transformed our operation. Their data-driven approach to soil management and precision agriculture gave us results that exceeded our expectations.",
      author: "James Wilson",
      role: "Farm Owner"
    }
  },
  {
    id: 'water-conservation',
    title: 'Water Conservation Project',
    description: 'Implemented water-saving irrigation systems for a large orchard, reducing water usage by 40% while maintaining crop quality.',
    image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    category: 'Sustainability',
    result: '40% Water Saved',
    location: 'California, USA',
    duration: '12 months',
    challenge: 'A 200-acre almond orchard in California was facing severe water restrictions due to ongoing drought conditions. They needed to significantly reduce water usage without compromising yield or quality.',
    solution: 'We designed and implemented a comprehensive water conservation strategy, including drip irrigation systems, soil moisture sensors, deficit irrigation scheduling, and improved water retention practices.',
    outcome: 'Within one year, the orchard reduced water usage by 40% while maintaining crop quality and yield. Energy costs for pumping decreased by 35%, and the improved irrigation uniformity led to more consistent nut quality.',
    testimonial: {
      quote: "In a region where water is increasingly scarce and expensive, AgroConsult's water conservation strategy has been a game-changer for our orchard. The ROI was remarkable.",
      author: "Maria Garcia",
      role: "Orchard Manager"
    }
  },
  {
    id: 'organic-transition',
    title: 'Organic Transition Strategy',
    description: 'Guided a traditional farm through a successful 3-year transition to certified organic production, increasing profitability.',
    image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    category: 'Organic Farming',
    result: '45% Revenue Increase',
    location: 'Northeast, USA',
    duration: '3 years',
    challenge: 'A 150-acre diversified vegetable farm wanted to transition to certified organic production to access premium markets, but was concerned about maintaining profitability during the 3-year transition period.',
    solution: 'We developed a phased transition plan with detailed crop rotation, soil building strategies, natural pest management systems, and market development during the transition period. We guided the certification process and helped secure transitional market premiums.',
    outcome: 'The farm successfully achieved organic certification across all acreage within 3 years. During the transition, they maintained profitability through transitional premiums and reduced input costs. Post-certification, annual revenue increased by 45% compared to conventional production.',
    testimonial: {
      quote: "AgroConsult's guidance through the organic transition was invaluable. They transformed what could have been a financially challenging period into a profitable journey toward higher margins and market access.",
      author: "Sarah Johnson",
      role: "Farm Owner"
    }
  },
  {
    id: 'livestock-integration',
    title: 'Integrated Crop-Livestock System',
    description: 'Designed and implemented a regenerative agriculture system integrating cattle with crop rotation, improving soil health and creating multiple revenue streams.',
    image: 'https://images.unsplash.com/photo-1493962853295-0fd70327578a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    category: 'Regenerative Agriculture',
    result: '65% Profit Increase',
    location: 'Great Plains, USA',
    duration: '24 months',
    challenge: 'A 1,200-acre row crop farm was dealing with declining soil health, increasing input costs, and vulnerability to market price fluctuations for a single commodity.',
    solution: 'We designed an integrated crop-livestock system that incorporated cattle grazing on cover crops and crop residues, diversified cash crops, and strategic rotations to build soil health while creating multiple revenue streams.',
    outcome: 'Within two years, the farm reduced fertilizer inputs by 50%, eliminated erosion issues, and increased overall farm profitability by 65%. Soil organic matter increased by 2%, and the diversified revenue streams provided greater financial stability.',
    testimonial: {
      quote: "The integrated system AgroConsult designed for us has completely transformed our operation. We're more profitable, more resilient to weather extremes, and building rather than depleting our soil resources.",
      author: "Robert Thompson",
      role: "Farm Owner"
    }
  },
  {
    id: 'precision-ag',
    title: 'Precision Agriculture Implementation',
    description: 'Implemented precision agriculture technology for a large-scale corn and soybean operation, optimizing inputs and increasing ROI.',
    image: 'https://images.unsplash.com/photo-1465379944081-7f47de8d74ac?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    category: 'Technology',
    result: '28% Input Reduction',
    location: 'Midwest, USA',
    duration: '14 months',
    challenge: 'A 2,500-acre corn and soybean operation was applying inputs uniformly across fields despite significant variability in soil types and productivity zones, resulting in waste and suboptimal yields.',
    solution: 'We implemented a comprehensive precision agriculture program including GPS guidance, variable rate application technology, yield mapping, and zone management based on soil testing and yield history.',
    outcome: 'The farm reduced seed, fertilizer, and chemical inputs by 28% while maintaining yield levels. High-performing areas received optimal inputs while low-performing areas avoided wasted resources. Fuel usage decreased by 15% due to optimized equipment passes.',
    testimonial: {
      quote: "The precision ag program has transformed how we manage our farm. We're making data-driven decisions that have dramatically improved our efficiency and profitability.",
      author: "Michael Brown",
      role: "Farm Operations Manager"
    }
  },
  {
    id: 'market-diversification',
    title: 'Market Diversification Strategy',
    description: 'Helped a traditional commodity farm develop value-added products and direct marketing channels, increasing revenue by 85%.',
    image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    category: 'Business Development',
    result: '85% Revenue Increase',
    location: 'Southeast, USA',
    duration: '20 months',
    challenge: 'A third-generation family farm with 350 acres was struggling with thin margins in commodity markets and wanted to develop higher-value markets to maintain viability without expanding acreage.',
    solution: 'We developed a comprehensive market diversification strategy, including value-added product development, agritourism opportunities, direct-to-consumer sales channels, and specialty crop integration.',
    outcome: 'Within two years, the farm increased overall revenue by 85% while reducing dependence on commodity markets from 100% to 40% of revenue. They successfully launched three value-added product lines and established a farm store with agritourism components.',
    testimonial: {
      quote: "AgroConsult helped us transform from price-takers to price-makers. Their market diversification strategy has secured our farm's future for the next generation.",
      author: "Jennifer Williams",
      role: "Farm Owner"
    }
  }
];

const CaseStudies = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-agro-beige py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-agro-green-dark mb-6">Case Studies</h1>
              <p className="text-xl text-gray-700">
                Explore how we've helped agricultural businesses achieve remarkable results through strategic consulting.
              </p>
            </div>
          </div>
        </section>
        
        {/* Case Studies Grid */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {caseStudies.map((study) => (
                <Card key={study.id} className="overflow-hidden shadow-md border-0 card-hover-effect">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={study.image} 
                      alt={study.title} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <Badge variant="outline" className="bg-agro-green-light/10 text-agro-green-dark border-agro-green-light">
                        {study.category}
                      </Badge>
                      <Badge className="bg-agro-green-dark text-white">
                        {study.result}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl font-bold mt-2 text-agro-green-dark">{study.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="pb-2">
                    <CardDescription className="text-gray-600">
                      {study.description}
                    </CardDescription>
                    <div className="flex justify-between text-sm text-gray-500 mt-4">
                      <span>{study.location}</span>
                      <span>{study.duration}</span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button 
                      variant="ghost" 
                      className="w-full text-agro-green-dark hover:text-agro-green-light hover:bg-transparent p-0 justify-center"
                      asChild
                    >
                      <a href={`#${study.id}`} className="flex items-center">
                        Read Full Case Study <ArrowRight className="ml-2" size={16} />
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        {/* Detailed Case Studies */}
        <section className="py-16 md:py-24 bg-agro-beige">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-agro-green-dark mb-6">Detailed Case Studies</h2>
              <p className="text-lg text-gray-700">
                In-depth analysis of our agricultural consulting projects and their outcomes.
              </p>
            </div>
            
            <div className="space-y-24">
              {caseStudies.map((study) => (
                <div key={study.id} id={study.id} className="scroll-mt-24">
                  <Card className="border-0 shadow-lg overflow-hidden">
                    <div className="h-80 overflow-hidden">
                      <img 
                        src={study.image} 
                        alt={study.title} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardHeader>
                      <div className="flex flex-wrap gap-2 mb-3">
                        <Badge variant="outline" className="bg-agro-green-light/10 text-agro-green-dark border-agro-green-light">
                          {study.category}
                        </Badge>
                        <Badge className="bg-agro-green-dark text-white">
                          {study.result}
                        </Badge>
                      </div>
                      <CardTitle className="text-2xl md:text-3xl font-bold text-agro-green-dark">{study.title}</CardTitle>
                      <div className="flex justify-start gap-8 text-sm text-gray-500 mt-2">
                        <span className="flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          {study.location}
                        </span>
                        <span className="flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          {study.duration}
                        </span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-3 gap-8">
                        <div>
                          <h3 className="text-xl font-bold text-agro-green-dark mb-3">The Challenge</h3>
                          <p className="text-gray-700">{study.challenge}</p>
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-agro-green-dark mb-3">Our Solution</h3>
                          <p className="text-gray-700">{study.solution}</p>
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-agro-green-dark mb-3">The Outcome</h3>
                          <p className="text-gray-700">{study.outcome}</p>
                        </div>
                      </div>
                      
                      <div className="mt-12 bg-white p-6 rounded-lg border-l-4 border-agro-green-light">
                        <blockquote className="text-lg italic text-gray-700 mb-4">"{study.testimonial.quote}"</blockquote>
                        <div className="font-semibold">— {study.testimonial.author}, {study.testimonial.role}</div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="py-16 bg-agro-green-dark text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-8 md:mb-0 md:mr-12">
                <h2 className="text-3xl font-bold mb-4">Ready to Achieve Similar Results?</h2>
                <p className="text-xl text-gray-200">
                  Contact us to discuss how our agricultural consulting services can benefit your operation.
                </p>
              </div>
              <Button 
                className="bg-white text-agro-green-dark hover:bg-agro-beige text-lg px-8 py-3 whitespace-nowrap"
                asChild
              >
                <Link to="/contact">Schedule a Consultation</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CaseStudies;
