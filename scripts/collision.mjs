export function checkCollision(ballX, ballY, ball, ballSpeedY, ballSpeedX) {
    const brickList = Array.from(document.getElementsByClassName('br'));
    
    for (let i = 0; i < brickList.length; i++) {
        const brick = brickList[i];
        if (
            ballX + ball.offsetWidth > brick.offsetLeft &&
            ballX < brick.offsetLeft + brick.offsetWidth &&
            ballY + ball.offsetHeight > brick.offsetTop &&
            ballY < brick.offsetTop + brick.offsetHeight
        ) {
            console.log('Collision');
            ballSpeedY = -ballSpeedY
    
            brick.remove();
        }
    }
}
