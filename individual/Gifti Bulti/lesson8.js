function setup() {
    createCanvas(400, 400);
    
    // Create sprites
    var topLeftSprite = createSprite(100, 100);
    var topRightSprite = createSprite(300, 100);
    var bottomLeftSprite = createSprite(100, 300);
    var bottomRightSprite = createSprite(300, 300);

    // Set animations
    topLeftSprite.setAnimation("character1"); // Change to your own animation
    topRightSprite.setAnimation("character2"); // Change to your own animation
    bottomLeftSprite.setAnimation("character3"); // Change to your own animation
    bottomRightSprite.setAnimation("alien"); // This is the animated sprite

    // Draw sprites
    drawSprites();
}

function draw() {
    background(220);
    drawSprites();
}