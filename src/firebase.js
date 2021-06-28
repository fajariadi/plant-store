import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDYTZHz8Eay7ScBVWr8HGPAE0Gl2pE453g",
  authDomain: "plants-store-app.firebaseapp.com",
  projectId: "plants-store-app",
  storageBucket: "plants-store-app.appspot.com",
  messagingSenderId: "873423559055",
  appId: "1:873423559055:web:d93468507fce4f1ead93fa",
  measurementId: "G-RS3DPNNBHP",
};


const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth};