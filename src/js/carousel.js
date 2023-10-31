// Constants for configuration
const config = {
  slideWidth1: 1280,         // Width of a single slide in pixels
  slideWidth2: 200,          // Width of a single slide in pixels;
  slideDuration: 400,       // Transition duration in milliseconds
  initialIndex: 0,          // Initial index of the active slide
};

// Elements
const showcaseContainer = document.querySelector(".showcase-container");
const showcaseNavContainer = document.querySelector(".showcase-navContainer");
const leftButton = document.querySelector(".arrow.left");
const rightButton = document.querySelector(".arrow.right");

// State
let currentIndex = config.initialIndex;
const slideCount = showcaseContainer.children.length;

// Function to update the slide with smooth transitions and brightness filter
function updateSlide(index) {
  currentIndex = (index + slideCount) % slideCount; // Ensure a valid index

  const translateValue1 = -currentIndex * config.slideWidth1;
  const translateValue2 = -currentIndex * config.slideWidth2;

  showcaseContainer.style.transition = `transform ${config.slideDuration}ms ease-in-out`;
  showcaseNavContainer.style.transition = `transform ${config.slideDuration}ms ease-in-out`;

  showcaseContainer.style.transform = `translateX(${translateValue1}px)`;
  showcaseNavContainer.style.transform = `translateX(${translateValue2}px)`;

  // Set properties for the current and neighboring navigation elements with smooth opacity transitions and brightness filter
  const navLinks = showcaseNavContainer.children;
  const slides = showcaseContainer.children;
  for (let i = 0; i < slideCount; i++) {
    const offset = i - currentIndex;
    const navLink = navLinks[i];
    navLink.style.zIndex = offset === 0 ? 1 : -1;
    navLink.style.opacity = offset === 0 ? 1 : Math.abs(offset) < 2 ? 0.5 : 0;
    navLink.style.transition = "opacity 0.3s ease-in-out"; // Smooth opacity transition
    navLink.style.left = offset === 1 ? '-14%' : offset === -1 ? null : '0';
    navLink.style.right = offset === -1 ? '-14%' : null;

    // Apply brightness filter to all slides except the current slide
    const slide = slides[i];
    slide.style.filter = offset === 0 ? "none" : "brightness(0.5)";
  }
}

// Event listeners
leftButton.addEventListener("click", () => updateSlide(currentIndex - 1)); // Clicking left goes to next
rightButton.addEventListener("click", () => updateSlide(currentIndex + 1)); // Clicking right goes to previous

// Initial slide setup
updateSlide(config.initialIndex);
