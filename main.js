var bgImg = document.createElement("img");
bgImg.src = "images/map.png";
var canvas = document.getElementById("game");
var ctx = canvas.getContext("2d");
var bgImg = document.createElement("img");
bgImg.src = "";

function draw(){
  ctx.drawImage(bgImg,0,0);
}
setTimeout(draw,1000)

