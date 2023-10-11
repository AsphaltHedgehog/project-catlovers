import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { goitGlobalAPI } from './axios_api';

const closeIconLoginModal = document.querySelector('.modal-login-close');
const openLoginBtn = document.querySelector('.js-hero-btn');
const windowLoginModal = document.querySelector('.modal-login-backdrop');
const formLogin = document.querySelector('.modal-login-form');
const loginName = document.querySelector('#input_name');
const formEmail = document.querySelector('#input_email');
const modalLogBtn = document.querySelector('.modal-login-btn');
let bodyEl = document.querySelector('body');

openLoginBtn.addEventListener('click', openLoginModal);

function closeLoginModal(e) {
  windowLoginModal.classList.remove('modal-login-backdrop-active');
  bodyEl.classList.remove('modal-hidden-bcg');
  bodyEl.classList.remove('modal');
  closeIconLoginModal.removeEventListener('click', closeLoginModal);
  windowLoginModal.removeEventListener('click', closeLoginByBcg);
  window.removeEventListener('keydown', closeLoginByEsc);
}

function openLoginModal(e) {
  bodyEl.classList.add('modal-hidden-bcg');
  windowLoginModal.classList.add('modal-login-backdrop-active');
  closeIconLoginModal.addEventListener('click', closeLoginModal);
  windowLoginModal.addEventListener('click', closeLoginByBcg);
  window.addEventListener('keydown', closeLoginByEsc);
}

function closeLoginByBcg(e) {
  if (e.target === windowLoginModal) {
    closeLoginModal(e);
  }
}

function closeLoginByEsc(e) {
  if (e.key === 'Escape') {
    closeLoginModal(e);
  }
}

formLogin.addEventListener('submit', sendLoginForm);

function sendLoginForm(e) {
  e.preventDefault();

  const addLoginApi = new goitGlobalAPI();
  const dataAPI = {
    name: loginName.value,
    email: formEmail.value,
    password: formPassword.value,
  };

  modalLogBtn.classList.add('non-active-btn');
  setTimeout(() => {
    addLoginFn(addLoginApi, dataAPI);

    modalLogBtn.classList.remove('non-active-btn');
  }, 2000);
}

async function addLoginFn(addLoginApi, dataAPI) {
  try {
    const data = await addLoginApi.createLogin(dataAPI);
    // console.log("Login", data);
    Notify.success('We got your opinion!');
    windowLoginModal.classList.remove('modal-login-backdrop-active');
  } catch (err) {
    Notify.failure(`Oops, something wrong, ${err.response.data.message}`);
    formLogin.reset();
    windowLoginModal.classList.remove('modal-login-backdrop-active');
  }
}
