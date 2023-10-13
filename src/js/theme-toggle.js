const htmlElement = document.querySelector('html');
const themeToggleInput = document.querySelector('.theme-toggle-js');

themeToggleInput.addEventListener('change', function () {

  const newTheme = this.checked ? 'dark' : 'light';

  htmlElement.setAttribute('data-theme', newTheme);

  localStorage.setItem('theme', newTheme);
});


const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  htmlElement.setAttribute('data-theme', savedTheme);
  themeToggleInput.checked = savedTheme === 'dark';
}















