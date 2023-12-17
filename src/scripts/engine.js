const emojis = [
  "🐱",
  "🐱",
  "🦝",
  "🦝",
  "🦊",
  "🦊",
  "🐶",
  "🐶",
  "🐵",
  "🐵",
  "🦁",
  "🦁",
  "🐯",
  "🐯",
  "🐮",
  "🐮",
];
let openCards = [];

let shuffleEmojis = emojis.sort(() => (Math.random()> 0.5 ? 2 : -1));//para cada elemento ele coloca o peso dois ou menos um que vai deixar tudo organizado de forma aleatoria 
for(let i = 0; i< emojis.length; i++){
  let box = document.createElement("div");//cria a div
  box.className="item";// cria a classe na div
  box.innerHTML= shuffleEmojis[i]//guarda a posição dos emojis 

  box.onclick = handleClick;
  document.querySelector(".game").appendChild(box);//associa a classe a div 
}

function handleClick() {
  if (openCards.length<2) {
      this.classList.add("boxOpen");
      openCards.push(this);//guarda no vetor 
  }

  if (openCards.length === 2 ) {
    setTimeout(checkMatch, 500);
  }
}

function checkMatch() {
  if (openCards[0].innerHTML === openCards[1].innerHTML) {
    openCards[0].classList.add("boxMatch");
    openCards[1].classList.add("boxMatch");
  } else {
    openCards[0].classList.remove("boxOpen");
    openCards[1].classList.remove("boxOpen");
  }

  openCards = [];

  if (document.querySelectorAll(".boxMatch").length === emojis.length) {
    alert("Venceu o Jogo !")
  }
}