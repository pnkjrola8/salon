// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import './Navbar.css';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false); // State to manage the toggle

//   const toggleNavbar = () => {
//     setIsOpen(!isOpen); // Toggle the state
//   };

//   return (
//     <nav className="navbar">
//       <div className="logo">
//         <Link to="/">Uptown Hair</Link>
//       </div>

//       {/* Hamburger Menu Icon */}
//       <div className="hamburger" onClick={toggleNavbar}>
//         <div className={`bar ${isOpen ? 'open' : ''}`}></div>
//         <div className={`bar ${isOpen ? 'open' : ''}`}></div>
//         <div className={`bar ${isOpen ? 'open' : ''}`}></div>
//       </div>

//       {/* Navigation Links */}
//       <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
//         <li><Link to="/" onClick={toggleNavbar}>Home</Link></li>
//         <li><Link to="/about" onClick={toggleNavbar}>About</Link></li>
//         <li><Link to="/services" onClick={toggleNavbar}>Services</Link></li>
//         <li><Link to="/contact" onClick={toggleNavbar}>Contact</Link></li>
//         <li><Link to="/login" onClick={toggleNavbar}>Login/Signup</Link></li>
//         {/* <li><Link to="/register" onClick={toggleNavbar}>Signup</Link></li> */}
//         <li><Link to="/booking" className="cta-button" onClick={toggleNavbar}>Book Now</Link></li>
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;

import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { useAuth } from "../../pages/AuthContext"; // Import useAuth
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to manage the toggle

  const toggleNavbar = () => {
    setIsOpen(!isOpen); // Toggle the state
  };

  const { user, logout } = useAuth(); // Get the user and logout function

  const handleLogout = async () => {
    try {
      await logout(); // Call the logout function
    } catch (error) {
      console.error("Error logging out: ", error);
    }
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">Uptown Hair</Link>
      </div>
      <div className="hamburger" onClick={toggleNavbar}>
        <div className={`bar ${isOpen ? 'open' : ''}`}></div>
        <div className={`bar ${isOpen ? 'open' : ''}`}></div>
        <div className={`bar ${isOpen ? 'open' : ''}`}></div>
      </div>
      <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
        <li><Link to="/" onClick={toggleNavbar}>Home</Link></li>
        <li><Link to="/about" onClick={toggleNavbar}>About</Link></li>
        <li><Link to="/services" onClick={toggleNavbar}>Services</Link></li>
        <li><Link to="/contact" onClick={toggleNavbar}>Contact</Link></li>

        {user ? ( // If user is logged in
          
            <li onClick={handleLogout}>Logout</li>
          
        ) : ( // If user is not logged in
          <>
            <li><Link to="/login">Login</Link></li>
            {/* <li><Link to="/signup">Sign Up</Link></li> */}
            
          </>
        )}
        <li><Link to="/booking" className="cta-button" onClick={toggleNavbar}>Book Now</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;