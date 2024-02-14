import React, { useState } from "react";
import './header.css';
import {Link, useLocation} from 'react-router-dom';
import logo from '../images/Social_Chat.png';
import { autho } from "../firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function Header() {
  const [menuActive, setMenuActive] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };
 
  const activeUnderlineStyle = {
    content: '',
    height: "2px",
    display: "block",
    borderRadius: "10%",
    width: "100%",
    background:"#ffffff",
  };
  
 const logOut = async () => {
  
    await signOut(autho);
    alert('User signed out successfully',autho);
    navigate('/login');
    
  };


  return (
    <div id="header">
      <div id="fullLogo">
        <img src={logo} alt="logo social chat" id="logo" />
      </div>
      <nav>
        <div className={`nav-bar ${menuActive ? 'active' : ''}`} onClick={toggleMenu}>
          <span className={`line line1 ${menuActive ? 'cross1' : ''}`} />
          <span className={`line line2 ${menuActive ? 'cross2' : ''}`} />
          <span className={`line line3 ${menuActive ? 'hidden' : ''}`} />
        </div>
        <div id="overlay" className={`overlay ${menuActive ? 'active' : ''}`}>
          <ul id="menuItems" className={`menuItems ${menuActive ? 'active' : ''}`}>
            <li  style={{ display: autho.currentUser ? 'none' : 'inline-block' }}><Link to='/home'>Home</Link>{location.pathname === '/home' && <span style={activeUnderlineStyle}></span>}</li>
            <li><Link to='/aboutus'>About Us</Link>{location.pathname === '/aboutus' && <span style={activeUnderlineStyle}></span>}</li>
            <li style={{ display: autho.currentUser ? 'none' : 'inline-block' }}><Link to='/login' >Login/SignUP</Link>{location.pathname === '/login' && <span style={activeUnderlineStyle}></span>}</li>
            <li id="chatlink" style={{ display: autho.currentUser ? 'inline-block' : 'none' }}><Link to="/chat" >Chat</Link>{location.pathname === '/chat' && <span style={activeUnderlineStyle}></span>}</li>
            <li role="button" onClick={logOut} style={{ display: autho.currentUser ? 'inline-block' : 'none' }}>Log Out</li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Header;
