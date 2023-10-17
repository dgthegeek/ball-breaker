const gameContainer = document.querySelector('.game-container');
const paddle = document.getElementById('paddle');
const ball = document.getElementById('ball');
const bricksContainer = document.getElementById('bricks');
const scoreDisplay = document.getElementById('score');

// paddle's initial position
let paddlePosition = (gameContainer.offsetWidth - paddle.offsetWidth) / 2; // i dont know why its not working as expected but i'll fix it
let paddleSpeed = 10


document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft') {
        paddlePosition -= paddleSpeed;
        
        if (paddlePosition < 0) {
            paddlePosition = 0;
        }
        paddle.style.left = paddlePosition + 'px';
    } else if (event.key === 'ArrowRight') {
        
        paddlePosition += paddleSpeed;
        paddle.style.left = paddlePosition + 'px';

        
        if (paddlePosition + paddle.offsetWidth > gameContainer.offsetWidth) {
            paddlePosition = gameContainer.offsetWidth - paddle.offsetWidth;
        }
    }
    
});

function moveBall() {
    // Define the ball's initial position and speed
    let ballX = gameContainer.offsetWidth / 2;
    let ballY = gameContainer.offsetHeight - 100;
    let ballSpeedX = 1
    let ballSpeedY = 1
    
    function updateBallPosition() {
        ballX += ballSpeedX;
        ballY += ballSpeedY;
        
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
        
        // Continue moving the ball
        requestAnimationFrame(updateBallPosition);
    }
    
    updateBallPosition();
}

function checkCollision() {
    // i will Implement here collision detection logic with the paddle and bricks
}

function gameOver() {
    gameContainer.innerHTML = '<div class="game-over">Game Over</div>';
}

function updateScore(score) {
    scoreDisplay.textContent = `Score: ${score}`;
}

function createBricks() {
    
}

function startGame() {
    createBricks();
    moveBall();
}

function updateGame() {
    // i will Implement the game update here (e.g., checking for game over, scoring)
}

function gameLoop() {
    updateGame();
    
    if (ball.offsetTop + ball.offsetHeight > gameContainer.offsetHeight) {
        gameOver();
        return;
    }
    
    requestAnimationFrame(gameLoop);
}

startGame();

gameLoop();
