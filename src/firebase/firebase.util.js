import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

 // firebase is keyword here so we can have access to firebase
 // by adding what we copied from code 

 const config = {
        apiKey: "AIzaSyChGS5CfXcck9x8eND6EZmO8eQdOMQUqJc",
        authDomain: "crwn-fb.firebaseapp.com",
        projectId: "crwn-fb",
        storageBucket: "crwn-fb.appspot.com",
        messagingSenderId: "37542153588",
        appId: "1:37542153588:web:a399638a94ebcace64b021",
        measurementId: "G-12SHH7EE6N"
      
 }


 firebase.initializeApp(config);

 // this is for google auth

 export const auth = firebase.auth();
 export const firestore = firebase.firestore();

 // gives access for google Auth Provider class from Auth library

 const provider = new firebase.auth.GoogleAuthProvider();
 provider.setCustomParameters({prompt: 'select-account'});
 export const signInWithGoogle = () => auth.signInWithPopup(provider);

 export default firebase;
  