import React from 'react';
// import components
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import Team from './components/Team';
import Testimonial from './components/Testimonial';
import Products from './components/products';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className='h-full bg-pattern bg-repeat max-w-[1800px] mx-auto overflow-hidden'>
      <Hero />
      <About />
      <Menu /> 
      <Products />
      <Team />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default App;
