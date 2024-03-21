document.addEventListener("DOMContentLoaded", function() {
    const switchField = document.getElementById("switch-field");
    const leftArrow = document.querySelector(".left-arrow");
    const rightArrow = document.querySelector(".right-arrow");
  
    leftArrow.addEventListener("click", function() {
      switchField.value = "local";
    });
  
    rightArrow.addEventListener("click", function() {
      switchField.value = "global";
    });
  });
  