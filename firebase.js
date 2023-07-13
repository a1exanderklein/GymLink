// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAX2QbwGra29yVUMo9jFFH8Ss9G4rpNLMk",
  authDomain: "gymlink-eb16c.firebaseapp.com",
  projectId: "gymlink-eb16c",
  storageBucket: "gymlink-eb16c.appspot.com",
  messagingSenderId: "149799796217",
  appId: "1:149799796217:web:49d190a60c9d4cb36b1128"
};

// Initialize Firebase
const Firebase_App = initializeApp(firebaseConfig);
const Firebase_Auth = getAuth(Firebase_App);

export { Firebase_Auth }
