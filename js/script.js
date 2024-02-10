function initialize() {
  const NAV_TOGGLE = document.querySelector(".nav-toggle");
  NAV_TOGGLE.addEventListener("click", toggleNavbarMobile);

  const NAV_HIDE = document.querySelector(".nav-hide");
  NAV_HIDE.addEventListener("click", hideNavbarMobile);

  const ARROW_CAROUSEL = document.querySelector(".arrow-carousel");
  ARROW_CAROUSEL.addEventListener("click", scrollToNextMobile);

  const FORM_SELECT = document.getElementById('form');
  FORM_SELECT.addEventListener('submit', formValidation);
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


// New arrivals animation
document.addEventListener('DOMContentLoaded', function () {
  const TRENDING_NOW = document.querySelector('.trending-now');

  window.addEventListener('scroll', function () {
    const scrollPosition = window.scrollY;
    const elementPosition = TRENDING_NOW.offsetTop;

    if (scrollPosition + window.innerHeight > elementPosition + 50) {
      TRENDING_NOW.classList.add('visible3');
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
  const itemWidth = carouselContainer.clientWidth + 40; // Consider the gap between items
  carouselContainer.scrollLeft += itemWidth;
}

// Form validation
function formValidation(event) {
  event.preventDefault();

  const ERROR_MESSAGES = document.getElementsByClassName('error-message');
  for (let i = 0; i < ERROR_MESSAGES.length; i++) {
    ERROR_MESSAGES[i].style.display = 'block';
    ERROR_MESSAGES[i].style.color = 'red';
  }

  const FIRST_NAME = event.target.first_name.value;
  const LAST_NAME = event.target.last_name.value;
  const EMAIL = event.target.email.value;


  const errorsToShow = [];


  if(FIRST_NAME == "") {
    errorsToShow.push('error-first-name');
  }

  if(LAST_NAME == "") {
    errorsToShow.push('error-last-name');
  }

  if(EMAIL == "") {
    errorsToShow.push('error-email');
  }

}

initialize();
