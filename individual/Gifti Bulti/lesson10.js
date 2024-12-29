//1) Add two pieces of text to the following scene.  
//2) Make the two pieces of text different sizes.
var grass = createSprite(200,200);
grass.setAnimation("floating_grass");
var alien = createSprite(180,100);
alien.setAnimation("alien");
alien.scale = 1.3;
var robot = createSprite(300,300);
robot.setAnimation("robot");
robot.scale = 0.2;
drawSprites();
fill("black")
text("thkich",5,100);
text("fyfgsdufgkuasf",350,300);