import React, { useEffect, useState } from "react";
import { db } from "../../firebase";
import { collection, query, where, onSnapshot } from "firebase/firestore";
import { useAuth } from "../../pages/AuthContext"; // Import useAuth
import "./Appointments.css";

const Appointments = () => {
  const [appointments, setAppointments] = useState([]);
  const { user } = useAuth(); // Get the logged-in user

  useEffect(() => {
    if (!user) return; // Exit if no user is logged in

    const q = query(
      collection(db, "appointments"),
      where("userId", "==", user.uid) // Filter by user's UID
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setAppointments(data);
    });

    return () => unsubscribe();
  }, [user]);

  return (
    <div className="appointments-container">
      <h2>Appointments</h2>
      {appointments.length === 0 ? (
        <p>No appointments found.</p>
      ) : (
        <table className="appointments-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Service</th>
              <th>Date</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((appointment) => (
              <tr key={appointment.id}>
                <td>{appointment.name}</td>
                <td>{appointment.service}</td>
                <td>{appointment.date}</td>
                <td>{appointment.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Appointments;