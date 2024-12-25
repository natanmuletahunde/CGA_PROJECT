var space = createSprite(200, 200)
space.setAnimation("space")
var ship = createSprite(200, 370)
ship.setAnimation("ship")
ship.scale = 0.5
var enemy = createSprite(200, 50)
enemy.setAnimation("enemy")
enemy.scale = 0.1
var shot = createSprite(200, 200)
shot.setAnimation("shot")
shot.scale = 0.05

var score = 0          
var enemyDirection = 1; 

function draw() {
  if (shot.isTouching(enemy)) {
    background("white");
    fill("white")
    textSize(20)          
    text("SCORE: " + score, 200, 200);
    return 
  }
  enemy.x += enemyDirection * 2;

  if (enemy.x >= 390 || enemy.x <= 10) {
    enemyDirection *= -1;
  }
  
  if (keyDown("left")){
    ship.x = ship.x + 5
  }
  
  if (keyDown("right")){
    ship.x = ship.x - 5
  }
  
 
  if (keyDown("space")){
    var bullet = createSprite(ship.x, ship.y)
    bullet.setAnimation("shot")
    bullet.scale = 0.05
    bullet.velocityY = -10
  }
  

  drawSprites()
  createEdgeSprites();
}
