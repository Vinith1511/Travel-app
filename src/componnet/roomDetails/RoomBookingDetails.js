import React, { useEffect, useState } from 'react';
import "./RoomBookingDetails.css"
function RoomBookingDetails({ car, closeModal }) {
  const [bookingDetails, setBookingDetails] = useState(null);
  const [bookingNum, setBookingNum] = useState(generateRandomBookingNumber());
    function generateRandomBookingNumber() {
        return Math.floor(Math.random() * 9999 + 9999);
      }
  useEffect(() => {
    const storedDetails = localStorage.getItem('roomBookingsData');

    if (storedDetails) {
      setBookingDetails(JSON.parse(storedDetails));
    }
  }, []);
  function handleButtonClick() {
    setBookingNum(generateRandomBookingNumber());
  }
  console.log(bookingDetails,'BOOK')
  return (
    <div className='booking-container 'style={{ height: '444px' }} >
        <h2>Booking Details</h2>
{bookingDetails?.map((e,index) => (
  <div>
    <p id="count">Booking number:{bookingNum}</p>

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

