var circle = createSprite(200, 200, 10, 10);

function draw() {
    if (mouseDown()) {
        circle.x = World.mouseX;
        circle.y = World.mouseY;
    }

    drawSprites();
}
