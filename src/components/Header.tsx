import React, { useState, useEffect } from 'react';
import { Instagram, Youtube, ShoppingBag } from 'lucide-react';
import { AiFillTikTok } from "react-icons/ai";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-[#11151C]/95 py-2' : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className={`transition-all duration-300 ${
            scrolled ? 'scale-75' : 'scale-100'
          }`}>
            <img 
              src="images/logo.png" 
              alt="Logo" 
              className="text-[#D66853]" 
              style={{ width: scrolled ? '36px' : '48px', height: 'auto' }} 
            />
          </div>
          
          <nav className="flex items-center space-x-6">
            <a 
              href="https://instagram.com/bine.bastelt" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#D66853] hover:text-[#7D4E57] transition-colors duration-300"
            >
              <Instagram size={24} />
            </a>
            <a 
              href="https://www.tiktok.com/@binebastelt" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#D66853] hover:text-[#7D4E57] transition-colors duration-300"
            >
              <AiFillTikTok size={24} />
            </a>
            <a 
              href="https://www.youtube.com/@binebastelt" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#D66853] hover:text-[#7D4E57] transition-colors duration-300"
            >
              <Youtube size={24} />
            </a>
            <a 
              href="https://ko-fi.com/binebastelt/shop" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-[#D66853] text-white px-6 py-2 rounded-full flex items-center space-x-2 hover:bg-[#7D4E57] transition-colors duration-300"
            >
              <ShoppingBag size={20} />
              <span>Shop</span>
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;