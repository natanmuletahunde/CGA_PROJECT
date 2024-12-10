var xPosition = 200;
var whatsTheY = 300;

ellipse(xPosition, whatsTheY);

//Debug: Naming Variables

var sizeOfCircle = 150; // Corrected: no spaces
var xDimension = 100;    // Corrected: does not start with a number
var yLocation = 200;     // Corrected: consistent casing

fill("OrangeRed");
ellipse(xDimension, yLocation, sizeOfCircle, sizeOfCircle); // Consistent variable names



//Debug: Unused Variables
var earSize = 80;
var eyeSize = 15;
var center = 200;

//1) Update the code to use the variables
fill("saddlebrown");
ellipse(130, 115, 80, 80);
ellipse(270, 115, 80, 80);
ellipse(200, 195, 205, 205);
ellipse(200, 245, 100, 100);
fill("black");
ellipse(200, 225, 20, 20);
ellipse(165, 175, 15, 15);
ellipse(235, 175, 15, 15);
line(200, 235, 200, 265);
noFill();

//Using Variables

//2) Change the program to use the eyeSize variable.
var eyeSize = 27;

noStroke();
background("green");

// Face
fill("yellow");
ellipse(200,200,200,200);

// Eyes
fill("black");
ellipse(160,170,20,20);
ellipse(240,170,20,20);

// Mouth
fill("white");
rect(160,240,80,20);


//Challenge: String Variables
var color1 = "crimson";
var color2 = "coral";
var color3 = "gold";
var color4 = "azure";
fill(color1);
regularPolygon(200, 200, 5, 200);
fill(color2);
regularPolygon(200, 200, 6, 150);
fill(color3);
regularPolygon(200, 200, 7, 100);
fill(color4);
ellipse(200, 200, 100, 100);
