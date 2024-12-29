function draw() {
    // Set the background color to a light blue for the sky
    background("lightblue");
  
    // Draw the ground layer
    fill("green");
    rect(0, 300, 400, 100); // Ground rectangle
  
    // Draw trees in the background
    drawTrees();
  
    // Draw clouds that float across the sky
    drawClouds();
  
    // Draw any additional layers (e.g., sun, flowers) here
  }
  
  // Function to draw trees
  function drawTrees() {
    fill("saddlebrown"); // Trunk color
    rect(50, 250, 20, 50); // Tree trunk
    fill("forestgreen"); // Foliage color
    ellipse(60, 230, 60, 60); // Tree foliage
  
    fill("saddlebrown");
    rect(300, 250, 20, 50); // Another tree trunk
    fill("forestgreen");
    ellipse(310, 230, 60, 60); // Another tree foliage
  }
  
  // Function to draw clouds with subtle animation
  function drawClouds() {
    fill("white");
    let cloudX = randomNumber(0, 400); // Random X position for clouds
    ellipse(cloudX, 80, 80, 40); // Draw cloud
    ellipse(cloudX + 30, 80, 80, 40); // Draw additional part of cloud
  }