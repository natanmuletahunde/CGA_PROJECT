var handle = createSprite(200, 350, 100, 10);
var ball = createSprite(100, 200);
ball.setAnimation("animation_1");
ball.scale = 0.5;
ball.velocityX = randomNumber(5, 9);
ball.velocityY = randomNumber(4, 8);
var blocksGroup = createGroup();
var startScore = false;
var score = 0;

function drawBlocks() {
    for (var i = 0; i < 8; i++) {
        var yPos = 50 + i * 25;
        var numBlocks = 10;
        for (var j = 0; j < numBlocks; j++) {
            var block = createSprite(
                j * 50 + randomNumber(10, 20),
                yPos,
                10,
                10
            );
            blocksGroup.add(block);
        }
    }
}

drawBlocks();

function movement(platform) {
    platform.x = World.mouseX;
}

function draw() {
    background("white");
    fill("red");
    textSize(20);
    text("Score: " + score, 200, 20);
    drawSprites();
    createEdgeSprites();
    ball.bounceOff(edges);
    movement(handle);

    if (ball.isTouching(handle)) {
        startScore = true;
        ball.bounceOff(handle);
    }

    if (startScore) {
        for (var i = 0; i < blocksGroup.length; i++) {
            var block = blocksGroup.get(i);
            if (ball.isTouching(block)) {
                block.destroy();
                score = score + 1;
                break;
            }
        }
    }

    if (ball.y > handle.y) {
        ball.velocityX = 0;
        ball.velocityY = 0;
        background("white");
        fill("red");
        textSize(50);
        var over = text("Game Over", 80, 200);
        textSize(30);
    }
}
