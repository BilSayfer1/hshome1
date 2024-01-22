// let one = document.querySelector(`.one`)
// let two = document.querySelector(`.two`)

// one.onclick = () => {
//     two.classList.add(`color`)

// }

// two.onclick = () => {
//     one.classList.add(`color`)

// }
let restart = document.querySelector(`.center`)
let left = document.querySelector(`.left`)
let right = document.querySelector(`.right`)
let text = document.querySelector(`.text`)
let h1 = document.querySelector(`.h1`)
let i = 0
let chtoto = 0

restart.onclick = () => {
    restart.innerHTML = 0;

}


left.onclick = () => {
    text.innerHTML = i--
}
right.onclick = () => {
    text.innerHTML = i++
}






