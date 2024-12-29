var fish = createSprite(200, 200);
fish.setAnimation("fishR");

function draw() {
  background("blue");

  // If the user presses the right arrow key, move the fish to the right.
  if (keyWentDown("right")) {
    fish.velocityX = 5; // Move fish to the right
    fish.setAnimation("fishR"); // Set animation to face right
  }

  // If the fish gets to the right-hand side of the screen, move the fish to the left.
  if (fish.x > 400) {
    fish.velocityX = -5; // Move fish to the left
    fish.setAnimation("fishL"); // Set animation to face left (assuming you have a left-facing animation)
  }

  // If the fish gets to the left-hand side of the screen, move the fish to the right.
  if (fish.x < 0) {
    fish.velocityX = 5; // Move fish to the right
    fish.setAnimation("fishR"); // Set animation to face right
  }

  // Draw the fish.
  drawSprites();
}