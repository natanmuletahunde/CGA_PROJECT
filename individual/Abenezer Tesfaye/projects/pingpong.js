var ball = createSprite(200, 200);
ball.setAnimation("ball");
ball.scale = 0.1;
ball.velocityX = 10
ball.velocityY = 5
var handle = createSprite(200, 380);
handle.setAnimation("handle")
function draw(){
  if (ball.y >= 380) {
    background("red");
    text("Game Over", 200, 200);
    textFont("Arial");
    textSize(12);
    return;
  }
  if (keyDown("right")) {
    handle.x = handle.x - 10;
  }
  if (keyDown("left")) {
    handle.x = handle.x + 10;
  }
  background("white")
  drawSprites()
  createEdgeSprites();
  ball.bounceOff(edges);
  ball.bounceOff(handle)
}


