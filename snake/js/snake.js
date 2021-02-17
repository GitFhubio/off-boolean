// __________f inserita onkeydown al body _________________
document.addEventListener('keydown', musicPlay);
function musicPlay() {
    monster= document.getElementById('playAudio');
    monster.play();
}
function TastoPremuto(event) {
    switch (event.keyCode) {
        case 38 :
      Direction = 'Up';
      break;
      case 87 :
    Direction = 'Up';
    break;
        case 40:
       Direction = 'Down';
        break;
        case 83:
       Direction = 'Down';
        break;
        case 37 :
        Direction = 'Left';
       break;
       case 65 :
       Direction = 'Left';
      break;
        case 39 :
        Direction = 'Right';
        break;
        case 68 :
        Direction = 'Right';
        break;
        default:
        break;
    }
    event.preventDefault();
}
// _______________  funzione ausiliaria      ________________


function RandomApple(){
apple=g[Math.floor(Math.random()*g_width)][Math.floor(Math.random()*g_height)];
// console.log(apple);
apple.element.classList.add('apple');
}
function start(x)
{
  clock = setInterval(function(){game();},x);
}
// creo griglia,prima mela e snake iniziale on ready document
$(document).ready(function(){

  griglia = document.getElementById('griglia');
  g=[];
  g_width = 14;
  g_height = 14;
      for (var y = 0; y < g_height; y++) {
          var row = [];
          for (var x = 0; x < g_width; x++) {
              var cell = [];
              cell.element = document.createElement('div');

              griglia.appendChild(cell.element);
              row.push(cell);
          }
          g.push(row);
      }

  griglia = document.getElementById('griglia');

  // l'indice alla fine non l'ho usato quindi sta parte è inutile
  // quadrati=griglia.children; // omaggio a jquery,anche noi teniamo alla famiglia
  // for (var i = 0; i < quadrati.length; i++) {
  //   quadrati[i].setAttribute('number',i);
  //   quadrati[i].innerText=i;
  // }
score=0;
Direction='Right';
snakeDirection = 'Right';
Xcoda=3;
Ycoda=g_height/2;
codaSnake=g[Ycoda][Xcoda];
Ycorpo=g_height/2;
Xcorpo=4;
corpoSnake=g[Ycorpo][Xcorpo];
Xtesta=5;
Ytesta=g_height/2;
testaSnake=g[Ytesta][Xtesta];
// console.log(testaSnake);
testaSnake.element.classList.add('snake','testaSnake');
corpoSnake.element.classList.add('snake','corpoSnake');
codaSnake.element.classList.add('snake','codaSnake');


RandomApple();

})
// parte il gioco vero e proprio

