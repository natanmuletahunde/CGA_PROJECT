//New Parameters!
//The code below has familiar rect() blocks, but with additional values as part of the block. 
//These additional values are called parameters - they let you customize and control the behavior of blocks.

//Look at the code with a partner and discuss what you think it will do. 
//Try to guess how you think these new parameters are changing the way the rect() blocks will behave. 
//Once you have answered the question click "Run" to see the program's result.
fill("blue");
rect(100,100,100,200);

fill("red");
rect(250,100,100,150);
//Rectangle Size
//The two new parameters in the rect() block control the width and height of the rectangles. 
//The toolbox has also been updated with the new block that can help you remember what each parameter stands for:

rect(x, y, w, h)


fill("blue");
rect(100,100,100,200);

fill("blue");
rect(100,100,100,200);

fill("red");
rect(250,100,100,150);


//Ellipse Parameters
//The ellipse() block has also been updated to use these new parameters:

ellipse(x, y, w, h)
//Use these new parameters to create two ellipses of different sizes.

//1) Add an orange ellipse to the screen that is taller than the green one
//2) Rearrange the blocks so the orange ellipse is behind the green one
fill("yellow");
ellipse(200, 200, 250, 300);
fill("green");
ellipse(200,200,200,150);

//Background
//background() will draw on top of everything already in your drawing, 
//so it's important to think about the order of your code.
//1) Make a black background behind the green circle.
fill("green");
ellipse(200,200,200,200);
//2) Change the background from yellow to orange.
background("black");
ellipse(200, 200, 200, 200);
fill("green");


//Debug - Using 4 Parameters
//This program uses the four parameter version of rect() and ellipse() to draw a simple scene.
// Draw sky
background("skyblue");

// Draw sun
fill("yellow");
ellipse(350,50,50,50);

// Draw grass
fill("green");
rect(0,300,400,400);

//Debug - Using 4 Parameters
//Now that the grass is working, let's add a cloud to the sky. Unfortunately, it looks a little funny right now.
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
ellipse(150,100,100,200);