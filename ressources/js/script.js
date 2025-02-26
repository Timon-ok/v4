// Controls for navbar
let lastScrollPosition = 0;
const navbar = document.querySelector(".navbar");
let isVisible = true;
let isScrollingMode = false;

window.addEventListener("scroll", () => {
  const currentScrollPosition = window.pageYOffset;

  if (currentScrollPosition > 100 && !isScrollingMode) {
    isScrollingMode = true;
    navbar.classList.add("scrolling");
  }

  if (isScrollingMode) {
    if (currentScrollPosition < lastScrollPosition && !isVisible) {
      navbar.classList.add("visible");
      isVisible = true;
    } else if (currentScrollPosition > lastScrollPosition && isVisible) {
      navbar.classList.remove("visible");
      isVisible = false;
    }
  }

  if (currentScrollPosition <= 100) {
    isScrollingMode = false;
    navbar.classList.remove("scrolling");
    navbar.classList.remove("visible");
    isVisible = true;
  }

  lastScrollPosition = currentScrollPosition;
});


// Intersection Observer for animations on scrolling
const observerOptions = {
  threshold: 0.2,
  rootMargin: "0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

document.addEventListener("DOMContentLoaded", () => {
  const animatedElements = document.querySelectorAll(
    ".fade-in, .slide-in-left, .slide-in-right, .scale-in"
  );
  animatedElements.forEach((el) => observer.observe(el));
});


// Animation for background on sixth-page
document.addEventListener("DOMContentLoaded", () => {
  const sixthPage = document.querySelector(".sixth-page");
  const background = document.querySelector(
    ".sixth-page .background-container"
  );
  const backgroundImage = document.querySelector(
    ".sixth-page .background-image"
  );
  const motorcycle = document.querySelector(
    ".sixth-page .motorcycle-container"
  );

  const observerOptions = {
    root: null,
    threshold: 0.6,
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        background.classList.add("active");
        backgroundImage.classList.add("active");
        motorcycle.classList.remove("start");
        motorcycle.classList.add("active");
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  motorcycle.classList.add("start");
  observer.observe(sixthPage);
});


// counter animation on eighth-page
document.addEventListener('DOMContentLoaded', function() {
  const counter = document.getElementById('counter');
  const targetNumber = 24995;
  const duration = 2000; 
  const steps = 60; 
  const increment = targetNumber / (duration / 1000 * steps);
  let currentNumber = 0;
  let hasAnimated = false;

  function updateCounter() {
    currentNumber += increment;
    if (currentNumber >= targetNumber) {
      currentNumber = targetNumber;
      clearInterval(intervalId);
    }
    counter.textContent = '$ ' + Math.round(currentNumber).toLocaleString();
  }

  function startCounter() {
    if (!hasAnimated) {
      const intervalId = setInterval(updateCounter, 1000 / steps);
      hasAnimated = true;
    }
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        startCounter();
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.5 
  });

  observer.observe(counter);
});