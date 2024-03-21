document.addEventListener("DOMContentLoaded", function() {
  const progress = document.querySelector('.progress');
  const kilometersElement = document.getElementById('kilometers');
  const daysElement = document.getElementById('days');
  const messageText = document.getElementById('message-text');
  const memeImg = document.getElementById('meme-img');
  const progressBarWidth = 300; // Adjust according to your design
  const maxKilometers = 10; // Maximum kilometers to complete

  let kilometers = 0;
  let days = 0;

  function updateProgress() {
    const progressPercentage = (kilometers / maxKilometers) * 100;
    progress.style.width = `${progressPercentage}%`;

    const remainingKm = maxKilometers - kilometers;
    document.getElementById('remaining-km').textContent = remainingKm.toFixed(1);

    // Update message and meme based on progress
    if (kilometers >= 0 && kilometers < 3) {
      messageText.textContent = "Good job, you’re faster than a snail";
      memeImg.src = "assets/images/meme1.png";
    } else if (kilometers >= 3 && kilometers < 6) {
      messageText.textContent = "Uhmm, it’s getting a bit closer. Might want to go outside and move your ass";
      memeImg.src = "assets/images/meme2.png";
    } else if (kilometers >= 6 && kilometers < 10) {
      messageText.textContent = "What the hell are you doing!!! It is a literal snail and it’s catching up";
      memeImg.src = "assets/images/meme3.png";
    } else {
      // If progress is complete
      messageText.textContent = "Cant even out run a snail.... you fat ass";
      memeImg.src = "assets/images/meme4.png";
      kilometers = 0; // Reset kilometers
      days = 0; // Reset days
    }
    kilometersElement.textContent = kilometers.toFixed(1);
    daysElement.textContent = days;
  }

  function walk() {
    kilometers += 0.5; // Increment by example value
    days += 1; // Increment by 1 for simplicity
    updateProgress();
  }

  const homeBtn = document.getElementById('home-btn');
  const scoreboardBtn = document.getElementById('scoreboard-btn');

  homeBtn.addEventListener('click', function() {
    // Logic to navigate back to home screen
    console.log("Navigating to home screen...");
  });

  scoreboardBtn.addEventListener('click', function() {
    // Logic to navigate to scoreboard
    console.log("Navigating to scoreboard...");
  });

  setInterval(walk, 2000); // Example interval for walking simulation
});
