import { moveBall, shouldListen } from "./gameplay.mjs";
import { createBricks } from "./bricks.mjs";
import { gameLoop, Listner } from "./utils.mjs";

export function initializeGame() {
    Listner()
    createBricks();
    moveBall();
    gameLoop()
}
