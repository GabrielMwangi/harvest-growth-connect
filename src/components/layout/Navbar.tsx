
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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
        { name: 'VVIP Airport Handling', path: '/services#airport-handling' },
        { name: 'Executive Transportation', path: '/services#transportation' },
        { name: 'Concierge Services', path: '/services#concierge' },
        { name: 'Red Carpet & Events', path: '/services#events' },
        { name: 'Charter Coordination', path: '/services#charter' },
      ]
    },
    { name: 'Case Studies', path: '/case-studies' },
    { name: 'Careers', path: '/careers' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={cn(
      "fixed top-0 w-full z-50 transition-all duration-300",
      isScrolled 
        ? "bg-white/95 backdrop-blur-md shadow-md" 
        : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-serif font-bold text-luxury-dark">Ole<span className="text-luxury-gold">VVIP</span></span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:ml-6 md:flex md:items-center md:space-x-4">
            {navLinks.map((link) => (
              link.subItems ? (
                <div key={link.name} className="relative group">
                  <button
                    className="px-3 py-2 text-sm font-medium text-luxury-charcoal hover:text-luxury-dark flex items-center"
                    onClick={toggleServices}
                  >
                    {link.name}
                    <ChevronDown size={16} className="ml-1" />
                  </button>
                  <div className="absolute z-10 left-0 mt-2 w-64 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top-right">
                    <div className="py-1" role="menu" aria-orientation="vertical">
                      {link.subItems.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.path}
                          className="block px-4 py-3 text-sm text-luxury-charcoal hover:bg-luxury-cream hover:text-luxury-dark"
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
                  className="px-3 py-2 text-sm font-medium text-luxury-charcoal hover:text-luxury-dark"
                >
                  {link.name}
                </Link>
              )
            ))}
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="outline"
              size="sm"
              className="border-luxury-gold text-luxury-dark hover:bg-luxury-gold/10"
              asChild
            >
              <Link to="/book-consultation">Book Service</Link>
            </Button>
            
            <Button
              variant="default"
              size="sm"
              className="bg-luxury-dark hover:bg-luxury-navy text-white"
              asChild
            >
              <Link to="/client-portal" className="flex items-center">
                <User size={16} className="mr-2" />
                Client Portal
              </Link>
            </Button>
          </div>
          
          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              type="button"
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-luxury-charcoal hover:text-luxury-dark hover:bg-luxury-cream/50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-luxury-gold"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      <div className={cn("md:hidden bg-white border-t", isMenuOpen ? "block" : "hidden")}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navLinks.map((link) => (
            <React.Fragment key={link.name}>
              {link.subItems ? (
                <div>
                  <button
                    onClick={toggleServices}
                    className="w-full text-left px-3 py-3 text-base font-medium text-luxury-charcoal hover:text-luxury-dark hover:bg-luxury-cream flex justify-between items-center"
                  >
                    {link.name}
                    <ChevronDown size={16} />
                  </button>
                  {isServicesOpen && (
                    <div className="pl-6 space-y-2 border-l-2 border-luxury-gold/30 ml-3">
                      {link.subItems.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.path}
                          className="block px-3 py-2 text-base font-medium text-luxury-charcoal hover:text-luxury-dark"
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
                  className="block px-3 py-3 text-base font-medium text-luxury-charcoal hover:text-luxury-dark hover:bg-luxury-cream"
                  onClick={toggleMenu}
                >
                  {link.name}
                </Link>
              )}
            </React.Fragment>
          ))}
          <div className="pt-4 flex flex-col space-y-3 px-3">
            <Button
              variant="outline"
              className="w-full border-luxury-gold text-luxury-dark hover:bg-luxury-gold/10 justify-start"
              asChild
            >
              <Link to="/book-consultation" onClick={toggleMenu}>Book Service</Link>
            </Button>
            <Button
              variant="default"
              className="w-full bg-luxury-dark hover:bg-luxury-navy text-white justify-start"
              asChild
            >
              <Link to="/client-portal" onClick={toggleMenu}>
                <User size={16} className="mr-2" />
                Client Portal
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
