var player = createSprite(50, 50);
player.setAnimation("puck");
player.scale = 0.05;

var target = createSprite(370, 370);
target.setAnimation("puck");
target.scale = 0.3;

var walls = new Group();
var score = 0;

var wallData = [
    [20, 50, 10, 150],
    [100, 40, 100, 10],
    [70, 130, 150, 10],
    [200, 20, 10, 130],
    [200, 100, 10, 130],
    [300, 50, 10, 150],
    [250, 150, 150, 10],
    [150, 250, 10, 150],
    [50, 250, 100, 10],
    [100, 300, 10, 150],
    [250, 300, 10, 150],
    [300, 200, 150, 10],
    [350, 320, 150, 10],
    [20, 350, 150, 10],
    [300, 100, 150, 10],
];

for (var i = 0; i < wallData.length; i++) {
    var wall = createSprite(
        wallData[i][0],
        wallData[i][1],
        wallData[i][2],
        wallData[i][3]
    );
    walls.add(wall);
}

function draw() {
    background("black");
    textSize(20);
    fill("white");
    text("Score: " + score, 10, 20);

    drawSprites();

    if (walls.bounce(player)) {
        player.x = 50;
        player.y = 50;
    }

    createEdgeSprites();
    player.bounce(edges);

    if (keyDown("up")) {
        player.y -= 3;
    }
    if (keyDown("down")) {
        player.y += 3;
    }
    if (keyDown("left")) {
        player.x -= 3;
    }
    if (keyDown("right")) {
        player.x += 3;
    }

    if (player.isTouching(target)) {
        player.x = 50;
        player.y = 50;
        score += 1;
    }
}
