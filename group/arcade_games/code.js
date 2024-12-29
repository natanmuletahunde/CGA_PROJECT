var circle, food, snakeTrail, snakeLength;
var handle, ball, blocksGroup, startScore, score;
var mazePlayer, mazeExit, walls, mazeScore;
var gameState = "menu";

function resetSnakeGame() {
    circle = createSprite(200, 200, 10, 10);
    circle.shapeColor = "green";

    food = createSprite(randomNumber(10, 390), randomNumber(10, 390), 10, 10);
    food.setAnimation("apple");
    food.scale = 0.2;

    snakeTrail = [];
    snakeLength = 1;
    circle.velocityX = 5;
    circle.velocityY = 0;
}

function playSnakeGame() {
    background("white");
    drawSprites();

    if (keyDown("up") && circle.velocityY === 0) circle.setVelocity(0, -5);
    if (keyDown("down") && circle.velocityY === 0) circle.setVelocity(0, 5);
    if (keyDown("left") && circle.velocityX === 0) circle.setVelocity(-5, 0);
    if (keyDown("right") && circle.velocityX === 0) circle.setVelocity(5, 0);

    snakeTrail.push({ x: circle.x, y: circle.y });
    if (snakeTrail.length > snakeLength) snakeTrail.shift();

    for (var i = 0; i < snakeTrail.length; i++) {
        var segment = snakeTrail[i];
        fill("green");
        noStroke();
        ellipse(segment.x, segment.y, 10, 10);
    }

    if (circle.isTouching(food)) {
        snakeLength++;
        food.x = randomNumber(10, 390);
        food.y = randomNumber(10, 390);
    }

    for (var i = 0; i < snakeTrail.length - 1; i++) {
        if (circle.x === snakeTrail[i].x && circle.y === snakeTrail[i].y) {
            gameOver();
            return;
        }
    }

    if (circle.x < 0 || circle.x > 400 || circle.y < 0 || circle.y > 400) {
        gameOver();
        return;
    }

    textSize(20);
    fill("black");
    text("Score: " + (snakeLength - 1), 320, 20);
}

function gameOver() {
    textSize(24);
    fill("red");
    text("Game Over!", 150, 200);
    noLoop();
}

function resetBallGame() {
    handle = createSprite(200, 350, 100, 10);
    ball = createSprite(100, 200);
    ball.setAnimation("animation_1");
    ball.scale = 0.5;
    ball.velocityX = randomNumber(5, 9);
    ball.velocityY = randomNumber(4, 8);
    blocksGroup = createGroup();
    startScore = false;
    score = 0;
    drawBlocks();
}

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

function playBallGame() {
    background("white");
    fill("red");
    textSize(20);
    text("Score: " + score, 200, 20);
    drawSprites();
    createEdgeSprites();
    ball.bounceOff(edges);

    handle.x = World.mouseX;
    ball.bounceOff(handle);

    for (var i = 0; i < blocksGroup.length; i++) {
        var block = blocksGroup.get(i);
        if (ball.isTouching(block)) {
            block.destroy();
            score += 1;
            break;
        }
    }

    if (ball.y > handle.y) {
        ball.velocityX = 0;
        ball.velocityY = 0;
        background("white");
        fill("red");
        textSize(50);
        text("Game Over", 80, 200);
        textSize(30);
    }
}

function resetMazeGame() {
    mazePlayer = createSprite(30, 30, 10, 10);
    mazePlayer.shapeColor = "blue";
    mazeScore = 0;

    walls = [
        createSprite(200, 50, 100, 10),
        createSprite(50, 150, 10, 200),
        createSprite(350, 150, 10, 200),
        createSprite(200, 350, 300, 10),
        createSprite(150, 200, 10, 100),
        createSprite(250, 200, 10, 100),
        createSprite(100, 100, 100, 10),
        createSprite(300, 100, 100, 10),
        createSprite(100, 250, 100, 10),
        createSprite(250, 250, 100, 10),
    ];

    mazeExit = createSprite(375, 375, 20, 20);
    mazeExit.shapeColor = "green";
}

function playMazeGame() {
    background("white");
    movement();

    for (var i = 0; i < walls.length; i++) {
        if (mazePlayer.isTouching(walls[i])) {
            if (keyDown("up")) mazePlayer.y += 5;
            if (keyDown("down")) mazePlayer.y -= 5;
            if (keyDown("left")) mazePlayer.x += 5;
            if (keyDown("right")) mazePlayer.x -= 5;
        }
    }

    if (mazePlayer.isTouching(mazeExit)) {
        mazeScore += 10;
        resetMazeGame();
    }

    textSize(20);
    fill("black");
    text("Score: " + mazeScore, 320, 20);

    drawSprites();
}

function movement() {
    if (keyDown("up")) mazePlayer.y -= 5;
    if (keyDown("down")) mazePlayer.y += 5;
    if (keyDown("left")) mazePlayer.x -= 5;
    if (keyDown("right")) mazePlayer.x += 5;
}

function draw() {
    if (gameState === "menu") {
        background("black");
        fill("yellow");
        textSize(50);
        textAlign(CENTER);
        text("ARCADE GAMES", width / 2, 80);

        textSize(30);
        textAlign(CENTER);

        fill("lightgreen");
        rect(width / 2 - 100, 130, 200, 50, 10);
        fill("black");
        text("1. Snake", width / 2, 165);

        fill("lightblue");
        rect(width / 2 - 100, 190, 200, 50, 10);
        fill("black");
        text("2. Ball Game", width / 2, 225);

        fill("pink");
        rect(width / 2 - 100, 250, 200, 50, 10);
        fill("black");
        text("3. Maze", width / 2, 285);

        fill("white");
        textSize(16);
        text("Press the number key to select a game", width / 2, 350);
        text("ESC to return to menu", width / 2, 370);

        textAlign(LEFT);
    } else if (gameState === "snake") {
        playSnakeGame();
    } else if (gameState === "ball") {
        playBallGame();
    } else if (gameState === "maze") {
        playMazeGame();
    }
}

function keyPressed() {
    if (gameState === "menu") {
        if (key === "1") {
            gameState = "snake";
            resetSnakeGame();
            loop();
        } else if (key === "2") {
            gameState = "ball";
            resetBallGame();
            loop();
        } else if (key === "3") {
            gameState = "maze";
            resetMazeGame();
            loop();
        }
    }
}
