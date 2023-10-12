const btn = document.querySelector('.support-arrow-container');
const list = document.querySelector('.support-list');
let statusBtn = true;

btn.addEventListener('click', e => {
  e.preventDefault();

  if (statusBtn) {
    statusBtn = !statusBtn;

    list.classList.add('scroll');
    btn.classList.add('up');
  } else {
    statusBtn = true;

    list.classList.remove('scroll');
    btn.classList.remove('up');
  }
});
