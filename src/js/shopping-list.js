document.addEventListener("DOMContentLoaded", function() {
    const pageDots = document.querySelectorAll(".page-dot");
    const pageArrows = document.querySelectorAll(".page-arrow");
  
    pageDots.forEach(dot => {
      dot.addEventListener("click", () => {
        pageDots.forEach(dot => dot.classList.remove("active"));
        dot.classList.add("active");
      });
    });
  
    document.querySelector(".page-arrow.prev").addEventListener("click", () => {
      const activeDot = document.querySelector(".page-dot.active");
      const prevDot = activeDot.previousElementSibling;
      if (prevDot) {
        activeDot.classList.remove("active");
        prevDot.classList.add("active");
      }
    });
  
    document.querySelector(".page-arrow.next").addEventListener("click", () => {
      const activeDot = document.querySelector(".page-dot.active");
      const nextDot = activeDot.nextElementSibling;
      if (nextDot) {
        activeDot.classList.remove("active");
        nextDot.classList.add("active");
      }
    });
  });