
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Card, CardContent } from '@/components/ui/card';

const teamMembers = [
  {
    name: 'Dr. Emily Johnson',
    role: 'Founder & CEO',
    image: 'https://randomuser.me/api/portraits/women/22.jpg',
    bio: 'Dr. Johnson holds a PhD in Agricultural Sciences and has over 20 years of experience in farm management and agricultural consulting.'
  },
  {
    name: 'James Wilson',
    role: 'Chief Agricultural Strategist',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    bio: 'With extensive experience in large-scale farming operations, James specializes in optimizing agricultural production systems.'
  },
  {
    name: 'Dr. Maria Rodriguez',
    role: 'Sustainability Director',
    image: 'https://randomuser.me/api/portraits/women/68.jpg',
    bio: 'Dr. Rodriguez leads our sustainability initiatives, helping clients implement environmentally responsible farming practices.'
  },
  {
    name: 'Robert Chen',
    role: 'Technology Integration Specialist',
    image: 'https://randomuser.me/api/portraits/men/75.jpg',
    bio: 'Robert helps clients leverage cutting-edge agricultural technology to improve efficiency and productivity.'
  }
];

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-agro-beige py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-agro-green-dark mb-6">About AgroConsult</h1>
                <p className="text-xl text-gray-700 mb-6">
                  A leading agricultural management and consulting firm dedicated to helping farms and agricultural businesses thrive in today's competitive landscape.
                </p>
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <h3 className="text-xl font-bold text-agro-green-dark mb-4">Our Mission</h3>
                  <p className="text-gray-700">
                    To empower agricultural businesses with sustainable strategies and innovative solutions that maximize productivity, profitability, and environmental stewardship.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-agro-green-light rounded-full opacity-20"></div>
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-agro-green-dark rounded-full opacity-20"></div>
                <img 
                  src="https://images.unsplash.com/photo-1452378174528-3090a4bba7b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
                  alt="Agricultural field" 
                  className="rounded-lg shadow-xl relative z-10"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Our Story */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-agro-green-dark mb-6">Our Story</h2>
              <div className="w-24 h-1 bg-agro-green-light mx-auto mb-6"></div>
              <p className="text-lg text-gray-700">
                Founded in 2005 by Dr. Emily Johnson, AgroConsult began with a vision to transform traditional agricultural practices through science-based consulting and innovative management approaches.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h3 className="text-2xl font-bold text-agro-green-dark mb-4">From Humble Beginnings</h3>
                <p className="text-gray-700 mb-4">
                  Starting with just three clients in our local region, we established a reputation for delivering practical solutions that significantly improved farm productivity and sustainability.
                </p>
                <p className="text-gray-700 mb-4">
                  Over the years, our team expanded to include experts in various agricultural specialties, from soil science to precision farming technology, allowing us to provide comprehensive consulting services.
                </p>
                <h3 className="text-2xl font-bold text-agro-green-dark mb-4 mt-8">Where We Are Today</h3>
                <p className="text-gray-700">
                  Today, AgroConsult serves over 500 clients nationwide, from small family farms to large agricultural enterprises. Our commitment to combining traditional farming wisdom with cutting-edge research and technology remains at the core of everything we do.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src="https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
                  alt="Farm landscape" 
                  className="rounded-lg shadow-md w-full h-48 md:h-64 object-cover mb-4"
                />
                <img 
                  src="https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
                  alt="Crops" 
                  className="rounded-lg shadow-md w-full h-48 md:h-64 object-cover mb-4"
                />
                <img 
                  src="https://images.unsplash.com/photo-1493962853295-0fd70327578a?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
                  alt="Farm animals" 
                  className="rounded-lg shadow-md w-full h-48 md:h-64 object-cover"
                />
                <img 
                  src="https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
                  alt="Modern farming" 
                  className="rounded-lg shadow-md w-full h-48 md:h-64 object-cover"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Our Values */}
        <section className="py-16 md:py-24 bg-agro-beige">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-agro-green-dark mb-6">Our Values</h2>
              <div className="w-24 h-1 bg-agro-green-light mx-auto mb-6"></div>
              <p className="text-lg text-gray-700">
                The core principles that guide our approach to agricultural consulting and client relationships.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-white border-t-4 border-t-agro-green-dark">
                <CardContent className="pt-6">
                  <div className="text-4xl text-agro-green-light mb-4">🌱</div>
                  <h3 className="text-xl font-bold text-agro-green-dark mb-3">Sustainability</h3>
                  <p className="text-gray-700">
                    We believe in agricultural practices that meet present needs without compromising the ability of future generations to meet their own needs.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-white border-t-4 border-t-agro-green-dark">
                <CardContent className="pt-6">
                  <div className="text-4xl text-agro-green-light mb-4">🔬</div>
                  <h3 className="text-xl font-bold text-agro-green-dark mb-3">Innovation</h3>
                  <p className="text-gray-700">
                    We continuously explore new methods, technologies, and approaches to help our clients stay at the forefront of agricultural advancement.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-white border-t-4 border-t-agro-green-dark">
                <CardContent className="pt-6">
                  <div className="text-4xl text-agro-green-light mb-4">🤝</div>
                  <h3 className="text-xl font-bold text-agro-green-dark mb-3">Partnership</h3>
                  <p className="text-gray-700">
                    We form long-term relationships with our clients, working collaboratively to achieve their goals and overcome challenges together.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-white border-t-4 border-t-agro-green-dark">
                <CardContent className="pt-6">
                  <div className="text-4xl text-agro-green-light mb-4">📊</div>
                  <h3 className="text-xl font-bold text-agro-green-dark mb-3">Data-Driven</h3>
                  <p className="text-gray-700">
                    We base our recommendations on solid research, analytics, and evidence, ensuring practical solutions with measurable outcomes.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-white border-t-4 border-t-agro-green-dark">
                <CardContent className="pt-6">
                  <div className="text-4xl text-agro-green-light mb-4">🌍</div>
                  <h3 className="text-xl font-bold text-agro-green-dark mb-3">Integrity</h3>
                  <p className="text-gray-700">
                    We uphold the highest ethical standards in our consulting practices, always putting our clients' best interests first.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-white border-t-4 border-t-agro-green-dark">
                <CardContent className="pt-6">
                  <div className="text-4xl text-agro-green-light mb-4">🎓</div>
                  <h3 className="text-xl font-bold text-agro-green-dark mb-3">Education</h3>
                  <p className="text-gray-700">
                    We believe in empowering our clients through knowledge transfer and capacity building, not just providing solutions.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        {/* Leadership Team */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-agro-green-dark mb-6">Our Leadership</h2>
              <div className="w-24 h-1 bg-agro-green-light mx-auto mb-6"></div>
              <p className="text-lg text-gray-700">
                Meet the experienced team behind AgroConsult's success in agricultural consulting.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="text-center">
                  <div className="mb-4 relative mx-auto w-40 h-40 overflow-hidden rounded-full border-4 border-agro-green-light">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-agro-green-dark">{member.name}</h3>
                  <p className="text-agro-green-light font-medium mb-2">{member.role}</p>
                  <p className="text-gray-700 text-sm">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Call to action */}
        <section className="py-16 bg-agro-green-dark text-white text-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Agricultural Business?</h2>
            <p className="text-xl text-gray-200 mb-8">
              Contact us today to learn how our expert consulting services can help you achieve sustainable growth and increased profitability.
            </p>
            <a href="/contact" className="inline-block bg-white text-agro-green-dark hover:bg-agro-beige px-8 py-3 text-lg font-medium rounded-lg">
              Get Started
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
