const showcaseNav = document.querySelector(".showcase-nav");
const button = document.querySelector(".first");
const titles = document.querySelectorAll(".showcase-box .showcase-letter");
const showcaseVideo = document.querySelectorAll(".showcase-video");
const link = document.querySelector(".link h2");
const icon = document.querySelector(".fa-caret-right");
const kcc = document.querySelector(".link img");

const comingVideo = document.querySelector('.coming-video');
const button2 = document.querySelector('.volume-control');
const icon1 = document.querySelector('.fa-volume-xmark');
const icon2 = document.querySelector('.fa-volume-high');

let isToggled = false; // Variable to track the state


button.addEventListener("click", function() {
  if (isToggled) {
    // If it's already toggled, reset the properties
    showcaseNav.style.left = "67%";
    showcaseNav.style.animation ="none";
    button.style.bottom = "8%";
    button.style.left = "15%";
    button.textContent = "Watch Trailer";
    button.style.fontSize = ".70rem";
    link.style.opacity = "1";
    link.style.left = "0";
    icon.style.left = "0";
    kcc.style.opacity = "1";
    titles.forEach(title => {
      title.style.transform = "scale(1)";
      title.style.bottom = "0%";
      title.style.left = "2%";
    });
    showcaseVideo.forEach(video => {
      video.muted = true; // Disable audio
      video.pause();
    });
  } else {
    // If it's not toggled, set the new properties
    showcaseNav.style.left = "100%";
    showcaseNav.style.animation ="none";
    button.style.bottom = "4%";
    button.style.left = "-35%";
    button.textContent = "Go Back";
    button.style.zIndex = "1";
    button.style.fontFamily = "Montserrat Regular";
    button.style.fontSize = ".70rem";
    link.style.opacity = "0";
    link.style.left = "-156%";
    icon.style.left = "-105%";
    kcc.style.opacity = ".4";
    titles.forEach(title => {
      title.style.transform = "scale(0.5)";
      title.style.bottom = "-6%";
      title.style.left = "-5%";
    });
    showcaseVideo.forEach(video => {
      video.muted = false; // Enable audio
      video.play(); // Play the video with sound
    });
  }
  
  // Toggle the state
  isToggled = !isToggled;
});


let isToggled2 = false; // Variable to track the initial state

button2.addEventListener("click", function() {
  if (isToggled2) {
    icon1.style.opacity = "1";
    icon2.style.opacity = "0";
  } else {
    icon1.style.opacity = "0";
    icon2.style.opacity = "1";
  }
  
  // Toggle the state
  isToggled2 = !isToggled2;
});
