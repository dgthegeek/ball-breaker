import { moveBall } from "./gameplay.mjs";
import { createBricks } from "./bricks.mjs";
import { gameLoop, Listner } from "./utils.mjs";
import { checkCollision } from "./collision.mjs";


export function initializeGame() {
    Listner()
    createBricks();
    moveBall();
    gameLoop()
}
