// Create a canvas element
const canvas = document.createElement('canvas');
canvas.width = 400;
canvas.height = 400;
document.body.appendChild(canvas);

const ctx = canvas.getContext('2d');

// Set background color
ctx.fillStyle = 'white';
ctx.fillRect(0, 0, canvas.width, canvas.height);

// Set stroke color
ctx.strokeStyle = 'blue';

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function drawRobotFace() {
    // Define variables
    const eyeSize = getRandomInt(10, 30);
    const mouthWidth = getRandomInt(50, 100);
    const headColor = getRandomColor();
    const antennaHeight = getRandomInt(50, 100);

    // Draw the head
    ctx.fillStyle = headColor;
    ctx.fillRect(100, 100, 200, 200);

    // Draw the eyes
    ctx.fillStyle = 'white';
    ctx.beginPath();
    ctx.arc(150, 180, eyeSize, 0, Math.PI * 2);
    ctx.fill();

    ctx.beginPath();
    ctx.arc(250, 180, eyeSize, 0, Math.PI * 2);
    ctx.fill();

    // Draw the mouth
    ctx.beginPath();
    ctx.moveTo(100 + (200 - mouthWidth) / 2, 230);
    ctx.lineTo(100 + (200 + mouthWidth) / 2, 230);
    ctx.stroke();

    // Draw the antenna
    ctx.beginPath();
    ctx.moveTo(200, 100);
    ctx.lineTo(200, 100 - antennaHeight);
    ctx.stroke();

    // Draw antenna ball
    ctx.fillStyle = 'red';
    ctx.beginPath();
    ctx.arc(200, 100 - antennaHeight, 10, 0, Math.PI * 2);
    ctx.fill();
}

drawRobotFace();