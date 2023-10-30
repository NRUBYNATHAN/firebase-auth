//import statements
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

//keys area
const firebaseConfig = {
  apiKey: "AIzaSyBRFFEUvtQqSgo1FOqozh09A6C5DSeikVk",
  authDomain: "fir-authentication-48cc0.firebaseapp.com",
  projectId: "fir-authentication-48cc0",
  storageBucket: "fir-authentication-48cc0.appspot.com",
  messagingSenderId: "832067301130",
  appId: "1:832067301130:web:a2d039d70af593d3b794f3",
  measurementId: "G-REPRDC1B3Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
