// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBL_C3JakONL1DKe00v6-0BmxCcUwslVRU",
  authDomain: "greenov-hackathon.firebaseapp.com",
  projectId: "greenov-hackathon",
  storageBucket: "greenov-hackathon.appspot.com",
  messagingSenderId: "964551442181",
  appId: "1:964551442181:web:f13b94cb70dcaf4e6f38f2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export default app; 