import React, { useState } from 'react'
import "./Login.css"
import Home from '../Home/Home';
import { useNavigate } from 'react-router-dom';
function Login() {
  //...If you any change in Login.modified the code...
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleLogin = (event) => {
    event.preventDefault();
    const storedEmail = localStorage.getItem('userEmail');
    const storedPassword = localStorage.getItem('userPassword');
    if (email.trim() === '' || password.trim() === '') {
      alert('Please fill below details.');
      return;
    }

    if (email === storedEmail && password === storedPassword) {
      setIsLoggedIn(true);
      navigate('/Home');
    } else {
      alert('Invalid email or password');
    }
  };
  return (
    <div>
       <div
      className='loginPage' style={{ height: '606px' }}
    >
      <div>
        <h2 id="title2">GoWithTravel</h2>
        <img className='img'
          src='1.png'
        />
        {/* <img className='img4'      
       src='4.png' 
       /> */}
      </div>
      <div style={{display:'flex', justifyContent:'center'}}>
        <div style={{display:'flex', justifyContent:'center', alignItems:'center', marginLeft:'50px'}}>
          <img className='img4'
            src='4.png'
          />
        </div>

        <div className='Container' style={{ marginLeft:'90px' }}>


        {isLoggedIn ? (
        <div>
          <h2>Welcome, {email}!</h2>
          <button onClick={() => setIsLoggedIn(false)}>Logout</button>
        </div>
      ) : (
            <form >
              <h2>Login</h2>
              <div className="login-design">
                <label id="email2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder='Enter the email address'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="login-design">
                <label id="password2">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder='Enter the password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button onClick={handleLogin}>Login</button>
            </form>
      )}
          </div>

        </div>
      </div>
    </div>
  )
}

export default Login
