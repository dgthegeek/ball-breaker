import { initializeGame } from "./initialize.mjs";
const gameContainer = document.querySelector('.game-container');

export function gameOver() {
    gameContainer.innerHTML = '<div class="game-over"> <img src="assets/661.jpg"> <button id="replay">PLAY AGAIN</button> </div>';
    const replay = document.getElementById("replay")
    // replay.addEventListener('click', () => initializeGame());
}

