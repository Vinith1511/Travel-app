import React, { useEffect, useState } from 'react'
import "./RoomBooking.css"
import RoomBookingDetails from '../roomDetails/RoomBookingDetails';
import Navbar from '../Navbar/Navbar';
function RoomBooking() {
  const cars = [
    {
      id: 1,
      imageSize: 130,
      imageUrl: '12.jpg',
      hotel: 'The Hotel Taj, Chennai',
      description: 'Maximum 3 Adult + 1 Child.',
      price: '5000 per day',
    },
    {
      id: 2,
      imageUrl: '13.jpg',
      imageSize: 130,
      hotel: 'The Madras GrandOpens,Chennai',
      description: 'Maximum 2 Adult + 1 Child.',
      price: '4000 per day',
    },
    {
      id: 3,
      imageUrl: '14.jpg',
      imageSize: 130,
      hotel: 'Taj Club HouseOpens,Chennai',
      description: 'Maximum 2 Adult + 1Child',
      price: '5000 per day',
    },
    {
      id: 4,
      imageUrl: '15.jpg',
      imageSize: 130,
      hotel: 'Crowne Plaza,Chennai ',
      description: 'Maximum 2 Adult + 1 Child',
      price: '6000 per day',
    },
  ];
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [checkin, setCheckIn] = useState('');
  const [checkout, setCheckOut] = useState('');
  const [aadhar, setAadhar] = useState('');
  const [phone, setPhone] = useState('');
  const [persons, setPersons] = useState('');
  //const[foods,setFoods]=useState('');
  const [formValues, setFormValues] = React.useState({});
  const [formData, setFormData] = React.useState([]);
  const [aadharError, setAadharError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const isAadharValid = (aadharNumber) => {
    return /^\d{12}$/.test(aadharNumber);
  };

  const isPhoneValid = (phoneNumber) => {
    return /^\d{10}$/.test(phoneNumber);
  };

  const handleAadharChange = (e) => {
    const value = e.target.value;
    setAadhar(value);

    if (!isAadharValid(value)) {
      setAadharError('Invalid Aadhar number');
    } else {
      setAadharError('');
    }
  };

  const handlePhoneChange = (e) => {
    const value = e.target.value;
    setPhone(value);

    if (!isPhoneValid(value)) {
      setPhoneError('Invalid phone number');
    } else {
      setPhoneError('');
    }
  };
  useEffect(() => {


    localStorage.setItem("roomBookingsData", JSON.stringify(formData))
    let dat = localStorage.getItem('roomBookingsData')
    console.log(dat, 'data from localstorage')

  }, [formData])

  console.log(formData, "formData")
  const openModal = (id) => {
    console.log("inside Open modal",id)
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const handleSave = (event) => {

    console.log("inside save",event)
    const obj = {
      checkin: checkin,
      checkout: checkout,
      aadhar: aadhar,
      phone: phone,
      noOfpersons: persons
    }
    setFormValues(obj)
    const arr = [obj]
    console.log(arr, "arr")
    setFormData((prevState) => [...prevState, obj])
    closeModal();
    alert('Successfully Booked');

    // localStorage.setItem("carBookingsData",JSON.stringify(arr))
    // let dat = localStorage.getItem('carBookingsData')
    // console.log(dat,'data from localstorage')

    // console.log('Check-in Date:', checkin);
    // console.log('Check-out Date:', checkout);
    // console.log('Aadhar:', aadhar);
    // console.log('Phone:', phone);
    // console.log('Persons:', persons);
    // console.log('Food:',foods)
    event.preventDefault();
    if (checkin.trim() === '' || checkout.trim() === '' || aadhar.trim() === '' || phone.trim() === '' || persons.trim() === '') {
      alert('Please fill below details.');
      return;
    }
  };
  return (
    <div className="RoomBooking" style={{ height: 'flex' }}>
      <Navbar/>
      <h1 id="title">RoomBooking</h1>
      <b><p id="para1">
        Looking to book a room for your next getaway? Look no further! Our rooms are not just spaces; they are cocoons of comfort and tranquility. Imagine waking up to the gentle rustling of leaves, with the soft sunlight streaming through your window.Our rooms are designed to be your home away from home,where every detail is thoughtfully curated to ensure your stay is nothing short of extraordinary.

      </p></b>

      <div className="Room-list">
        {cars.map((car) => (
          <div key={car.id} className="car-card">
            <img src={car.imageUrl} style={{
              width: car.imageSize,
              height: car.imageSize
            }}
            />
            <h2>{car.hotel}</h2>
            <p>{car.description}</p>
            <p>Price: {car.price}</p>
            <button onClick={()=>openModal(car.id)} className="book-button">
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
                <b><label>Check-in date:</label></b>
                <input type="Date" value={checkin} onChange={(e) => setCheckIn(e.target.value)} />

                <b><label>Check-out date:</label></b>
                <input type="Date" value={checkout} onChange={(e) => setCheckOut(e.target.value)} />

                <div>
                  <b><label>Aadhar:</label></b>
                  <input type="number" value={aadhar} onChange={handleAadharChange}/>
                  {aadharError && <div className="error">{aadharError}</div>}
                </div>

                <div>
                  <b><label>Phone:</label></b>
                  <input type="number" value={phone} onChange={handlePhoneChange} />
                  {phoneError && <div className="error">{phoneError}</div>}
                </div>
                <b><label>Persons:</label></b>
                <input type="number" value={persons} onChange={(e) => setPersons(e.target.value)} />
                {/*<b><label>Food:</label></b>
             <input type="checkbox" value={foods} onChange={(e)=>setFoods(e.target.value)}/>*/}
                <div>
                  <button type='submit' onClick={handleSave}>Book</button>
                  <button id="closebut" onClick={closeModal}>Close</button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>

  )
};
export default RoomBooking;