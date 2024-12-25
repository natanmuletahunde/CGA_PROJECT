//leeson3
//level4
// 2) Change the color from blue to yellow.
fill("yellow");
rect(100,100);
rect(250, 100);
// 3) Add a new square to the image
rect(100,200);
//level 5
//2) Change the red rectangle's color to green.
//3) Change the order of the code so the green rectangle appears on top.
fill("green");
rect(175,175);
fill("blue");
rect(200, 200);

//level 6
fill("teal");
ellipse(100,100);
//2) Add a new ellipse of a different color.
fill("orange");
ellipse(200,200);

//
//2) Rearrange the code so the wheels are visible.

fill("red");
rect(100,250);
rect(150,250);
rect(200,250);
rect(250,250);
rect(150,200);
rect(200,200);
fill("dimgray");
ellipse(150,300);
ellipse(250,300);

//
//2) Change the code so it makes the picture in the instructions
rect(150,150);
fill("orange");
ellipse(150,150);
ellipse(200,150);
ellipse(150,200);
ellipse(200,200);
fill("purple");
rect(150,150);


//
strokeWeight(35);
point(200, 170);
strokeWeight(5);
fill("red");
ellipse(200, 200);
point(200, 190);
point(210, 200);
//2) Use the point() block to finish the code so it matches the picture.
point(200,210)
point(190,200)

//lesson 4
fill("blue");
rect(100,100,100,200);

fill("red");
rect(250,100,100,150);

//
//1) Add an orange ellipse to the screen that is taller than the green one
//2) Rearrange the blocks so the orange ellipse is behind the green one
fill("orange");
ellipse(196,200,250,350);
fill("green");
ellipse(200,200,200,150);


//

//2) Change the background from yellow to orange.
background("orange");
fill("blue");
rect(250,250, 100, 100);
fill("purple");
rect(50,50, 100,100);

//
//1) Make a black background behind the green circle.
background("black")
fill("green");
ellipse(200,200,200,200);

//

// Draw sky
background("skyblue");

// Draw sun
fill("yellow");
ellipse(350,50,50,50);

// Draw grass
fill("green");
rect(0,300,400,100);

//

fill("red");
ellipse(200, 200, 400, 400);
fill("orange");
ellipse(200, 200, 340, 340);
fill("yellow");
ellipse(200, 200, 280, 280);
fill("green");
ellipse(200, 200, 220, 220);
fill("blue");
ellipse(200, 200, 160, 160);
fill("indigo");
ellipse(200, 200, 100, 100);
fill("violet");
ellipse(200, 200, 40, 40);

//

//1) Debug this program to make the cloud wider than it is tall, like in the image.

// Draw sky
background("skyblue");

// Draw sun
fill("yellow");
ellipse(300,50,50,50);

// Draw grass
fill("green");
rect(0,300,400,100);

// Draw cloud
fill("white");
ellipse(150,100,200,100);

//

fill("red");
shape(200, 200, 0, 400, 400, 400);
fill("blue");
shape(200, 200, 0, 0, 400, 0);
//2) Finish the code so it matches the picture
fill("green");
shape(200, 200, 0, 0,0, 400);
fill("yellow");
shape(200, 200, 400, 0, 400, 400);
//
var xPosition = 50;

ellipse(xPosition, 350, 100, 100);

//lesson 5
//

var xPosition = 300;
var whatsTheY = 100;

ellipse(xPosition, whatsTheY);
//

var xPosition = 300;
var whatsTheY = 350;

ellipse(xPosition, whatsTheY);

//
var sizeofcircle = 150;
var dimension = 100;
var YLocation = 200;
var sizeofcircle = 150;
fill("Red");
ellipse(dimension, YLocation, sizeofcircle, sizeofcircle);
//
//1) Update the code so the red petals touch each other
var petalSize = 60;

//Set Up
noStroke();
background("ForestGreen");

// Petals
fill("red");
ellipse(150,200,petalSize,petalSize);
ellipse(200,150,petalSize,petalSize);
ellipse(250,200,petalSize,petalSize);
ellipse(200,250,petalSize,petalSize);

// Flower Center
fill("black");
ellipse(200,200,50,50);
//

//1) Update the code to match the image
var x = 50;
var y = 200;

fill("deeppink");
ellipse(50, 100);
ellipse(350, 200);
rect(50, 250);
//
//2) Change the program to use the eyeSize variable.
var eyeSize = 27;

noStroke();
background("green");

// Face
fill("yellow");
ellipse(200,200,200,200);

// Eyes
fill("black");
ellipse(160,170,eyeSize,eyeSize);
ellipse(240,170,eyeSize,eyeSize);

// Mouth
fill("white");
rect(160,240,80,20);
//
var x = 50;
var y = 50;
fill("red");
ellipse(x, y);
// Increase x by 50, now x is 100
x = x + 50
y = y + 50;
ellipse(x, y);
x = x + 50
y = y + 50;
ellipse(x, y);
x = x + 50
y= y + 50;
ellipse(x, y);
x = x + 50
y = y + 50;
ellipse(x, y);
x = x + 50
y = y + 50;
ellipse(x, y);
x = x + 50
y = y +50;
ellipse(x, y);
// lesson 6
//background("tomato");

fill("orange");
ellipse(randomNumber(200,400), 200, 50, 50);
//
background("tomato");

//1) Change the code so the ellipse can appear anywhere horizontally on the screen
fill("orange");
ellipse(randomNumber(200,400), 100, 50, 50);

//
background("tomato");

//1) Make the ellipse appear at random y coordinates
fill("orange");
ellipse(randomNumber(200,300), 100, 50, 50);
//
//1) Make the eyes appear at random sizes
var eyeSize = 27;

noStroke();
background("green");

// Face
fill("yellow");
ellipse(200,200,200,200);

// Eyes
fill("black");
ellipse(160,170,20,20);
ellipse(240,170,20, 20);


// Mouth
fill("white");
rect(160,240,80,20);
//
