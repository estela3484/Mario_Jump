const mario = document.querySelector(".heroi");
const pipe = document.querySelector(".pipe");
const fundo = document.querySelector(".game-board");
const nuvens = document.querySelector(".nuvens");

const stopGame = (loop, pipePosition, marioPosition) => {
  pipe.style.animation = "none";
  pipe.style.left = `${pipePosition}px`;

  mario.style.animation = "none";
  mario.style.bottom = `${marioPosition}px`;

  mario.src = "./imagens/game-over.png";
  mario.style.width = "70px";
  mario.style.marginLeft = "50px";

  nuvens.style.animationPlayState = "paused";
  nuvens.style.display = "none";
  clearInterval(loop);
};

const jump = () => {
  mario.classList.add("jump"); // a animação inicia porem ela precisa ser removida logo após , caso contrario o pulo será alarmado apenas 1 vez

  setTimeout(() => {
    //retira o pulo

    mario.classList.remove("jump");
  }, 500);
};
//verificação
const loop = setInterval(() => {
  const pipePosition = pipe.offsetLeft;
  const marioPosition = +window
    .getComputedStyle(mario)
    .bottom.replace("px", ""); //pega o valor que foi computado do heroi

  if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
    stopGame(loop, pipePosition, marioPosition);
  }
}, 10);
document.addEventListener("keydown", jump); //quando pressionar alguma tecla terá uma reação na classList
document.addEventListener("click", jump);
