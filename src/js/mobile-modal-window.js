const openBtn = document.querySelector('#modalOpenBtn');
const closeBtn = document.querySelector('#modalCloseBtn');
const modal = document.querySelector('#myModal');
const mainContainer = document.querySelector('.base-wrapper');
const bookShelf = document.querySelector('.book-shelf')
const headerDiv = document.querySelector('.header-container');


openBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);

function mainContainerDisplay() {
    mainContainer.style.display = 'flex'
}


function openModal(e) {
    if (e.target.nodeName === 'BUTTON' || e.target.nodeName === 'svg' || e.target.nodeName === 'use') {
        modal.classList.add('is-open')
        openBtn.classList.add('is-hidden');
        closeBtn.classList.remove('is-hidden');
        document.body.style.overflow = "hidden";
        mainContainer.style.display = 'none';
        bookShelf.style.display = 'none';
        
    }
};

function closeModal(e) {
    if (e.target.nodeName === 'BUTTON' || e.target.nodeName === 'svg' || e.target.nodeName === 'use') {
        modal.classList.remove('is-open')
        closeBtn.classList.add('is-hidden')
        openBtn.classList.remove('is-hidden');
        document.body.style.overflow = "auto";
        setTimeout(mainContainerDisplay, 250)
        bookShelf.style.display = 'flex';
        
    }
};

window.addEventListener('resize', function() {
  const screenWidth = window.innerWidth;
  if (screenWidth >= 768) {
      modal.style.display = 'none'
      document.body.style.overflow = "auto";
      mainContainer.style.display = 'flex';
      openBtn.classList.remove('is-hidden');
      closeBtn.classList.add('is-hidden');   
    }
  else {
      modal.style.display = 'block'
    }
});




