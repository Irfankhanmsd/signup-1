
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-analytics.js";
  import { getAuth,createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";
  import { getFirestore,doc,setDoc, } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-firestore.js";


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


let fullName = document.getElementById("fullName");
let email = document.getElementById("email");
let password = document.getElementById("password");


window.signup = () => {
  console.log("signup")
  let obj = {
    fullName : fullName.value,
    email : email.value,
    password : password.value
  }
    // console.log(obj);
    createUserWithEmailAndPassword(auth,obj.email,obj.password)
    .then((res)=>{
      console.log(res);
      obj.id = res.user.uid;
      // deleting
      // delete obj.password 

      const reference = doc(db,"user",obj.id);
      setDoc(reference, obj)
      .then(()=>{
        console.log(obj)
      })
      .catch(()=>{
        console.log("error")
      })


      console.log(obj);
    })
    .catch((error)=>{
      console.log(error);
    })
}



// let signupBtn = document.getElementById("signupBtn");
// signupBtn.addEventListener("click",signupBtn);