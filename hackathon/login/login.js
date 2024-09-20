
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-analytics.js";
  import { getAuth,signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";
  import { getFirestore,doc,getDoc, } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-firestore.js";


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


let email = document.getElementById("email");
let password = document.getElementById("password");


window.login = () => {
  // console.log("hello")
  let obj = {
    email : email.value,
    password : password.value
  }
    console.log(obj);
    
    signInWithEmailAndPassword(auth,obj.email,obj.password)

    .then(async(res)=>{
      console.log(res)
      obj.id = res.user.uid
      const reference = doc(db,"user",obj.id)
      const user = await getDoc(reference)
      if(user.exists()){
        console.log(user.data());
      }
      // console.log(user);
    })
    .catch((error)=>{
      console.log(error);
      alert("login unSuccessfull")
    })
};