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
  document.querySelector(".game").appendChild(box);//associa a classe a div 
}