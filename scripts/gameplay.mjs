const gameContainer = document.querySelector('.game-container');
const paddle = document.getElementById('paddle');
const ball = document.getElementById('ball');
const pauseButton = document.getElementById('pauseButton')

//Keep track of the ball position to handle pause event
let ballYpause
let ballXpause

// handle the pause event
pauseButton.addEventListener('click', () => togglePause())

export function moveBall(x, y) {
    // Define the ball's initial position and speed
    let ballX = gameContainer.offsetWidth / 4;
    let ballY = gameContainer.offsetHeight - 300;

    if (x, y !== undefined) {
        ballX = x
        ballY = y
    }
    let ballSpeedX = 2
    let ballSpeedY = 2
    
    function updateBallPosition() {
        ballX += ballSpeedX;
        ballY += ballSpeedY;
        ballXpause = ballX
        ballYpause = ballY

        
        // mke sure the djinax is inside the box
        if (ballX < 0 || ballX + ball.offsetWidth > gameContainer.offsetWidth) {
            ballSpeedX = -ballSpeedX;
        }
        if (ballY < 0) {
            ballSpeedY = -ballSpeedY;
        }
        
        // Check for collisions with the paddle 
        if (ballY + ball.offsetHeight > paddle.offsetTop && ballX + ball.offsetWidth > paddle.offsetLeft && ballX < paddle.offsetLeft + paddle.offsetWidth) {
            ballSpeedY = -ballSpeedY;
        }
        
        
        
        // Update the ball's position
        ball.style.left = ballX + 'px';
        ball.style.top = ballY + 'px';
        
        if (!isPaused) {
            requestAnimationFrame(updateBallPosition);
        }
        // Continue moving the ball
    }
    updateBallPosition();
    
}

let isPaused = false;

export function togglePause() {
    if (isPaused) {
        // Resume the game
        isPaused = false;
        
        document.getElementById('pauseButton').textContent = 'Pause';
        moveBall(ballXpause, ballYpause)
        // Resume your game loop or animations
        requestAnimationFrame(gameLoop);
    } else {
        // Pause the game
        isPaused = true;
        document.getElementById('pauseButton').textContent = 'Resume';
        // Cancel the game loop or animations
    }
}
