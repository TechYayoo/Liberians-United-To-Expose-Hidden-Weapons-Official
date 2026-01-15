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

const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher then 350 viewport height add the 
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
              : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)
/*=============== WEBSITE SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.getElementById('section[id]')
const scrollActive = () => {
    const scrollDown = window.scrollY

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop - 58,
        sectionId = current.getAttribute('id'),
        sectionClass = document.querySelector('.nav__menu a[href*= '+ sectionId + ']')

        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionClass.classList.add('active-link')
        }
        else{
            sectionClass.classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)


/*=============== WEBSITE DARK LIGHT THEME ===============*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-fill'

// Adding Selected topic (If user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// Obtaining the current theme that the interface has by validating the dark class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon =  () => themeButton.classList.contains(iconTheme) ? 'ri-moon-fill"' : 'ri-sun-fill'

// Validate if the user selected a topic
if(selectedTheme){
    // If the validation is fulfilled, we ask what the issue is obtianed
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'ri-moon-fill"' ? 'add' : 'remove'](iconTheme)
}
// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () =>{
   //Adding or removing the dark / icon theme
   document.body.classList.toggle(darkTheme)
   themeButton.classList.toggle(iconTheme)
   
   // Saving the theme and the current icon that the user choose
   localStorage.setItem('selected-theme', getCurrentTheme())
   localStorage.setItem('selected-icon', getCurrentIcon())
})

/*=============== WEBSITE SCROLL REVEAL ANIMATION ===============*/
const scrollMenu = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    reset:true, // Animation repeat


})
// Some Animation To Our Home__Content
scrollMenu.reveal(' .home__content', {origin: 'bottom'})
scrollMenu.reveal(' .home__info', {origin: 'bottom', delay: 100})
scrollMenu.reveal(' .home__data', { delay: 140})
scrollMenu.reveal(' .home__button', {origin: 'left', delay: 180})

// Add some animation to our delivery__content
scrollMenu.reveal(' .delivery__data', {origin: 'left'})
scrollMenu.reveal(' .delivery__content', {origin: 'left', delay: 100})
scrollMenu.reveal(' .delivery__img', {delay: 180})

//Adding some animation to our About page
scrollMenu.reveal(' .about__data, .contact__map', {origin: 'left'})
scrollMenu.reveal(' .about__img, .contact__data', {origin: 'right'})

// Adding some animation to our conferences pages
scrollMenu.reveal(' .prices__box', {origin: 'right'})
scrollMenu.reveal(' .prices__swiper', {origin: 'bottom', delay: 100})

// Some animation to our gallery
// scrollMenu.reveal(' .gallery__image', {interval: 20})

//Some animation to our footer page
// scrollMenu.reveal(' .footer__container')



