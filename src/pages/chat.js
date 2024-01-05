import React, { useState, useEffect} from 'react';
import '../css/chat.css';
import { database } from '../firebase';
import { getDatabase,push,ref,onValue } from 'firebase/database';
import LoginS from './login';
import { autho ,firestoredb} from '../firebase';
import { doc,getDoc } from 'firebase/firestore';



function CurrentTime() {
  const currentDate = new Date();
  const date = currentDate.getDate();
  const month = currentDate.toLocaleString('default', { month: 'long' });
  const time = currentDate.toLocaleTimeString();
  const formattedString = `${date} ${month} ${time}`;

  return formattedString;
}
 function ChatPage() {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [userCollege, setUserCollege] = useState('');
  const [userCollegeCity, setUserCollegeCity] = useState('');

  const userToken = LoginS.user;

  useEffect(() => {
    const getUserDataByUid = async () => {
      try {
        const userDocRef = doc(firestoredb, "Users", autho.currentUser.uid);
        const userDocSnapshot = await getDoc(userDocRef);

        if (userDocSnapshot.exists()) {
          const userData = userDocSnapshot.data();
          setUserCollege(userData.collegeName);
          setUserCollegeCity(userData.collegeCity);
        } else {
          console.log("User document does not exist");
        }
      } catch (error) {
        console.error("Error retrieving user data:", error.message);
      }
    };

    getUserDataByUid();
  }, []); // Empty dependency array means this effect runs once on mount

  useEffect((userToken) => {
    

    const database = getDatabase(); 
    const messagesRef = ref(database);
   
    onValue(messagesRef,(snapshot) => {

      const newItems = snapshot.val();
      const receivedMessages = Object.values(newItems);
      const accumlatedMessage =[];
      receivedMessages.forEach((e)=>{
     accumlatedMessage.push({...e.newMessage});
     
    });
     setMessages(accumlatedMessage);


    },
    {
      Headers:{
        'Authorization' : `Bearer ${userToken}`, 
      }
    },
     (errorObject) => {
      console.log('The read failed: ' + errorObject.name);
    });
  }, []);


   
  const HandleSendButton = async(e) => {
    e.preventDefault();
    if(message === ""){
      return;
    }
    
     
  var newMessage = {
    text: message,
    sender: autho.currentUser.displayName,
    email:autho.currentUser.email,
    college:userCollege,
    collegeCity : userCollegeCity,
    time: CurrentTime(),
  };
     
    push(ref(database),{
      newMessage

    },{
      Headers:{
        'Authorization' : `Bearer ${userToken}`, 
      }
    });
    


    // Clear the message input
    setMessage('');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      HandleSendButton(e);
    }
  };
  
  
  return (
    <div>
      {autho.currentUser &&
    <div className="chatpage">
      <div className="sidebar">
  
      </div>
      <div className="chat-main" id="chatContainer">
        <div id="chats" >
          {messages.map((msg, index) => (
            <div key={index} className={msg.email === autho.currentUser.email ? 'message send' : 'message receive'}
            style={{ marginBottom: index === messages.length - 1 ? '150px' : '20px' }}>
              <span id="message-first">
                <p className="username">{msg.sender}</p>
                <p className="country">from {msg.collegeCity}</p>
              </span>
              <p className="text">{msg.text}</p>
              <p className="time">{msg.time}</p>
            </div>
          ))}
        </div>
        
        <form id="msgform">
          <input
            className="input-message"
            placeholder="write your message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={handleKeyPress}
          ></input>
          <button type="submit" className="send-message" onClick={HandleSendButton}>
            Send
          </button>
        </form>
      </div>
    </div>
 }
  </div>
  );
}

export default ChatPage;
