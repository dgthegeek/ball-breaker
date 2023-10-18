import { gameOver } from "./gameover.mjs";
import { updateGame } from "./updateGame.mjs";

const gameContainer = document.querySelector('.game-container');
const ball = document.getElementById('ball');

export function gameLoop() {
    updateGame();
    
    if (ball.offsetTop + ball.offsetHeight > gameContainer.offsetHeight) {
        gameOver();
        return;
    }
    
    requestAnimationFrame(gameLoop);
}