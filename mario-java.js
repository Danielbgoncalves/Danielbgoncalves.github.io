//puxar do html e css 
const mario = document.querySelector('.mario');
const tubo = document.querySelector('.tubo');
const clouds = document.querySelector('.clouds');


//comando para pular
const jump = () => {
    mario.classList.add('jump');

    setTimeout( () => {
        mario.classList.remove('jump')
    },800);
} 


//score
let gameOver = false;
let score = 0;
    
    function atualizarScore() {
        if(!gameOver) {
            score++;
        document.getElementById("score").innerText = score;
        }
        
    }


setInterval(atualizarScore,50);

// game over
const loop = setInterval(() => {

    const tuboPosition = tubo.offsetLeft;
    const cloudsPosition = tubo.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px','');

    if (tuboPosition <= 218 && tuboPosition > 0 && marioPosition < 105 ) {
        
        tubo.style.animation = 'none';
        tubo.style.left = `${tuboPosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        clouds.style.animation = 'none';
        clouds.style.left = `${cloudsPosition}px`;

        mario.src="./imagens/mario-game-over.png";
        mario.style.width = "125px";

        gameOver = true;

        clearInterval(loop);

    }
},10);

//comando para pular
document.addEventListener('keydown', jump);

