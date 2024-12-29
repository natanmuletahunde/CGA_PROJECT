var orangeFish = createSprite(400, randomNumber(0, 100));
orangeFish.setAnimation("orange_fish");
var blueFish = createSprite(250, randomNumber(0, 200));
blueFish.setAnimation("blue_fish");
var greenFish = createSprite(300, randomNumber(200, 300));
greenFish.setAnimation("green_fish");

function draw() {
  // Draw Background
  background("navy");
  
  // Update Values
  orangeFish.x = orangeFish.x - 2;
  blueFish.x = orangeFish.x - 2;
  greenFish.x = orangeFish.x - 2;
  
  //1) Use the counter pattern to make the blue fish move across the screen faster than the other fish

  //2) Use the counter pattern to make the green fish move across the screen slower than the other fish.
  
  // Draw Animations
  drawSprites();
}