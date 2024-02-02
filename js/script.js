function initialize() {
  const NAV_TOGGLE = document.querySelector(".nav-toggle");
  NAV_TOGGLE.addEventListener("click", toggleNavbarMobile);

  const NAV_HIDE = document.querySelector(".nav-hide");
  NAV_HIDE.addEventListener("click", hideNavbarMobile);

  const ARROW_CAROUSEL = document.querySelector(".arrow-carousel");
  ARROW_CAROUSEL.addEventListener("click", scrollToNextMobile);
}

const NAVBAR_MOBILE = document.querySelector(".navbar-mobile-sidebar");

// Toggle mobile sidebar visibility
function toggleNavbarMobile() {
  NAVBAR_MOBILE.classList.toggle("active");
}

function hideNavbarMobile() {
  NAVBAR_MOBILE.classList.remove("active");
}

// New arrivals animation
document.addEventListener('DOMContentLoaded', function () {
  const NEW_ARRIVALS = document.querySelector('.new-arrivals');

  window.addEventListener('scroll', function () {
    const scrollPosition = window.scrollY;
    const elementPosition = NEW_ARRIVALS.offsetTop;

    if (scrollPosition + window.innerHeight > elementPosition + 50) {
      NEW_ARRIVALS.classList.add('visible1');
    }
  });
});


// Catalogue animation
document.addEventListener('DOMContentLoaded', function () {
  const CATALOGUE_CONTAINER = document.querySelector('.catalogue-container');

  window.addEventListener('scroll', function () {
    const scrollPosition = window.scrollY;
    const elementPosition = CATALOGUE_CONTAINER.offsetTop;

    if (scrollPosition + window.innerHeight > elementPosition + 50) {
      CATALOGUE_CONTAINER.classList.add('visible2');
    }
  });
});

function scrollToNextMobile() {
  const carouselContainer = document.querySelector('.carousel-container');
  const itemWidth = carouselContainer.clientWidth + 20; // Consider the gap between items
  carouselContainer.scrollLeft += itemWidth;
}

initialize();
