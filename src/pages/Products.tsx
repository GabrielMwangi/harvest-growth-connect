
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ConstructionIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Products = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-agro-beige py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-agro-green-dark mb-6">Our Products</h1>
              <p className="text-xl text-gray-700">
                High-quality agricultural products to enhance your farming operations.
              </p>
            </div>
          </div>
        </section>
        
        {/* Coming Soon Section */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <div className="mb-8 flex justify-center">
                <div className="p-6 bg-agro-beige rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-agro-green-dark">
                    <rect x="2" y="6" width="20" height="12" rx="2"></rect>
                    <path d="M12 12h.01"></path>
                    <path d="M17 12h.01"></path>
                    <path d="M7 12h.01"></path>
                  </svg>
                </div>
              </div>
              <h2 className="text-3xl font-bold text-agro-green-dark mb-4">Online Store Coming Soon</h2>
              <p className="text-lg text-gray-700 mb-8">
                We're currently developing our online store to make it easier for you to purchase our premium agricultural products. 
                Soon you'll be able to order directly online and have products delivered to your farm.
              </p>
              <Card className="bg-white border border-gray-200 shadow-sm">
                <CardContent className="py-8">
                  <h3 className="text-2xl font-bold text-agro-green-dark mb-6">Products Available Soon:</h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center p-4">
                      <div className="text-4xl mb-4">☕</div>
                      <h4 className="font-bold text-agro-green-dark mb-2">Premium Coffee</h4>
                      <p className="text-gray-700">Sustainably grown specialty coffee from partner farms.</p>
                    </div>
                    <div className="text-center p-4">
                      <div className="text-4xl mb-4">🌱</div>
                      <h4 className="font-bold text-agro-green-dark mb-2">Organic Fertilizers</h4>
                      <p className="text-gray-700">High-quality organic fertilizers for sustainable farming.</p>
                    </div>
                    <div className="text-center p-4">
                      <div className="text-4xl mb-4">🧪</div>
                      <h4 className="font-bold text-agro-green-dark mb-2">Soil Amendments</h4>
                      <p className="text-gray-700">Specialized amendments to improve soil health and productivity.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        {/* Sign Up Section */}
        <section className="py-16 md:py-24 bg-agro-green-dark text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Be the First to Know</h2>
              <p className="text-xl text-gray-200 mb-8">
                Sign up to be notified when our online store launches and receive exclusive early-access promotions.
              </p>
              <Card className="bg-white text-gray-800 border-0">
                <CardContent className="py-8">
                  <form className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                        <input
                          type="text"
                          id="name"
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-agro-green-dark focus:border-agro-green-dark"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                        <input
                          type="email"
                          id="email"
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-agro-green-dark focus:border-agro-green-dark"
                          placeholder="Your email address"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="interests" className="block text-sm font-medium text-gray-700 mb-1">Product Interests</label>
                      <select
                        id="interests"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-agro-green-dark focus:border-agro-green-dark"
                      >
                        <option value="" disabled selected>Select your interests</option>
                        <option value="coffee">Premium Coffee</option>
                        <option value="fertilizers">Organic Fertilizers</option>
                        <option value="amendments">Soil Amendments</option>
                        <option value="all">All Products</option>
                      </select>
                    </div>
                    <Button className="w-full bg-agro-green-dark hover:bg-agro-green-light text-white py-2">
                      Notify Me
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        {/* Contact Section */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-agro-green-dark mb-6">Need Products Now?</h2>
              <p className="text-lg text-gray-700 mb-8">
                While our online store is under development, you can still purchase our products directly through our sales team.
                Contact us today to place an order or request more information.
              </p>
              <Button 
                className="bg-agro-green-dark hover:bg-agro-green-light text-white px-8 py-6 text-lg"
                asChild
              >
                <Link to="/contact">Contact Our Sales Team</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Products;
