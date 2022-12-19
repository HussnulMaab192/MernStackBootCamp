// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  FacebookAuthProvider,
  signInWithPopup,
} from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA3ZU9Cre01s_WDGwQtBNCQnTY9arfIDeI",
  authDomain: "complaint-management-sys-68c4b.firebaseapp.com",
  projectId: "complaint-management-sys-68c4b",
  storageBucket: "complaint-management-sys-68c4b.appspot.com",
  messagingSenderId: "123431098172",
  appId: "1:123431098172:web:70a1a5f848add6b028f039",
  measurementId: "G-MZCGHH40ML",
};

// Initialize Firebase
if (!getApps().length) initializeApp(firebaseConfig);

const auth = getAuth();
const google = new GoogleAuthProvider();
const facebook = new FacebookAuthProvider();
export {
  auth,
  google,
  facebook,
  createUserWithEmailAndPassword,
  signInWithPopup,
  signInWithEmailAndPassword,
};

//   const analytics = getAnalytics(app);
