import React, { useEffect, useState } from 'react'
import "./CarBookingDetails.css"
function CarBookingDetails() {
    const[bookingDetails,setBookingDetails]=useState(null);
    const [bookingNum, setBookingNum] = useState(generateRandomBookingNumber());
    function generateRandomBookingNumber() {
        return Math.floor(Math.random() * 9999 + 9999);
      }
    useEffect(()=>{
        const storedDetails=localStorage.getItem('CarBookingsData');
        if(storedDetails){
            setBookingDetails(JSON.parse(storedDetails));
        }
    },[]);
    function handleButtonClick() {
        setBookingNum(generateRandomBookingNumber());
      }
    console.log(bookingDetails,'CAR')
  return (
    <div className='carBooking-container'>
        <h2>Booked Details</h2>
        {bookingDetails?.map((e,index)=>(
            <div>
                <p id="countRecord">Booking Number#{bookingNum}</p>
                <p>pickupPoint: {e.pickupPoint}</p>
                <p>endPoint: {e.endPoint}</p>
                <p>date: {e.date}</p>
                <p>time: {e.time}</p>
                <p>number: {e.number}</p>
            </div>
        ))}
    </div>
  );
}
export default CarBookingDetails;
