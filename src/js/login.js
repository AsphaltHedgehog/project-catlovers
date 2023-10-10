// Підключення Firebase
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

// Налаштування Firebase
const firebaseConfig = {
  apiKey: 'YOUR_API_KEY',
  authDomain: 'YOUR_AUTH_DOMAIN',
  databaseURL: 'YOUR_DATABASE_URL',
  projectId: 'YOUR_PROJECT_ID',
  storageBucket: 'YOUR_STORAGE_BUCKET',
  messagingSenderId: 'YOUR_MESSAGING_SENDER_ID',
  appId: 'YOUR_APP_ID',
};

// Ініціалізація Firebase
firebase.initializeApp(firebaseConfig);

// Елементи DOM
const loginButton = document.getElementById('loginButton');
const modal = document.getElementById('modal');
const closeModalButton = document.getElementById('closeModalButton');

// Подія при кліку на кнопку входу
loginButton.addEventListener('click', () => {
  modal.style.display = 'block';
});

// Подія при кліку на кнопку закриття модального вікна
closeModalButton.addEventListener('click', () => {
  modal.style.display = 'none';
});
