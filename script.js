const loveIt = document.querySelector('.love-it')
const times = document.querySelector('#times')

let clickTime = 0
let timesClicked = 0

loveIt.addEventListener('click', (e)=>{
    if(clickTime===0){
        clickTime = new Date().getTime()
    } else {
        if((new Date().getTime() - clickTime) < 800) {
            creatHeart(e)
            clickTime = 0
        }
        else {
            clickTime = new Date().getTime()
        }
    }
})

const creatHeart = (e) => {
    const heart = document.createElement('i')
    heart.classList.add('fas')
    heart.classList.add('fa-heart')
    const x = e.clientX
    const y = e.clientY
    const leftOffset = e.target.offsetLeft
    const topOffset = e.target.offsetTop
    const xInside = x - leftOffset
    const yInside = y - topOffset
    heart.style.top = `${yInside}px`
    heart.style.left = `${xInside}px`
    loveIt.appendChild(heart)
    times.innerText = ++timesClicked
    setTimeout(()=> heart.remove(), 1000)
}