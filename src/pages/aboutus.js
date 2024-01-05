import React from "react";
import '../css/aboutus.css';

function AboutUs(){

    return(

        <div className="aboutus">
  <div className="section1">
    <h1>About Us</h1>
    <p className="breif">
      We are a team of college students who are passionate about creating a social chat website that is tailored to the needs of college students. We believe that college is a time of great change and growth, and that a strong social network can be invaluable for students during this time.
    </p>
  </div>
  <div className="section2">
    <h2>Our Mission</h2>
    <p className="breif">
      Our mission is to provide a safe and supportive social chat website for college students. We believe that college is a time of great change and growth, and that a strong social network can be invaluable for students during this time. We want to provide a space where students can connect with each other, make new friends, and discuss topics that are important to them.
    </p>
  </div>
  <div className="section3">
    <h2>Meet the Team</h2>   
    <div className="col">
      <div className="section3-1 coldata">
        <span className="circle" />
        <h3 className="name">Ajay Malwal</h3>
      </div>
      <div className="section3-2 coldata">
        <span className="circle" />  
        <h3 className="name">Ankush Bhujeja</h3>
      </div>
      <div className="section3-3 coldata">
        <span className="circle" />  
        <h3 className="name">Rohit Saini</h3>
      </div>
    </div>
  </div>
  <div className="section4">
    <h2>Join Us</h2>
    <p className="breif">Be a part of the Social Chat community.</p>
    <input type="button" defaultValue="Sign Up" className="signup-btn" />
  </div>
</div>

    );
}

export default AboutUs;