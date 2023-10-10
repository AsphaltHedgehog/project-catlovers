const btn = document.querySelector('.support-arrow-container');
const list = document.querySelector('.support-list');
let statusBtn = true;

btn.addEventListener('click', e => {
  e.preventDefault();

  if (statusBtn) {
    statusBtn = !statusBtn;
    list.scrollIntoView({ block: 'end', behavior: 'smooth' });
    btn.classList.add('up');
  } else {
    statusBtn = true;
    list.scrollIntoView({ block: 'start', behavior: 'smooth' });
    btn.classList.remove('up');
  }
});
