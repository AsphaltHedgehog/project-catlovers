!function(){var o,t,e=document.querySelector(".support-arrow-container"),r=document.querySelector(".support-list"),n=!0;e.addEventListener("click",(function(o){o.preventDefault(),n?(n=!n,r.scrollIntoView({block:"end",behavior:"smooth"}),e.classList.add("up")):(n=!0,r.scrollIntoView({block:"start",behavior:"smooth"}),e.classList.remove("up"))})),o=document.querySelectorAll(".link-nav"),t=window.location.pathname,console.log(t),o.forEach((function(o){var e=o.getAttribute("href");t===e&&o.classList.add("current")}))}();
//# sourceMappingURL=shopinglist.b1782e72.js.map
