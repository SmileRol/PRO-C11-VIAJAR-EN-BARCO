var ship ,ship_move;
var sea;

function preload(){
ship_move = loadAnimation("ship-1.png","ship-3.png","ship-2.png","ship-4.png");
seaImg = loadImage("sea.png");

}

function setup(){
  createCanvas(400,400);
  sea = createSprite(0,200,100,100);
  sea.scale=0.25;
  sea.addImage(seaImg);
  sea.velocityX = 2;

  ship = createSprite(250, 300, 5, 15);
  ship.addAnimation("running", ship_move);
  ship.scale=0.21;

  if (sea.x < 0){
    sea.x=sea.width/2;
  }
  


}

function draw() {
  background("blue");
  drawSprites();

}