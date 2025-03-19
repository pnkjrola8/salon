import React from 'react';
import ServiceCard from './ServiceCard';
import './ServicesGrid.css';

const ServicesGrid = () => {
  const services = [
    { id: 1, title: "Haircut", description: "Professional haircut for all hair types.", price: 500, duration: 30, image: "https://www.styleseat.com/blog/wp-content/uploads/2021/09/barber-terms-hero-scaled-1.jpg" },
    { id: 2, title: "Spa", description: "Relaxing spa treatment.", price: 1500, duration: 60, image: "https://www.styleseat.com/blog/wp-content/uploads/2021/10/facial-at-home-hero-scaled-1.webp" },
    { id: 3, title: "Manicure", description: "Nail care and polish.", price: 300, duration: 45, image: "https://www.styleseat.com/blog/wp-content/uploads/2021/12/polygel-nails-hero-scaled-1.webp" },
  ];

  return (
    <div className="services-grid">
      {services.map((service) => (
        <ServiceCard key={service.id} service={service} />
      ))}
    </div>
  );
};

export default ServicesGrid;