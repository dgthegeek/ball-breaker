const createBricks = () => {
    createsSquarePatter()
}
const WriteRowx = (item ,Y  ) => {
    let parent = document.querySelector('.bricks')
    let firtsBrickPosX = 30
    for (let i = 0; i <item-1  ; i++) {
        let brick = document.createElement('div')
        brick.classList.add('br')
        brick.style.left = `${firtsBrickPosX}px`
        brick.style.top = `${Y}px`
        parent.appendChild(brick)
        firtsBrickPosX+= 50
    }
}
const createsSquarePatter = () => {   
    let parent = document.querySelector('.bricks')
    let Y = 20
    for (let i = 0; i <5; i++ ){
        WriteRowx (16,Y)
        Y += 50

    }
}
export {createBricks}

