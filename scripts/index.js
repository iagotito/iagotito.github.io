let afterSectionClick = false;

function smoothScroll(target) {
  const element = document.querySelector(target);
  const headerOffset = 65; // Adjust this value based on the header's height
  const elementPosition = element.getBoundingClientRect().top;
  const offsetPosition = elementPosition - headerOffset;

  afterSectionClick = true;

  window.scrollBy({
    top: offsetPosition,
    behavior: 'smooth'
  });

  setTimeout(() => { afterSectionClick = false; }, 550)
}

function smoothScrollToTop() {
  const headerOffset = 65; // Adjust this value based on the header's height

  window.scroll({
    top: 0,
    behavior: 'smooth'
  });
}

function smoothScrollToTop() {
  const headerOffset = 65; // Adjust this value based on the header's height

  window.scroll({
    top: 0,
    behavior: 'smooth'
  });
}

let prevScrollPos = window.pageYOffset;
const headerSection = document.querySelector('#headerSection');
const projectsSection = document.querySelector('#projectsSection');
const contactSection = document.querySelector('#contactSection');
const navbar = document.querySelector('.navbar');

function handleScroll() {
  const currentScrollPos = window.pageYOffset;

  // Determine scroll direction and show/hide navbar
  if (currentScrollPos > prevScrollPos && !afterSectionClick) {
    navbar.classList.add('hidden');
  } else {
    navbar.classList.remove('hidden');
  }

  prevScrollPos = currentScrollPos;
}

window.addEventListener('scroll', function() {
  handleScroll();
});


document.addEventListener('DOMContentLoaded', () => {

  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Add a click event on each of them
  $navbarBurgers.forEach( el => {
    el.addEventListener('click', () => {

      // Get the target from the "data-target" attribute
      const target = el.dataset.target;
      const $target = document.getElementById(target);

      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      el.classList.toggle('is-active');
      $target.classList.toggle('is-active');

    });
  });

});
