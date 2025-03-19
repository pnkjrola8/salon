import React from 'react';
import HeroSection from '../components/Common/HeroSection';
import ServiceCategories from '../components/Services/ServiceCategories';
import PriceList from '../components/Services/PriceList';
import './ServicesPage.css'; // Import CSS file

const ServicesPage = () => {
  return (
    <div>
      <HeroSection 
        title="Our Services"
        subtitle="Professional Care for Your Beauty"
        bgImage="https://www.styleseat.com/blog/wp-content/uploads/2021/10/facial-at-home-hero-scaled-1.webp"
      />
      <ServiceCategories />
      <PriceList />
    </div>
  );
};

export default ServicesPage;