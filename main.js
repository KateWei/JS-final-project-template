var clock = 0;
var FPS = 60;

// 創造 img HTML 元素，並放入變數中
var bgImg = document.createElement("img");

// 設定這個元素的要顯示的圖片
bgImg.src = "images/map.png";

var hero = {
    x: 0,
    y: 0
};

function isCollided ( pointX, pointY, targetX, targetY, targetWidth, targetHeight ) {
if(     pointX >= targetX
        &&  pointX <= targetX + targetWidth
        &&  pointY >= targetY
        &&  pointY <= targetY + targetHeight
){
        return true;
} else {
        return false;
}
}


var enemyPath = [
    {x:96, y:64},
    {x:384, y:64},
    {x:384, y:192},
    {x:224, y:192},
    {x:224, y:320},
    {x:544, y:320},
    {x:544, y:96}
];

function Enemy(){
    this.hp=0;
    this.x = 32*3;
    this.y = 480 - 32;
    this.speed = 64;
    this.pathDes = 0;
    this.direction = {x:0, y:-1};
    this.move = function(){
    	if(isCollided(enemyPath[this.pathDes].x, enemyPath[this.pathDes].y, this.x, this.y, this.speed/FPS, this.speed/FPS)){
    		//移動到偵測到的路徑點
    		this.x = enemyPath[this.pathDes].x;
    		this.y = enemyPath[this.pathDes].y;
    		//找出下一個路徑點
    		this.pathDes += 1;
    		if(this.pathDes >= enemyPath.length){
    			this.hp=0;
    			treeHP -= 10;
    			return;
    		}
    		//算出方向，修改方向
    		if(enemyPath[this.pathDes].x > this.x){
    			this.direction = {x:1, y:0};
    		}
    		else if(enemyPath[this.pathDes].x < this.x){
    			this.direction = {x:-1, y:0};
    		}
    		else if(enemyPath[this.pathDes].y > this.y){
    			this.direction = {x:0, y:1};
    		}
    		else if(enemyPath[this.pathDes].y < this.y){
    			this.direction = {x:0, y:-1};
    		}
    	}
    	else{
	    	this.x = this.x + this.direction.x * this.speed/FPS;
    		this.y = this.y + this.direction.y * this.speed/FPS;
    	}
    }
}

var enemies = [];

var heroImg = document.createElement("img");
heroImg.src = "images/rukia.gif";

var ctImg = document.createElement("img");
ctImg.src = "images/tower-btn.png";

var towerImg = document.createElement("img");
towerImg.src = "images/tower.png";

var enemyImg = document.createElement("img");
enemyImg.src = "images/slime.gif";

// 找出網頁中的 canvas 元素
var canvas = document.getElementById("game");

// 取得 2D繪圖用的物件
var ctx = canvas.getContext("2d");

var cursor = {x:0, y:0};
$("#game").mousemove(function(event){
	cursor.x = event.offsetX;
	cursor.y = event.offsetY;
});

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

var tower = {
        	x:0,
	        y:0,
        	range: 96,
        	aimingEnemyId: null,
        	shoot: function(){
        		ct.beginPath();
        		ctx.moveTo();
        		ctx.lineTo();
        		ctx.strokeStyle = "red";
        		ctx.lineWidth = 3;
        		ctx.stroke();
        	};
        	fireRate: 1,
        	readyToShootTime: 1,
        	damage: 5;
                searchEnemy: function(){
                	this.readyToShootTime -= 1/FPS;
                	for(var i = 0; i<enemies.length; i++){
        			var distance = Math.sqrt(
        				Math.pow(this.x-enemies[1].x,2) + Math.pow(this.y-enemies[1].y,2)
        	        };
        	        if(distance <= this.range){
        	        	this.aimingEnemyId = i;
        	        	//判斷是否倒數完畢
        	        	if(this.readyToShootTime <= 0){
        	        		this.shoot();
        	        		this.readyToShootTime = this.fireRate;
        	        	}
        	        	return;
        	        }
                }
               }
             }
        	//如果都沒找到，會進道這行，清除鎖定的目標
        	this.imingEnemyId = null;
        	},
        };

function draw(){
	if(clock % 80 == 0){
		var enemy = new Enemy();
		enemies.push(enemy);
	}
	// 將背景圖片畫在 canvas 上的 (0,0) 位置
	ctx.drawImage(bgImg,0,0);
	ctx.drawImage(heroImg,hero.x,hero.y);
	ctx.drawImage(ctImg,540,380,100,100);
	if(isBuilding == true){
		ctx.drawImage(towerImg,cursor.x,cursor.y);
	}
	else{
		ctx.drawImage(towerImg,tower.x,tower.y);
	}
	for(var i = 0; i < enemies.length; i++){
            if(enemies[i].hp <= 0){
            	enemies.splice(i,1)
            }else{
		enemies[i].move();
		ctx.drawImage(enemyImg,enemies[i].x,enemies[i].y);	
	}
}
	clock++;
        var hp = 100
        ctx.font = "24px Arial";
        ctx.fillStyle = "white";
        ctx.fillText("TreeHP:"+hp,15,30);

}

var crosshairImg = document.createElement("img");
crossghairImg =

// 等待一秒再執行 draw
setInterval( draw, 1000/FPS);
