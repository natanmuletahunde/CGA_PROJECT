var backdrop = createSprite(200, 200);
backdrop.setAnimation("rainbow");
var flyer = createSprite(200, 200);
flyer.setAnimation("wing_bot");

function draw() {
  // Draw the backdrop
  background("white");

  // 1) Move the sprite left when the left arrow is pressed
  if (keyDown(LEFT_ARROW)) {
    flyer.position.x -= 5; // Adjust the value for speed
  }

  // 2) Move the sprite right when the right arrow is pressed
  if (keyDown(RIGHT_ARROW)) {
    flyer.position.x += 5; // Adjust the value for speed
  }

  // 3) Move the sprite up when the up arrow is pressed
  if (keyDown(UP_ARROW)) {
    flyer.position.y -= 5; // Adjust the value for speed
  }

  // 4) Move the sprite down when the down arrow is pressed
  if (keyDown(DOWN_ARROW)) {
    flyer.position.y += 5; // Adjust the value for speed
  }

  // Draw the sprites
  drawSprites();
}