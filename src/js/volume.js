const video = document.querySelector('.coming-video');
const button = document.querySelector('.volume-control');
const icon1 = document.querySelector('.fa-volume-xmark');
const icon2 = document.querySelector('.fa-volume-high');

let isToggled = false; // Variable to track the initial state

button.addEventListener("click", function() {
  if (isToggled) {
    icon1.style.opacity = "1";
    icon2.style.opacity = "0";
  } else {
    icon1.style.opacity = "0";
    icon2.style.opacity = "1";
  }
  
  // Toggle the state
  isToggled = !isToggled;
});
