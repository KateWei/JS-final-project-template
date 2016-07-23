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

// 創造 img HTML 元素，並放入變數中
var bgImg = document.createElement("img");

// 設定這個元素的要顯示的圖片
bgImg.src = "images/map.png";

var hero = {
    x: 0,
    y: 0
};

var enemy = {
    x: 96,
    y: 448-32
}
varSlimeImg = document.createElement("img")
slimeImg.src = "images/slime.gif"

var heroImg = document.createElement("img");
heroImg.src = "images/rukia.gif";

var ctImg = document.createElement("img");
ctImg.src = "images/tower-btn.png";

var towerImg = document.createElement("img");
towerImg.src = "images/tower.png";

// 找出網頁中的 canvas 元素
var canvas = document.getElementById("game");

// 取得 2D繪圖用的物件
var ctx = canvas.getContext("2d");

var cursor = {x:0, y:0};
$("#game").mousemove(function(event){
	cursor.x = event.offsetX;
	cursor.y = event.offsetY;
});

var tower = {
	x:0,
	y:0
};

var isBuilding = false;
$("#game").click(function(event){
	if (event.offsetX > 540 && event.offsetY > 380){
		isBuilding = true;
	}
	else{
		if(isBuilding == true){
			tower.x = cursor.x - cursor.x % 32;
			tower.y = cursor.y - cursor.y % 32;
		}
		isBuilding = false;
	}
});

function draw(){
	// 將背景圖片畫在 canvas 上的 (0,0) 位置
	ctx.drawImage(bgImg,0,0);
	ctx.drawImage(heroImg,hero.x,hero.y);
	ctx.drawImage(ctImg,540,380,100,100);
	ctx.drawImage(slimeImg, enemy.x, enemy.y);
	if(isBuilding == true){
		ctx.drawImage(towerImg,cursor.x,cursor.y);
	}
	else{
		ctx.drawImage(towerImg,tower.x,tower.y);
	}
}

var enemy = {
	x: 96,
	y: 480-32,
	speed: 64,
	derection: {x: o, y: -13,
	move: function(){
		this.x = this.x + this.direction.x*this.speed/FPS;
		this.y = this.y + this.direction.y*this.speed/FPS;
	}
}


// 等待一秒再執行 draw
setInterval( draw, 16);
