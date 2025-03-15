let afterSectionClick = false;

function smoothScroll(target) {
  const element = document.querySelector(target);
  const headerOffset = 65;
  const elementPosition = element.getBoundingClientRect().top;
  const offsetPosition = elementPosition - headerOffset;

  afterSectionClick = true;

  window.scrollBy({
    top: offsetPosition,
    behavior: 'smooth'
  });

  setTimeout(() => { afterSectionClick = false; }, 1000)
}

function smoothScrollToTop() {
  const headerOffset = 65;

  window.scroll({
    top: 0,
    behavior: 'smooth'
  });
}

function smoothScrollToTop() {
  const headerOffset = 65;

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

async function loadTranslations(lang) {
  try {
    const response = await fetch("/translations.json");
    const translations = await response.json();
    applyTranslations(translations[lang]);
    localStorage.setItem("language", lang);
  } catch (error) {
    console.error("Error loading translations:", error);
  }
}

function applyTranslations(translations) {
  Object.keys(translations).forEach(key => {
    const element = document.getElementById(key);
    if (element) {
      if (Array.isArray(translations[key])) {
        // If the translation is a list, clear the element and add spans
        element.innerHTML = "";
        translations[key].forEach(item => {
          const span = document.createElement("span");
          span.className = "tag is-dark";
          span.textContent = item;
          element.appendChild(span);
          element.appendChild(document.createTextNode(" ")); // Add space between tags
        });
      } else {
        // Otherwise, replace innerHTML normally
        element.innerHTML = translations[key];
      }
    }
  });

  const downloadLink = document.getElementById("resumeDownloadLink");
  console.log(translations.resumeFileName);
  console.log(downloadLink);
  if (downloadLink && translations.resumeFilePath) {
    console.log("haha");
    downloadLink.href = translations.resumeFilePath;
    downloadLink.setAttribute("download", translations.resumeFileName);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const savedLanguage = localStorage.getItem("language") || "en";
  loadTranslations(savedLanguage);
});

function changeLanguage(lang) {
  loadTranslations(lang);
}
