
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ConsultationForm from '@/components/booking/ConsultationForm';

const BookConsultation = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-agro-beige py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-agro-green-dark mb-6">Book a Consultation</h1>
              <p className="text-xl text-gray-700">
                Schedule a consultation with our agricultural experts to discuss your farming needs and get personalized advice.
              </p>
            </div>
          </div>
        </section>
        
        {/* Booking Form Section */}
        <section className="py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <ConsultationForm />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default BookConsultation;
