const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

/*===== MENU SHOW =====*/
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
        // Optional: show the close button if it's hidden by default
        if (navClose) navClose.classList.add('show'); // adjust class name if needed
    });
}

/*===== MENU HIDDEN =====*/
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





/*=============== SHOW MENU ===============*/


/*=============== REMOVE MENU MOBILE ===============*/



/*=============== ADD SHADOW HEADER ===============*/
const shadowHeader = () => {
    const header = document.getElementById('header')
    // This adds a class ifd the button offset is greater than 50 of viewport
    this.scrollY >= 50 ? header.classList.add('shadow-header')
                       : header.classList.remove('shadow-header')
}
window.addEventListener('scroll', shadowHeader)

/*=============== SWIPER PRICES ===============*/


/*=============== SHOW SCROLL UP ===============*/ 


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== DARK LIGHT THEME ===============*/ 


/*=============== SCROLL REVEAL ANIMATION ===============*/

