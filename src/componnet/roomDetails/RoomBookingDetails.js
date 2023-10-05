import React, { useEffect, useState } from 'react';
import "./RoomBookingDetails.css"
function RoomBookingDetails({ car, closeModal }) {
  const [bookingDetails, setBookingDetails] = useState(null);
   var count=1;
  useEffect(() => {
    const storedDetails = localStorage.getItem('roomBookingsData');

    if (storedDetails) {
      setBookingDetails(JSON.parse(storedDetails));
      count++;
      count='';
    }
  }, []);

  console.log(bookingDetails.length,'BOOK')
  return (
    <div className='booking-container '>
      <h2>Confirmation</h2>
{bookingDetails?.map((e,index) => (
  <div>
    <p id="count">Booking #{count}</p>
    <h2>booked details</h2>

    <p>Check-In: {e.checkin}</p>
      <p>Check-Out: {e.checkout}</p>
      <p>Aadhar: {e.aadhar}</p>
      <p>Phone: {e.phone}</p>
      <p>Person: {e.persons}</p>
  </div>
))}
    </div>
  );
}

export default RoomBookingDetails;

