// script.js

// Get the canvas and context
const canvas = document.getElementById('game-board');
const ctx = canvas.getContext('2d');

// Define constants
const boxSize = 20;
const rows = canvas.height / boxSize;
const cols = canvas.width / boxSize;

// Define snake and food
let snake = [{ x: 5 * boxSize, y: 5 * boxSize }];
let direction = 'RIGHT';
let food = generateFood();
let score = 0;

// Draw a box
function drawBox(x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, boxSize, boxSize);
  ctx.strokeStyle = '#000';
  ctx.strokeRect(x, y, boxSize, boxSize);
}

// Generate random food position
function generateFood() {
  return {
    x: Math.floor(Math.random() * cols) * boxSize,
    y: Math.floor(Math.random() * rows) * boxSize,
  };
}

// Game loop
function gameLoop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw the snake
  for (let i = 0; i < snake.length; i++) {
    drawBox(snake[i].x, snake[i].y, i === 0 ? 'lime' : 'green');
  }

  // Draw the food
  drawBox(food.x, food.y, 'red');

  // Move the snake
  let snakeX = snake[0].x;
  let snakeY = snake[0].y;

  if (direction === 'RIGHT') snakeX += boxSize;
  if (direction === 'LEFT') snakeX -= boxSize;
  if (direction === 'UP') snakeY -= boxSize;
  if (direction === 'DOWN') snakeY += boxSize;

  // Check for collisions
  if (
    snakeX < 0 ||
    snakeY < 0 ||
    snakeX >= canvas.width ||
    snakeY >= canvas.height ||
    checkCollision(snakeX, snakeY, snake)
  ) {
    clearInterval(game);
    alert(`Game Over! Your Score: ${score}`);
    return;
  }

  // Check if the snake eats the food
  if (snakeX === food.x && snakeY === food.y) {
    food = generateFood();
    score++;
    document.getElementById('score').innerText = score;
  } else {
    snake.pop();
  }

  // Add the new head to the snake
  snake.unshift({ x: snakeX, y: snakeY });
}

// Check collision with itself
function checkCollision(x, y, snakeArray) {
  for (let i = 0; i < snakeArray.length; i++) {
    if (snakeArray[i].x === x && snakeArray[i].y === y) {
      return true;
    }
  }
  return false;
}

// Change direction based on key press
document.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowUp' && direction !== 'DOWN') direction = 'UP';
  if (event.key === 'ArrowDown' && direction !== 'UP') direction = 'DOWN';
  if (event.key === 'ArrowLeft' && direction !== 'RIGHT') direction = 'LEFT';
  if (event.key === 'ArrowRight' && direction !== 'LEFT') direction = 'RIGHT';
});

// Restart button functionality
document.getElementById('restart-btn').addEventListener('click', () => {
  // Reset game variables
  snake = [{ x: 5 * boxSize, y: 5 * boxSize }];
  direction = 'RIGHT';
  food = generateFood();
  score = 0;
  document.getElementById('score').innerText = score;

  // Restart the game loop
  clearInterval(game);
  game = setInterval(gameLoop, 200); // Adjust speed here if needed
});

// Start the game
let game = setInterval(gameLoop, 200); // Adjust speed here
