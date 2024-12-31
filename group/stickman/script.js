// Select game elements
const arrow = document.getElementById("arrow");
const target = document.getElementById("target");
const burstEffect = document.getElementById("burst-effect");
const scoreElement = document.getElementById("score");
const shootButton = document.getElementById("shoot-button");

let score = 0; // Initial score
let isShooting = false; // Prevent multiple arrow fires

// Function to shoot the arrow
function shootArrow() {
  if (isShooting) return; // Prevent multiple shots at once
  isShooting = true;
  arrow.style.display = "block";
  let arrowPosition = 100; // Start position of the arrow

  const arrowInterval = setInterval(() => {
    arrowPosition += 10;
    arrow.style.left = `${arrowPosition}px`;

    // Check for collision with target
    if (detectCollision(arrow, target)) {
      score += 10;
      scoreElement.textContent = score;
      showBurstEffect(target);
      resetArrow();
      clearInterval(arrowInterval);
    }

    // Reset arrow if it leaves the screen
    if (arrowPosition > 800) {
      resetArrow();
      clearInterval(arrowInterval);
    }
  }, 20);
}


function resetArrow() {
  isShooting = false;
  arrow.style.display = "none";
  arrow.style.left = "100px";
}


function detectCollision(arrow, target) {
  const arrowRect = arrow.getBoundingClientRect();
  const targetRect = target.getBoundingClientRect();

  return !(
    arrowRect.top > targetRect.bottom ||
    arrowRect.bottom < targetRect.top ||
    arrowRect.left > targetRect.right ||
    arrowRect.right < targetRect.left
  );
}

// Function to show the burst effect
function showBurstEffect(target) {
  const targetRect = target.getBoundingClientRect();
  const containerRect = document.getElementById("game-container").getBoundingClientRect();

  // Position the burst effect where the target was
  burstEffect.style.left = `${targetRect.left - containerRect.left}px`;
  burstEffect.style.top = `${targetRect.top - containerRect.top}px`;

 
  burstEffect.style.display = "block";

  // Hide the target temporarily
  target.style.display = "none";

  // Remove the burst effect after animation ends
  setTimeout(() => {
    burstEffect.style.display = "none";
    target.style.display = "block"; // Show the target again
  }, 500); // Match the duration of the animation
}

// Attach event listener to shoot button
shootButton.addEventListener("click", shootArrow);