// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBxLJSg4N5qzfKl4oROos5UitYg5smhLPc",
  authDomain: "hr--fec.firebaseapp.com",
  projectId: "hr--fec",
  storageBucket: "hr--fec.appspot.com",
  messagingSenderId: "716265450902",
  appId: "1:716265450902:web:b8795c3d2bb6b48fb8c1b7",
  measurementId: "G-MW0NBP2YVW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default const storage = getStorage(app);