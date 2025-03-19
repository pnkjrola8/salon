import React from 'react';
import './Team.css';

const Team = () => {
  const teamMembers = [
    { id: 1, name: "John Doe", role: "Hair Stylist", image: "https://www.styleseat.com/blog/wp-content/uploads/2021/09/barber-terms-hero-scaled-1.jpg" },
    { id: 2, name: "Jane Smith", role: "Spa Specialist", image: "https://www.styleseat.com/blog/wp-content/uploads/2021/10/facial-at-home-hero-scaled-1.webp" },
    { id: 3, name: "Emily Johnson", role: "Nail Artist", image: "https://www.styleseat.com/blog/wp-content/uploads/2021/12/polygel-nails-hero-scaled-1.webp" },
  ];

  return (
    <div className="team">
      <h2>Our Team</h2>
      <div className="team-grid">
        {teamMembers.map((member) => (
          <div key={member.id} className="team-card">
            <img src={member.image} alt={member.name} />
            <h3>{member.name}</h3>
            <p>{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;