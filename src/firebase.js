import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD_Khw4p1Q4AWl2MLSBgMrzlq6wANdo3YE",
    authDomain: "clone-e443b.firebaseapp.com",
    databaseURL: "https://clone-e443b.firebaseio.com",
    projectId: "clone-e443b",
    storageBucket: "clone-e443b.appspot.com",
    messagingSenderId: "827256230710",
    appId: "1:827256230710:web:10c74fcf46095f7fcc5997",
    measurementId: "G-B1CQ4B7RKS"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  
  export { db, auth };