import React, { useState } from "react";
import '../css/logins.css';
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword,updateProfile,signInWithEmailAndPassword} from "firebase/auth";
import { autho,firestoredb } from "../firebase";
import { doc,setDoc } from "firebase/firestore";





let userToken;

function LoginS() {
  
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const[password,setPassword] = useState('');
  const[username,setUsername] = useState('')
  const[userphone,setUserphone] = useState('');
  const userNavigate = useNavigate();

 
  const switchForm = () => {
    setIsLogin((prevIsLogin) => !prevIsLogin);
  };

  const login =async(e) =>{
    e.preventDefault();
 

    try{
      const userCredentials = await signInWithEmailAndPassword(autho,email,password);
      
      const user = userCredentials.user;
       userToken = user.accessToken;
      console.log(userToken);
      console.log(user);
      alert('user sign in succusfully');
     userNavigate('/chat');
       
    }
    catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorCode,errorMessage)
  
    }
  
  }
         

  const signup = async (e) => {
    e.preventDefault();
    const userData = {
      name:e.target.elements.name.value,
      email : e.target.elements.email.value,
      number : e.target.elements.number.value,
      collegeName : e.target.elements.collegeName.value,
      collegeCity : e.target.elements.collegeCity.value,
    }
  
    try {
      console.log(userData)
      // Create user with email and password
      const userCredentials = await createUserWithEmailAndPassword(autho, email, password, username,userphone);
      const user = userCredentials.user;
      await setDoc(doc(firestoredb,"Users",user.uid),userData);
        // Update user profile with display name
    await updateProfile(user, { displayName: username });

    alert("User created successfully:", user);
    userNavigate('/chat');
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
  
      alert(errorCode, errorMessage);
    }
  };
  
      

  return (


    <div className="login-container">
    
     
      {isLogin ? (
            
        <div id="login">
          <h1 id="title">Login</h1>
          <form id="loginForm" onSubmit={login}>
            <input type="email" name="email" placeholder="Email" value={email} onChange={(e)=> setEmail(e.target.value)} required/>
            <input type="password" name="password" placeholder="Password" value={password}  onChange={(e)=> setPassword(e.target.value)}required/>
            <button type="submit" >Login</button>
          </form>  
          <div className="login-footer" id="login-footer">
            <p>
              Don't have an account?{" "}
              <p role="button" onClick={switchForm} id="signupLink">
                Sign Up Now
              </p>
            </p>
          </div>
        </div>
      
      ) : (
        <div>
          <h1 id="signupTitle">Sign Up</h1>
          <form id="signupForm" onSubmit={signup}>
            <input type="text" name="name" placeholder="Name" value={username} onChange={(e)=> setUsername(e.target.value)} required />
            <input type="email" name="email" placeholder="Email" value={email} onChange={(e)=> setEmail(e.target.value)} required/>
            <input type="tel" name="number" placeholder="Number" value={userphone} onChange={(e)=> setUserphone(e.target.value)}/>
            <input type="text" name="collegeName" placeholder="College Name" required/>
            <input typeof="text" name="collegeCity" placeholder="College City Name" required/>
            <input type="password" name="password" placeholder="Password" value={password}  onChange={(e)=> setPassword(e.target.value)} required />
            <button type="submit" >Sign Up</button>
          </form>
          <div className="sign-footer" id="sign-footer">
  
            <p>
              Already have an account?{" "}
              <p role="button" onClick={switchForm} id="loginLink">
                Login now
              </p>
            </p>
          </div>
        </div>
      )}
    </div>
    
    
  );
}

export default LoginS;

