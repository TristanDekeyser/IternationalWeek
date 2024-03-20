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
  
      // Update message and meme based on progress
      if (kilometers === 0) {
        messageText.textContent = "Begin met wandelen om de slak te verslaan!";
        memeImg.src = "meme1.png";
      } else if (kilometers < maxKilometers / 2) {
        messageText.textContent = "Kom op! De slak haalt je bijna in!";
        memeImg.src = "meme2.png";
      } else if (kilometers < maxKilometers) {
        messageText.textContent = "Je bent bijna veilig! Blijf doorgaan!";
        memeImg.src = "meme3.png";
      } else {
        // If progress is complete
        messageText.textContent = "Je hebt de slak verslagen! Goed gedaan!";
        memeImg.src = "meme4.png";
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
  