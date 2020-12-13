import firebase from "firebase";
const firebaseApp= firebase.initializeApp({
    apiKey: "AIzaSyBscdKGdKLcsIC9zCgpecwHwo2cdh7R-lw",
    authDomain: "insta-react-clone-cead5.firebaseapp.com",
    databaseURL: "https://insta-react-clone-cead5.firebaseio.com",
    projectId: "insta-react-clone-cead5",
    storageBucket: "insta-react-clone-cead5.appspot.com",
    messagingSenderId: "109567856541",
    appId: "1:109567856541:web:1fca70292b14b9a454a974",
    measurementId: "G-72356W5WEL"
  });
  const db= firebaseApp.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();

  export {db,auth,storage};