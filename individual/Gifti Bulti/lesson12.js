//1) Add the draw loop block to the bottom of this program.
//2) Move any blocks that need to be inside the draw loop.


function draw() {
    var salt = createSprite(200,200);
  salt.setAnimation("salt");
  background("skyblue");
   salt.x = 200 + randomNumber(-5,5);
    salt.y = 200 + randomNumber(-5,5);
  drawSprites();
    
  }