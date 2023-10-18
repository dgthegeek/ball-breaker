const gameContainer = document.querySelector('.game-container');

export function gameOver() {
    gameContainer.innerHTML = '<div class="game-over">Game Over</div>';
}
