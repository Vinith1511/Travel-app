import Home from './componnet/Home/Home';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from './componnet/Signup/Signup';
import RoomBooking from './componnet/room/RoomBooking';
import CarBooking from './componnet/car/CarBooking';
import Login from './componnet/Login/Login';
import RoomBookingDetails from './componnet/roomDetails/RoomBookingDetails';
import CarBookingDetails from './componnet/carDetails/CarBookingDetails';
function App() {
  return (
    <>
    {/* appbar component */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/Login" element={<Login/>} />
          <Route path="/Home" element={<Home />} />
          <Route path="/RoomBooking" element={<RoomBooking/>} />
          <Route path="/CarBooking" element={<CarBooking/>} />
          <Route path="/Others" element={<Home />} />
          <Route path="/RoomBookingDetails" element={<RoomBookingDetails/>}/>
          <Route path="/CarBookingDetails" element={<CarBookingDetails/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
