import { moveBall } from "./gameplay.mjs";
import { createBricks } from "./bricks.mjs";
import { gameLoop } from "./utils.mjs";

export function initializeGame() {

    createBricks();
    moveBall();
    gameLoop()
}



