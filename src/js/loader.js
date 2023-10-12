const loaders = document.querySelectorAll('.loader-container');
const categories = document.querySelector('.categories-select-wrapper');

window.addEventListener('load', function () {
  loaders.forEach(loader => {
    this.setTimeout(() => {
      loader.style.display = 'none';
    }, 2000);
  });
});
