import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyDSsrJQBBidwgNYtvpXEyGwm4YOEDzrimU",
    authDomain: "netflix-clone-7df36.firebaseapp.com",
    projectId: "netflix-clone-7df36",
    storageBucket: "netflix-clone-7df36.appspot.com",
    messagingSenderId: "1060255673234",
    appId: "1:1060255673234:web:b0c43d802ef361c16caf4b"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {auth};
  export default db;