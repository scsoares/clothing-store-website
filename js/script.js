function initialize() {
  const NAV_TOGGLE = document.querySelector(".nav-toggle");
  NAV_TOGGLE.addEventListener("click", toggleNavbarMobile);

  const NAV_HIDE = document.querySelector(".nav-hide");
  NAV_HIDE.addEventListener("click", hideNavbarMobile);

  // Add an event listener for scroll to trigger the animation
  document.addEventListener('scroll', handleScroll);
}

const NAVBAR_MOBILE = document.querySelector(".navbar-mobile-sidebar");

// Toggle mobile sidebar visibility
function toggleNavbarMobile() {
  NAVBAR_MOBILE.classList.toggle("active");
}

function hideNavbarMobile() {
  NAVBAR_MOBILE.classList.remove("active");
}

// Handle scroll to trigger the animation for new arrivals
function handleScroll() {
  const newArrivals = document.querySelector('.new-arrivals');
  const scrollPosition = window.scrollY;

  // Adjust the threshold as needed
  if (scrollPosition < newArrivals.offsetTop) {
    newArrivals.classList.add("animate-in");
  } else {
    newArrivals.classList.add("animate-out");
  }
}

initialize();
