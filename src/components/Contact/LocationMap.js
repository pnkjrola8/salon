import React from 'react';
import './LocationMap.css';

const LocationMap = () => {
  return (
    <div className="location-map">
      <h2>Our Location</h2>
      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.869148325989!2d77.2069073150815!3d28.57208298244099!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce2a99b6f9fa7%3A0x83a25e55f0af1c82!2sConnaught%20Place%2C%20New%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1632912345678!5m2!1sen!2sin"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default LocationMap;