import firebase from "firebase/compat/app";
import "firebase/compat/auth"
import "firebase/compat/firestore"
import { initializeApp } from 'firebase/app';
// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseApp = firebase.initializeApp( {
    apiKey: "AIzaSyBivstm5KgLV8ihIKl1wRvngDF_LWWv5WQ",
    authDomain: "rems-89d8d.firebaseapp.com",
    projectId: "rems-89d8d",
    storageBucket: "rems-89d8d.appspot.com",
    messagingSenderId: "327861001697",
    appId: "1:327861001697:web:927a9d962ed1fca44786a0",
    measurementId: "G-59JBL50FRW"
  })

 
 
 const auth = firebase.auth();
 
 var db = firebase.firestore()
  export {db,auth};
  export default firebase;