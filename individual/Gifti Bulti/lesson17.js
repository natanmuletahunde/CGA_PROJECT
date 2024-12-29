var backdrop = createSprite(200,200);
backdrop.setAnimation("sky");
var creature = createSprite(200,250);
creature.setAnimation("creature");
creature.scale = 0.2;
function draw() {
  //1) Change the code so that the creature only shakes when the mouse is pressed.
  creature.rotation = randomNumber(-5,5);
  drawSprites();

  //2) Change the code so the directions ("Press the mouse to shake the creature.") **only show** 
  //when the user is **NOT** pressing the mouse.
  fill("black");
  textSize(40);
  text("Press the mouse to shake the creature.", 20, 50, 360, 100);
}
