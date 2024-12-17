var player = createSprite(50, 50);
player.setAnimation("puck");
player.scale = 0.1;

var target = createSprite(400, 400);
target.setAnimation("puck");
target.scale = 0.3;

var walls = new Group();
var score = 0;

for (var i = 0; i < 30; i++) {
    var wall;
    var wallX = randomNumber(55, 340);
    var wallY = randomNumber(50, 340);
    var wallWidth = randomNumber(30, 50);
    var wallHeight = randomNumber(30, 50);
    var wallOverlap = false;

    if (randomNumber(0, 1) > 0.5) {
        wall = createSprite(wallX, wallY, wallWidth, 10);
    } else {
        wall = createSprite(wallX, wallY, 10, wallHeight);
    }

    for (var j = 0; j < walls.length; j++) {
        var existingWall = walls.get(j);
        if (wall.isTouching(existingWall)) {
            wallOverlap = true;
            break;
        }
    }

    if (!wallOverlap) {
        walls.add(wall);
    } else {
        i--;
    }
}

function draw() {
    background("white");
    textSize(20);
    text(score, 299, 22);

    drawSprites();

    if (walls.bounce(player)) {
        player.x = 50;
        player.y = 50;
    }
    createEdgeSprites();
    player.bounce(edges);

    if (keyDown("up")) {
        player.y = player.y - 3;
    }
    if (keyDown("down")) {
        player.y = player.y + 3;
    }
    if (keyDown("left")) {
        player.x = player.x - 3;
    }
    if (keyDown("right")) {
        player.x = player.x + 3;
    }

    if (player.isTouching(target)) {
        player.x = 50;
        player.y = 50;
        score = score + 1;
    }
}
