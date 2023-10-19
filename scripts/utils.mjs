import { gameOver } from "./gameover.mjs";
import { updateGame } from "./updateGame.mjs";

const gameContainer = document.querySelector('.game-container');
const ball = document.getElementById('ball');
const paddle = document.getElementById('paddle');


export function gameLoop() {
    updateGame();
    if (ball.offsetTop + ball.offsetHeight > gameContainer.offsetHeight) {
        gameOver();
        return;
    }
    requestAnimationFrame(gameLoop);
}

// paddle's initial position and speed
let paddlePosition = (gameContainer.offsetWidth - paddle.offsetWidth) / 2; // i dont know why its not working as expected but i'll fix it
paddle.style.left = paddlePosition + 'px';

let paddleSpeed = 10

export function Listner(params) {
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

        
        if (paddlePosition > 670) {
            paddlePosition = gameContainer.offsetWidth - paddle.offsetWidth - 10;
        }
    }
});
}
