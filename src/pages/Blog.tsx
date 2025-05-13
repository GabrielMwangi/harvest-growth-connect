
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowRight, Search } from 'lucide-react';

const blogPosts = [
  {
    id: 'sustainable-farming',
    title: 'Sustainable Farming Practices for the Modern Age',
    excerpt: 'Discover how sustainable farming practices can increase yields while preserving natural resources for future generations.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Sed non mauris vitae erat consequat auctor eu in elit.',
    image: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    date: 'May 15, 2023',
    author: 'Dr. Sarah Johnson',
    category: 'Sustainability',
    readTime: '5 min read'
  },
  {
    id: 'precision-agriculture',
    title: 'Precision Agriculture: Leveraging Technology for Better Results',
    excerpt: 'How modern technology and data analytics are transforming traditional farming into a precise science with remarkable results.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Sed non mauris vitae erat consequat auctor eu in elit.',
    image: 'https://images.unsplash.com/photo-1493962853295-0fd70327578a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    date: 'April 22, 2023',
    author: 'Michael Thompson',
    category: 'Technology',
    readTime: '7 min read'
  },
  {
    id: 'climate-change',
    title: 'Climate Change Adaptation Strategies for Farmers',
    excerpt: 'Essential strategies to help agricultural businesses adapt to changing climate conditions and maintain profitability.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Sed non mauris vitae erat consequat auctor eu in elit.',
    image: 'https://images.unsplash.com/photo-1465379944081-7f47de8d74ac?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    date: 'March 10, 2023',
    author: 'Dr. Robert Williams',
    category: 'Climate',
    readTime: '6 min read'
  },
  {
    id: 'soil-health',
    title: 'The Importance of Soil Health in Agricultural Productivity',
    excerpt: 'Understanding soil health and its critical role in sustainable agricultural systems and long-term farm viability.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Sed non mauris vitae erat consequat auctor eu in elit.',
    image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    date: 'February 18, 2023',
    author: 'Emily Richards',
    category: 'Soil Management',
    readTime: '8 min read'
  },
  {
    id: 'farm-diversification',
    title: 'Farm Diversification: Spreading Risk and Increasing Revenue',
    excerpt: 'Strategies for diversifying farm operations to reduce risk exposure and develop new income streams.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Sed non mauris vitae erat consequat auctor eu in elit.',
    image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    date: 'January 25, 2023',
    author: 'James Wilson',
    category: 'Business Strategy',
    readTime: '5 min read'
  },
  {
    id: 'water-management',
    title: 'Innovative Water Management Techniques in Agriculture',
    excerpt: 'Exploring cutting-edge approaches to water conservation and efficient irrigation for agricultural sustainability.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Sed non mauris vitae erat consequat auctor eu in elit.',
    image: 'https://images.unsplash.com/photo-1452378174528-3090a4bba7b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    date: 'December 12, 2022',
    author: 'Dr. Maria Rodriguez',
    category: 'Water Conservation',
    readTime: '7 min read'
  }
];

const categories = [
  { name: 'Sustainability', count: 12 },
  { name: 'Technology', count: 8 },
  { name: 'Climate', count: 5 },
  { name: 'Soil Management', count: 7 },
  { name: 'Business Strategy', count: 9 },
  { name: 'Water Conservation', count: 6 }
];

const Blog = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-agro-beige py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-agro-green-dark mb-6">Agricultural Insights</h1>
              <p className="text-xl text-gray-700">
                The latest trends, research, and best practices in agricultural management and sustainability.
              </p>
            </div>
          </div>
        </section>
        
        {/* Blog Content */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-12">
              {/* Main Content */}
              <div className="lg:w-2/3">
                <div className="grid md:grid-cols-2 gap-8">
                  {blogPosts.map((post) => (
                    <Card key={post.id} className="overflow-hidden border border-gray-200 card-hover-effect">
                      <div className="h-48 overflow-hidden">
                        <img 
                          src={post.image} 
                          alt={post.title} 
                          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                        />
                      </div>
                      <CardHeader className="pb-2">
                        <div className="flex justify-between text-sm text-gray-500 mb-2">
                          <span>{post.date}</span>
                          <Badge variant="outline" className="bg-agro-green-light/10 text-agro-green-dark border-agro-green-light">
                            {post.category}
                          </Badge>
                        </div>
                        <CardTitle className="text-xl font-bold text-agro-green-dark">{post.title}</CardTitle>
                      </CardHeader>
                      <CardContent className="pb-2">
                        <CardDescription className="text-gray-600">
                          {post.excerpt}
                        </CardDescription>
                      </CardContent>
                      <CardFooter className="flex justify-between items-center">
                        <span className="text-sm text-gray-500">{post.readTime}</span>
                        <Button 
                          variant="ghost" 
                          className="text-agro-green-dark hover:text-agro-green-light hover:bg-transparent p-0"
                          asChild
                        >
                          <a href={`#${post.id}`} className="flex items-center">
                            Read More <ArrowRight className="ml-2" size={16} />
                          </a>
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
                
                <div className="mt-12 flex justify-center">
                  <Button 
                    variant="outline"
                    className="border-agro-green-dark text-agro-green-dark hover:bg-agro-green-dark hover:text-white"
                  >
                    Load More Articles
                  </Button>
                </div>
              </div>
              
              {/* Sidebar */}
              <div className="lg:w-1/3 space-y-8">
                {/* Search */}
                <Card>
                  <CardHeader>
                    <CardTitle>Search</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex">
                      <Input placeholder="Search articles..." className="rounded-r-none" />
                      <Button className="bg-agro-green-dark hover:bg-agro-green-light rounded-l-none">
                        <Search size={18} />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
                
                {/* Categories */}
                <Card>
                  <CardHeader>
                    <CardTitle>Categories</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {categories.map((category) => (
                        <li key={category.name}>
                          <a 
                            href="#" 
                            className="flex justify-between py-2 text-gray-700 hover:text-agro-green-dark border-b border-gray-100"
                          >
                            <span>{category.name}</span>
                            <span className="bg-agro-green-light/10 text-agro-green-dark text-xs px-2 py-1 rounded-full">
                              {category.count}
                            </span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
                
                {/* Recent Posts */}
                <Card>
                  <CardHeader>
                    <CardTitle>Recent Posts</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-4">
                      {blogPosts.slice(0, 3).map((post) => (
                        <li key={`recent-${post.id}`} className="flex gap-4 items-start">
                          <div className="w-20 h-20 flex-shrink-0 overflow-hidden rounded">
                            <img 
                              src={post.image} 
                              alt={post.title} 
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div>
                            <h4 className="text-sm font-medium text-agro-green-dark mb-1">{post.title}</h4>
                            <p className="text-xs text-gray-500">{post.date}</p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
                
                {/* Newsletter */}
                <Card className="bg-agro-beige border-0">
                  <CardHeader>
                    <CardTitle>Subscribe to Our Newsletter</CardTitle>
                    <CardDescription>
                      Get the latest agricultural insights delivered to your inbox.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form className="space-y-4">
                      <Input placeholder="Your name" className="bg-white" />
                      <Input placeholder="Your email" type="email" className="bg-white" />
                      <Button className="w-full bg-agro-green-dark hover:bg-agro-green-light">
                        Subscribe
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
