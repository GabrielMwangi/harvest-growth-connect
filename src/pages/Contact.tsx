
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ContactForm from '@/components/contact/ContactForm';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-agro-beige py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-agro-green-dark mb-6">Contact Us</h1>
              <p className="text-xl text-gray-700">
                Have questions or ready to start working with our agricultural consulting team? Reach out to us today.
              </p>
            </div>
          </div>
        </section>
        
        {/* Contact Information and Form */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <ContactForm />
              </div>
              
              {/* Contact Information */}
              <div className="space-y-8">
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-bold text-agro-green-dark mb-6">Our Contact Information</h2>
                    <div className="space-y-6">
                      <div className="flex items-start">
                        <MapPin className="text-agro-green-light mr-4 flex-shrink-0" size={24} />
                        <div>
                          <h3 className="font-semibold text-lg">Office Address</h3>
                          <p className="text-gray-700">
                            123 Farming Lane<br />
                            Agricultural District<br />
                            City, State 12345<br />
                            Country
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Phone className="text-agro-green-light mr-4 flex-shrink-0" size={24} />
                        <div>
                          <h3 className="font-semibold text-lg">Phone</h3>
                          <p className="text-gray-700">+1 (555) 123-4567</p>
                          <p className="text-gray-700">Toll-free: 1-800-AGRO-CONSULT</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Mail className="text-agro-green-light mr-4 flex-shrink-0" size={24} />
                        <div>
                          <h3 className="font-semibold text-lg">Email</h3>
                          <p className="text-gray-700">info@agroconsult.com</p>
                          <p className="text-gray-700">support@agroconsult.com</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Clock className="text-agro-green-light mr-4 flex-shrink-0" size={24} />
                        <div>
                          <h3 className="font-semibold text-lg">Business Hours</h3>
                          <p className="text-gray-700">Monday - Friday: 8:00 AM - 5:00 PM</p>
                          <p className="text-gray-700">Saturday: 9:00 AM - 1:00 PM</p>
                          <p className="text-gray-700">Sunday: Closed</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-bold text-agro-green-dark mb-6">Connect With Us</h2>
                    <p className="text-gray-700 mb-6">
                      Follow us on social media to stay updated with the latest agricultural insights, tips, and company news.
                    </p>
                    <div className="flex space-x-4">
                      <a href="https://facebook.com" className="bg-agro-green-dark hover:bg-agro-green-light text-white p-3 rounded-full">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                        </svg>
                      </a>
                      <a href="https://twitter.com" className="bg-agro-green-dark hover:bg-agro-green-light text-white p-3 rounded-full">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                        </svg>
                      </a>
                      <a href="https://linkedin.com" className="bg-agro-green-dark hover:bg-agro-green-light text-white p-3 rounded-full">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd" />
                        </svg>
                      </a>
                      <a href="https://youtube.com" className="bg-agro-green-dark hover:bg-agro-green-light text-white p-3 rounded-full">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                        </svg>
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
        
        {/* Map Section */}
        <section className="py-12 bg-agro-beige">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold text-agro-green-dark mb-4">Find Us</h2>
              <p className="text-gray-700">
                Visit our office for in-person consultations and meetings.
              </p>
            </div>
            {/* Placeholder for Google Maps - In a real implementation, you would integrate the Google Maps API */}
            <div className="h-96 bg-white rounded-lg shadow-md flex items-center justify-center border border-gray-200">
              <div className="text-center p-8">
                <MapPin size={48} className="text-agro-green-light mx-auto mb-4" />
                <h3 className="text-xl font-bold text-agro-green-dark mb-2">Our Location</h3>
                <p className="text-gray-700">
                  123 Farming Lane, Agricultural District<br />
                  City, State 12345, Country
                </p>
                <p className="mt-4 text-sm text-gray-500">
                  (Google Maps integration would be implemented here in a production environment)
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
