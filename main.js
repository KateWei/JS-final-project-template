var bgImg = document.createElement("img");
bgImg.src = "images/map.png";
var canvas = document.getElementById("game");
var ctx = canvas.getContext("2d");

function draw(){
  ctx.drawlmage(bglmg,0,0);
}
setTimeout(draw,1000)
