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
const begginingSection = document.querySelector('#beggining-section');
const projectsSection = document.querySelector('#projects-section');
const contactSection = document.querySelector('#contact-section');
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

