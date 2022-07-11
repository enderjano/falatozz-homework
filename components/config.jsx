// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBajXyGLLVd4TcXQYPBH2UPo_GnisVWSEw",
  authDomain: "falatozzhomework.firebaseapp.com",
  databaseURL: "https://falatozzhomework-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "falatozzhomework",
  storageBucket: "falatozzhomework.appspot.com",
  messagingSenderId: "782572383108",
  appId: "1:782572383108:web:53be41290bcd42bbd54bd1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);