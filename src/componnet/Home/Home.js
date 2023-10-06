import React, { useState } from 'react';
import "./Home.css"
import { useNavigate } from 'react-router-dom';
//...If you any change in home.modified the code...
function Home() {

    const dropDownData = [
        {label:"CarBooking Details", href:'/CarBookingDetails'},
        { label:"RoomBooking Details", href:'/RoomBookingDetails'}
    ]
    const navigate = useNavigate();
    const [showDropdowns, setShowDropdowns] = useState(false);

    const handleLinkClick = () => {
        setShowDropdowns(!showDropdowns);
        console.log(showDropdowns, 'isOpen')
    };

    return (
        <div className='Home' style={{ height: '600px' }}>
            <div> 
                {/* nav bar logic */}
            <h1 id="heading">GoWithTravel</h1>
            <nav>
                <ul>
                    <li><a href="/Home">Home</a></li>
                    <li><a href="/RoomBooking">Room Booking</a></li>
                    <li><a href="/CarBooking">Car Booking</a></li>
                    <li style={{ cursor: 'pointer' }}>
                        <a onClick={handleLinkClick}>Book Details</a>
                    </li>
                </ul>
            </nav>
            </div>
            
            <center>
                <h1 id="head">Welcome To GoWithTravel</h1>
                <img id="imgcenter" src='2.png' />
                <h1 id="quotes">Explore. Dream. Discover</h1>
                <b>
                    <p id="para">Embark on a journey of a lifetime and immerse yourself in the magic of exploration, where every horizon is an invitation to adventure, every destination a canvas for unforgettable memories, and every step you take brings you closer to discovering the world's hidden gems, all at your fingertips with our travel app.</p>
                </b>
                {showDropdowns && (
                    <div className='dropdown-menu'>
                        {dropDownData.map((e, index) => (
                            <label key={index} style={{ cursor: 'pointer' }} onClick={() => navigate(e.href)}>{e.label}</label>
                        ))}



                    </div>
                )}
            </center>
        </div>
    );
}

export default Home;

