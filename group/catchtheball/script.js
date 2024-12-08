const game = document.getElementById("game");
const paddle = document.getElementById("paddle");
const ball = document.getElementById("ball");
const scoreElement = document.getElementById("score");

let score = 0;
let ballSpeed = 4;
let ballDirectionX = 1;
let ballDirectionY = 1;

// Move paddle on mouse move
document.addEventListener("mousemove", (event) => {
  const gameRect = game.getBoundingClientRect();
  let paddleX = event.clientX - gameRect.left - paddle.offsetWidth / 2;

  // Prevent paddle from going outside game boundaries
  paddleX = Math.max(0, Math.min(gameRect.width - paddle.offsetWidth, paddleX));
  paddle.style.left = `${paddleX}px`;
});

// Move the ball
function moveBall() {
  const ballRect = ball.getBoundingClientRect();
  const gameRect = game.getBoundingClientRect();
  const paddleRect = paddle.getBoundingClientRect();

  // Update ball position
  let ballX = ball.offsetLeft + ballSpeed * ballDirectionX;
  let ballY = ball.offsetTop + ballSpeed * ballDirectionY;

  // Bounce off walls
  if (ballX <= 0 || ballX + ball.offsetWidth >= gameRect.width) {
    ballDirectionX *= -1;
  }

  // Bounce off the top
  if (ballY <= 0) {
    ballDirectionY *= -1;
  }

  // Detect paddle collision
  if (
    ballY + ball.offsetHeight >= paddleRect.top - gameRect.top &&
    ballX + ball.offsetWidth >= paddle.offsetLeft &&
    ballX <= paddle.offsetLeft + paddle.offsetWidth
  ) {
    ballDirectionY *= -1;
    score++;
    scoreElement.textContent = `Score: ${score}`;
  }

  // Reset ball if it goes below the paddle
  if (ballY > gameRect.height) {
    alert(`Game Over! Your score: ${score}`);
    resetGame();
    return;
  }

  // Update ball position
  ball.style.left = `${ballX}px`;
  ball.style.top = `${ballY}px`;

  requestAnimationFrame(moveBall);
}

// Reset game
function resetGame() {
  ball.style.left = "50%";
  ball.style.top = "50px";
  score = 0;
  scoreElement.textContent = "Score: 0";
  ballSpeed = 4;
  ballDirectionX = 1;
  ballDirectionY = 1;
}

// Start the game
moveBall();
