//1) Run the program to see how big the food is.
//2) Use sprite properties to scale all of the food sprites down so they fit on the plate.
background("burlywood");
fill("white");
ellipse(200,200, 350);
var fries = createSprite(250,140);
fries.setAnimation("fries");
fries.scale = 0.6;

var burger = createSprite(110,200);
burger.setAnimation("burger");
burger.scale = 0.6;

var dessert = createSprite(240,270);
dessert.setAnimation("watermelon");
dessert.scale = 0.6;
drawSprites();