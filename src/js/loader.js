const loaders = document.querySelectorAll('.loader-container');
const categories = document.querySelector('.categories-select-wrapper');

window.addEventListener('load', function () {
  loaders.forEach(loader => {
    loader.style.display = 'none';
  });
});
