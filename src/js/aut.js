// https://firebase.google.com/docs/auth/web/password-auth?hl=ru&authuser=0

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyC-hK1nxM1T3u1hh50vVCbX9OHhQUAr11U',
  authDomain: 'my-first-project-3417b.firebaseapp.com',
  projectId: 'my-first-project-3417b',
  storageBucket: 'my-first-project-3417b.appspot.com',
  messagingSenderId: '770383438778',
  appId: '1:770383438778:web:d1dd182fe2f7a1262e3383',
  measurementId: 'G-9Y6VC584MT',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();
