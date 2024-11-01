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
    dynamicBullets: true,
  },
});

// For diffrent images
document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".swiper-slide");

  slides.forEach((slide) => {
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
  slidesPerView: 2,
  spaceBetween: 10,
  navigation: {
    nextEl: ".genres-custom-button-next",
    prevEl: ".genres-custom-button-prev",
  },
  pagination: {
    el: ".genres-custom-pagination",
    clickable: true,
    dynamicBullets: true,
    dynamicMainBullets: 2,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 50,
    },
  },
});

/*Popular Top 10 In Genres slider*/
var swiper = new Swiper(".popularTop10InGenresSwiper", {
  slidesPerView: 2,
  spaceBetween: 10,
  navigation: {
    nextEl: ".popular-custom-button-next",
    prevEl: ".popular-custom-button-prev",
  },
  pagination: {
    el: ".popular-custom-pagination",
    clickable: true,
    dynamicBullets: true,
    dynamicMainBullets: 2,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 50,
    },
  },
});

/*Trending Shows Now slider*/
var swiper = new Swiper(".trendingShowsNowSwiper", {
  slidesPerView: 2,
  spaceBetween: 10,
  navigation: {
    nextEl: ".trending-custom-button-next",
    prevEl: ".trending-custom-button-prev",
  },
  pagination: {
    el: ".trending-custom-pagination",
    clickable: true,
    dynamicBullets: true,
    dynamicMainBullets: 2,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 50,
    },
  },
});

/*New Releases slider*/
var swiper = new Swiper(".releasesSwiper", {
  slidesPerView: 2,
  spaceBetween: 10,
  navigation: {
    nextEl: ".releases-custom-button-next",
    prevEl: ".releases-custom-button-prev",
  },
  pagination: {
    el: ".releases-custom-pagination",
    clickable: true,
    dynamicBullets: true,
    dynamicMainBullets: 2,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 50,
    },
  },
});

/*Must - Watch Movies*/
var swiper = new Swiper(".watchMoviesSwiper", {
  slidesPerView: 2,
  spaceBetween: 10,
  navigation: {
    nextEl: ".watchMovies-custom-button-next",
    prevEl: ".watchMovies-custom-button-prev",
  },
  pagination: {
    el: ".watchMovies-custom-pagination",
    clickable: true,
    dynamicBullets: true,
    dynamicMainBullets: 2,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 50,
    },
  },
});



/*Shows Section*/

/*our genres slider*/
var swiper = new Swiper(".showsGenresSwiper", {
  slidesPerView: 2,
  spaceBetween: 10,
  navigation: {
    nextEl: ".showsGenres-custom-button-next",
    prevEl: ".showsGenres-custom-button-prev",
  },
  pagination: {
    el: ".showsGenres-custom-pagination",
    clickable: true,
    dynamicBullets: true,
    dynamicMainBullets: 2,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 50,
    },
  },
});

/*Popular Top 10 In Genres slider*/
var swiper = new Swiper(".showsPopularTop10InGenresSwiper", {
  slidesPerView: 2,
  spaceBetween: 10,
  navigation: {
    nextEl: ".showsPopular-custom-button-next",
    prevEl: ".showsPopular-custom-button-prev",
  },
  pagination: {
    el: ".showsPopular-custom-pagination",
    clickable: true,
    dynamicBullets: true,
    dynamicMainBullets: 2,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 50,
    },
  },
});

/*Trending Shows Now slider*/
var swiper = new Swiper(".showsTrendingShowsNowSwiper", {
  slidesPerView: 2,
  spaceBetween: 10,
  navigation: {
    nextEl: ".showsTrending-custom-button-next",
    prevEl: ".showsTrending-custom-button-prev",
  },
  pagination: {
    el: ".showsTrending-custom-pagination",
    clickable: true,
    dynamicBullets: true,
    dynamicMainBullets: 2,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 50,
    },
  },
});

/*New Releases slider*/
var swiper = new Swiper(".showsReleasesSwiper", {
  slidesPerView: 2,
  spaceBetween: 10,
  navigation: {
    nextEl: ".showsReleases-custom-button-next",
    prevEl: ".showsReleases-custom-button-prev",
  },
  pagination: {
    el: ".showsReleases-custom-pagination",
    clickable: true,
    dynamicBullets: true,
    dynamicMainBullets: 2,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 50,
    },
  },
});

/*Must - Watch Movies*/
var swiper = new Swiper(".showsWatchMoviesSwiper", {
  slidesPerView: 2,
  spaceBetween: 10,
  navigation: {
    nextEl: ".showsWatchMovies-custom-button-next",
    prevEl: ".showsWatchMovies-custom-button-prev",
  },
  pagination: {
    el: ".showsWatchMovies-custom-pagination",
    clickable: true,
    dynamicBullets: true,
    dynamicMainBullets: 2,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 50,
    },
  },
});
