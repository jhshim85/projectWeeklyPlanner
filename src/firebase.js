// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBvPWjxkiUeMFrs_rRWJnOCnJIJlleHc4Y",
  authDomain: "project-weekly-planner.firebaseapp.com",
  databaseURL: "https://project-weekly-planner-default-rtdb.firebaseio.com",
  projectId: "project-weekly-planner",
  storageBucket: "project-weekly-planner.appspot.com",
  messagingSenderId: "624323333695",
  appId: "1:624323333695:web:d4f684c5e5a7757679f28a"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
// this exports the CONFIGURED version of firebase
export default firebase;