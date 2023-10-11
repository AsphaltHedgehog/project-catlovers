// // https://firebase.google.com/docs/auth/web/password-auth?hl=ru&authuser=0

// // Import the functions you need from the SDKs you need
// import { initializeApp } from 'firebase/app';
// import { getAnalytics } from 'firebase/analytics';
// import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
//import { Notify } from 'notiflix/build/notiflix-notify-aio';

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: 'AIzaSyC-hK1nxM1T3u1hh50vVCbX9OHhQUAr11U',
//   authDomain: 'my-first-project-3417b.firebaseapp.com',
//   projectId: 'my-first-project-3417b',
//   storageBucket: 'my-first-project-3417b.appspot.com',
//   messagingSenderId: '770383438778',
//   appId: '1:770383438778:web:d1dd182fe2f7a1262e3383',
//   measurementId: 'G-9Y6VC584MT',
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// const auth = getAuth();


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

// [START auth_signup_password_modular]
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// const auth = getAuth();
// createUserWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed up
//     const user = userCredential.user;
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // ..
//   });
// [END auth_signup_password_modular]

// // [START auth_signin_password_modular]
// import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

// const auth = getAuth();
// signInWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed in
//     const user = userCredential.user;
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//   });
// // [END auth_signin_password_modular]

// // [START auth_sign_out_modular]
// import { getAuth, signOut } from "firebase/auth";

// const auth = getAuth();
// signOut(auth).then(() => {
//   // Sign-out successful.
// }).catch((error) => {
//   // An error happened.
// });
// // [END auth_sign_out_modular]
 
//=======xxxxxxxxx var 2 xxxxxxxxxxxxxxxxx=====================

// Авторизація користувача
function login(email, password) {
  // Викликати функцію авторизації firebase
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((user) => {
      // Успішна авторизація
      // Приклад відкриття модального вікна для Shopping list
      openShoppingListModal();
    })
    .catch((error) => {
      // Помилка авторизації
      console.log(error);
    });
}

// Збереження Shopping list в базі данних
function saveShoppingList(userId, shoppingList) {
  // Викликати функцію збереження даних firebase
  firebase.database().ref(`users/${userId}/shoppingList`).set(shoppingList);
}

// Приклад використання функцій
const user = {
  email: 'example@gmail.com',
  password: 'example_password',
  shoppingList: ['item1', 'item2', 'item3']
};

// Авторизуємо користувача
login(user.email, user.password);

// Зберігаємо Shopping list
saveShoppingList(user.userId, user.shoppingList);