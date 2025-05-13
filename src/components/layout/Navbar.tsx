
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleServices = () => {
    setIsServicesOpen(!isServicesOpen);
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { 
      name: 'Services', 
      path: '/services',
      subItems: [
        { name: 'Farm Management', path: '/services#farm-management' },
        { name: 'Crop Consulting', path: '/services#crop-consulting' },
        { name: 'Agricultural Planning', path: '/services#agricultural-planning' },
      ]
    },
    { name: 'Case Studies', path: '/case-studies' },
    { name: 'Blog', path: '/blog' },
    { name: 'Products', path: '/products' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-agro-green-dark">Agro<span className="text-agro-green-light">Consult</span></span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:ml-6 md:flex md:items-center md:space-x-4">
            {navLinks.map((link) => (
              link.subItems ? (
                <div key={link.name} className="relative group">
                  <button
                    className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-agro-green-dark flex items-center"
                    onClick={toggleServices}
                  >
                    {link.name}
                    <ChevronDown size={16} className="ml-1" />
                  </button>
                  <div className="absolute z-10 left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top-right">
                    <div className="py-1" role="menu" aria-orientation="vertical">
                      {link.subItems.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.path}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          role="menuitem"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={link.name}
                  to={link.path}
                  className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-agro-green-dark"
                >
                  {link.name}
                </Link>
              )
            ))}
          </div>
          
          <div className="hidden md:flex items-center">
            <Button
              variant="default"
              className="bg-agro-green-dark hover:bg-agro-green-light text-white"
              asChild
            >
              <Link to="/contact">Get Started</Link>
            </Button>
          </div>
          
          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              type="button"
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-agro-green-dark hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-agro-green-light"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      <div className={cn("md:hidden bg-white", isMenuOpen ? "block" : "hidden")}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navLinks.map((link) => (
            <React.Fragment key={link.name}>
              {link.subItems ? (
                <div>
                  <button
                    onClick={toggleServices}
                    className="w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-agro-green-dark hover:bg-gray-100 flex justify-between items-center"
                  >
                    {link.name}
                    <ChevronDown size={16} />
                  </button>
                  {isServicesOpen && (
                    <div className="pl-4 space-y-1">
                      {link.subItems.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.path}
                          className="block px-3 py-2 text-base font-medium text-gray-500 hover:text-agro-green-dark hover:bg-gray-50"
                          onClick={toggleMenu}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  to={link.path}
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-agro-green-dark hover:bg-gray-100"
                  onClick={toggleMenu}
                >
                  {link.name}
                </Link>
              )}
            </React.Fragment>
          ))}
          <div className="pt-4">
            <Button
              variant="default"
              className="w-full bg-agro-green-dark hover:bg-agro-green-light text-white"
              asChild
            >
              <Link to="/contact" onClick={toggleMenu}>Get Started</Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
