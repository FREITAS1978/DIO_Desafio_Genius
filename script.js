let order =[];
let clickOrder = [];
let score = 0;
//0 - verde
//1 - vermelho
//2 - amarelo
//3 - azul
const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const green = document.querySelector('.green');
const yellow = document.querySelector('.yellow');
//cria ordem aleatória de cor
let shuffleOrder = () => {
     let colorOrder = Math.floor(math.random()*4);
     order[order.length] = colorOrder;
     clickOrder = [];
     for(let i in order){
          let elementColor = createColorElement(order[i]);
          lightColor(elementColor, Number(i)+1);
     }
}
//acende a próxima cor
let lightColor = (element, Number) => {
     Number = Number * 500;
     setTimeout(() => {
          element.classList.add('selected');
     }, Number -250);
     setTimeout(() => {
          element.classList.remove('selected');
     })
}
//confere se botões clicados etão na ordem correta 
let checkOrder = () => {
     for(let i in clickOrder){
          if(clickOrder[i] != order[i]){
               gameOver();
               break;
          }
     }
     if(clickOrder.length == order.length){
          alert('Pontuação: ${Score}\nVocê acertou! Iniciando próximo nível!');
          nextLevel();
     }
}
//função para o clique do jogador
let click = (color) => {
     clickOrder[clickOrder.lenght] = color;
     createColorElement(color).classList.add('selected');
     setTimeout(() => {
          createColorElement(color).classList.remove('selected');
          checkOrder();
     },250);
}
//função que retorna a cor
let createColorElement = (color) => {
     if(color == 0) {
          return green;
     } else if(color == 1){
          return red;
     } else if(color == 2){
          return yellow;
     } else if(color ==3){
          return blue;
     }
}
//função para próximo nível
let nextLevel = () => {
     score++;
     shuffleOrder();
}
//Função para Game Over
let gameOver = () => {
     alert('Pontuação: ${score}!\nVocê perdeu!\nClique em ok para iniciar um novo jogo.');
     order = [];
     clickedOrder = [];
     playGame();
}
//Função de inicio do jogo
let playGame = () => {
     alert('Bem vindo ao Genius! Iniciando o jogo!');
     score = 0;
     nextLevel();
}
green.addEventListener('click',click(0));
red.addEventListener('click',click(1));
yellow.addEventListener('click',click(2));
blue.addEventListener('click',click(3));
//eventos de clique para as cores
green.onclick = () => click(0);
red.onclick = () => click(1);
yelllow.onclick = () => click(2);
blue.onclick = () => click(3);
//Inicio do jogo
playGame();