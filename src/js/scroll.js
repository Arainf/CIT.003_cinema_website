const comingShowcase = document.querySelector('.coming-showcase');
const comingContainer = document.querySelector('.coming-container');
const video = document.querySelector('.coming-video');
video.muted = false;

const delayTime = 2000; // Adjust the delay time as needed

let isVideoPlayed = false;

const childElements = comingContainer.children;


function addAnimationClassWithDelay() {
  const delay = 250; // Delay in milliseconds
  const animationClass = 'your-animation-class'; // Replace with your animation class

  for (let i = 0; i < childElements.length; i++) {
    const childElement = childElements[i];

    setTimeout(() => {
      // Add the animation class to the child element
      childElement.classList.add(animationClass);
    }, i * delay); // Apply the delay for each child element
  }
}


// Function to play the video with a delay
function playVideoWithDelay() {
    if (!isVideoPlayed) {
        video.play();
        isVideoPlayed = true;
    }
}

let isVideoStopped = true;

// Function to stop the video with a delay
function stopVideoWithDelay() {
    if (!isVideoStopped) {
        video.pause();
        isVideoStopped = true;
    }
}

// Add an event listener for scroll events
window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    if (scrollY > 230) {
        video.style.opacity = "1";

        addAnimationClassWithDelay();
        link.style.opacity = '0';
        icon.style.left = '-105%';
    
        // Play the video after a delay
        setTimeout(playVideoWithDelay, delayTime);
    } else {
        if (isVideoPlayed) {
            video.pause();
            isVideoPlayed = false;
        }
        
        video.style.opacity = "0";
        // Stop the video after a delay
        setTimeout(stopVideoWithDelay, delayTime);
        link.style.opacity = '1';
        icon.style.left = '0%';
    }
});
