
import React from "react";
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-16 md:py-24 bg-agro-beige">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto flex flex-col items-center text-center">
            <div className="text-9xl font-bold text-agro-green-dark mb-6">404</div>
            <h1 className="text-3xl md:text-4xl font-bold text-agro-green-dark mb-6">Page Not Found</h1>
            <p className="text-xl text-gray-700 mb-12">
              The page you're looking for doesn't exist or has been moved.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className="bg-agro-green-dark hover:bg-agro-green-light text-white px-8 py-6 text-lg"
                asChild
              >
                <Link to="/">Return to Home</Link>
              </Button>
              <Button 
                variant="outline"
                className="border-agro-green-dark text-agro-green-dark hover:bg-agro-green-dark hover:text-white px-8 py-6 text-lg"
                asChild
              >
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
