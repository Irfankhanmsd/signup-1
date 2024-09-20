// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-analytics.js";
import { getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";
import { getFirestore,doc,setDoc,addDoc,getDoc} from "https://www.gstatic.com/firebasejs/10.13.1/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCTLoLykZb-w_Sa6a7dq4AN3PRHzVr9oB0",
  authDomain: "repeat-signup.firebaseapp.com",
  projectId: "repeat-signup",
  storageBucket: "repeat-signup.appspot.com",
  messagingSenderId: "425818787609",
  appId: "1:425818787609:web:a208f2be4c93cde6f73f88",
  measurementId: "G-ZN59LDF2P8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth()
const db = getFirestore()

let name = document.getElementById("firstname")
let lastname = document.getElementById("lastname")
let email = document.getElementById("email")
let password = document.getElementById("Password")
let cnic = document.getElementById("cnic")
let userType = document.getElementById("userType")


window.register= () =>{

const obj ={
  name : name.value,
  lastname : lastname.value,
  email : email.value,
  cnic : cnic.value,
  password : password.value,
  userType: userType.value,
}
}