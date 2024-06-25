// src/components/HomePage.js
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Form, Button, Container, Row, Col, Card } from 'react-bootstrap';
import styled from 'styled-components';
import axios from 'axios';
import "./HomePage.css";



function Home() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();
    const handleScroll = (event, targetId) => {
      event.preventDefault();
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    };
  
   
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:5000/api/users/login', { email, password });
            localStorage.setItem('token', res.data.token);
            history.push('/create-resume');
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <Router>
          <div className='navbar'>
             <nav>
        <input type="checkbox" id="check" />
        <label htmlFor="check" className="checkbtn">
          <i className="fas fa-bars"></i>
        </label>
        <label className="logo">ResumeBuilder</label>
        <ul>
          <li>
            <a href="/home" onClick={(e) => handleScroll(e, '/home')}>Home</a>
          </li>
          <li>
            <a href="/features" onClick={(e) => handleScroll(e, '/features')}>Features</a>
          </li>
          <li>
            <a href="/about" onClick={(e) => handleScroll(e, '/about')}>About Us</a>
          </li>
          <li>
            <a href="/contact" onClick={(e) => handleScroll(e, '/contact')}>Contact Us</a>
          </li>
        </ul>
      </nav>
      </div>
            
     <div className='container'>
            <section id="/home">
              <div className="login-box">
                <form onSubmit={handleSubmit}>
                   
                    <div className="user-box">
                        <input 
                            type="email" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            
                            required 
                        />
                        <labelfor>Email</labelfor>
                    </div>
                    <div className="user-box">
                        <input 
                            type="password" 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                             
                            required 
                        />
                        <labelfor>Password</labelfor>
                    </div>
                    <a href="/create-resume">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        Login
                        </a>
                    <p>Don't have an account? </p><a href="/Register">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            Register
                        </a>
                   
                </form>
                </div>
                </section>
                
                <section className="section2" id="/features">
                  
                  <h1>Our Features</h1>
                  
                <div class="app-container" >
                 
    <div class="feature-card">
      
      <h2>Easy to Use</h2>
      <p>Our resume builder is user-friendly and easy to navigate.</p>
    </div>
    <div class="feature-card">
      
      <h2>Easy to Manage</h2>
      <p>Our resume builder helps you to Manage easily.</p>
    </div>
    <div class="feature-card">
      <h2>Free access</h2>
      <p>Our resume builder is open and free to everyone.</p>
    </div>
    
    <div class="feature-card">
      <h2>Export Options</h2>
      <p>Our resume builder allows you to download your resume in  PDF format.</p>
    </div>
    <div class="feature-card">
      <h2>Safety & Privacy</h2>
      <p>Our resume builder gives you a safe and secure environment.</p>
    </div>
    <div class="feature-card">
      <h2>Customizable Templates</h2>
      <p>Our resume builder offers a variety of templates.</p>
    </div>
    
  </div>
</section>
          <section className="section3" id="/about">
          <h1>About Us</h1>
          <div className="about-us" >
      
      
         
          <p>Our Resume Builder is dedicated to helping job seekers create professional resumes with ease. Our mission is to provide a user-friendly platform with a variety of templates and features that cater to different industries and career levels.
      
              Founded in 2024, our team comprises of "ZIDIO" web developer interns committed to enhancing your job search experience. We continuously update our platform to ensure it meets the evolving needs of job seekers and employers alike.
      
      Join thousands of satisfied users and take the next step in your career with our Resume Builder.</p>
      
    </div>
    



<br></br>
<br></br>






<h1>Contact Us</h1>
   
    <section className="container-form" id="/contact">
    
    <form >
        <labelfor><h6>Name:</h6></labelfor>
        <input type="text" id="name" name="name" required/>

        <labelfor><h6>Email:</h6></labelfor>
        <input type="email" id="email" name="email" required/>

        <labelfor><h6>Subject:</h6></labelfor>
        <input type="text" id="subject" name="subject"/>

        <labelfor><h6>Message:</h6></labelfor>
        <textarea id="message" name="message" rows="5" required></textarea>
        <br></br>
        <div className="contact-us">
       <button>  <span></span>
                            <span></span>
                            <span></span>
                            <span></span>SUBMIT</button>
      
        
        </div>
    </form>
    </section>
   <div className="footer-box"><footer ><p>&copy; 2024 ResumeBuilder. All rights reserved.</p></footer>  </div> 
     </section>     
                          
    </div>
        </Router>
    );
}

export default Home;
