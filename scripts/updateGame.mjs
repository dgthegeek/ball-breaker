let score = 0
const scoresheet = document.getElementById('score')
export function updateScore() {
    score += 10
    scoresheet.textContent = `Score: ${score}`
}