// Create the sprites
var horse = createSprite(200, 150);
horse.setAnimation("horse");

var rainbow = createSprite(400, 370);
rainbow.setAnimation("rainbow");
rainbow.velocityX = -5;
rainbow.velocityY = -5;
rainbow.rotateToDirection = true;

function draw() {
  // Draw the background
  background("skyblue");

  // 1) Change the horse into a unicorn when the rainbow touches it.
  if (horse.isTouching(rainbow)) {
    horse.setAnimation("unicorn"); // Change horse to unicorn
  }

  drawSprites();
}