import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductSection from './components/ProductSection';
import BenefitsSection from './components/BenefitsSection';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <ProductSection />
      <BenefitsSection />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;