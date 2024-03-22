// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore} from "firebase/firestore";
// import { getAuth } from "firebase/auth";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";



const firebaseConfig = {
  apiKey: "AIzaSyBM0uAyrmDEMJuAfwIv1Bp14lcPxwbACeY",
  authDomain: "url-shortener-altschool.firebaseapp.com",
  projectId: "url-shortener-altschool",
  storageBucket: "url-shortener-altschool.appspot.com",
  messagingSenderId: "818937480966",
  appId: "1:818937480966:web:3fbe6843bbdbf73205c087",
  measurementId: "G-8KDTSRXTEW",
};




const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app)
 const auth = getAuth(app);



 
 export {app, db, auth};

