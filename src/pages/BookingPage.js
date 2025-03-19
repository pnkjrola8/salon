import React from 'react';
import HeroSection from '../components/Common/HeroSection';
import Booking from '../components/Booking/Booking';
import Appointments from '../components/Booking/Appointments'; // Import Appointments
import './BookingPage.css';

const BookingPage = () => {
  return (
    <div>
      <HeroSection 
        title="Book an Appointment"
        subtitle="Schedule your visit today"
        bgImage="https://www.styleseat.com/blog/wp-content/uploads/2021/09/barber-terms-hero-scaled-1.jpg"
      />
      <div className="booking-content">
        <Booking />
        <Appointments /> {/* Add Appointments component here */}
      </div>
    </div>
  );
};

export default BookingPage;