import React from 'react';

function Hero() {
  return (
    <section id="home" className="bg-gradient-to-r from-blue-900 to-gray-900 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Premium Tungsten Carbide <span className="text-blue-400">Blades</span>
            </h1>
            <p className="text-xl mb-8">
              Industry-leading durability, precision, and performance for the most demanding applications.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a 
                href="#products" 
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition text-center"
              >
                Explore Products
              </a>
              <a 
                href="#contact" 
                className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-900 text-white font-bold py-3 px-6 rounded-lg transition text-center"
              >
                Contact Us
              </a>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="bg-gray-800 p-4 rounded-lg shadow-xl w-full max-w-md">
              <h3 className="text-xl font-bold text-center mb-4">Unmatched Quality</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-400 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>7-10x longer lifetime than standard blades</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-400 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>95% less deflection for precise cuts</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-400 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Exceptional hardness (~9 on Mohs scale)</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-400 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Performance at temps up to 800°C</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;