import React,{useState} from 'react'
import "./Navbar.css"
import { useNavigate } from 'react-router-dom';
function Navbar() {
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
    <div>
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
             {showDropdowns && (
                    <div className='dropdown-menu'>
                        {dropDownData.map((e, index) => (
                            <label key={index} style={{ cursor: 'pointer' }} onClick={() => navigate(e.href)}>{e.label}</label>
                        ))}



                    </div>
                )}
    </div>
  )
}

export default Navbar
