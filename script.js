const dino = document.querySelector('.dino')
const audio = document.querySelector('.audio')
const sakura = document.querySelector('.sakura')

document.addEventListener('keydown', jump)
document.addEventListener('click', jumpMobile);

function jump() {
    if (dino.classList === "animate") {return;}
    dino.classList.add('animate')
    setTimeout(removeJ, 300)
    audio.play()
}

function removeJ() {
    dino.classList.remove('animate')
}

function jumpMobile() {
    jump(); 
}

let isAlive = setInterval(function() {
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue('top'))
    let cactusLeft = parseInt(window.getComputedStyle(sakura).getPropertyValue('left'))
    if (cactusLeft < 30 && cactusLeft > 0 && dinoTop >= 140) {
        alert('Game over!');
        audio.currentTime = 0; 
        audio.pause();
       
    }
}, 10)

