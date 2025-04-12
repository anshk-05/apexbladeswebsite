import React from 'react';

function ProductSection() {
  // Function to scroll to the contact form section
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Updated product data based on the actual blade types
  const products = [
    {
      id: 1,
      name: 'Precision Slitter Blades',
      description: 'High-performance center-slot tungsten carbide slitter blades designed for clean, precise cutting of paper, film, foil, and other materials with minimal deflection.',
      benefits: [
        'Superior edge retention',
        'Minimal material waste',
        'Reduced downtime for blade changes'
      ],
      imageUrl: '/images/slitter-blades/slitter-blade-1.jpg' // Assuming this is the filename
    },
    {
      id: 2,
      name: 'Three-Hole Industrial Blades',
      description: 'Versatile three-hole mounting design blades offering exceptional stability and precision for consistent cutting in high-volume manufacturing environments.',
      benefits: [
        'Secure mounting system',
        'Excellent heat resistance',
        'Uniform cutting performance'
      ],
      imageUrl: '/images/three-hole-blades/three-hole-blade-1.jpg' // Assuming this is the filename
    },
    {
      id: 3,
      name: 'Trapezoidal Utility Blades',
      description: 'Specialized trapezoidal blades with dual notches, engineered for precision cutting applications where angled approaches and exceptional hardness are required.',
      benefits: [
        'Application-specific design',
        'Enhanced cutting geometry',
        'Chemical resistance'
      ],
      imageUrl: '/images/trapezoidal-blades/trapezoidal-blade-1.jpg' // Assuming this is the filename
    }
  ];

  return (
    <section id="products" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Premium Products</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our range of high-performance tungsten carbide blades, engineered for exceptional durability and precision in demanding industrial applications.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105">
              <div className="h-64 bg-gray-200 flex items-center justify-center overflow-hidden">
                    <img 
                        src={product.imageUrl} 
                        alt={product.name}
                        className="w-full h-full object-contain p-4"
                        onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "https://via.placeholder.com/400x250?text=Product+Image";
                        }}
                    />
                </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                <p className="text-gray-700 mb-4">{product.description}</p>
                <div className="border-t pt-4">
                  <h4 className="font-bold text-gray-900 mb-2">Key Benefits:</h4>
                  <ul className="space-y-1">
                    {product.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-center text-gray-700">
                        <svg className="w-4 h-4 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                        </svg>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="px-6 pb-6">
                <button 
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition"
                  onClick={scrollToContact}
                >
                  Request Information
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Custom Blade Solutions</h3>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Don't see exactly what you need? Our engineering team can design and manufacture custom tungsten carbide blades 
            tailored to your specific application requirements.
          </p>
          <button 
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition"
            onClick={scrollToContact}
          >
            Inquire About Custom Solutions
          </button>
        </div>
      </div>
    </section>
  );
}

export default ProductSection;