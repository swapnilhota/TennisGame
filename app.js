var canvas;
var canvasContext;
var ballX = 50;
var ballSpeedX = 5;

window.onload = function () {
    console.log("hello");
    canvas = document.getElementById("gameCanvas");
    canvasContext = canvas.getContext('2d');

    var framesPerSecond = 30;
    setInterval(() => {
        moveEverything();
        drawEverything();
    }, 1000 / framesPerSecond);
}



function moveEverything() {
    ballX += ballSpeedX;
    if (ballX >= canvas.width || ballX <= 0) {
        ballSpeedX = -ballSpeedX;
    }
}

function drawEverything() {
    canvasContext.fillStyle = 'black';
    canvasContext.fillRect(0, 0, canvas.width, canvas.height);
    canvasContext.fillStyle = 'white';
    canvasContext.fillRect(5, 210, 10, 100);
    canvasContext.fillStyle = 'red';
    canvasContext.fillRect(ballX, 200, 50, 25);
}