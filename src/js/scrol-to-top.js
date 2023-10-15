window.addEventListener('scroll', function () {
    const button = document.getElementById('back-to-home');
    if (button) {
      button.style.visibility =
        window.scrollY > window.innerHeight ? 'visible': 'hidden';
    }
});

  document.querySelector('#back-to-home').addEventListener('click', scrollToTop);

function scrollToTop() {
    const body = document.querySelector('body')
    body.scrollIntoView({
    top: 0,
    behavior: 'smooth',
  })
}
  