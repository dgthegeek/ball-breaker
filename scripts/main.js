import { initializeGame } from './initialize.js';
import { togglePause } from './gameplay.mjs';

const gameContainer = document.querySelector('.game-container');
const paddle = document.getElementById('paddle');
const ball = document.getElementById('ball');
const bricksContainer = document.getElementById('bricks');
const scoreDisplay = document.getElementById('score');

// paddle's initial position and speed
let paddlePosition = (gameContainer.offsetWidth - paddle.offsetWidth) / 2; // i dont know why its not working as expected but i'll fix it
paddlePosition -= 0;


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

const TogglePause = ()=>togglePause


initializeGame();