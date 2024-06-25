import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import {Navbar, Nav, Container, Row, Col, Form, Button } from 'react-bootstrap';
import axios from 'axios';

//import './Register.css';
import Copyrights from './Copyrights';

function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        await axios.post('http://localhost:5000/api/users/register', { name, email, password });
        history.push('/');
      } catch (err) {
        console.error(err);
      }
    };
  return (
    <>

<nav>
        <input type="checkbox" id="check" />
        <label htmlFor="check" className="checkbtn">
          <i className="fas fa-bars"></i>
        </label>
        <label className="logo">ResumeBuilder</label>
        
      </nav>
      <div className="container">
         <section>
          <section>
        <div className="login-box">
          <form>
              <div class="user-box">
                <input type="text" name="" placeholder="John Doe"required=""/>
                <labelfor>Full Name</labelfor>
              </div>
              <div class="user-box">
                <input type="email" name="" placeholder="Eg:doe@gmail.com" required=""/>
                <labelfor>Email</labelfor>
              </div>
            <div class="user-box">
               <input type="password" name=""  placeholder='password' required=""/>
             <labelfor>Password</labelfor>
           </div>
    
          <a href="/">
             <span></span>
             <span></span>
             <span></span>
             <span></span>
              Register
               
             
             </a>
           
             
            </form>
          </div> 
       </section>
      <div className="footer-box"><footer ><p>&copy; 2024 ResumeBuilder. All rights reserved.</p></footer> </div> 
       </section>
      </div>
    </>

  );
}

export default Register;
