import React from 'react';
import HeroSection from '../components/Common/HeroSection';
import ServicesGrid from '../components/Home/ServicesGrid';
// import './HomePage.css'; // Correct import

const HomePage = () => {
  return (
    <div className="home-page">
      <HeroSection 
        title="Experience Luxury Beauty Services"
        subtitle="Your Perfect Look Awaits"
        bgImage="https://www.styleseat.com/blog/wp-content/uploads/2021/09/barber-terms-hero-scaled-1.jpg" // Use a valid image URL
      />
      <ServicesGrid />
    </div>
  );
};

export default HomePage;