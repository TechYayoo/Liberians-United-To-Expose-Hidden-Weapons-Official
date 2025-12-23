const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

/*===== WEBSITE MENU SHOW =====*/
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
        // Optional: show the close button if it's hidden by default
        if (navClose) navClose.classList.add('show'); // adjust class name if needed
    });
}

/*===== WEBSITE MENU HIDDEN =====*/
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
        // Optional: hide the close button again
        navClose.classList.remove('show');
    });
}

/* Optional: Close menu when clicking on a nav link (common in mobile) */
const navLinks = document.querySelectorAll('.nav__link'); // adjust selector

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
        if (navClose) navClose.classList.remove('show');
    });
});

/***This changes background header */





/*=============== WEBSITE SHOW MENU ===============*/


/*=============== REMOVE MENU MOBILE ===============*/



/*=============== ADD SHADOW HEADER ===============*/
const shadowHeader = () => {
    const header = document.getElementById('header')
    // This adds a class ifd the button offset is greater than 50 of viewport
    this.scrollY >= 50 ? header.classList.add('shadow-header')
                       : header.classList.remove('shadow-header')
}
window.addEventListener('scroll', shadowHeader)

/*===============  WEBSITE SWIPER PRICES ===============*/
const swiperPrices = new Swiper('.prices__swiper', {
  // Optional parameters
  loop: true,
  grabCursor: true,
  spaceBetween: 24,

  // Pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // Autoplay
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },

  // Navigation arrows (uncomment if needed)
  // navigation: {
  //   nextEl: '.swiper-button-next',
  //   prevEl: '.swiper-button-prev',
  // },

  // Scrollbar (uncomment if needed)
  // scrollbar: {
  //   el: '.swiper-scrollbar',
  // },
});

/*=============== WEBSITE SHOW SCROLL UP ===============*/ 


/*=============== WEBSITE SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== WEBSITE DARK LIGHT THEME ===============*/ 


/*=============== WEBSITE SCROLL REVEAL ANIMATION ===============*/

