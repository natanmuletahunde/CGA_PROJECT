var handle = createSprite(200, 310);
handle.setAnimation("handle");

var ball = createSprite(200, 200);
ball.setAnimation("ball");

var ballSpeedX = 10;
var ballSpeedY = 14;
ball.velocityX = ballSpeedX;
ball.velocityY = ballSpeedY;

var retry = false;
var gameOverNow = false;

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
        ball.velocityY = ballSpeedX;
        ball.velocityX = ballSpeedY;
    }
}

function draw() {
    background("white");

    if (World.mouseX < 410 && World.mouseX > 35) {
        handle.x = World.mouseX;
    }
    if (ball.isTouching(handle)) {
        ball.bounceOff(handle);
    }

    if (ball.y > 310) {
        if (retry != true) {
            gameOverNow = true;
            gameOver();
        }
        if (retry) {
            ball.x = 0;
            ball.y = 0;
        }
    }
    drawSprites();
    createEdgeSprites();
    ball.bounceOff(edges);
    ball.collide(edges);
    ball.collide(handle);
}
