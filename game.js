var interval = [];
var horse= [];
var moveDelay = [];

var moveRightArray= [];
moveRightArray[0]=8.1/10;
moveRightArray[1]=7.9/10;
moveRightArray[2]=7.6/10;
moveRightArray[3]=7.4/10;
var moveDownArray= [];
moveDownArray[0]=8.1/10;
moveDownArray[1]=7.7/10;
moveDownArray[2]=7.4/10;
moveDownArray[3]=7./10;
var moveLeftArray= [];
moveLeftArray[0]=0.3/10;
moveLeftArray[1]=0.5/10;
moveLeftArray[2]=0.8/10;
moveLeftArray[3]=1.1/10;
var moveUpArray= [];
moveUpArray[0]=0.4/10;
moveUpArray[1]=0.8/10;
moveUpArray[2]=1.2/10;
moveUpArray[3]=1.6/10;

function startRace (event,horse) {
  var startButton=document.getElementById ('start');
 startButton.removeEventListener('click', startRace);
   var r= Math.floor(Math.random() * 3);
  clearInterval(interval[horse]);
  interval[0]= setInterval(function(){moveRight(0)},r);
  interval[1]= setInterval(function(){moveRight(1)},r);
  interval[2]= setInterval(function(){moveRight(2)},r);
  interval[3]= setInterval(function(){moveRight(3)},r);
  console.log('starting Race');
}

function moveRight(horse) {
    var h = horses[horse];
    var positionLeft = h.offsetLeft;
    var r= Math.floor(Math.random() * 15);
    h.style.left = positionLeft + 1 + 'px';
    h.className='horse runRight';

if (positionLeft >= window.innerWidth * moveRightArray[horse]) {
        clearInterval(interval[horse]);
          interval[horse]= setInterval(function(){moveDown(horse)}, r);
}
}
function  moveDown (horse){

  var h = horses[horse];
  var positionTop = h.offsetTop;
    var r= Math.floor(Math.random() * 15);
  h.style.top = positionTop + 1 + 'px';
h.className='horse runDown';


  if (positionTop >= window.innerHeight * moveDownArray[horse]) {
      clearInterval(interval[horse]);
        interval[horse]= setInterval(function(){moveLeft(horse)}, r);
}
}
function  moveLeft (horse){
  var h = horses[horse];
  var positionLeft = h.offsetLeft;
    var r= Math.floor(Math.random() * 15);
  h.style.left = positionLeft - 1 + 'px';
h.className='horse runLeft';

if (positionLeft <= window.innerWidth * moveLeftArray[horse]) {
    clearInterval(interval[horse]);
      interval[horse]= setInterval(function(){moveUp(horse)}, r);
}
}
function moveUp(horse){
  var h = horses[horse];
  var positionTop = h.offsetTop;
      var r= Math.floor(Math.random() * 15);
  h.style.top = positionTop - 1 + 'px';
  h.className='horse runUp';

  if (positionTop <= window.innerHeight * moveUpArray[horse]){
      clearInterval(interval[horse]);
        interval[horse]= setInterval(function(){moveStop(horse)}, r);
}
}
function moveStop(horse){
  var h = horses[horse];
  var positionLeft = h.offsetLeft;
  h.style.left =positionLeft + 1 + 'px';
h.className='horse runRight';

  if (positionLeft >= window.innerWidth * (4/10)) {
      h.className='horse standRight';
    clearInterval(interval[horse]);
h.style.left="20%";

      var startButton=document.getElementById ('start');
     startButton.addEventListener('click' ,startRace);

  }
}

function myLoadFunction(){
  horses = document.getElementsByClassName('horse');

  var startButton=document.getElementById ('start');
 startButton.addEventListener('click', startRace);
}
document.addEventListener('DOMContentLoaded',myLoadFunction);
