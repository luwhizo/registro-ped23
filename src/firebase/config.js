// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD3pngXZ-XlREBJ2RIEHC2n9N-xNbjUIkM",
  authDomain: "registro23-76c2a.firebaseapp.com",
  projectId: "registro23-76c2a",
  storageBucket: "registro23-76c2a.appspot.com",
  messagingSenderId: "746830825537",
  appId: "1:746830825537:web:448ca10a537ad03cb49ec0"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);