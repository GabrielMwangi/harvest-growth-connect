
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const testimonials = [
  {
    quote: "AgroConsult's strategic guidance transformed our family farm. Their crop rotation plan increased our yield by 30% in just one growing season.",
    author: "Michael Johnson",
    role: "Farm Owner, Heartland Grains",
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    quote: "The team provided invaluable insights for our transition to sustainable farming practices. We've reduced costs and improved our soil health dramatically.",
    author: "Sarah Williams",
    role: "Agricultural Director, Green Valley Farms",
    image: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    quote: "Their expertise in precision agriculture helped us optimize resource allocation across our 1,200-acre operation. The ROI has been exceptional.",
    author: "David Thompson",
    role: "Operations Manager, Thompson Agricultural Enterprises",
    image: "https://randomuser.me/api/portraits/men/67.jpg"
  }
];

const Testimonials = () => {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-agro-green-dark mb-4">What Our Clients Say</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Hear from agricultural businesses that have partnered with us for their consulting needs.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-agro-beige border-0 shadow-sm">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-6">
                    <svg className="h-12 w-12 text-agro-green-light opacity-25" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                      <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                    </svg>
                  </div>
                  <p className="text-lg text-gray-700 mb-6">"{testimonial.quote}"</p>
                  <div className="flex items-center">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.author} 
                      className="h-12 w-12 rounded-full mr-4"
                    />
                    <div className="text-left">
                      <p className="font-semibold text-agro-green-dark">{testimonial.author}</p>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
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
