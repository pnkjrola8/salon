import React from 'react';
import { Link } from "react-router-dom";
import './HeroSection.css';

const HeroSection = ({ title, subtitle, bgImage }) => {
  return (
    <div className="hero-section" style={{ backgroundImage: `url(https://www.styleseat.com/blog/wp-content/uploads/2024/04/Salon-Spring-Cleaning-Blog-Header.png)` }}>
      <div className="hero-content">
        <h1>{title}</h1>
        <p>{subtitle}</p>
        <Link to="/booking" className="cta-button">Book Now</Link>
      </div>
    </div>
  );
};

export default HeroSection;