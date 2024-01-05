import React from "react";
import '../css/home.css';
import homeImages from '../images/Whatsapp-image.png';
import { useNavigate } from "react-router-dom";




function Home(){

  const Navigate = useNavigate();
    return(
<div >
        <div id="Home">
  <div id="first-section">
    <div id="welcomemsg">
      <h1>Welcome to the</h1>
      <h1>SocialChat</h1>
      <h4>Connect to the world, with SocialChat</h4>
      <button className="login" onClick={ () => Navigate('/login')} >Login</button>
    </div>
    <div id="block-firstpage-Image">
      <img src={homeImages} alt="visual of SocialChat" id="firstpage-Image" />
    </div>
  </div>
  <div id="second-section">
    <h2>Why choose SocialChat</h2>
    <div className="all-icons">
      <div className="icon-1 icon">
      <i className="fa-solid fa-comments icons" />
        <p className="icon-name">Real Time Chat</p>
        <p className="icon-breif">Experience real-time conversations with people from around the world.</p>
      </div>
      <div className="icon-2 icon">
        <i className="fa-solid fa-users icons" />
        <p className="icon-name">World chat room</p>
        <p className="icon-breif">Explore a world chat rooom,you can instant message to peoples.</p>
      </div>
      <div className="icon-3 icon">
        <i className="fa-solid fa-user-lock icons" />
        <p className="icon-name">Privacy control</p>
        <p className="icon-breif">Enjoy complete control over your privacy settings, deciding who you connect with and what you share.</p>
      </div>
      <div className="icon-4 icon">
        <i className="fa-solid fa-table icons" />
        <p className="icon-name">User-Friendly Interface</p>
        <p className="icon-breif">Navigate our platform with ease, whether you're a seasoned user or just starting out.</p>
      </div>
    </div>
  </div>
  <div id="third-section">
    <div className="section3-div1">
      <h2>Join Our Vibrant</h2>
      <h2>Community</h2>
      <p className="section3-p ">Don't miss out on the chance to connect with people from diverse cultures and backgrounds. Whether you're looking to make new friends, learn about different cultures, or simply chat for fun, SocialChat is the perfect place to do it.</p>
    </div>
    <div className="section3-div2">
      <input type="button" defaultValue="Login" onClick={() => Navigate('/login')} className="section3-buttons login" />
      <input type="button" defaultValue="Sign Up" onClick={()=> Navigate('/login')} className="section3-buttons signup login" />
    </div>
  </div>
</div>
</div>
    );


}

export default Home;