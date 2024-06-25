import React, { useState, useEffect } from 'react';
import { BsFillBalloonHeartFill } from "react-icons/bs";
const Welcome = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(200);

  const texts = [
    "First Job",
    "First Internship",
    "First Interview",
    "First Work Experience",
    "First PPO",
    
  ];

  useEffect(() => {
    const handleTyping = () => {
      if (isDeleting) {
        if (charIndex > 0) {
          setText(texts[index].substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
          setTypingSpeed(100);
        } else {
          setIsDeleting(false);
          setIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }
      } else {
        if (charIndex < texts[index].length) {
          setText(texts[index].substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
          setTypingSpeed(500);
        } else {
          setIsDeleting(true);
          setTypingSpeed(1000);
        }
      }
    };

    const typingTimer = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(typingTimer);
  }, [charIndex, isDeleting, typingSpeed, index, texts]);

  return (
    <div>
      <h1>Welcome to ResumeBuilder <BsFillBalloonHeartFill />!</h1>
      <div className='para'><p >Build the <b>perfect resume, impress potential employers, advance your career with ease, showcase your skills, highlight your achievements, and land your dream job. </b>Our platform provides you with the tools you need to create a professional resume quickly and effortlessly. Get started today and see the difference a <b>HAND-CRAFTED RESUME</b> can make!</p></div>
      <p>Get Your <u><b>"{text}"</b></u><span className="cursor">|</span></p>
     
      <style jsx>{`
        .cursor {
          display: inline-block;
          background-color: #2272FF;
          color:#2272FF;
          width: 2px;
          margin-left: 2px;
          animation: blink 0.7s infinite;
          
        }
          .cursor span{
          background-color: #2272FF;
          color:#2272FF;
          }
       
        @keyframes blink {
          0%, 50% {
            opacity: 1;
            color:#2272FF;
          }
          50%, 100% {
            opacity: 0;
             color:#2272FF;
          }
        }
      `}</style>
    </div>
  );
};

export default Welcome;
