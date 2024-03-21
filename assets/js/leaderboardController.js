document.addEventListener("DOMContentLoaded", function() {
  const switchField = document.getElementById("switch-field");
  const leftArrow = document.querySelector(".left-arrow");
  const rightArrow = document.querySelector(".right-arrow");

  let currentState = "LOCAL"; // Initial state

  leftArrow.addEventListener("click", toggleState);
  rightArrow.addEventListener("click", toggleState);

  function toggleState() {
      currentState = currentState === "LOCAL" ? "GLOBAL" : "LOCAL";
      switchField.innerHTML = currentState;
  }
});
