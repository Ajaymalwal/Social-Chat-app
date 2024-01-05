import React from "react";
import './footer.css';
import { useNavigate } from "react-router-dom";

export default function Footer(){
   const Navigate = useNavigate();
    return(

        <div>
  <footer>
    <div className="footer-section">
      <h2>About Us</h2>
      <p className="about-us-breif">Learn more about the passionate team behind SocialChat and our mission to bring people together through the power of conversation.</p>
      <input type="button" defaultValue="Learn more" id="about-us-btn" onClick={()=>Navigate('/aboutus')} />
    </div>
    <div className="footer-section">
      <h2>Get in touch </h2>
      <label><i className="fa-regular fa-envelope" /></label>
      <a href="mailto:av9933143@gmail.com" id="mail">av9933143@gmail.com</a>
      <label><i className="fa-solid fa-phone" /></label>
      <a href="tel:+91 9729589298" id="number">+91 9729589298</a>
    </div>
  </footer>
  <div id="madeby"> <p>© made by <span style={{color: 'red'}}>❤</span>
      for you</p></div>
</div>

    )
}