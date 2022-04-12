import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDR07OgZj3ZMOGFsPprnhTNEF8ogS8tMWA",
    authDomain: "facebook-clone-24702.firebaseapp.com",
    projectId: "facebook-clone-24702",
    storageBucket: "facebook-clone-24702.appspot.com",
    messagingSenderId: "765514947786",
    appId: "1:765514947786:web:dedc7e87e4a43ba3ab2833"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;