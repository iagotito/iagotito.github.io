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
const greetingsSection = document.querySelector('.greetings');
const aboutSection = document.querySelector('#about');
const navbar = document.querySelector('.navbar');

function handleScroll() {
  const currentScrollPos = window.pageYOffset;
  const greetingsSectionTop = greetingsSection.getBoundingClientRect().top;
  const aboutSectionTop = aboutSection.getBoundingClientRect().top;

  // Determine if the navbar should have a dark background or be transparent
  if (aboutSectionTop <= 65) { // The height of the fixed navbar
    navbar.classList.add('dark');
  } else {
    navbar.classList.remove('dark');
  }

  // Determine scroll direction and show/hide navbar
  if (currentScrollPos > prevScrollPos && currentScrollPos > aboutSectionTop && !afterSectionClick) {
    navbar.classList.add('hidden');
  } else {
    navbar.classList.remove('hidden');
  }

  prevScrollPos = currentScrollPos;
}

window.addEventListener('scroll', function() {
  handleScroll();
});

