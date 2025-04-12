import React, { useState } from 'react';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-xl font-bold">ApexBlades</h1>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <a href="#home" className="hover:text-blue-400 transition">Home</a>
          <a href="#products" className="hover:text-blue-400 transition">Products</a>
          <a href="#benefits" className="hover:text-blue-400 transition">Benefits</a>
          <a href="#contact" className="hover:text-blue-400 transition">Contact</a>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden focus:outline-none" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-gray-800 px-4 py-2">
          <div className="flex flex-col space-y-3">
            <a href="#home" className="hover:text-blue-400 transition py-2">Home</a>
            <a href="#products" className="hover:text-blue-400 transition py-2">Products</a>
            <a href="#benefits" className="hover:text-blue-400 transition py-2">Benefits</a>
            <a href="#contact" className="hover:text-blue-400 transition py-2">Contact</a>
          </div>
        </nav>
      )}
    </header>
  );
}

export default Header;