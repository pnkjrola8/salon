import React from 'react';
import HeroSection from '../components/Common/HeroSection';
import AboutStory from '../components/About/AboutStory';
import Team from '../components/About/Team';
import './AboutPage.css'; // Import CSS file

const AboutPage = () => {
  return (
    
    <div >
      <HeroSection 
        title="About Us"
        subtitle="Our Story and Team"
        bgImage="https://www.styleseat.com/blog/wp-content/uploads/2021/09/barber-terms-hero-scaled-1.jpg"
      />
      <div>
      <AboutStory  />
      <Team />
      </div>
      
    </div>
  );
};

export default AboutPage;