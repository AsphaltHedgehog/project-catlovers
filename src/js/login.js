// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';

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

// Detect auth state
onAuthStateChanged(auth, user => {
  const headerEl = document.getElementById('header');
  if (user !== null) {
    // Add code to display header for authenticated user
    headerEl.innerHTML = `
      <div>
        <img src="logo.png" alt="Logo">
        <span>${user.displayName}</span>
        <button onclick="logout()">Log out</button>
      </div>
    `;
  } else {
    // Add code to display header for unauthenticated user
    headerEl.innerHTML = `
      <div>
        <img src="logo.png" alt="Logo">
        <button onclick="openModal()">Login</button>
      </div>
    `;
  }
});

function openModal() {
  // Add code to open the authentication modal
  const modalEl = document.getElementById('modal');
  modalEl.style.display = 'block';
}

function logout() {
  // Add code to log out the user
  signOut(auth)
    .then(() => {
      console.log('user logged out');
    })
    .catch(error => {
      console.log('logout error', error);
    });
}
