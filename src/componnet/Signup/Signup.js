import React, { useState } from 'react'
import "./Signup.css"
import Login from '../Login/Login';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
function Signup() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  function handleSubmit(event){
    event.preventDefault();
    if (email.trim() === '' || password.trim() === '') {
      alert('Please fill in both email and password fields.');
      return;
    }
    navigate('/Login')
    localStorage.setItem('userEmail', email);
    localStorage.setItem('userPassword', password);
    alert('Registration successful!');

  }
  return (
    <div
      className='Page' style={{ height: '600px' }}
    >
      <div>
        <h2 id="title">GoWithTravel</h2>
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
            src='2.png'
          />
        </div>

        <div className='Container' style={{ marginLeft:'90px' }}>

            <form onSubmit={handleSubmit}>
              <h2>Sign Up</h2>
              <div className="signup-design">
                <label id="email1">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder='Enter the email address'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="signup-design">
                <label id="password1">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={password}
                  placeholder='Enter the password'
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button onClick={handleSubmit}>Sign Up</button>
              <p>Already have an account?<Link to='/Login' id='lin'>Login</Link></p>
            </form>
    
          </div>
        </div>
      </div>
  )
}

export default Signup;