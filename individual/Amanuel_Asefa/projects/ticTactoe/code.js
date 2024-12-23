var board = createSprite(200, 220);
board.setAnimation("board");
board.scale = 6;

var buttons = createGroup();
var turn = 1;

var buttonSize = 100;
var positions = [
    { x: 85, y: 80, size: buttonSize },
    { x: 195, y: 90, size: buttonSize - 20 },
    { x: 310, y: 80, size: buttonSize },
    { x: 85, y: 196, size: buttonSize },
    { x: 195, y: 196, size: buttonSize - 20 },
    { x: 310, y: 196, size: buttonSize },
    { x: 85, y: 310, size: buttonSize },
    { x: 195, y: 300, size: buttonSize - 20 },
    { x: 310, y: 310, size: buttonSize },
];

function createButtons() {
    for (var i = 0; i < positions.length; i++) {
        var pos = positions[i];

        var button = createSprite(pos.x, pos.y, pos.size, pos.size);
        button.setAnimation("buttons");
        buttons.add(button);
    }
}

createButtons();

function draw() {
    drawSprites();

    for (var i = 0; i < 9; i++) {
        if (mouseIsOver(buttons.get(i)) && mouseWentDown("leftButton")) {
            if (turn % 2 == 0) {
                buttons.get(i).setAnimation("x");
                turn = turn + 1;
            } else {
                buttons.get(i).setAnimation("o");
                turn = turn + 1;
            }
        }
    }
}
