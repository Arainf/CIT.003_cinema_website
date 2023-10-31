document.addEventListener('DOMContentLoaded', function () {
  const infoButton = document.querySelector('.info');
  const movieContainer = document.getElementById('movieContainer');

  let isToggled = false; // Variable to track the state

  infoButton.addEventListener('click', function () {
    if (!isToggled) {
    } else {
      // Fetch content from an external 'movie.html' file and populate movieContainer
      fetch('movie.html')
        .then(response => response.text())
        .then(content => {
          movieContainer.innerHTML = content;
        })
        .catch(error => {
          console.error('Error fetching content:', error);
        });
    }

    // Toggle the state
    isToggled = !isToggled;
  });
});

