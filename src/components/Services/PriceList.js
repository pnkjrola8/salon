import React from 'react';
import './PriceList.css';

const PriceList = () => {
  const services = [
    { id: 1, name: "Haircut", price: 500 },
    { id: 2, name: "Spa", price: 1500 },
    { id: 3, name: "Manicure", price: 300 },
    { id: 4, name: "Pedicure", price: 400 },
    { id: 5, name: "Facial", price: 800 },
  ];

  return (
    <div className="price-list">
      <h2>Price List</h2>
      <table>
        <thead>
          <tr>
            <th>Service</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {services.map((service) => (
            <tr key={service.id}>
              <td>{service.name}</td>
              <td>₹{service.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PriceList;