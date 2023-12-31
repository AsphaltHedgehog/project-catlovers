// const btn = $('#scrollButton');

// $(window).scroll(function() {
//   if ($(window).scrollTop() > 60) {
//     btn.addClass('show');
//   } else {
//     btn.removeClass('show');
//   }
// });

// btn.on('click', function(e) {
//   e.preventDefault();
//   $('html, body').animate({scrollTop:0}, '300');
// });

const scrollButton = document.getElementById('scrollButton');
const body = document.querySelector('body')




function updateScrollButtonVisibility() {
  if (window.scrollY > 600) {
    scrollButton.style.display = 'flex'; 
  } else {
    scrollButton.style.display = 'none';
  }
}

window.addEventListener('scroll', updateScrollButtonVisibility);


scrollButton.addEventListener('click', () => {
  // window.scrollTo({
  //   top: 0,
  //   behavior: 'smooth',
  // });
  body.scrollIntoView({
    top: 0,
    behavior: 'smooth',
  })
});

// const scrollUpButton = document.getElementById('scrollButton');

// scrollUpButton.addEventListener('click', function() {
//   window.scrollTo({
//     top: 0,
//     behavior: 'smooth'
//   });
// });

// const scrollUpButton = document.getElementById('scrollUpbutton');

// scrollButton.addEventListener('click', function () {
//   window.scrollTo({
//     top: 0,
//     behavior: 'smooth',
//   });
// });
