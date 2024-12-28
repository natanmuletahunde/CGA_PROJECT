var handle;
var ball;
var ballSpeedX = 10;
var ballSpeedY = 14;
var retry = false;
var gameOverNow = false;

function setup() {
    createCanvas(400, 400); // Set canvas size
    handle = createSprite(200, 310);
    handle.setAnimation("handle");

    ball = createSprite(200, 200);
    ball.setAnimation("ball");

    ball.velocityX = ballSpeedX;
    ball.velocityY = ballSpeedY;
}

function gameOver() {
    ball.velocityY = 0;
    ball.velocityX = 0;
    ball.visible = false;
    handle.visible = false;
    background("red");
    fill("white");
    textSize(50);
    text("Game Over", 80, 200);

    if (keyWentDown("space")) {
        retry = true;
        handle.visible = true;
        ball.visible = true;
        ball.velocityY = ballSpeedY;
        ball.velocityX = ballSpeedX;
    }
}

function draw() {
    background("white");

    if (mouseX < 410 && mouseX > 35) {
        handle.x = mouseX;
    }
    if (ball.isTouching(handle)) {
        ball.bounceOff(handle);
    }

    if (ball.y > 310) {
        if (!retry) {
            gameOverNow = true;
            gameOver();
        }
        if (retry) {
            ball.x = 200; // Reset ball position
            ball.y = 200;
        }
    }
    
    drawSprites();
    createEdgeSprites();
    ball.bounceOff(edges);
    ball.collide(edges);
    ball.collide(handle);
}