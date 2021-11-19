import React from 'react';
import './Footer.scss';

export const Footer = () => {
    return (
        <footer>
        <div className="content">
     <div className="left box">
       <div className="upper">
         <div className="topic">About</div>
         <p>BTECH CSE Student Enthusiastic Web Developer eager to contribute to team success through hard work, attention to detail, and excellent organizational skill</p>
       </div>
       <div className="lower">
         <div className="topic">Contact us</div>
         <div className="phone">
           <a href="#0"><i className="fas fa-phone-volume"></i>+91 9814340436</a>
         </div>
         <div className="email">
           <a href="#0"><i className="fas fa-envelope"></i>iamshivamnanda@gmail.com</a>
         </div>
       </div>
     </div>
     <div className="middle box">
       <div className="topic">My Skills</div>
       <div><a href="#0">Web Design, Development</a></div>
       <div><a href="#0">Web UX Design, Reasearch</a></div>
       <div><a href="#0">Web User Interface Design</a></div>
       <div><a href="#0">Backend Development</a></div>
       <div><a href="#0">Mobile Application Development</a></div>
     </div>
     <div className="right box">
     <div className="topic">Subscribe us</div>
     <div className="media-icons">
           <a href="https://github.com/iamshivamnanda"><i className="fab fa-github"></i></a>
           <a href="https://www.instagram.com/iamshivamnanda/"><i className="fab fa-instagram"></i></a>
           <a href="https://twitter.com/ShivamNanda"><i className="fab fa-twitter"></i></a>
           <a href="https://www.linkedin.com/in/iamshivamnanda/"><i className="fab fa-linkedin-in"></i></a>
         </div>
   </div>
   <div className="bottom">
     <p>Copyright © 2021 <a href="#0">Shivam Nanda</a> All rights reserved</p>
   </div>
   </div>
      </footer>
    )
}
