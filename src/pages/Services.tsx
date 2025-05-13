
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { CheckCircle2 } from 'lucide-react';

const serviceCategories = [
  {
    id: 'farm-management',
    title: 'Farm Management',
    description: 'Comprehensive farm management consulting to optimize operations and maximize efficiency.',
    icon: '🌱',
    image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    services: [
      'Operational efficiency assessment',
      'Resource allocation optimization',
      'Farm business planning',
      'Risk management strategies',
      'Labor management and training',
      'Equipment optimization and maintenance planning'
    ]
  },
  {
    id: 'crop-consulting',
    title: 'Crop Consulting',
    description: 'Expert advice on crop selection, rotation strategies, pest management, and yield optimization.',
    icon: '🌾',
    image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    services: [
      'Crop selection and variety recommendations',
      'Pest and disease management',
      'Nutrient management programs',
      'Irrigation scheduling and management',
      'Crop rotation planning',
      'Yield forecasting and analysis'
    ]
  },
  {
    id: 'agricultural-planning',
    title: 'Agricultural Planning',
    description: 'Strategic planning services for farm development, expansion, diversification, and sustainability.',
    icon: '📈',
    image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    services: [
      'Long-term farm development planning',
      'Diversification strategies',
      'Market opportunity assessment',
      'Sustainable farming transition planning',
      'Climate change adaptation strategies',
      'Regulatory compliance planning'
    ]
  },
  {
    id: 'soil-health',
    title: 'Soil Health Management',
    description: 'Comprehensive soil analysis and management practices to improve soil health and productivity.',
    icon: '🧪',
    image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    services: [
      'Comprehensive soil testing and analysis',
      'Soil health improvement programs',
      'Erosion control strategies',
      'Organic matter management',
      'Soil microbiology enhancement',
      'Precision soil mapping'
    ]
  }
];

