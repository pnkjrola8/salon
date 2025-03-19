import React from 'react';
import HeroSection from '../components/Common/HeroSection';
import ContactForm from '../components/Contact/ContactForm';
import LocationMap from '../components/Contact/LocationMap';
import './ContactPage.css'; // Import CSS file

const ContactPage = () => {
  return (
    <div>
      <HeroSection 
        title="Contact Us"
        subtitle="We'd Love to Hear From You"
        bgImage="https://www.styleseat.com/blog/wp-content/uploads/2021/12/polygel-nails-hero-scaled-1.webp"
      />
      <ContactForm />
      <LocationMap />
    </div>
  );
};

export default ContactPage;