// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getDatabase} from 'firebase/database';
import {getAuth} from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA74nyguPIG5vENHkQ_EpTcty06DD7DpGs",
  authDomain: "web-chat-app-e3e43.firebaseapp.com",
  databaseURL: "https://web-chat-app-e3e43-default-rtdb.firebaseio.com",
  projectId: "web-chat-app-e3e43",
  storageBucket: "web-chat-app-e3e43.appspot.com",
  messagingSenderId: "1071503797662",
  appId: "1:1071503797662:web:8e53804e451fb18eb6fa8f",
  measurementId: "G-3C24DR9WYR"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics();
const database =  getDatabase()
const autho = getAuth();
const firestoredb = getFirestore(firebaseApp);

export  {firebaseApp, analytics, database,autho,firestoredb};