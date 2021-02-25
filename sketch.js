var movingRect, fixedRect;

function setup() {
  createCanvas(1200,800);
  movingRect = createSprite(400,200,80,30);
  fixedRect = createSprite(600,400,50,80);
  movingRect.shapeColor = "blue";
  fixedRect.shapeColor = "black";
}

function draw() {
  background(255,255,255);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  console.log(movingRect.x);
  if (movingRect.x-fixedRect.x<=movingRect.width/2+fixedRect.width/2
    && fixedRect.x-movingRect.x<=fixedRect.width/2+movingRect.width/2
    && movingRect.y-fixedRect.y<=movingRect.height/2+fixedRect.height/2
    && fixedRect.y-movingRect.y<=fixedRect.height/2+movingRect.height/2){
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "green";
  }
  else {
    movingRect.shapeColor = "blue";
    fixedRect.shapeColor = "black";
  }
  drawSprites();
}