const Services = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-agro-beige py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-agro-green-dark mb-6">Our Services</h1>
              <p className="text-xl text-gray-700">
                Comprehensive agricultural consulting and management services to help your farm thrive.
              </p>
            </div>
          </div>
        </section>
        
        {/* Services Overview */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid gap-16">
              {serviceCategories.map((category, index) => (
                <div 
                  key={category.id}
                  id={category.id} 
                  className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
                >
                  <div className={`order-2 ${index % 2 === 1 ? 'md:order-1' : 'md:order-2'}`}>
                    <div className="text-4xl mb-4">{category.icon}</div>
                    <h2 className="text-3xl font-bold text-agro-green-dark mb-4">{category.title}</h2>
                    <p className="text-lg text-gray-700 mb-6">
                      {category.description}
                    </p>
                    <div className="space-y-3 mb-8">
                      {category.services.map((service, i) => (
                        <div key={i} className="flex items-start">
                          <CheckCircle2 className="text-agro-green-light mr-2 flex-shrink-0 mt-1" size={20} />
                          <p>{service}</p>
                        </div>
                      ))}
                    </div>
                    <Button 
                      className="bg-agro-green-dark hover:bg-agro-green-light text-white"
                      asChild
                    >
                      <Link to="/contact">Request Consultation</Link>
                    </Button>
                  </div>
                  <div className={`order-1 ${index % 2 === 1 ? 'md:order-2' : 'md:order-1'}`}>
                    <div className="relative">
                      <div className="absolute -top-4 -left-4 w-24 h-24 bg-agro-green-light rounded-full opacity-20"></div>
                      <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-agro-green-dark rounded-full opacity-20"></div>
                      <img 
                        src={category.image} 
                        alt={category.title} 
                        className="rounded-lg shadow-xl relative z-10 w-full h-80 object-cover"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Service Process */}
        <section className="py-16 md:py-24 bg-agro-beige">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-agro-green-dark mb-6">Our Consulting Process</h2>
              <p className="text-lg text-gray-700">
                We follow a structured approach to deliver results-oriented agricultural consulting.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="bg-white border-0 shadow relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-agro-green-dark"></div>
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-agro-green-light rounded-full flex items-center justify-center text-white font-bold text-xl">1</div>
                <CardContent className="pt-10">
                  <h3 className="text-xl font-bold text-agro-green-dark mb-4">Assessment</h3>
                  <p className="text-gray-700">
                    We conduct a thorough assessment of your agricultural operation, identifying strengths, challenges, and opportunities.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-white border-0 shadow relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-agro-green-dark"></div>
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-agro-green-light rounded-full flex items-center justify-center text-white font-bold text-xl">2</div>
                <CardContent className="pt-10">
                  <h3 className="text-xl font-bold text-agro-green-dark mb-4">Strategy Development</h3>
                  <p className="text-gray-700">
                    Based on our assessment, we develop a customized strategy tailored to your specific goals and circumstances.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-white border-0 shadow relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-agro-green-dark"></div>
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-agro-green-light rounded-full flex items-center justify-center text-white font-bold text-xl">3</div>
                <CardContent className="pt-10">
                  <h3 className="text-xl font-bold text-agro-green-dark mb-4">Implementation</h3>
                  <p className="text-gray-700">
                    We work alongside you to implement the recommended strategies and practices, providing guidance throughout the process.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-white border-0 shadow relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-agro-green-dark"></div>
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-agro-green-light rounded-full flex items-center justify-center text-white font-bold text-xl">4</div>
                <CardContent className="pt-10">
                  <h3 className="text-xl font-bold text-agro-green-dark mb-4">Monitoring & Optimization</h3>
                  <p className="text-gray-700">
                    We continuously monitor results and make adjustments as needed to optimize outcomes and ensure long-term success.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        {/* Pricing */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-agro-green-dark mb-6">Consulting Packages</h2>
              <p className="text-lg text-gray-700">
                We offer flexible consulting packages to meet the needs of farms and agricultural businesses of all sizes.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-white border border-gray-200 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gray-300"></div>
                <CardContent className="pt-10">
                  <h3 className="text-xl font-bold text-agro-green-dark mb-2">Basic Assessment</h3>
                  <div className="text-3xl font-bold text-agro-green-dark mb-6">$1,500</div>
                  <p className="text-gray-700 mb-8">
                    Perfect for small farms seeking specific improvements in one area.
                  </p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start">
                      <CheckCircle2 className="text-agro-green-light mr-2 flex-shrink-0 mt-1" size={18} />
                      <span>Initial farm assessment</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="text-agro-green-light mr-2 flex-shrink-0 mt-1" size={18} />
                      <span>Basic recommendations report</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="text-agro-green-light mr-2 flex-shrink-0 mt-1" size={18} />
                      <span>One follow-up consultation</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="text-agro-green-light mr-2 flex-shrink-0 mt-1" size={18} />
                      <span>30-day email support</span>
                    </li>
                  </ul>
                  <Button 
                    variant="outline"
                    className="w-full border-agro-green-dark text-agro-green-dark hover:bg-agro-green-dark hover:text-white"
                    asChild
                  >
                    <Link to="/contact">Get Started</Link>
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="bg-white border-2 border-agro-green-dark shadow-lg relative overflow-hidden transform md:-translate-y-4">
                <div className="absolute top-0 left-0 w-full h-1 bg-agro-green-dark"></div>
                <div className="absolute top-0 right-0 bg-agro-green-dark text-white px-4 py-1 text-sm font-medium">Popular</div>
                <CardContent className="pt-10">
                  <h3 className="text-xl font-bold text-agro-green-dark mb-2">Comprehensive Package</h3>
                  <div className="text-3xl font-bold text-agro-green-dark mb-6">$3,500</div>
                  <p className="text-gray-700 mb-8">
                    Ideal for medium-sized farms looking for full-service consulting.
                  </p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start">
                      <CheckCircle2 className="text-agro-green-light mr-2 flex-shrink-0 mt-1" size={18} />
                      <span>Comprehensive farm assessment</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="text-agro-green-light mr-2 flex-shrink-0 mt-1" size={18} />
                      <span>Detailed recommendations and strategy</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="text-agro-green-light mr-2 flex-shrink-0 mt-1" size={18} />
                      <span>Implementation guidance</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="text-agro-green-light mr-2 flex-shrink-0 mt-1" size={18} />
                      <span>Quarterly progress reviews (1 year)</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="text-agro-green-light mr-2 flex-shrink-0 mt-1" size={18} />
                      <span>90-day phone and email support</span>
                    </li>
                  </ul>
                  <Button 
                    className="w-full bg-agro-green-dark hover:bg-agro-green-light text-white"
                    asChild
                  >
                    <Link to="/contact">Get Started</Link>
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="bg-white border border-gray-200 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gray-300"></div>
                <CardContent className="pt-10">
                  <h3 className="text-xl font-bold text-agro-green-dark mb-2">Enterprise Solution</h3>
                  <div className="text-3xl font-bold text-agro-green-dark mb-6">Custom</div>
                  <p className="text-gray-700 mb-8">
                    For large agricultural operations with complex needs.
                  </p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start">
                      <CheckCircle2 className="text-agro-green-light mr-2 flex-shrink-0 mt-1" size={18} />
                      <span>Custom consulting scope</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="text-agro-green-light mr-2 flex-shrink-0 mt-1" size={18} />
                      <span>Strategic planning and implementation</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="text-agro-green-light mr-2 flex-shrink-0 mt-1" size={18} />
                      <span>Ongoing advisory relationship</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="text-agro-green-light mr-2 flex-shrink-0 mt-1" size={18} />
                      <span>Monthly progress monitoring</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="text-agro-green-light mr-2 flex-shrink-0 mt-1" size={18} />
                      <span>Priority support and consultation</span>
                    </li>
                  </ul>
                  <Button 
                    variant="outline"
                    className="w-full border-agro-green-dark text-agro-green-dark hover:bg-agro-green-dark hover:text-white"
                    asChild
                  >
                    <Link to="/contact">Request Quote</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
            
            <div className="mt-12 text-center">
              <p className="text-gray-700">
                Not sure which package is right for you? Contact us for a free initial consultation.
              </p>
            </div>
          </div>
        </section>
        
        {/* FAQs */}
        <section className="py-16 md:py-24 bg-agro-beige">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-agro-green-dark mb-6">Frequently Asked Questions</h2>
              <p className="text-lg text-gray-700">
                Common questions about our agricultural consulting services.
              </p>
            </div>
            
            <div className="max-w-3xl mx-auto divide-y divide-gray-300">
              <div className="py-6">
                <h3 className="text-xl font-bold text-agro-green-dark mb-3">How long does a typical consulting engagement last?</h3>
                <p className="text-gray-700">
                  The duration varies depending on the scope and complexity of your needs. Basic assessments may take just 2-4 weeks, while comprehensive consulting relationships typically last 6-12 months to ensure proper implementation and monitoring.
                </p>
              </div>
              <div className="py-6">
                <h3 className="text-xl font-bold text-agro-green-dark mb-3">Do you work with small family farms or only large operations?</h3>
                <p className="text-gray-700">
                  We work with agricultural businesses of all sizes, from small family farms to large commercial operations. Our services are tailored to meet the specific needs and budget of each client.
                </p>
              </div>
              <div className="py-6">
                <h3 className="text-xl font-bold text-agro-green-dark mb-3">What ROI can I expect from your consulting services?</h3>
                <p className="text-gray-700">
                  While results vary based on numerous factors, our clients typically see a 20-35% increase in yield or efficiency within the first year of implementing our recommendations. Many report that our services pay for themselves within 6-18 months.
                </p>
              </div>
              <div className="py-6">
                <h3 className="text-xl font-bold text-agro-green-dark mb-3">Do you provide ongoing support after the initial consultation?</h3>
                <p className="text-gray-700">
                  Yes, all our packages include some level of follow-up support. For clients who desire ongoing assistance, we offer extended support options and maintenance plans to ensure long-term success.
                </p>
              </div>
              <div className="py-6">
                <h3 className="text-xl font-bold text-agro-green-dark mb-3">How do I know if my farm needs consulting services?</h3>
                <p className="text-gray-700">
                  If you're facing challenges with productivity, profitability, sustainability, or adapting to market changes, consulting can be valuable. We offer a free initial consultation to help determine if our services would benefit your operation.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="py-16 bg-agro-green-dark text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Optimize Your Agricultural Business?</h2>
              <p className="text-xl text-gray-200 mb-8">
                Contact us today to schedule your free initial consultation.
              </p>
              <Button 
                className="bg-white text-agro-green-dark hover:bg-agro-beige text-lg px-8 py-3"
                asChild
              >
                <Link to="/contact">Get Started</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
