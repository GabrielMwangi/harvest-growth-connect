
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const blogPosts = [
  {
    title: 'Sustainable Farming Practices for the Modern Age',
    excerpt: 'Discover how sustainable farming practices can increase yields while preserving natural resources for future generations.',
    image: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    date: 'May 15, 2023',
    author: 'Dr. Sarah Johnson',
    category: 'Sustainability'
  },
  {
    title: 'Precision Agriculture: Leveraging Technology for Better Results',
    excerpt: 'How modern technology and data analytics are transforming traditional farming into a precise science with remarkable results.',
    image: 'https://images.unsplash.com/photo-1493962853295-0fd70327578a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    date: 'April 22, 2023',
    author: 'Michael Thompson',
    category: 'Technology'
  },
  {
    title: 'Climate Change Adaptation Strategies for Farmers',
    excerpt: 'Essential strategies to help agricultural businesses adapt to changing climate conditions and maintain profitability.',
    image: 'https://images.unsplash.com/photo-1465379944081-7f47de8d74ac?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    date: 'March 10, 2023',
    author: 'Dr. Robert Williams',
    category: 'Climate'
  }
];

const BlogPreview = () => {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-agro-green-dark mb-4">Latest Insights</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest agricultural trends, technologies, and best practices.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Card key={index} className="overflow-hidden card-hover-effect border border-gray-200">
              <div className="h-48 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <CardHeader>
                <div className="flex justify-between text-sm text-gray-500 mb-2">
                  <span>{post.date}</span>
                  <span>{post.category}</span>
                </div>
                <CardTitle className="text-xl font-bold text-agro-green-dark">{post.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  {post.excerpt}
                </CardDescription>
              </CardContent>
              <CardFooter className="flex justify-between items-center">
                <span className="text-sm text-gray-500">By {post.author}</span>
                <Button 
                  variant="ghost" 
                  className="text-agro-green-dark hover:text-agro-green-light hover:bg-transparent p-0"
                  asChild
                >
                  <Link to="/blog" className="flex items-center">
                    Read More <ArrowRight className="ml-2" size={16} />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button 
            variant="outline"
            className="border-agro-green-dark text-agro-green-dark hover:bg-agro-green-dark hover:text-white px-8"
            asChild
          >
            <Link to="/blog">View All Articles</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;
