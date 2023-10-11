const openBtn = document.querySelector('#modalOpenBtn');
const closeBtn = document.querySelector('#modalCloseBtn');
const modal = document.querySelector('#myModal');
const mainContainer = document.querySelector('.cat');
const headerDiv = document.querySelector('.header-container');


openBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);

function openModalWindow() {
    modal.style.display = 'block'
};

function closeModalWindow() {
    modal.style.display = 'none'
};


function openModal(e) {
    if (e.target.nodeName === 'BUTTON' || e.target.nodeName === 'svg' || e.target.nodeName === 'use') {
        openModalWindow();
        openBtn.classList.add('is-hidden');
        closeBtn.classList.remove('is-hidden');
        document.body.style.overflow = "hidden";
        mainContainer.style.display = 'none';
    }
};

function closeModal(e) {
    if (e.target.nodeName === 'BUTTON' || e.target.nodeName === 'svg' || e.target.nodeName === 'use') {
        closeModalWindow();
        closeBtn.classList.add('is-hidden')
        openBtn.classList.remove('is-hidden');
        document.body.style.overflow = "auto";
        mainContainer.style.display = 'flex'; 
    }
};

window.addEventListener('resize', function() {
  const screenWidth = window.innerWidth;
  if (screenWidth >= 768) {
      closeModalWindow();
      document.body.style.overflow = "auto";
      mainContainer.style.display = 'flex';
      openBtn.classList.remove('is-hidden');
      closeBtn.classList.add('is-hidden');   
  }
});




