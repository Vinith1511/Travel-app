import React, { useState, useEffect } from 'react'
import "./CarBooking.css"
import Navbar from '../Navbar/Navbar';
import { cars } from '../sampleData/carData';
function CarBooking({ history }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [pickupPoint, setPickupPoint] = useState('');
  const [endPoint, setEndPoint] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [number, setNumber] = useState('');
  const [formValues, setFormValues] = React.useState({});
  const [formData, setFormData] = React.useState([]);
  const [phoneError, setPhoneError] = useState('');
  const isPhoneValid = (phoneNumber) => {
    return /^\d{10}$/.test(phoneNumber);
  };
  const handlePhoneChange = (e) => {
    const value = e.target.value;
    setNumber(value);

    if (!isPhoneValid(value)) {
      setPhoneError('Invalid phone number');
    } else {
      setPhoneError('');
    }
  };
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  useEffect(() => {
    localStorage.setItem("CarBookingsData", JSON.stringify(formData))
    let dat = localStorage.getItem('CarBookingsData')
    console.log(dat, 'data from localstorage')
  }, [formData])
  const handleSave = (event) => {
    const obj = {
      pickupPoint: pickupPoint,
      endPoint: endPoint,
      date: date,
      time: time,
      number: number
    }
    setFormValues(obj)
    const arr = [obj]
    console.log(arr, "arr");
    setFormData((prevState) => [...prevState, obj])
    alert("Successfully Booked");
    closeModal();
    event.preventDefault();
    if (pickupPoint.trim() === '' || endPoint.trim() === '' || date.trim() === '' || time.trim() === '' || number.trim() === '') {
      alert('Please fill below details.');
      return;
    }
  };
  return (
    <div className="CarBooking" style={{ height: '680px' }}>
      <Navbar/>
      <h1 id="wel">CarBooking Service</h1>
      <b><p id="para">Unlock the door to your next adventure with our premier car rental service. Our fleet of meticulously maintained vehicles is ready to turn your travel dreams into reality. Whether you're planning a weekend getaway, a family road trip, or a crucial business journey, we've got the perfect ride for you. From sleek and stylish sedans to spacious SUVs and everything in between, our diverse selection ensures that you'll find the ideal vehicle to suit your needs and preferences.</p></b>
      <div className="car-list">
        {cars.map((car) => (
          <div key={car.id} className="car-card">
            <img src={car.imageUrl} style={{
              width: car.imageSize,
              height: car.imageSize
            }}
            />
            <h2>{car.name}</h2>
            <p>{car.description}</p>
            <p>Price: {car.price}</p>
            <button onClick={openModal} className="book-button">
              Book Now
            </button>
          </div>
        ))}
        {isModalOpen && (
          <div className="modal">
            <div className="modal-content">
              {/*<span className="close" onClick={closeModal}>&times;</span>*/}
              <h2 id="model-title">Booking Details</h2>
              <form>
                <b><label>Pickup Point:</label></b>
                <input type="text" value={pickupPoint} onChange={(e) => setPickupPoint(e.target.value)} />

                <b><label>End Point:</label></b>
                <input type="text" value={endPoint} onChange={(e) => setEndPoint(e.target.value)} />

                <b><label>Date:</label></b>
                <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />

                <b><label>Time:</label></b>
                <input type="time" value={time} onChange={(e) => setTime(e.target.value)} />
                <div>
                  <b><label>Phone:</label></b>
                  <input type="number" value={number} onChange={handlePhoneChange} />
                  {phoneError && <div className="error">{phoneError}</div>}
                </div>
                <div>
                  <button type='submit' onClick={handleSave}>Book</button>
                  <button type='submit' id="closebut" onClick={closeModal}>Close</button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>

    </div>

  )
}

export default CarBooking;
