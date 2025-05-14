
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

const testimonials = [
  {
    quote: "Ole VVIP Protocol provided flawless service during our diplomatic mission. Their attention to detail and discretion was impeccable.",
    author: "Ambassador J.K.",
    role: "East African Diplomatic Corps",
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    quote: "The team ensured our executives had a seamless experience. The airport protocol and transportation services were exceptional.",
    author: "Sarah M.",
    role: "Corporate Affairs Director, Global Energy Corp",
    image: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    quote: "Their red carpet coordination for our international film premiere was absolutely perfect. Every detail was handled with professionalism.",
    author: "David T.",
    role: "Executive Producer, Nairobi Films",
    image: "https://randomuser.me/api/portraits/men/67.jpg"
  }
];

const Testimonials = () => {
  return (
    <section className="section-padding bg-luxury-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h5 className="text-luxury-gold text-base font-medium uppercase tracking-wider mb-2">Testimonials</h5>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-luxury-dark mb-4">Client Experiences</h2>
          <p className="text-lg text-luxury-charcoal max-w-3xl mx-auto">
            Discreet testimonials from clients who have experienced our exceptional protocol services.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white border-0 shadow-md hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-6 flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-luxury-gold" fill="#D4AF37" />
                    ))}
                  </div>
                  <p className="text-lg text-luxury-charcoal mb-6 font-serif italic">"{testimonial.quote}"</p>
                  <div className="flex items-center">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.author} 
                      className="h-12 w-12 rounded-full mr-4 ring-2 ring-luxury-gold/20"
                    />
                    <div className="text-left">
                      <p className="font-semibold text-luxury-dark">{testimonial.author}</p>
                      <p className="text-sm text-luxury-charcoal">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