function game(){

// Snake comportamento base:

function snakeNatural(){
switch (snakeDirection){
case 'Up':
g[Ycoda][Xcoda].element.classList.remove('snake');
g[Ycoda][Xcoda].element.classList.remove('codaSnake');
g[Ycorpo-1][Xcorpo].element.classList.add('snake','corpoSnake');
g[Ytesta-1][Xtesta].element.classList.add('snake','testaSnake');
g[Ycoda-1][Xcoda].element.classList.add('snake','codaSnake');
Ycoda--;
Ytesta--;
Ycorpo--;
break;
case 'Down':
g[Ycoda][Xcoda].element.classList.remove('snake');
g[Ycoda][Xcoda].element.classList.remove('codaSnake');
g[Ycorpo+1][Xcorpo].element.classList.add('snake','corpoSnake');
g[Ytesta+1][Xtesta].element.classList.add('snake','testaSnake');
g[Ycoda+1][Xcoda].element.classList.add('snake','codaSnake');
Ycoda++;
Ytesta++;
Ycorpo++;
break;
case 'Left':
g[Ycoda][Xcoda].element.classList.remove('snake');
g[Ycoda][Xcoda].element.classList.remove('codaSnake');
g[Ycorpo][Xcorpo-1].element.classList.add('snake','corpoSnake');
g[Ytesta][Xtesta-1].element.classList.add('snake','testaSnake');
g[Ycoda][Xcoda-1].element.classList.add('snake','codaSnake');
Xcoda--;
Xtesta--;
Xcorpo--;
break;
case 'Right':
g[Ycoda][Xcoda].element.classList.remove('snake');
g[Ycoda][Xcoda].element.classList.remove('codaSnake');
g[Ycorpo][Xcorpo+1].element.classList.add('snake','corpoSnake');
g[Ytesta][Xtesta+1].element.classList.add('snake','testaSnake');
g[Ycoda][Xcoda+1].element.classList.add('snake','codaSnake');
Xcoda++;
Xtesta++;
Xcorpo++;
break;
}
}

if(snakeDirection==Direction || (snakeDirection=='Up' && Direction=='Down') || (snakeDirection=='Down' && Direction=='Up') || (snakeDirection=='Right' && Direction=='Left') ||
(snakeDirection=='Left' && Direction=='Right'))
{
  snakeNatural();
}
else {//quanto segue sono i cambi di direzione prima di tornare naturale
if (snakeDirection=='Right' && Direction=='Up'){
g[Ycoda][Xcoda].element.classList.remove('snake','codaSnake');
g[Ytesta][Xtesta].element.classList.remove('snake','testaSnake');
g[Ycorpo][Xcorpo].element.classList.remove('snake','corpoSnake');
  Xcorpo=Xcorpo+1;
  Ycorpo=Ycorpo-1;
  Ytesta=Ytesta-2;
  Xcoda=Xcoda+2;
  snakeDirection='Up';
}
if (snakeDirection=='Right' && Direction=='Down'){
g[Ycoda][Xcoda].element.classList.remove('snake','codaSnake');
g[Ytesta][Xtesta].element.classList.remove('snake','testaSnake');
g[Ycorpo][Xcorpo].element.classList.remove('snake','corpoSnake');
  Xcorpo=Xcorpo+1;
  Ycorpo=Ycorpo+1;
  Ytesta=Ytesta+2;
  Xcoda=Xcoda+2;
  snakeDirection='Down';
}
if (snakeDirection=='Up' && Direction=='Right'){
g[Ycoda][Xcoda].element.classList.remove('snake','codaSnake');
g[Ytesta][Xtesta].element.classList.remove('snake','testaSnake');
g[Ycorpo][Xcorpo].element.classList.remove('snake','corpoSnake');
  Xcorpo=Xcorpo+1;
  Ycorpo=Ycorpo-1;
  Ycoda=Ycoda-2;
  Xtesta=Xtesta+2;
  snakeDirection='Right';
}
if (snakeDirection=='Up' && Direction=='Left'){
g[Ycoda][Xcoda].element.classList.remove('snake','codaSnake');
g[Ytesta][Xtesta].element.classList.remove('snake','testaSnake');
g[Ycorpo][Xcorpo].element.classList.remove('snake','corpoSnake');
  Xcorpo=Xcorpo-1;
  Ycorpo=Ycorpo-1;
  Ycoda=Ycoda-2;
  Xtesta=Xtesta-2;
  snakeDirection='Left';
}
if (snakeDirection=='Left' && Direction=='Up'){
g[Ycoda][Xcoda].element.classList.remove('snake','codaSnake');
g[Ytesta][Xtesta].element.classList.remove('snake','testaSnake');
g[Ycorpo][Xcorpo].element.classList.remove('snake','corpoSnake');
  Xcorpo=Xcorpo-1;
  Ycorpo=Ycorpo-1;
  Xcoda=Xcoda-2;
  Ytesta=Ytesta-2;
  snakeDirection='Up';
}
if (snakeDirection=='Left' && Direction=='Down'){
g[Ycoda][Xcoda].element.classList.remove('snake','codaSnake');
g[Ytesta][Xtesta].element.classList.remove('snake','testaSnake');
g[Ycorpo][Xcorpo].element.classList.remove('snake','corpoSnake');
  Xcorpo=Xcorpo-1;
  Ycorpo=Ycorpo+1;
  Xcoda=Xcoda-2;
  Ytesta=Ytesta+2;
  snakeDirection='Down';
}
if (snakeDirection=='Down' && Direction=='Right'){
g[Ycoda][Xcoda].element.classList.remove('snake','codaSnake');
g[Ytesta][Xtesta].element.classList.remove('snake','testaSnake');
g[Ycorpo][Xcorpo].element.classList.remove('snake','corpoSnake');
  Xcorpo=Xcorpo+1;
  Ycorpo=Ycorpo+1;
  Ycoda=Ycoda+2;
  Xtesta=Xtesta+2;
  snakeDirection='Right';
}
if (snakeDirection=='Down' && Direction=='Left'){
g[Ycoda][Xcoda].element.classList.remove('snake','codaSnake');
g[Ytesta][Xtesta].element.classList.remove('snake','testaSnake');
g[Ycorpo][Xcorpo].element.classList.remove('snake','corpoSnake');
  Xcorpo=Xcorpo-1;
  Ycorpo=Ycorpo+1;
  Ycoda=Ycoda+2;
  Xtesta=Xtesta-2;
  snakeDirection='Left';
}
}
// Queste condizioni dovevano essere solo sulla testa ma non sempre mangia la mela
// quindi non sempre la testa è testa e va risolto(restano classi teste code corpi non rimossi credo//bug)
var punteggio=document.getElementById('punteggio');
punteggio.innerHTML='<h2>Punteggio</h2><p>'+score+'</p>';
switch (score){
 case 10 :
  clearInterval(clock);
    start(230);
    break;

 case 20:
  clearInterval(clock);
    start(160);
    break;

 case 30:
  clearInterval(clock);
    start(130);
    break;
}

if( g[Ytesta][Xtesta].element.classList.contains('apple') || g[Ycoda][Xcoda].element.classList.contains('apple') ||
g[Ycorpo][Xcorpo].element.classList.contains('apple') )
{
  g[Ytesta][Xtesta].element.classList.remove('apple');
    g[Ycoda][Xcoda].element.classList.remove('apple');
        g[Ycorpo][Xcorpo].element.classList.remove('apple');

var eat = new Audio('css/eat.mp3');
eat.play();
 RandomApple();
 score++;
}
var fail = new Audio('css/fail.mp3');
    var tmp_glob = Xtesta;
    var tmp2_glob = Ytesta;

    if(score<10){
    setTimeout(function () {
        if (tmp_glob == Xtesta && tmp2_glob == Ytesta) {
            fail.play();
            monster.pause();
            clearInterval(clock);
            setTimeout(function () {
            alert(' Hai perso! Ma se sei un cane perché vuoi essere un serpente?');
           window.location.reload(false);},1000);
        }
    }, 600);
  }
  else if(score>=10 && score<20){
    setTimeout(function () {
        if (tmp_glob == Xtesta && tmp2_glob == Ytesta) {
            fail.play();
            monster.pause();
            clearInterval(clock);
            setTimeout(function () {
            alert('Hai perso!');
           window.location.reload(false);},1000);
        }
    }, 300);
  } else if(score>=20 && score <30){
    setTimeout(function () {
        if (tmp_glob == Xtesta && tmp2_glob == Ytesta) {
            fail.play();
            monster.pause();
            clearInterval(clock);
            setTimeout(function () {
            alert('Hai perso!');
           window.location.reload(false);},1000);
        }
    }, 240);

  } else{
    setTimeout(function () {
        if (tmp_glob == Xtesta && tmp2_glob == Ytesta) {
            fail.play();
            monster.pause();
            clearInterval(clock);
            setTimeout(function () {
            alert('Hai perso!');
           window.location.reload(false);},1000);
        }
    }, 200);


  }
// se le coordinate non variano nel giro di 600ms(variano ogni 500ms) hai perso

// ho fatto a 300 se ha aumentato velocità

}
