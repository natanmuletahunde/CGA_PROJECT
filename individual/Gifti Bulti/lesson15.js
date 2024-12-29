var backdrop = createSprite(200,200);
backdrop.setAnimation("sci_fi");
var dinosaur = createSprite(200, 350);
dinosaur.scale = 0.2;
dinosaur.setAnimation("tyrannosaurus");

function draw() {
  //move the dinosaur up
  dinosaur.y = dinosaur.y - 5;

  //2) Add a conditional that detects when the dinosaur is in the sky.
  //3) Set the sprite's animation to a pterodactyl when it reaches the sky.


  //draw everything
  drawSprites();
}
