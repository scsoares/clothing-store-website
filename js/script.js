function initialize() {
    const NAV_TOGGLE = document.querySelector(".nav-toggle");
    NAV_TOGGLE.addEventListener("click", toggleNavbarMobile);

    const NAV_HIDE = document.querySelector(".nav-hide");
    NAV_HIDE.addEventListener("click", hideNavbarMobile);
  }
  
  const NAVBAR_MOBILE = document.querySelector(".navbar-mobile-sidebar");
  // Toggle mobile sidebar visibility
  function toggleNavbarMobile() {
    NAVBAR_MOBILE.classList.toggle("active");
  }

  function hideNavbarMobile() {
    NAVBAR_MOBILE.classList.remove("active");
  }
  
  initialize();