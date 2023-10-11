const openBtn = document.querySelector('#modalOpenBtn')
const closeBtn = document.querySelector('#modalCloseBtn')
const modal = document.querySelector('#myModal')


openBtn.addEventListener('click', openModal)
closeBtn.addEventListener('click', closeModal)

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

    }
};

function closeModal(e) {
    if (e.target.nodeName === 'BUTTON' || e.target.nodeName === 'svg' || e.target.nodeName === 'use') {
        closeModalWindow();
        closeBtn.classList.add('is-hidden')
        openBtn.classList.remove('is-hidden');
        document.body.style.overflow = "auto";
        
    }
};




