const gameContainer = document.querySelector('.game-container');
const paddle = document.getElementById('paddle');
const ball = document.getElementById('ball');
const pauseButton = document.getElementById('pauseButton');

let ballSpeedX = 2;
let ballSpeedY = 2;

let isPaused = false;
let animationFrameId = null;
let ballX = gameContainer.offsetWidth / 4;
let ballY = gameContainer.offsetHeight - 200;

// Handle the pause event
pauseButton.addEventListener('click', () => togglePause());

export function moveBall() {
    if (!isPaused) {
        ballX += ballSpeedX;
        ballY += ballSpeedY;

        // Make sure the ball stays within the container
        if (ballX < 0 || ballX + ball.offsetWidth > gameContainer.offsetWidth) {
            ballSpeedX = -ballSpeedX;
        }
        if (ballY < 0) {
            ballSpeedY = -ballSpeedY;
        }

        // Check for collisions with the paddle
        if (ballY + ball.offsetHeight > paddle.offsetTop &&
            ballX + ball.offsetWidth > paddle.offsetLeft &&
            ballX < paddle.offsetLeft + paddle.offsetWidth) {
            ballSpeedY = -ballSpeedY;
        }

        // Update the ball's position
        ball.style.left = ballX + 'px';
        ball.style.top = ballY + 'px';

        animationFrameId = requestAnimationFrame(moveBall);
    }
}


export function togglePause() {
    if (isPaused) {
        // Resume the game
        isPaused = false;
        pauseButton.textContent = 'Pause';
        moveBall();
    } else {
        // Pause the game
        isPaused = true;
        cancelAnimationFrame(animationFrameId);
        pauseButton.textContent = 'Resume';
    }
}
