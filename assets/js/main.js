/*Hero section hero slider*/

var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// For diffrent images
document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".swiper-slide");

    slides.forEach(slide => {
      const bgUrl = slide.getAttribute("data-bg");
      const bgHero = slide.querySelector(".bg-hero");

      bgHero.style.background = `
        linear-gradient(
          to bottom,
          rgba(0, 0, 0, 0) 10%,
          rgba(0, 0, 0, 0.1) 60%,
          rgba(0, 0, 0, 0.5) 64%,
          rgba(0, 0, 0, 1) 100%
        ),
        url(${bgUrl})
      `;
      bgHero.style.backgroundSize = "cover";
      bgHero.style.backgroundPosition = "center";
    });
  });
  
  /*Movies Section*/

  /*our genres slider*/
  var swiper = new Swiper(".ourGenresSwiper", {
    slidesPerView: 5,
    spaceBetween: 30,   
  });