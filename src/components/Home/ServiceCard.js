import React from 'react';
import './ServiceCard.css';

const ServiceCard = ({ service = {} }) => {
  return (
    <div className="service-card">
      <img src={service.image} alt={service.title} /> {/* Use service.image directly */}
      <h3>{service.title}</h3>
      <p>{service.description}</p>
      <div className="price-duration">
        <span>₹{service.price}</span>
        <span>{service.duration} mins</span>
      </div>
    </div>
  );
};

ServiceCard.defaultProps = {
  service: {
    id: 0,
    title: "Service Title",
    description: "Service Description",
    price: 0,
    duration: 0,
    image: "https://www.styleseat.com/blog/wp-content/uploads/2022/05/man-getting-hair-cut-1536x1024.jpg", // Default image URL
  },
};

export default ServiceCard;