import React from 'react';
import './ServiceCategories.css';

const ServiceCategories = () => {
  const categories = [
    { id: 1, title: "Hair Services", image: "https://www.styleseat.com/blog/wp-content/uploads/2023/06/woman-getting-hair-cut-min.jpg" },
    { id: 2, title: "Skin Care", image: "https://www.styleseat.com/blog/wp-content/uploads/2022/12/woman-getting-a-facial.jpg" },
    { id: 3, title: "Nail Care", image: "https://www.styleseat.com/blog/wp-content/uploads/2023/06/catchy-nail-salon-slogans-hero-scaled-1.jpg" },
  ];

  return (
    <div className="service-categories">
      {categories.map((category) => (
        <div key={category.id} className="category-card">
          <img src={category.image} alt={category.title} /> {/* Use category.image directly */}
          <h3>{category.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default ServiceCategories;