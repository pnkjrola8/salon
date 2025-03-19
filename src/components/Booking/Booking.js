import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { db } from "../../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { useAuth } from "../../pages/AuthContext"; // Import useAuth
import "./Booking.css";

const Booking = () => {
  const [name, setName] = useState("");
  const [service, setService] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const { user } = useAuth(); // Get the logged-in user
  const navigate = useNavigate(); // Initialize navigate

  const handleBooking = async () => {
    if (!user) {
      alert("Please log in to book an appointment.");
      navigate("/login"); // Redirect to login
      return;
    }

    try {
      await addDoc(collection(db, "appointments"), {
        userId: user.uid, // Add the user's UID
        name,
        service,
        date,
        time,
        timestamp: serverTimestamp(),
      });
      alert("Booking successful!");
    } catch (error) {
      console.error("Error booking appointment: ", error);
      alert("Failed to book appointment. Please try again.");
    }
  };

  return (
    <div className="booking-container">
      <h2>Book an Appointment</h2>
      <input
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <select value={service} onChange={(e) => setService(e.target.value)} required>
        <option value="" disabled>Select Service</option>
        <option value="Hair">Hair</option>
        <option value="Nail">Nail</option>
        <option value="Skin">Skin</option>
      </select>
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />
      <input
        type="time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        required
      />
      <button onClick={handleBooking}>Book Now</button>
    </div>
  );
};

export default Booking;