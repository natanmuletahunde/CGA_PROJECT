var snake = createSprite(200, 200)
snake.setAnimation("snake")

var apple = createSprite(100, 300)
apple.setAnimation("apple")
apple.scale = 0.03

var score = 0
function draw() {
  
  if (keyDown("down")) {
    snake.y = snake.y + 5
  }
  
  if (keyDown("up")) {
    snake.y = snake.y - 5
  }
  
  if (keyDown("left")) {
    snake.x = snake.x - 5
  }
  
  if (keyDown("right")) {
    snake.x = snake.x + 5
  }
  
  if (snake.isTouching(apple)) {
    apple.x = randomNumber (10, 390);
    apple.y = randomNumber(10, 390);
  }
  
  background("white")
  drawSprites()
}
