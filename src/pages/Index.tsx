
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/home/Hero';
import HomeServices from '@/components/home/Services';
import HomeCaseStudies from '@/components/home/CaseStudies';
import Testimonials from '@/components/home/Testimonials';
import CtaSection from '@/components/home/CtaSection';
import ClientPortalSection from '@/components/home/ClientPortalSection';
import CareerSection from '@/components/home/CareerSection';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <HomeServices />
        <HomeCaseStudies />
        <Testimonials />
        <ClientPortalSection />
        <CareerSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
