var bgImg = document.createElement("img");
bgImg.src = "images/map.png";
var hero = document.createElement("img");
hero.src = "https://github.com/KateWei/jsGameByOa/blob/gh-pages/images/daigh.gif?raw=true";
var canvas = document.getElementById("game");
var ctx = canvas.getContext("2d");

function draw(){
  ctx.drawImage(bgImg,0,0);
}
setTimeout(draw,1000)

